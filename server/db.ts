import pg from "pg";
import "dotenv/config";
import { courses } from "../src/data/courses";
import type { CourseRow, DbUser, ItemRow, ProgressRow } from "./types";

const { Pool } = pg;

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is required. Use your Neon PostgreSQL connection string.");
}

export const pool = new Pool({
  connectionString: databaseUrl,
  ssl: databaseUrl.includes("sslmode=require") ? undefined : { rejectUnauthorized: false },
});

type QueryParams = Array<string | number | boolean | null>;

export async function query<T = unknown>(text: string, params: QueryParams = []) {
  const result = await pool.query<T>(text, params);
  return result.rows;
}

export async function queryOne<T = unknown>(text: string, params: QueryParams = []) {
  const rows = await query<T>(text, params);
  return rows[0];
}

export async function execute(text: string, params: QueryParams = []) {
  await pool.query(text, params);
}

export async function transaction<T>(callback: (client: pg.PoolClient) => Promise<T>) {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const result = await callback(client);
    await client.query("COMMIT");
    return result;
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }
}

async function ensureSchema() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      email TEXT NOT NULL UNIQUE,
      name TEXT NOT NULL,
      password_hash TEXT NOT NULL,
      role TEXT NOT NULL CHECK (role IN ('admin', 'student')),
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );

    CREATE TABLE IF NOT EXISTS sessions (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      expires_at TIMESTAMPTZ NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
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
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
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
      position INTEGER NOT NULL,
      is_active INTEGER NOT NULL DEFAULT 1
    );

    ALTER TABLE practice_items
      ADD COLUMN IF NOT EXISTS is_active INTEGER NOT NULL DEFAULT 1;

    CREATE INDEX IF NOT EXISTS idx_practice_items_course
      ON practice_items(course_id, position);

    CREATE TABLE IF NOT EXISTS user_progress (
      user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      course_id TEXT NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
      item_id TEXT REFERENCES practice_items(id) ON DELETE SET NULL,
      item_index INTEGER NOT NULL DEFAULT 0,
      completed_count INTEGER NOT NULL DEFAULT 0,
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      PRIMARY KEY (user_id, course_id)
    );

    CREATE TABLE IF NOT EXISTS attempt_records (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      course_id TEXT NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
      item_id TEXT NOT NULL REFERENCES practice_items(id) ON DELETE CASCADE,
      answer TEXT NOT NULL,
      wrong_count INTEGER NOT NULL DEFAULT 0,
      mistake_stats_json TEXT NOT NULL DEFAULT '{}',
      elapsed_ms INTEGER NOT NULL DEFAULT 0,
      completed_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );

    ALTER TABLE attempt_records
      ADD COLUMN IF NOT EXISTS mistake_stats_json TEXT NOT NULL DEFAULT '{}';

    CREATE INDEX IF NOT EXISTS idx_attempt_records_user_course
      ON attempt_records(user_id, course_id, completed_at);

    CREATE TABLE IF NOT EXISTS import_jobs (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      course_id TEXT REFERENCES courses(id) ON DELETE SET NULL,
      filename TEXT NOT NULL,
      item_count INTEGER NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `);
}

export async function initDb() {
  await ensureSchema();
  await seedCourses();
}

async function seedCourses() {
  await transaction(async (client) => {
    for (const course of courses) {
      await client.query(
        `
          INSERT INTO courses (
            id, title, subtitle, source, owner_id, is_public, copied_from_course_id, updated_at
          )
          VALUES ($1, $2, $3, 'seed', NULL, 0, NULL, NOW())
          ON CONFLICT (id) DO UPDATE SET
            title = EXCLUDED.title,
            subtitle = EXCLUDED.subtitle,
            source = 'seed',
            owner_id = NULL,
            is_public = 0,
            updated_at = NOW()
        `,
        [course.id, course.title, course.subtitle],
      );

      await client.query(
        "UPDATE practice_items SET is_active = 0 WHERE course_id = $1",
        [course.id],
      );

      for (const [position, item] of course.items.entries()) {
        await client.query(
          `
            INSERT INTO practice_items (
              id, course_id, kind, prompt_zh, answer_en, phonetic, note, tags_json, position, is_active
            )
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, 1)
            ON CONFLICT (id) DO UPDATE SET
              course_id = EXCLUDED.course_id,
              kind = EXCLUDED.kind,
              prompt_zh = EXCLUDED.prompt_zh,
              answer_en = EXCLUDED.answer_en,
              phonetic = EXCLUDED.phonetic,
              note = EXCLUDED.note,
              tags_json = EXCLUDED.tags_json,
              position = EXCLUDED.position,
              is_active = 1
          `,
          [
            item.id,
            course.id,
            item.kind,
            item.promptZh,
            item.answerEn,
            item.phonetic ?? null,
            item.note ?? null,
            JSON.stringify(item.tags),
            position,
          ],
        );
      }
    }
  });
}

export async function listItemsByCourse(courseId: string) {
  return query<ItemRow>(
    "SELECT * FROM practice_items WHERE course_id = $1 AND is_active = 1 ORDER BY position ASC",
    [courseId],
  );
}

export async function insertCourseItems(
  client: pg.PoolClient,
  courseId: string,
  items: Array<{
    id: string;
    kind: "word" | "sentence";
    promptZh: string;
    answerEn: string;
    phonetic?: string | null;
    note?: string | null;
    tags: string[];
  }>,
) {
  for (const [position, item] of items.entries()) {
    await client.query(
      `
        INSERT INTO practice_items (
          id, course_id, kind, prompt_zh, answer_en, phonetic, note, tags_json, position
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      `,
      [
        item.id,
        courseId,
        item.kind,
        item.promptZh,
        item.answerEn,
        item.phonetic ?? null,
        item.note ?? null,
        JSON.stringify(item.tags),
        position,
      ],
    );
  }
}

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
    downloadCount: Number(row.download_count ?? 0),
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
          itemIndex: Number(progress.item_index),
          completedCount: Number(progress.completed_count),
          updatedAt: progress.updated_at,
        }
      : undefined,
  };
}
