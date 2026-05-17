import type { Course, PracticeItem } from "../types";
import { courseCatalog, type CourseItemKey } from "./courseCatalog";
import courseItemsJson from "./courseItems.json";

const courseItems = courseItemsJson as Record<CourseItemKey, PracticeItem[]>;

export const courses: Course[] = courseCatalog.map((course) => ({
  id: course.id,
  title: course.title,
  subtitle: course.subtitle,
  items: courseItems[course.itemKey],
}));
