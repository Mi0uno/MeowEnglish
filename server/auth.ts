import type { NextFunction, Request, Response } from "express";
import { randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import { queries } from "./db";
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

export function createSession(res: Response, userId: string) {
  const sessionId = randomBytes(32).toString("hex");
  const expiresAt = new Date(Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000);
  queries.createSession.run(sessionId, userId, expiresAt.toISOString());
  res.cookie(SESSION_COOKIE, sessionId, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: SESSION_DAYS * 24 * 60 * 60 * 1000,
    path: "/",
  });
}

export function clearSession(req: Request, res: Response) {
  const sessionId = req.cookies?.[SESSION_COOKIE];
  if (sessionId) queries.deleteSession.run(sessionId);
  res.clearCookie(SESSION_COOKIE, { path: "/" });
}

export function attachUser(req: Request, _res: Response, next: NextFunction) {
  queries.deleteExpiredSessions.run();
  const sessionId = req.cookies?.[SESSION_COOKIE];
  if (!sessionId) return next();

  const row = queries.findSession.get(sessionId) as
    | {
        id: string;
        expires_at: string;
        user_id: string;
        email: string;
        name: string;
        role: "admin" | "student";
      }
    | undefined;

  if (!row || new Date(row.expires_at).getTime() < Date.now()) {
    queries.deleteSession.run(sessionId);
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
