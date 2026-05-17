import { z } from "zod";

export const RegisterSchema = z.object({
  email: z.string().email().max(180),
  name: z.string().trim().min(1).max(60),
  password: z.string().min(8).max(128),
});

export const LoginSchema = z.object({
  email: z.string().email().max(180),
  password: z.string().min(1).max(128),
});

export const AttemptSchema = z.object({
  courseId: z.string().min(1).max(120),
  itemId: z.string().min(1).max(160),
  itemIndex: z.number().int().min(0),
  answer: z.string().min(1).max(500),
  wrongCount: z.number().int().min(0).max(1000),
  mistakeStats: z
    .object({
      spelling: z.number().int().min(0).max(1000).default(0),
      casing: z.number().int().min(0).max(1000).default(0),
      spacing: z.number().int().min(0).max(1000).default(0),
    })
    .optional(),
  elapsedMs: z.number().int().min(0).max(24 * 60 * 60 * 1000),
  completedAt: z.string().datetime().optional(),
});

export const ProgressSchema = z.object({
  courseId: z.string().min(1).max(120),
  itemId: z.string().min(1).max(160).nullable(),
  itemIndex: z.number().int().min(0),
  completedCount: z.number().int().min(0),
});

export const ImportItemSchema = z.object({
  kind: z.enum(["word", "sentence"]).default("word"),
  promptZh: z.string().trim().min(1).max(500),
  answerEn: z.string().trim().min(1).max(500),
  phonetic: z.string().trim().max(120).optional(),
  note: z.string().trim().max(500).optional(),
  tags: z.array(z.string().trim().min(1).max(40)).max(12).default([]),
});

export const ImportCourseSchema = z.object({
  title: z.string().trim().min(1).max(120),
  subtitle: z.string().trim().max(240).default(""),
  filename: z.string().trim().max(180).default("manual-import.json"),
  isPublic: z.boolean().default(false),
  items: z.array(ImportItemSchema).min(1).max(3000),
});

export const UpdateCourseSchema = z.object({
  title: z.string().trim().min(1).max(120),
  subtitle: z.string().trim().max(240).default(""),
  isPublic: z.boolean().default(false),
  items: z.array(ImportItemSchema).min(1).max(3000),
});
