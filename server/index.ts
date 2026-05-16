import cookieParser from "cookie-parser";
import express from "express";
import { randomUUID } from "node:crypto";
import {
  attachUser,
  clearSession,
  createSession,
  hashPassword,
  requireAdmin,
  requireAuth,
  verifyPassword,
} from "./auth";
import { db, initDb, mapCourse, mapUser, queries } from "./db";
import {
  AttemptSchema,
  ImportCourseSchema,
  LoginSchema,
  ProgressSchema,
  RegisterSchema,
  UpdateCourseSchema,
} from "./schemas";
import type { CourseRow, DbUser, ItemRow, ProgressRow } from "./types";

initDb();

const app = express();
const port = Number(process.env.API_PORT ?? 5174);

app.use(express.json({ limit: "2mb" }));
app.use(cookieParser());
app.use(attachUser);

function parseBody<T>(schema: { parse: (value: unknown) => T }, value: unknown, res: express.Response) {
  try {
    return schema.parse(value);
  } catch {
    res.status(400).json({ error: "请求数据格式不正确" });
    return null;
  }
}

function canManageCourse(user: NonNullable<express.Request["user"]>, course: CourseRow) {
  return course.owner_id === user.id || user.role === "admin";
}

function insertCourseItems(courseId: string, items: Array<{
  kind: "word" | "sentence";
  promptZh: string;
  answerEn: string;
  phonetic?: string;
  note?: string;
  tags: string[];
}>) {
  items.forEach((item, position) => {
    queries.createItem.run({
      id: randomUUID(),
      courseId,
      kind: item.kind,
      promptZh: item.promptZh,
      answerEn: item.answerEn,
      phonetic: item.phonetic ?? null,
      note: item.note ?? null,
      tagsJson: JSON.stringify(item.tags),
      position,
    });
  });
}

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.get("/api/auth/me", (req, res) => {
  res.json({ user: req.user ?? null });
});

app.post("/api/auth/register", (req, res) => {
  const body = parseBody(RegisterSchema, req.body, res);
  if (!body) return;

  const existing = queries.findUserByEmail.get(body.email.toLowerCase()) as DbUser | undefined;
  if (existing) {
    return res.status(409).json({ error: "这个邮箱已经注册" });
  }

  const userCount = queries.countUsers.get() as { count: number };
  const userId = randomUUID();
  const role = userCount.count === 0 ? "admin" : "student";

  queries.createUser.run({
    id: userId,
    email: body.email.toLowerCase(),
    name: body.name,
    passwordHash: hashPassword(body.password),
    role,
  });

  createSession(res, userId);
  const user = queries.findUserById.get(userId) as DbUser;
  return res.status(201).json({ user: mapUser(user) });
});

app.post("/api/auth/login", (req, res) => {
  const body = parseBody(LoginSchema, req.body, res);
  if (!body) return;

  const user = queries.findUserByEmail.get(body.email.toLowerCase()) as DbUser | undefined;
  if (!user || !verifyPassword(body.password, user.password_hash)) {
    return res.status(401).json({ error: "邮箱或密码不正确" });
  }

  createSession(res, user.id);
  return res.json({ user: mapUser(user) });
});

app.post("/api/auth/logout", (req, res) => {
  clearSession(req, res);
  res.json({ ok: true });
});

app.get("/api/courses", (req, res) => {
  const courseRows = req.user
    ? (queries.listVisibleCourses.all(req.user.id) as CourseRow[])
    : (queries.listSeedCourses.all() as CourseRow[]);
  const courses = courseRows.map((course) => {
    const items = queries.listItemsByCourse.all(course.id) as ItemRow[];
    const progress = req.user
      ? (queries.getProgress.get(req.user.id, course.id) as ProgressRow | undefined)
      : undefined;
    return mapCourse(course, items, progress);
  });
  res.json({ courses });
});

app.post("/api/progress", requireAuth, (req, res) => {
  const body = parseBody(ProgressSchema, req.body, res);
  if (!body || !req.user) return;

  queries.upsertProgress.run({
    userId: req.user.id,
    courseId: body.courseId,
    itemId: body.itemId,
    itemIndex: body.itemIndex,
    completedCount: body.completedCount,
  });

  res.json({ ok: true });
});

app.post("/api/attempts", requireAuth, (req, res) => {
  const body = parseBody(AttemptSchema, req.body, res);
  if (!body || !req.user) return;

  queries.createAttempt.run({
    id: randomUUID(),
    userId: req.user.id,
    courseId: body.courseId,
    itemId: body.itemId,
    answer: body.answer,
    wrongCount: body.wrongCount,
    elapsedMs: body.elapsedMs,
    completedAt: body.completedAt ?? new Date().toISOString(),
  });

  const completedCountRow = db
    .prepare(
      "SELECT COUNT(*) as count FROM attempt_records WHERE user_id = ? AND course_id = ?",
    )
    .get(req.user.id, body.courseId) as { count: number };

  queries.upsertProgress.run({
    userId: req.user.id,
    courseId: body.courseId,
    itemId: body.itemId,
    itemIndex: body.itemIndex,
    completedCount: completedCountRow.count,
  });

  res.status(201).json({ ok: true });
});

app.get("/api/attempts/:courseId", requireAuth, (req, res) => {
  if (!req.user) return;
  const records = queries.listAttempts.all(req.user.id, req.params.courseId);
  res.json({ attempts: records });
});

app.get("/api/wrong-book", requireAuth, (req, res) => {
  if (!req.user) return;
  const items = queries.listWrongBookItems.all(req.user.id) as Array<
    ItemRow & {
      source_course_id: string;
      source_course_title: string;
      wrong_count: number;
      wrong_attempts: number;
      last_wrong_at: string;
    }
  >;

  res.json({
    course: {
      id: "wrong-book",
      title: "错题本",
      subtitle: "自动收集做错过的单词和句子",
      source: "system",
      items: items.map((item) => ({
        id: item.id,
        kind: item.kind,
        promptZh: item.prompt_zh,
        answerEn: item.answer_en,
        phonetic: item.phonetic ?? undefined,
        note: item.note ?? undefined,
        tags: [
          "错题",
          item.source_course_title,
          ...((JSON.parse(item.tags_json) as string[]).filter((tag) => tag !== "错题")),
        ],
        sourceCourseId: item.source_course_id,
        sourceCourseTitle: item.source_course_title,
        wrongCount: item.wrong_count,
        wrongAttempts: item.wrong_attempts,
        lastWrongAt: item.last_wrong_at,
      })),
    },
  });
});

app.get("/api/resources", requireAuth, (req, res) => {
  if (!req.user) return;
  const rows = queries.listOwnedCourses.all(req.user.id) as Array<CourseRow & { owner_name?: string; item_count: number }>;
  const resources = rows.map((course) => {
    const items = queries.listItemsByCourse.all(course.id) as ItemRow[];
    return {
      ...mapCourse(course, items),
      itemCount: course.item_count,
    };
  });
  res.json({ resources });
});

app.get("/api/resources/store", requireAuth, (req, res) => {
  if (!req.user) return;
  const rows = queries.listPublicCourses.all(req.user.id, req.user.id) as Array<
    CourseRow & { owner_name?: string; item_count: number }
  >;
  const resources = rows.map((course) => {
    const items = queries.listItemsByCourse.all(course.id) as ItemRow[];
    return {
      ...mapCourse(course, items),
      itemCount: course.item_count,
    };
  });
  res.json({ resources });
});

app.get("/api/resources/:courseId", requireAuth, (req, res) => {
  if (!req.user) return;
  const course = queries.getCourseById.get(req.params.courseId) as CourseRow | undefined;
  if (!course) return res.status(404).json({ error: "资源不存在" });
  if (!canManageCourse(req.user, course) && !course.is_public) {
    return res.status(403).json({ error: "没有权限查看这个资源" });
  }
  const items = queries.listItemsByCourse.all(course.id) as ItemRow[];
  res.json({ resource: mapCourse(course, items) });
});

app.post("/api/resources/import", requireAuth, (req, res) => {
  const body = parseBody(ImportCourseSchema, req.body, res);
  if (!body || !req.user) return;

  const courseId = randomUUID();
  const importId = randomUUID();

  const insert = db.transaction(() => {
    queries.createCourse.run({
      id: courseId,
      title: body.title,
      subtitle: body.subtitle,
      source: "import",
      ownerId: req.user!.id,
      isPublic: body.isPublic ? 1 : 0,
      copiedFromCourseId: null,
    });

    insertCourseItems(courseId, body.items);

    queries.createImportJob.run({
      id: importId,
      userId: req.user!.id,
      courseId,
      filename: body.filename,
      itemCount: body.items.length,
    });
  });

  insert();
  const course = queries.getCourseById.get(courseId) as CourseRow;
  const items = queries.listItemsByCourse.all(courseId) as ItemRow[];

  res.status(201).json({ resource: mapCourse(course, items) });
});

app.put("/api/resources/:courseId", requireAuth, (req, res) => {
  const body = parseBody(UpdateCourseSchema, req.body, res);
  if (!body || !req.user) return;

  const course = queries.getCourseById.get(req.params.courseId) as CourseRow | undefined;
  if (!course) return res.status(404).json({ error: "资源不存在" });
  if (!canManageCourse(req.user, course)) return res.status(403).json({ error: "没有权限修改这个资源" });
  if (course.source === "seed") return res.status(400).json({ error: "系统内置资源不能编辑" });

  const update = db.transaction(() => {
    queries.updateCourse.run({
      courseId: course.id,
      userId: course.owner_id,
      title: body.title,
      subtitle: body.subtitle,
      isPublic: body.isPublic ? 1 : 0,
    });
    queries.deleteItemsByCourse.run(course.id);
    insertCourseItems(course.id, body.items);
  });

  update();
  const nextCourse = queries.getCourseById.get(course.id) as CourseRow;
  const items = queries.listItemsByCourse.all(course.id) as ItemRow[];
  res.json({ resource: mapCourse(nextCourse, items) });
});

app.delete("/api/resources/:courseId", requireAuth, (req, res) => {
  if (!req.user) return;
  const course = queries.getCourseById.get(req.params.courseId) as CourseRow | undefined;
  if (!course) return res.status(404).json({ error: "资源不存在" });
  if (!canManageCourse(req.user, course)) return res.status(403).json({ error: "没有权限删除这个资源" });
  if (course.source === "seed") return res.status(400).json({ error: "系统内置资源不能删除" });

  queries.deleteCourse.run(course.id, course.owner_id);
  res.json({ ok: true });
});

app.post("/api/resources/:courseId/download", requireAuth, (req, res) => {
  if (!req.user) return;
  const source = queries.getCourseById.get(req.params.courseId) as CourseRow | undefined;
  if (!source || !source.is_public || !source.owner_id) {
    return res.status(404).json({ error: "公开资源不存在" });
  }
  if (source.owner_id === req.user.id) {
    return res.status(400).json({ error: "这是你自己的资源，不需要下载" });
  }

  const sourceItems = queries.listItemsByCourse.all(source.id) as ItemRow[];
  const courseId = randomUUID();
  const importId = randomUUID();

  const copy = db.transaction(() => {
    queries.createCourse.run({
      id: courseId,
      title: source.title,
      subtitle: source.subtitle,
      source: "store",
      ownerId: req.user!.id,
      isPublic: 0,
      copiedFromCourseId: source.id,
    });

    sourceItems.forEach((item, position) => {
      queries.createItem.run({
        id: randomUUID(),
        courseId,
        kind: item.kind,
        promptZh: item.prompt_zh,
        answerEn: item.answer_en,
        phonetic: item.phonetic,
        note: item.note,
        tagsJson: item.tags_json,
        position,
      });
    });

    queries.createImportJob.run({
      id: importId,
      userId: req.user!.id,
      courseId,
      filename: "resource-store",
      itemCount: sourceItems.length,
    });
    queries.incrementDownloadCount.run(source.id);
  });

  copy();
  const course = queries.getCourseById.get(courseId) as CourseRow;
  const items = queries.listItemsByCourse.all(courseId) as ItemRow[];
  res.status(201).json({ resource: mapCourse(course, items) });
});

app.get("/api/admin/imports", requireAdmin, (_req, res) => {
  res.json({ imports: queries.listImportJobs.all() });
});

app.get("/api/admin/stats", requireAdmin, (_req, res) => {
  const totals = db
    .prepare(
      `
        SELECT
          (SELECT COUNT(*) FROM users) as users,
          (SELECT COUNT(*) FROM courses) as courses,
          (SELECT COUNT(*) FROM practice_items) as items,
          (SELECT COUNT(*) FROM attempt_records) as attempts,
          (SELECT COUNT(*) FROM courses WHERE source = 'import') as importedCourses,
          COALESCE(ROUND(AVG(
            CASE
              WHEN LENGTH(attempt_records.answer) = 0 THEN 100
              ELSE MAX(0, ((LENGTH(attempt_records.answer) - attempt_records.wrong_count) * 100.0 / LENGTH(attempt_records.answer)))
            END
          )), 100) as avgAccuracy
      `,
    )
    .get();

  const dailyAttempts = db
    .prepare(
      `
        SELECT
          DATE(completed_at) as date,
          COUNT(*) as attempts,
          COALESCE(ROUND(AVG(
            CASE
              WHEN LENGTH(attempt_records.answer) = 0 THEN 100
              ELSE MAX(0, ((LENGTH(attempt_records.answer) - attempt_records.wrong_count) * 100.0 / LENGTH(attempt_records.answer)))
            END
          )), 100) as avgAccuracy
        FROM attempt_records
        GROUP BY DATE(completed_at)
        ORDER BY date DESC
        LIMIT 14
      `,
    )
    .all()
    .reverse();

  const courseActivity = db
    .prepare(
      `
        SELECT
          courses.id as courseId,
          courses.title,
          COUNT(attempt_records.id) as attempts,
          COUNT(DISTINCT practice_items.id) as itemCount
        FROM courses
        LEFT JOIN practice_items ON practice_items.course_id = courses.id
        LEFT JOIN attempt_records ON attempt_records.course_id = courses.id
        GROUP BY courses.id
        ORDER BY attempts DESC, courses.created_at DESC
        LIMIT 8
      `,
    )
    .all();

  const itemKinds = db
    .prepare(
      `
        SELECT kind, COUNT(*) as count
        FROM practice_items
        GROUP BY kind
        ORDER BY kind
      `,
    )
    .all();

  const recentAttempts = db
    .prepare(
      `
        SELECT
          attempt_records.id,
          users.name as user_name,
          courses.title as course_title,
          attempt_records.answer,
          attempt_records.wrong_count,
          attempt_records.elapsed_ms,
          attempt_records.completed_at
        FROM attempt_records
        JOIN users ON users.id = attempt_records.user_id
        JOIN courses ON courses.id = attempt_records.course_id
        ORDER BY attempt_records.completed_at DESC
        LIMIT 10
      `,
    )
    .all();

  res.json({
    stats: {
      totals,
      dailyAttempts,
      courseActivity,
      itemKinds,
      recentAttempts,
      recentImports: queries.listImportJobs.all(),
    },
  });
});

app.post("/api/admin/import", requireAdmin, (req, res) => {
  const body = parseBody(ImportCourseSchema, req.body, res);
  if (!body || !req.user) return;

  const courseId = randomUUID();
  const importId = randomUUID();

  const insert = db.transaction(() => {
    queries.createCourse.run({
      id: courseId,
      title: body.title,
      subtitle: body.subtitle,
      source: "import",
      ownerId: req.user!.id,
      isPublic: body.isPublic ? 1 : 0,
      copiedFromCourseId: null,
    });

    insertCourseItems(courseId, body.items);

    queries.createImportJob.run({
      id: importId,
      userId: req.user!.id,
      courseId,
      filename: body.filename,
      itemCount: body.items.length,
    });
  });

  insert();
  const course = queries.listItemsByCourse.all(courseId) as ItemRow[];
  const courseRow = db.prepare("SELECT * FROM courses WHERE id = ?").get(courseId) as CourseRow;

  res.status(201).json({
    course: mapCourse(courseRow, course),
  });
});

app.use((err: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err);
  res.status(500).json({ error: "服务器内部错误" });
});

app.listen(port, () => {
  console.log(`MeowEnglish API running at http://127.0.0.1:${port}`);
});
