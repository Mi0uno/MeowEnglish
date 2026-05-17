import type { AttemptRecord, Course } from "./types";

export type User = {
  id: string;
  email: string;
  name: string;
  role: "admin" | "student";
};

type ApiOptions = RequestInit & {
  json?: unknown;
};

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, "") ?? "";
const isGitHubPages = window.location.hostname.endsWith("github.io");

async function api<T>(path: string, options: ApiOptions = {}): Promise<T> {
  if (!API_BASE_URL && isGitHubPages) {
    throw new Error("线上后端地址还没配置：请设置 VITE_API_BASE_URL 后重新部署 GitHub Pages");
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      ...(options.json ? { "Content-Type": "application/json" } : {}),
      ...options.headers,
    },
    body: options.json ? JSON.stringify(options.json) : options.body,
    credentials: "include",
  });

  const payload = (await response.json().catch(() => ({}))) as T & { error?: string };
  if (!response.ok) {
    throw new Error(payload.error ?? "请求失败");
  }
  return payload;
}

export function getMe() {
  return api<{ user: User | null }>("/api/auth/me");
}

export function register(input: { email: string; name: string; password: string }) {
  return api<{ user: User }>("/api/auth/register", {
    method: "POST",
    json: input,
  });
}

export function login(input: { email: string; password: string }) {
  return api<{ user: User }>("/api/auth/login", {
    method: "POST",
    json: input,
  });
}

export function logout() {
  return api<{ ok: true }>("/api/auth/logout", { method: "POST" });
}

export function getCourses() {
  return api<{ courses: Course[] }>("/api/courses");
}

export function getWrongBook() {
  return api<{ course: Course }>("/api/wrong-book");
}

export function saveAttempt(input: AttemptRecord & { courseId: string; itemIndex: number }) {
  return api<{ ok: true }>("/api/attempts", {
    method: "POST",
    json: input,
  });
}

export function saveProgress(input: {
  courseId: string;
  itemId: string | null;
  itemIndex: number;
  completedCount: number;
}) {
  return api<{ ok: true }>("/api/progress", {
    method: "POST",
    json: input,
  });
}

export function importCourse(input: {
  title: string;
  subtitle: string;
  filename: string;
  isPublic?: boolean;
  items: Array<{
    kind: "word" | "sentence";
    promptZh: string;
    answerEn: string;
    phonetic?: string;
    note?: string;
    tags: string[];
  }>;
}) {
  return api<{ resource: Course }>("/api/resources/import", {
    method: "POST",
    json: input,
  });
}

export function getResources() {
  return api<{ resources: Course[] }>("/api/resources");
}

export function getStoreResources() {
  return api<{ resources: Course[] }>("/api/resources/store");
}

export function updateResource(
  courseId: string,
  input: {
    title: string;
    subtitle: string;
    isPublic?: boolean;
    items: Array<{
      kind: "word" | "sentence";
      promptZh: string;
      answerEn: string;
      phonetic?: string;
      note?: string;
      tags: string[];
    }>;
  },
) {
  return api<{ resource: Course }>(`/api/resources/${courseId}`, {
    method: "PUT",
    json: input,
  });
}

export function deleteResource(courseId: string) {
  return api<{ ok: true }>(`/api/resources/${courseId}`, {
    method: "DELETE",
  });
}

export function downloadResource(courseId: string) {
  return api<{ resource: Course }>(`/api/resources/${courseId}/download`, {
    method: "POST",
  });
}

export function getImports() {
  return api<{
    imports: Array<{
      id: string;
      filename: string;
      item_count: number;
      course_title: string;
      created_at: string;
    }>;
  }>("/api/admin/imports");
}

export type AdminStats = {
  totals: {
    users: number;
    courses: number;
    items: number;
    attempts: number;
    importedCourses: number;
    avgAccuracy: number;
  };
  dailyAttempts: Array<{ date: string; attempts: number; avgAccuracy: number }>;
  courseActivity: Array<{ courseId: string; title: string; attempts: number; itemCount: number }>;
  itemKinds: Array<{ kind: "word" | "sentence"; count: number }>;
  recentAttempts: Array<{
    id: string;
    user_name: string;
    course_title: string;
    answer: string;
    wrong_count: number;
    elapsed_ms: number;
    completed_at: string;
  }>;
  recentImports: Array<{
    id: string;
    filename: string;
    item_count: number;
    course_title: string;
    created_at: string;
  }>;
};

export function getAdminStats() {
  return api<{ stats: AdminStats }>("/api/admin/stats");
}
