import type { NextFunction, Request, Response } from "express";
import { randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import { execute, queryOne } from "./db";
import type { SessionUser } from "./types";

export const SESSION_COOKIE = "meow_session";
const SESSION_DAYS = 14;

declare global {
  namespace Express {
    interface Request {
      user?: SessionUser;
      sessionId?: string;
    }
  }
}

export function hashPassword(password: string) {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

export function verifyPassword(password: string, passwordHash: string) {
  const [salt, hash] = passwordHash.split(":");
  if (!salt || !hash) return false;

  const expected = Buffer.from(hash, "hex");
  const actual = scryptSync(password, salt, 64);
  return expected.length === actual.length && timingSafeEqual(expected, actual);
}

export async function createSession(res: Response, userId: string) {
  const sessionId = randomBytes(32).toString("hex");
  const expiresAt = new Date(Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000);
  await execute("INSERT INTO sessions (id, user_id, expires_at) VALUES ($1, $2, $3)", [
    sessionId,
    userId,
    expiresAt.toISOString(),
  ]);
  res.cookie(SESSION_COOKIE, sessionId, {
    httpOnly: true,
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: SESSION_DAYS * 24 * 60 * 60 * 1000,
    path: "/",
  });
}

export async function clearSession(req: Request, res: Response) {
  const sessionId = req.cookies?.[SESSION_COOKIE];
  if (sessionId) await execute("DELETE FROM sessions WHERE id = $1", [sessionId]);
  res.clearCookie(SESSION_COOKIE, {
    path: "/",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    secure: process.env.NODE_ENV === "production",
  });
}

export async function attachUser(req: Request, _res: Response, next: NextFunction) {
  try {
    await execute("DELETE FROM sessions WHERE expires_at < NOW()");
    const sessionId = req.cookies?.[SESSION_COOKIE];
    if (!sessionId) return next();

    const row = await queryOne<{
      id: string;
      expires_at: string | Date;
      user_id: string;
      email: string;
      name: string;
      role: "admin" | "student";
    }>(
      `
        SELECT
          sessions.id,
          sessions.expires_at,
          users.id as user_id,
          users.email,
          users.name,
          users.role
        FROM sessions
        JOIN users ON users.id = sessions.user_id
        WHERE sessions.id = $1
      `,
      [sessionId],
    );

    if (!row || new Date(row.expires_at).getTime() < Date.now()) {
      await execute("DELETE FROM sessions WHERE id = $1", [sessionId]);
      return next();
    }

    req.sessionId = row.id;
    req.user = {
      id: row.user_id,
      email: row.email,
      name: row.name,
      role: row.role,
    };
    return next();
  } catch (error) {
    return next(error);
  }
}

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (!req.user) {
    return res.status(401).json({ error: "请先登录" });
  }
  return next();
}

export function requireAdmin(req: Request, res: Response, next: NextFunction) {
  if (!req.user) {
    return res.status(401).json({ error: "请先登录" });
  }
  if (req.user.role !== "admin") {
    return res.status(403).json({ error: "需要管理员权限" });
  }
  return next();
}
