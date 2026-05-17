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
import {
  execute,
  initDb,
  insertCourseItems,
  listItemsByCourse,
  mapCourse,
  mapUser,
  pool,
  query,
  queryOne,
  transaction,
} from "./db";
import {
  AttemptSchema,
  ImportCourseSchema,
  LoginSchema,
  ProgressSchema,
  RegisterSchema,
  UpdateCourseSchema,
} from "./schemas";
import type { CourseRow, DbUser, ItemRow, ProgressRow } from "./types";

const app = express();
const port = Number(process.env.API_PORT ?? process.env.PORT ?? 5174);
const corsOrigin = process.env.CORS_ORIGIN ?? "http://localhost:5173";

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", corsOrigin);
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  if (req.method === "OPTIONS") return res.sendStatus(204);
  return next();
});
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

function asyncHandler(
  handler: (req: express.Request, res: express.Response, next: express.NextFunction) => Promise<unknown>,
) {
  return (req: express.Request, res: express.Response, next: express.NextFunction) => {
    handler(req, res, next).catch(next);
  };
}

function canManageCourse(user: NonNullable<express.Request["user"]>, course: CourseRow) {
  return course.owner_id === user.id || user.role === "admin";
}

function getParam(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value ?? "";
}

function normalizeImportedItems(items: Array<{
  kind: "word" | "sentence";
  promptZh: string;
  answerEn: string;
  phonetic?: string;
  note?: string;
  tags: string[];
}>) {
  return items.map((item) => ({
    id: randomUUID(),
    ...item,
  }));
}

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.get("/api/auth/me", (req, res) => {
  res.json({ user: req.user ?? null });
});

app.post("/api/auth/register", asyncHandler(async (req, res) => {
  const body = parseBody(RegisterSchema, req.body, res);
  if (!body) return;

  const existing = await queryOne<DbUser>("SELECT * FROM users WHERE email = $1", [
    body.email.toLowerCase(),
  ]);
  if (existing) {
    return res.status(409).json({ error: "这个邮箱已经注册" });
  }

  const userCount = await queryOne<{ count: string }>("SELECT COUNT(*) as count FROM users");
  const userId = randomUUID();
  const role = Number(userCount?.count ?? 0) === 0 ? "admin" : "student";

  await execute(
    `
      INSERT INTO users (id, email, name, password_hash, role)
      VALUES ($1, $2, $3, $4, $5)
    `,
    [userId, body.email.toLowerCase(), body.name, hashPassword(body.password), role],
  );

  await createSession(res, userId);
  const user = await queryOne<DbUser>("SELECT * FROM users WHERE id = $1", [userId]);
  return res.status(201).json({ user: mapUser(user!) });
}));

app.post("/api/auth/login", asyncHandler(async (req, res) => {
  const body = parseBody(LoginSchema, req.body, res);
  if (!body) return;

  const user = await queryOne<DbUser>("SELECT * FROM users WHERE email = $1", [
    body.email.toLowerCase(),
  ]);
  if (!user || !verifyPassword(body.password, user.password_hash)) {
    return res.status(401).json({ error: "邮箱或密码不正确" });
  }

  await createSession(res, user.id);
  return res.json({ user: mapUser(user) });
}));

app.post("/api/auth/logout", asyncHandler(async (req, res) => {
  await clearSession(req, res);
  res.json({ ok: true });
}));

app.get("/api/courses", asyncHandler(async (req, res) => {
  const courseRows = req.user
    ? await query<CourseRow & { owner_name?: string }>(
        `
          SELECT courses.*, users.name as owner_name
          FROM courses
          LEFT JOIN users ON users.id = courses.owner_id
          WHERE courses.source = 'seed'
            OR courses.owner_id = $1
          ORDER BY courses.created_at ASC
        `,
        [req.user.id],
      )
    : await query<CourseRow & { owner_name?: string }>(
        `
          SELECT courses.*, users.name as owner_name
          FROM courses
          LEFT JOIN users ON users.id = courses.owner_id
          WHERE courses.source = 'seed'
          ORDER BY courses.created_at ASC
        `,
      );

  const courses = await Promise.all(courseRows.map(async (course) => {
    const items = await listItemsByCourse(course.id);
    const progress = req.user
      ? await queryOne<ProgressRow>(
          "SELECT * FROM user_progress WHERE user_id = $1 AND course_id = $2",
          [req.user.id, course.id],
        )
      : undefined;
    return mapCourse(course, items, progress);
  }));
  res.json({ courses });
}));

app.post("/api/progress", requireAuth, asyncHandler(async (req, res) => {
  const body = parseBody(ProgressSchema, req.body, res);
  if (!body || !req.user) return;

  await execute(
    `
      INSERT INTO user_progress (user_id, course_id, item_id, item_index, completed_count, updated_at)
      VALUES ($1, $2, $3, $4, $5, NOW())
      ON CONFLICT(user_id, course_id) DO UPDATE SET
        item_id = EXCLUDED.item_id,
        item_index = EXCLUDED.item_index,
        completed_count = EXCLUDED.completed_count,
        updated_at = NOW()
    `,
    [req.user.id, body.courseId, body.itemId, body.itemIndex, body.completedCount],
  );

  res.json({ ok: true });
}));

app.post("/api/attempts", requireAuth, asyncHandler(async (req, res) => {
  const body = parseBody(AttemptSchema, req.body, res);
  if (!body || !req.user) return;

  await transaction(async (client) => {
    await client.query(
      `
        INSERT INTO attempt_records (
          id, user_id, course_id, item_id, answer, wrong_count, elapsed_ms, completed_at
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      `,
      [
        randomUUID(),
        req.user!.id,
        body.courseId,
        body.itemId,
        body.answer,
        body.wrongCount,
        body.elapsedMs,
        body.completedAt ?? new Date().toISOString(),
      ],
    );

    const completedCountRow = await client.query<{ count: string }>(
      "SELECT COUNT(*) as count FROM attempt_records WHERE user_id = $1 AND course_id = $2",
      [req.user!.id, body.courseId],
    );

    await client.query(
      `
        INSERT INTO user_progress (user_id, course_id, item_id, item_index, completed_count, updated_at)
        VALUES ($1, $2, $3, $4, $5, NOW())
        ON CONFLICT(user_id, course_id) DO UPDATE SET
          item_id = EXCLUDED.item_id,
          item_index = EXCLUDED.item_index,
          completed_count = EXCLUDED.completed_count,
          updated_at = NOW()
      `,
      [
        req.user!.id,
        body.courseId,
        body.itemId,
        body.itemIndex,
        Number(completedCountRow.rows[0]?.count ?? 0),
      ],
    );
  });

  res.status(201).json({ ok: true });
}));

app.get("/api/attempts/:courseId", requireAuth, asyncHandler(async (req, res) => {
  if (!req.user) return;
  const courseId = getParam(req.params.courseId);
  const records = await query(
    `
      SELECT * FROM attempt_records
      WHERE user_id = $1 AND course_id = $2
      ORDER BY completed_at DESC
      LIMIT 120
    `,
    [req.user.id, courseId],
  );
  res.json({ attempts: records });
}));

app.get("/api/wrong-book", requireAuth, asyncHandler(async (req, res) => {
  if (!req.user) return;
  const items = await query<ItemRow & {
    source_course_id: string;
    source_course_title: string;
    wrong_count: string;
    wrong_attempts: string;
    last_wrong_at: string;
  }>(
    `
      SELECT
        practice_items.*,
        courses.id as source_course_id,
        courses.title as source_course_title,
        SUM(attempt_records.wrong_count) as wrong_count,
        COUNT(attempt_records.id) as wrong_attempts,
        MAX(attempt_records.completed_at) as last_wrong_at
      FROM attempt_records
      JOIN practice_items ON practice_items.id = attempt_records.item_id
      JOIN courses ON courses.id = practice_items.course_id
      WHERE attempt_records.user_id = $1
        AND attempt_records.wrong_count > 0
      GROUP BY practice_items.id, courses.id, courses.title
      ORDER BY last_wrong_at DESC
      LIMIT 300
    `,
    [req.user.id],
  );

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
        wrongCount: Number(item.wrong_count),
        wrongAttempts: Number(item.wrong_attempts),
        lastWrongAt: item.last_wrong_at,
      })),
    },
  });
}));

app.get("/api/resources", requireAuth, asyncHandler(async (req, res) => {
  if (!req.user) return;
  const rows = await query<CourseRow & { owner_name?: string; item_count: string }>(
    `
      SELECT courses.*, users.name as owner_name, COUNT(practice_items.id) as item_count
      FROM courses
      LEFT JOIN users ON users.id = courses.owner_id
      LEFT JOIN practice_items ON practice_items.course_id = courses.id
      WHERE courses.owner_id = $1
      GROUP BY courses.id, users.name
      ORDER BY courses.updated_at DESC, courses.created_at DESC
    `,
    [req.user.id],
  );
  const resources = await Promise.all(rows.map(async (course) => ({
    ...mapCourse(course, await listItemsByCourse(course.id)),
    itemCount: Number(course.item_count),
  })));
  res.json({ resources });
}));

app.get("/api/resources/store", requireAuth, asyncHandler(async (req, res) => {
  if (!req.user) return;
  const rows = await query<CourseRow & { owner_name?: string; item_count: string }>(
    `
      SELECT courses.*, users.name as owner_name, COUNT(practice_items.id) as item_count
      FROM courses
      LEFT JOIN users ON users.id = courses.owner_id
      LEFT JOIN practice_items ON practice_items.course_id = courses.id
      WHERE courses.is_public = 1
        AND courses.owner_id IS NOT NULL
        AND courses.owner_id != $1
        AND courses.id NOT IN (
          SELECT copied_from_course_id FROM courses
          WHERE owner_id = $2 AND copied_from_course_id IS NOT NULL
        )
      GROUP BY courses.id, users.name
      ORDER BY courses.download_count DESC, courses.updated_at DESC, courses.created_at DESC
    `,
    [req.user.id, req.user.id],
  );
  const resources = await Promise.all(rows.map(async (course) => ({
    ...mapCourse(course, await listItemsByCourse(course.id)),
    itemCount: Number(course.item_count),
  })));
  res.json({ resources });
}));

app.get("/api/resources/:courseId", requireAuth, asyncHandler(async (req, res) => {
  if (!req.user) return;
  const courseId = getParam(req.params.courseId);
  const course = await queryOne<CourseRow>("SELECT * FROM courses WHERE id = $1", [courseId]);
  if (!course) return res.status(404).json({ error: "资源不存在" });
  if (!canManageCourse(req.user, course) && !course.is_public) {
    return res.status(403).json({ error: "没有权限查看这个资源" });
  }
  res.json({ resource: mapCourse(course, await listItemsByCourse(course.id)) });
}));

app.post("/api/resources/import", requireAuth, asyncHandler(async (req, res) => {
  const body = parseBody(ImportCourseSchema, req.body, res);
  if (!body || !req.user) return;

  const courseId = randomUUID();
  const importId = randomUUID();

  await transaction(async (client) => {
    await client.query(
      `
        INSERT INTO courses (
          id, title, subtitle, source, owner_id, is_public, copied_from_course_id, updated_at
        )
        VALUES ($1, $2, $3, 'import', $4, $5, NULL, NOW())
      `,
      [courseId, body.title, body.subtitle, req.user!.id, body.isPublic ? 1 : 0],
    );

    await insertCourseItems(client, courseId, normalizeImportedItems(body.items));

    await client.query(
      `
        INSERT INTO import_jobs (id, user_id, course_id, filename, item_count)
        VALUES ($1, $2, $3, $4, $5)
      `,
      [importId, req.user!.id, courseId, body.filename, body.items.length],
    );
  });

  const course = await queryOne<CourseRow>("SELECT * FROM courses WHERE id = $1", [courseId]);
  res.status(201).json({ resource: mapCourse(course!, await listItemsByCourse(courseId)) });
}));

app.put("/api/resources/:courseId", requireAuth, asyncHandler(async (req, res) => {
  const body = parseBody(UpdateCourseSchema, req.body, res);
  if (!body || !req.user) return;

  const courseId = getParam(req.params.courseId);
  const course = await queryOne<CourseRow>("SELECT * FROM courses WHERE id = $1", [courseId]);
  if (!course) return res.status(404).json({ error: "资源不存在" });
  if (!canManageCourse(req.user, course)) return res.status(403).json({ error: "没有权限修改这个资源" });
  if (course.source === "seed") return res.status(400).json({ error: "系统内置资源不能编辑" });

  await transaction(async (client) => {
    await client.query(
      `
        UPDATE courses
        SET title = $1,
            subtitle = $2,
            is_public = $3,
            updated_at = NOW()
        WHERE id = $4 AND owner_id = $5
      `,
      [body.title, body.subtitle, body.isPublic ? 1 : 0, course.id, course.owner_id],
    );
    await client.query("DELETE FROM practice_items WHERE course_id = $1", [course.id]);
    await insertCourseItems(client, course.id, normalizeImportedItems(body.items));
  });

  const nextCourse = await queryOne<CourseRow>("SELECT * FROM courses WHERE id = $1", [course.id]);
  res.json({ resource: mapCourse(nextCourse!, await listItemsByCourse(course.id)) });
}));

app.delete("/api/resources/:courseId", requireAuth, asyncHandler(async (req, res) => {
  if (!req.user) return;
  const courseId = getParam(req.params.courseId);
  const course = await queryOne<CourseRow>("SELECT * FROM courses WHERE id = $1", [courseId]);
  if (!course) return res.status(404).json({ error: "资源不存在" });
  if (!canManageCourse(req.user, course)) return res.status(403).json({ error: "没有权限删除这个资源" });
  if (course.source === "seed") return res.status(400).json({ error: "系统内置资源不能删除" });

  await execute("DELETE FROM courses WHERE id = $1 AND owner_id = $2", [course.id, course.owner_id]);
  res.json({ ok: true });
}));

app.post("/api/resources/:courseId/download", requireAuth, asyncHandler(async (req, res) => {
  if (!req.user) return;
  const sourceId = getParam(req.params.courseId);
  const source = await queryOne<CourseRow>("SELECT * FROM courses WHERE id = $1", [sourceId]);
  if (!source || !source.is_public || !source.owner_id) {
    return res.status(404).json({ error: "公开资源不存在" });
  }
  if (source.owner_id === req.user.id) {
    return res.status(400).json({ error: "这是你自己的资源，不需要下载" });
  }

  const sourceItems = await listItemsByCourse(source.id);
  const courseId = randomUUID();
  const importId = randomUUID();

  await transaction(async (client) => {
    await client.query(
      `
        INSERT INTO courses (
          id, title, subtitle, source, owner_id, is_public, copied_from_course_id, updated_at
        )
        VALUES ($1, $2, $3, 'store', $4, 0, $5, NOW())
      `,
      [courseId, source.title, source.subtitle, req.user!.id, source.id],
    );

    await insertCourseItems(
      client,
      courseId,
      sourceItems.map((item) => ({
        id: randomUUID(),
        kind: item.kind,
        promptZh: item.prompt_zh,
        answerEn: item.answer_en,
        phonetic: item.phonetic,
        note: item.note,
        tags: JSON.parse(item.tags_json) as string[],
      })),
    );

    await client.query(
      `
        INSERT INTO import_jobs (id, user_id, course_id, filename, item_count)
        VALUES ($1, $2, $3, 'resource-store', $4)
      `,
      [importId, req.user!.id, courseId, sourceItems.length],
    );
    await client.query(
      "UPDATE courses SET download_count = download_count + 1, updated_at = NOW() WHERE id = $1",
      [source.id],
    );
  });

  const course = await queryOne<CourseRow>("SELECT * FROM courses WHERE id = $1", [courseId]);
  res.status(201).json({ resource: mapCourse(course!, await listItemsByCourse(courseId)) });
}));

app.get("/api/admin/imports", requireAdmin, asyncHandler(async (_req, res) => {
  const imports = await query(
    `
      SELECT import_jobs.*, courses.title as course_title
      FROM import_jobs
      LEFT JOIN courses ON courses.id = import_jobs.course_id
      ORDER BY import_jobs.created_at DESC
      LIMIT 30
    `,
  );
  res.json({ imports });
}));

app.get("/api/admin/stats", requireAdmin, asyncHandler(async (_req, res) => {
  const totals = await queryOne(
    `
      SELECT
        (SELECT COUNT(*) FROM users)::int as users,
        (SELECT COUNT(*) FROM courses)::int as courses,
        (SELECT COUNT(*) FROM practice_items)::int as items,
        (SELECT COUNT(*) FROM attempt_records)::int as attempts,
        (SELECT COUNT(*) FROM courses WHERE source = 'import')::int as "importedCourses",
        COALESCE(ROUND(AVG(
          CASE
            WHEN LENGTH(attempt_records.answer) = 0 THEN 100
            ELSE GREATEST(0, ((LENGTH(attempt_records.answer) - attempt_records.wrong_count) * 100.0 / LENGTH(attempt_records.answer)))
          END
        )), 100)::int as "avgAccuracy"
      FROM attempt_records
    `,
  );

  const dailyAttempts = (await query(
    `
      SELECT
        TO_CHAR(DATE(completed_at), 'YYYY-MM-DD') as date,
        COUNT(*)::int as attempts,
        COALESCE(ROUND(AVG(
          CASE
            WHEN LENGTH(attempt_records.answer) = 0 THEN 100
            ELSE GREATEST(0, ((LENGTH(attempt_records.answer) - attempt_records.wrong_count) * 100.0 / LENGTH(attempt_records.answer)))
          END
        )), 100)::int as "avgAccuracy"
      FROM attempt_records
      GROUP BY DATE(completed_at)
      ORDER BY date DESC
      LIMIT 14
    `,
  )).reverse();

  const courseActivity = await query(
    `
      SELECT
        courses.id as "courseId",
        courses.title,
        COUNT(attempt_records.id)::int as attempts,
        COUNT(DISTINCT practice_items.id)::int as "itemCount"
      FROM courses
      LEFT JOIN practice_items ON practice_items.course_id = courses.id
      LEFT JOIN attempt_records ON attempt_records.course_id = courses.id
      GROUP BY courses.id
      ORDER BY attempts DESC, courses.created_at DESC
      LIMIT 8
    `,
  );

  const itemKinds = await query(
    `
      SELECT kind, COUNT(*)::int as count
      FROM practice_items
      GROUP BY kind
      ORDER BY kind
    `,
  );

  const recentAttempts = await query(
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
  );

  const recentImports = await query(
    `
      SELECT import_jobs.*, courses.title as course_title
      FROM import_jobs
      LEFT JOIN courses ON courses.id = import_jobs.course_id
      ORDER BY import_jobs.created_at DESC
      LIMIT 30
    `,
  );

  res.json({
    stats: {
      totals,
      dailyAttempts,
      courseActivity,
      itemKinds,
      recentAttempts,
      recentImports,
    },
  });
}));

app.post("/api/admin/import", requireAdmin, asyncHandler(async (req, res) => {
  const body = parseBody(ImportCourseSchema, req.body, res);
  if (!body || !req.user) return;

  const courseId = randomUUID();
  const importId = randomUUID();

  await transaction(async (client) => {
    await client.query(
      `
        INSERT INTO courses (
          id, title, subtitle, source, owner_id, is_public, copied_from_course_id, updated_at
        )
        VALUES ($1, $2, $3, 'import', $4, $5, NULL, NOW())
      `,
      [courseId, body.title, body.subtitle, req.user!.id, body.isPublic ? 1 : 0],
    );
    await insertCourseItems(client, courseId, normalizeImportedItems(body.items));
    await client.query(
      `
        INSERT INTO import_jobs (id, user_id, course_id, filename, item_count)
        VALUES ($1, $2, $3, $4, $5)
      `,
      [importId, req.user!.id, courseId, body.filename, body.items.length],
    );
  });

  const courseRow = await queryOne<CourseRow>("SELECT * FROM courses WHERE id = $1", [courseId]);
  res.status(201).json({
    course: mapCourse(courseRow!, await listItemsByCourse(courseId)),
  });
}));

app.use((err: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err);
  res.status(500).json({ error: "服务器内部错误" });
});

initDb()
  .then(() => {
    app.listen(port, () => {
      console.log(`MeowEnglish API running at http://127.0.0.1:${port}`);
    });
  })
  .catch((error) => {
    console.error("Failed to initialize database", error);
    process.exit(1);
  });

process.on("SIGTERM", () => {
  pool.end().finally(() => process.exit(0));
});
