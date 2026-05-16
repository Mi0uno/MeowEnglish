import Database from "better-sqlite3";
import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { courses } from "../src/data/courses";
import type { CourseRow, DbUser, ItemRow, ProgressRow } from "./types";

const dataDir = join(process.cwd(), "data");
const dbPath = process.env.DB_PATH ?? join(dataDir, "meowenglish.sqlite");
mkdirSync(dirname(dbPath), { recursive: true });

export const db = new Database(dbPath);
db.pragma("journal_mode = WAL");
db.pragma("foreign_keys = ON");

function ensureSchema() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      email TEXT NOT NULL UNIQUE,
      name TEXT NOT NULL,
      password_hash TEXT NOT NULL,
      role TEXT NOT NULL CHECK (role IN ('admin', 'student')),
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS sessions (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      expires_at TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS courses (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      subtitle TEXT NOT NULL DEFAULT '',
      source TEXT NOT NULL DEFAULT 'seed',
      owner_id TEXT REFERENCES users(id) ON DELETE SET NULL,
      is_public INTEGER NOT NULL DEFAULT 0,
      download_count INTEGER NOT NULL DEFAULT 0,
      copied_from_course_id TEXT REFERENCES courses(id) ON DELETE SET NULL,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS practice_items (
      id TEXT PRIMARY KEY,
      course_id TEXT NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
      kind TEXT NOT NULL CHECK (kind IN ('word', 'sentence')),
      prompt_zh TEXT NOT NULL,
      answer_en TEXT NOT NULL,
      phonetic TEXT,
      note TEXT,
      tags_json TEXT NOT NULL DEFAULT '[]',
      position INTEGER NOT NULL
    );

    CREATE INDEX IF NOT EXISTS idx_practice_items_course
      ON practice_items(course_id, position);

    CREATE TABLE IF NOT EXISTS user_progress (
      user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      course_id TEXT NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
      item_id TEXT REFERENCES practice_items(id) ON DELETE SET NULL,
      item_index INTEGER NOT NULL DEFAULT 0,
      completed_count INTEGER NOT NULL DEFAULT 0,
      updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (user_id, course_id)
    );

    CREATE TABLE IF NOT EXISTS attempt_records (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      course_id TEXT NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
      item_id TEXT NOT NULL REFERENCES practice_items(id) ON DELETE CASCADE,
      answer TEXT NOT NULL,
      wrong_count INTEGER NOT NULL DEFAULT 0,
      elapsed_ms INTEGER NOT NULL DEFAULT 0,
      completed_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

    CREATE INDEX IF NOT EXISTS idx_attempt_records_user_course
      ON attempt_records(user_id, course_id, completed_at);

    CREATE TABLE IF NOT EXISTS import_jobs (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      course_id TEXT REFERENCES courses(id) ON DELETE SET NULL,
      filename TEXT NOT NULL,
      item_count INTEGER NOT NULL,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
  `);

  const courseColumns = db.prepare("PRAGMA table_info(courses)").all() as Array<{ name: string }>;
  const columnNames = new Set(courseColumns.map((column) => column.name));
  if (!columnNames.has("is_public")) {
    db.exec("ALTER TABLE courses ADD COLUMN is_public INTEGER NOT NULL DEFAULT 0");
  }
  if (!columnNames.has("download_count")) {
    db.exec("ALTER TABLE courses ADD COLUMN download_count INTEGER NOT NULL DEFAULT 0");
  }
  if (!columnNames.has("copied_from_course_id")) {
    db.exec("ALTER TABLE courses ADD COLUMN copied_from_course_id TEXT REFERENCES courses(id) ON DELETE SET NULL");
  }
  if (!columnNames.has("updated_at")) {
    db.exec("ALTER TABLE courses ADD COLUMN updated_at TEXT");
  }
  db.exec("UPDATE courses SET updated_at = COALESCE(updated_at, created_at, CURRENT_TIMESTAMP)");
}

ensureSchema();

export function initDb() {
  seedCourses();
}

function seedCourses() {
  const hasCourse = db.prepare("SELECT id FROM courses WHERE id = ?");
  const insertCourse = db.prepare(`
    INSERT INTO courses (id, title, subtitle, source, owner_id, is_public, copied_from_course_id, updated_at)
    VALUES (@id, @title, @subtitle, 'seed', NULL, 0, NULL, CURRENT_TIMESTAMP)
  `);
  const insertItem = db.prepare(`
    INSERT INTO practice_items (
      id, course_id, kind, prompt_zh, answer_en, phonetic, note, tags_json, position
    )
    VALUES (
      @id, @courseId, @kind, @promptZh, @answerEn, @phonetic, @note, @tagsJson, @position
    )
  `);

  const seed = db.transaction(() => {
    for (const course of courses) {
      if (hasCourse.get(course.id)) continue;
      insertCourse.run(course);
      course.items.forEach((item, position) => {
        insertItem.run({
          ...item,
          courseId: course.id,
          phonetic: item.phonetic ?? null,
          note: item.note ?? null,
          tagsJson: JSON.stringify(item.tags),
          position,
        });
      });
    }
  });

  seed();
}

export const queries = {
  countUsers: db.prepare("SELECT COUNT(*) as count FROM users"),
  createUser: db.prepare(`
    INSERT INTO users (id, email, name, password_hash, role)
    VALUES (@id, @email, @name, @passwordHash, @role)
  `),
  findUserByEmail: db.prepare("SELECT * FROM users WHERE email = ?"),
  findUserById: db.prepare("SELECT * FROM users WHERE id = ?"),
  createSession: db.prepare(`
    INSERT INTO sessions (id, user_id, expires_at)
    VALUES (?, ?, ?)
  `),
  deleteSession: db.prepare("DELETE FROM sessions WHERE id = ?"),
  findSession: db.prepare(`
    SELECT sessions.id, sessions.expires_at, users.id as user_id, users.email, users.name, users.role
    FROM sessions
    JOIN users ON users.id = sessions.user_id
    WHERE sessions.id = ?
  `),
  deleteExpiredSessions: db.prepare("DELETE FROM sessions WHERE expires_at < CURRENT_TIMESTAMP"),
  listCourses: db.prepare("SELECT * FROM courses ORDER BY created_at ASC"),
  listSeedCourses: db.prepare(`
    SELECT courses.*, users.name as owner_name
    FROM courses
    LEFT JOIN users ON users.id = courses.owner_id
    WHERE courses.source = 'seed'
    ORDER BY courses.created_at ASC
  `),
  listVisibleCourses: db.prepare(`
    SELECT courses.*, users.name as owner_name
    FROM courses
    LEFT JOIN users ON users.id = courses.owner_id
    WHERE courses.source = 'seed'
      OR courses.owner_id = ?
    ORDER BY courses.created_at ASC
  `),
  listOwnedCourses: db.prepare(`
    SELECT courses.*, users.name as owner_name, COUNT(practice_items.id) as item_count
    FROM courses
    LEFT JOIN users ON users.id = courses.owner_id
    LEFT JOIN practice_items ON practice_items.course_id = courses.id
    WHERE courses.owner_id = ?
    GROUP BY courses.id
    ORDER BY courses.updated_at DESC, courses.created_at DESC
  `),
  listPublicCourses: db.prepare(`
    SELECT courses.*, users.name as owner_name, COUNT(practice_items.id) as item_count
    FROM courses
    LEFT JOIN users ON users.id = courses.owner_id
    LEFT JOIN practice_items ON practice_items.course_id = courses.id
    WHERE courses.is_public = 1
      AND courses.owner_id IS NOT NULL
      AND courses.owner_id != ?
      AND courses.id NOT IN (
        SELECT copied_from_course_id FROM courses
        WHERE owner_id = ? AND copied_from_course_id IS NOT NULL
      )
    GROUP BY courses.id
    ORDER BY courses.download_count DESC, courses.updated_at DESC, courses.created_at DESC
  `),
  getCourseById: db.prepare("SELECT * FROM courses WHERE id = ?"),
  listItemsByCourse: db.prepare("SELECT * FROM practice_items WHERE course_id = ? ORDER BY position ASC"),
  getProgress: db.prepare("SELECT * FROM user_progress WHERE user_id = ? AND course_id = ?"),
  upsertProgress: db.prepare(`
    INSERT INTO user_progress (user_id, course_id, item_id, item_index, completed_count, updated_at)
    VALUES (@userId, @courseId, @itemId, @itemIndex, @completedCount, CURRENT_TIMESTAMP)
    ON CONFLICT(user_id, course_id) DO UPDATE SET
      item_id = excluded.item_id,
      item_index = excluded.item_index,
      completed_count = excluded.completed_count,
      updated_at = CURRENT_TIMESTAMP
  `),
  createAttempt: db.prepare(`
    INSERT INTO attempt_records (id, user_id, course_id, item_id, answer, wrong_count, elapsed_ms, completed_at)
    VALUES (@id, @userId, @courseId, @itemId, @answer, @wrongCount, @elapsedMs, @completedAt)
  `),
  listAttempts: db.prepare(`
    SELECT * FROM attempt_records
    WHERE user_id = ? AND course_id = ?
    ORDER BY completed_at DESC
    LIMIT 120
  `),
  listWrongBookItems: db.prepare(`
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
    WHERE attempt_records.user_id = ?
      AND attempt_records.wrong_count > 0
    GROUP BY practice_items.id
    ORDER BY last_wrong_at DESC
    LIMIT 300
  `),
  createCourse: db.prepare(`
    INSERT INTO courses (id, title, subtitle, source, owner_id, is_public, copied_from_course_id, updated_at)
    VALUES (@id, @title, @subtitle, @source, @ownerId, @isPublic, @copiedFromCourseId, CURRENT_TIMESTAMP)
  `),
  updateCourse: db.prepare(`
    UPDATE courses
    SET title = @title,
        subtitle = @subtitle,
        is_public = @isPublic,
        updated_at = CURRENT_TIMESTAMP
    WHERE id = @courseId AND owner_id = @userId
  `),
  deleteCourse: db.prepare("DELETE FROM courses WHERE id = ? AND owner_id = ?"),
  deleteItemsByCourse: db.prepare("DELETE FROM practice_items WHERE course_id = ?"),
  incrementDownloadCount: db.prepare(`
    UPDATE courses
    SET download_count = download_count + 1,
        updated_at = CURRENT_TIMESTAMP
    WHERE id = ?
  `),
  createItem: db.prepare(`
    INSERT INTO practice_items (
      id, course_id, kind, prompt_zh, answer_en, phonetic, note, tags_json, position
    )
    VALUES (
      @id, @courseId, @kind, @promptZh, @answerEn, @phonetic, @note, @tagsJson, @position
    )
  `),
  createImportJob: db.prepare(`
    INSERT INTO import_jobs (id, user_id, course_id, filename, item_count)
    VALUES (@id, @userId, @courseId, @filename, @itemCount)
  `),
  listImportJobs: db.prepare(`
    SELECT import_jobs.*, courses.title as course_title
    FROM import_jobs
    LEFT JOIN courses ON courses.id = import_jobs.course_id
    ORDER BY import_jobs.created_at DESC
    LIMIT 30
  `),
};

export function mapUser(row: DbUser) {
  return {
    id: row.id,
    email: row.email,
    name: row.name,
    role: row.role,
  };
}

export function mapCourse(row: CourseRow, itemRows: ItemRow[], progress?: ProgressRow | null) {
  return {
    id: row.id,
    title: row.title,
    subtitle: row.subtitle,
    source: row.source,
    ownerId: row.owner_id,
    ownerName: "owner_name" in row ? (row as CourseRow & { owner_name?: string }).owner_name : undefined,
    isPublic: Boolean(row.is_public),
    downloadCount: row.download_count,
    copiedFromCourseId: row.copied_from_course_id,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    items: itemRows.map((item) => ({
      id: item.id,
      kind: item.kind,
      promptZh: item.prompt_zh,
      answerEn: item.answer_en,
      phonetic: item.phonetic ?? undefined,
      note: item.note ?? undefined,
      tags: JSON.parse(item.tags_json) as string[],
    })),
    progress: progress
      ? {
          itemId: progress.item_id,
          itemIndex: progress.item_index,
          completedCount: progress.completed_count,
          updatedAt: progress.updated_at,
        }
      : undefined,
  };
}
