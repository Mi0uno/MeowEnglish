export type PracticeKind = "word" | "sentence";

export type PracticeItem = {
  id: string;
  kind: PracticeKind;
  promptZh: string;
  answerEn: string;
  phonetic?: string;
  note?: string;
  tags: string[];
  sourceCourseId?: string;
  sourceCourseTitle?: string;
  wrongCount?: number;
  wrongAttempts?: number;
  lastWrongAt?: string;
};

export type Course = {
  id: string;
  title: string;
  subtitle: string;
  source?: string;
  ownerId?: string | null;
  ownerName?: string;
  isPublic?: boolean;
  downloadCount?: number;
  copiedFromCourseId?: string | null;
  createdAt?: string;
  updatedAt?: string | null;
  items: PracticeItem[];
  progress?: {
    itemId: string | null;
    itemIndex: number;
    completedCount: number;
    updatedAt: string;
  };
};

export type PracticeMode = "mixed" | "word" | "sentence";

export type LetterState = "pending" | "correct" | "wrong";

export type AttemptRecord = {
  itemId: string;
  courseId?: string;
  answer: string;
  wrongCount: number;
  elapsedMs: number;
  completedAt: string;
};
