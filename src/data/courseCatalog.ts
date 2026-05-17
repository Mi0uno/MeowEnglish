import type { Course } from "../types";

export const courseCatalog = [
  {
    id: "daily-foundation",
    title: "日常基础",
    subtitle: "生活、出行、工作高频词和短句",
    itemKey: "daily",
  },
  {
    id: "translation-builder",
    title: "翻译组句",
    subtitle: "从中文意思出发，练完整英文表达",
    itemKey: "builder",
  },
  {
    id: "conversation-flow",
    title: "会话流畅度",
    subtitle: "把短词、语块、句子串成可说出口的表达",
    itemKey: "flow",
  },
  {
    id: "cet4-core",
    title: "四级",
    subtitle: "CET-4 核心词与基础翻译句",
    itemKey: "cet4",
  },
  {
    id: "cet6-core",
    title: "六级",
    subtitle: "CET-6 进阶词汇与长句表达",
    itemKey: "cet6",
  },
  {
    id: "kaoyan-core",
    title: "考研",
    subtitle: "考研英语核心词与写作翻译表达",
    itemKey: "kaoyan",
  },
  {
    id: "ielts-core",
    title: "雅思",
    subtitle: "IELTS 场景词与口写表达",
    itemKey: "ielts",
  },
] as const;

export type CourseItemKey = (typeof courseCatalog)[number]["itemKey"];

export const emptyCourses: Course[] = courseCatalog.map((course) => ({
  id: course.id,
  title: course.title,
  subtitle: course.subtitle,
  items: [],
}));
