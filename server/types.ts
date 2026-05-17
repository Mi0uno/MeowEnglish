export type UserRole = "admin" | "student";

export type DbUser = {
  id: string;
  email: string;
  name: string;
  password_hash: string;
  role: UserRole;
  created_at: string;
};

export type SessionUser = {
  id: string;
  email: string;
  name: string;
  role: UserRole;
};

export type CourseRow = {
  id: string;
  title: string;
  subtitle: string;
  source: string;
  owner_id: string | null;
  is_public: number;
  download_count: number;
  copied_from_course_id: string | null;
  created_at: string;
  updated_at: string | null;
};

export type ItemRow = {
  id: string;
  course_id: string;
  kind: "word" | "sentence";
  prompt_zh: string;
  answer_en: string;
  phonetic: string | null;
  note: string | null;
  tags_json: string;
  position: number;
  is_active: number;
};

export type ProgressRow = {
  user_id: string;
  course_id: string;
  item_id: string | null;
  item_index: number;
  completed_count: number;
  updated_at: string;
};
