import {
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Database,
  Download,
  Eye,
  Keyboard,
  Languages,
  ListRestart,
  Pause,
  Play,
  RotateCcw,
  Settings2,
  Shuffle,
  Sparkles,
  Target,
  Trophy,
  Trash2,
  Upload,
  UserCircle,
  Volume2,
  Zap,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  getCourses,
  getWrongBook,
  deleteResource,
  downloadResource,
  getImports,
  getAdminStats,
  getMe,
  getResources,
  getStoreResources,
  importCourse,
  login,
  logout,
  register,
  saveAttempt,
  saveProgress,
  updateResource,
  type User,
  type AdminStats,
} from "./api";
import { courses as fallbackCourses } from "./data/courses";
import type {
  AttemptRecord,
  Course,
  LetterState,
  MistakeStats,
  PracticeMode,
} from "./types";

const STORAGE_KEY = "meowenglish:attempts";
const WRONG_BOOK_ID = "wrong-book";
const CHAPTER_SIZE = 50;

function normalizeAnswer(value: string) {
  return value.replace(/\s+/g, " ").trim().toLowerCase();
}

function getComparableTarget(value: string, ignoreCase: boolean) {
  return ignoreCase ? value.toLowerCase() : value;
}

function formatTime(ms: number) {
  if (ms < 1000) return `${ms} ms`;
  return `${(ms / 1000).toFixed(1)} s`;
}

function formatClock(ms: number) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function isPrintableKey(event: KeyboardEvent) {
  return event.key.length === 1 && !event.altKey && !event.ctrlKey && !event.metaKey;
}

function speak(text: string) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.9;
  window.speechSynthesis.speak(utterance);
}

function getFilteredItems(course: Course, mode: PracticeMode) {
  if (mode === "mixed") return course.items;
  return course.items.filter((item) => item.kind === mode);
}

function clampChapterStart(value: number, itemCount: number) {
  if (itemCount <= 0) return 0;
  const maxChapterStart = Math.floor((itemCount - 1) / CHAPTER_SIZE) * CHAPTER_SIZE;
  return Math.min(Math.max(0, value), maxChapterStart);
}

function seededSortValue(value: string) {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(index);
    hash |= 0;
  }
  return hash;
}

function getAccuracy(records: AttemptRecord[]) {
  if (records.length === 0) return 100;
  const totalMistakes = records.reduce((sum, record) => sum + record.wrongCount, 0);
  const totalTyped = records.reduce((sum, record) => sum + record.answer.length, 0);
  if (totalTyped === 0) return 100;
  return Math.max(0, Math.round(((totalTyped - totalMistakes) / totalTyped) * 100));
}

function getWordsPerMinute(records: AttemptRecord[], elapsedMs?: number, draft = "") {
  const recordedMs = records.reduce((sum, record) => sum + record.elapsedMs, 0);
  const elapsedMinutes = Math.max((elapsedMs ?? recordedMs) / 1000 / 60, 0);
  if (elapsedMinutes === 0) return 0;
  const typedWords = records.reduce((sum, record) => {
    return sum + Math.max(1, record.answer.trim().split(/\s+/).length);
  }, 0);
  const draftWords = draft.trim() ? Math.max(1, draft.trim().split(/\s+/).length) : 0;
  return Math.round((typedWords + draftWords) / elapsedMinutes);
}

function buildLocalWrongBook(courses: Course[], records: AttemptRecord[]): Course {
  const itemMap = new Map<string, Course["items"][number] & { sourceCourseId?: string; sourceCourseTitle?: string }>();
  const statsMap = new Map<string, { wrongCount: number; wrongAttempts: number; lastWrongAt: string }>();

  courses.forEach((course) => {
    course.items.forEach((item) => {
      itemMap.set(item.id, {
        ...item,
        sourceCourseId: item.sourceCourseId ?? course.id,
        sourceCourseTitle: item.sourceCourseTitle ?? course.title,
      });
    });
  });

  records.forEach((record) => {
    if (record.wrongCount <= 0 || !itemMap.has(record.itemId)) return;
    const existing = statsMap.get(record.itemId);
    statsMap.set(record.itemId, {
      wrongCount: (existing?.wrongCount ?? 0) + record.wrongCount,
      wrongAttempts: (existing?.wrongAttempts ?? 0) + 1,
      lastWrongAt:
        !existing || record.completedAt > existing.lastWrongAt
          ? record.completedAt
          : existing.lastWrongAt,
    });
  });

  const items = Array.from(statsMap.entries())
    .sort(([, left], [, right]) => right.lastWrongAt.localeCompare(left.lastWrongAt))
    .map(([itemId, stats]) => {
      const item = itemMap.get(itemId)!;
      const tags = ["错题", item.sourceCourseTitle ?? "本地记录", ...item.tags.filter((tag) => tag !== "错题")];
      return {
        ...item,
        tags,
        wrongCount: stats.wrongCount,
        wrongAttempts: stats.wrongAttempts,
        lastWrongAt: stats.lastWrongAt,
      };
    });

  return {
    id: "wrong-book",
    title: "错题本",
    subtitle: "自动收集做错过的单词和句子",
    source: "system",
    items,
  };
}

function buildLetterStates(answer: string, target: string, ignoreCase: boolean) {
  const comparableAnswer = getComparableTarget(answer, ignoreCase);
  const comparableTarget = getComparableTarget(target, ignoreCase);

  return target.split("").map<LetterState>((_, index) => {
    if (index >= answer.length) return "pending";
    return comparableAnswer[index] === comparableTarget[index] ? "correct" : "wrong";
  });
}

function classifyMistake(inputChar: string, targetChar: string): keyof MistakeStats {
  if (inputChar.toLowerCase() === targetChar.toLowerCase() && inputChar !== targetChar) {
    return "casing";
  }
  if (/\s|[.,!?;:'"()[\]{}\-]/.test(inputChar) || /\s|[.,!?;:'"()[\]{}\-]/.test(targetChar)) {
    return "spacing";
  }
  return "spelling";
}

function useStoredAttempts() {
  const [attempts, setAttempts] = useState<AttemptRecord[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as AttemptRecord[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(attempts.slice(-120)));
  }, [attempts]);

  return [attempts, setAttempts] as const;
}

export default function App() {
  const [loadedCourses, setLoadedCourses] = useState<Course[]>(fallbackCourses);
  const [wrongBookCourse, setWrongBookCourse] = useState<Course>(() =>
    buildLocalWrongBook(fallbackCourses, []),
  );
  const [user, setUser] = useState<User | null>(null);
  const [authOpen, setAuthOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const [materialMenuOpen, setMaterialMenuOpen] = useState(false);
  const [appError, setAppError] = useState("");
  const [courseId, setCourseId] = useState(fallbackCourses[0].id);
  const [mode, setMode] = useState<PracticeMode>("mixed");
  const [index, setIndex] = useState(0);
  const [chapterStart, setChapterStart] = useState(0);
  const [input, setInput] = useState("");
  const [wrongCount, setWrongCount] = useState(0);
  const [mistakeStats, setMistakeStats] = useState<MistakeStats>({
    spelling: 0,
    casing: 0,
    spacing: 0,
  });
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [sessionStartedAt, setSessionStartedAt] = useState<number | null>(null);
  const [clockTick, setClockTick] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [chapterFinished, setChapterFinished] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [ignoreCase, setIgnoreCase] = useState(true);
  const [shuffle, setShuffle] = useState(false);
  const [shakeKey, setShakeKey] = useState(0);
  const [attempts, setAttempts] = useStoredAttempts();
  const captureRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);
  const materialMenuRef = useRef<HTMLDivElement | null>(null);
  const accountMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    refreshBootstrap();
  }, []);

  useEffect(() => {
    if (!user) {
      setWrongBookCourse(buildLocalWrongBook(loadedCourses, attempts));
    }
  }, [attempts, loadedCourses, user]);

  useEffect(() => {
    const closeFloatingMenus = (event: PointerEvent) => {
      const target = event.target as Node | null;
      if (!target) return;

      if (materialMenuRef.current && !materialMenuRef.current.contains(target)) {
        setMaterialMenuOpen(false);
      }

      if (accountMenuRef.current && !accountMenuRef.current.contains(target)) {
        setAccountMenuOpen(false);
      }
    };

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMaterialMenuOpen(false);
      setAccountMenuOpen(false);
    };

    window.addEventListener("pointerdown", closeFloatingMenus);
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.removeEventListener("pointerdown", closeFloatingMenus);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  async function refreshBootstrap() {
    try {
      const [meResult, courseResult] = await Promise.all([getMe(), getCourses()]);
      const nextCourses = courseResult.courses.length ? courseResult.courses : fallbackCourses;
      setUser(meResult.user);
      setLoadedCourses(nextCourses);
      setCourseId((current) =>
        current === WRONG_BOOK_ID || nextCourses.some((course) => course.id === current)
          ? current
          : nextCourses[0].id,
      );
      if (meResult.user) {
        try {
          const wrongBookResult = await getWrongBook();
          setWrongBookCourse(wrongBookResult.course);
        } catch (error) {
          setAppError(error instanceof Error ? error.message : "错题本加载失败");
        }
      } else {
        setWrongBookCourse(buildLocalWrongBook(nextCourses, attempts));
      }
    } catch (error) {
      setAppError(error instanceof Error ? error.message : "加载服务器数据失败，已使用本地课程");
    }
  }

  const activeCourse = useMemo(
    () =>
      courseId === WRONG_BOOK_ID
        ? wrongBookCourse
        : loadedCourses.find((course) => course.id === courseId) ?? loadedCourses[0] ?? fallbackCourses[0],
    [courseId, loadedCourses, wrongBookCourse],
  );

  const items = useMemo(() => {
    const filtered = getFilteredItems(activeCourse, mode);
    if (!shuffle) return filtered;
    return [...filtered].sort(
      (a, b) =>
        seededSortValue(`${courseId}:${mode}:${a.id}`) -
        seededSortValue(`${courseId}:${mode}:${b.id}`),
    );
  }, [activeCourse, courseId, mode, shuffle]);

  const chapterItems = useMemo(
    () => items.slice(chapterStart, chapterStart + CHAPTER_SIZE),
    [chapterStart, items],
  );
  const activeItem = chapterItems[index] ?? chapterItems[0] ?? null;
  const chapterNumber = items.length > 0 ? Math.floor(chapterStart / CHAPTER_SIZE) + 1 : 0;
  const chapterCount = Math.max(1, Math.ceil(items.length / CHAPTER_SIZE));
  const globalIndex = activeItem ? chapterStart + index : 0;
  const letterStates = useMemo(
    () => (activeItem ? buildLetterStates(input, activeItem.answerEn, ignoreCase) : []),
    [activeItem, input, ignoreCase],
  );
  const currentProgress = activeItem && chapterItems.length > 0
    ? Math.round(((index + Number(completed)) / chapterItems.length) * 100)
    : 0;
  const isWrongBook = activeCourse.id === WRONG_BOOK_ID;
  const courseAttempts = attempts.filter((record) => {
    if (isWrongBook) return wrongBookCourse.items.some((item) => item.id === record.itemId);
    return record.courseId
      ? record.courseId === activeCourse.id
      : activeCourse.items.some((item) => item.id === record.itemId);
  });
  const sessionAttempts = chapterItems.length > 0 ? attempts.slice(-chapterItems.length) : [];
  const isSentence = activeItem?.kind === "sentence";
  const isExact =
    activeItem !== null &&
    (normalizeAnswer(input) === normalizeAnswer(activeItem.answerEn) ||
      getComparableTarget(input, ignoreCase) ===
        getComparableTarget(activeItem.answerEn, ignoreCase));
  const elapsedSessionMs = sessionStartedAt ? clockTick - sessionStartedAt : 0;
  const liveAccuracy = Math.max(
    0,
    Math.round(
      ((Math.max(0, input.length - wrongCount) +
        sessionAttempts.reduce((sum, record) => sum + record.answer.length - record.wrongCount, 0)) /
        Math.max(
          1,
          input.length + sessionAttempts.reduce((sum, record) => sum + record.answer.length, 0),
        )) *
        100,
    ),
  );
  const wrongItems = courseAttempts
    .filter((record) => record.wrongCount > 0)
    .slice(-12)
    .reverse();
  const currentItemSource = activeItem?.sourceCourseTitle;
  const emptyStageTitle = isWrongBook ? "错题本还没有题目" : "当前筛选没有题目";
  const emptyStageText = isWrongBook
    ? user
      ? "做错的单词和句子会自动收进这里。"
      : "未登录时会先从本机练习记录里收集错题。"
    : "换一个训练模式或学习资料就能继续。";

  useEffect(() => {
    setIndex(0);
    setChapterStart(0);
    setChapterFinished(false);
    setIsTyping(false);
    setSessionStartedAt(null);
    resetQuestion();
  }, [courseId, mode]);

  useEffect(() => {
    if (activeCourse.id !== WRONG_BOOK_ID && activeCourse.progress && activeCourse.progress.itemIndex < items.length) {
      const nextChapterStart = Math.floor(activeCourse.progress.itemIndex / CHAPTER_SIZE) * CHAPTER_SIZE;
      setChapterStart(nextChapterStart);
      goToItem(activeCourse.progress.itemIndex - nextChapterStart);
    }
  }, [activeCourse.id]);

  useEffect(() => {
    if (chapterStart >= items.length) {
      setChapterStart(clampChapterStart(chapterStart, items.length));
      setIndex(0);
      resetQuestion();
      return;
    }

    if (index >= chapterItems.length) {
      setIndex(Math.max(0, chapterItems.length - 1));
      resetQuestion();
    }
  }, [chapterItems.length, chapterStart, index, items.length]);

  useEffect(() => {
    resetQuestion();
  }, [activeItem?.id]);

  useEffect(() => {
    if (isTyping) {
      focusCapture();
    }
  }, [activeItem?.id, completed, isTyping]);

  useEffect(() => {
    if (!isTyping) return;
    const timer = window.setInterval(() => {
      setClockTick(Date.now());
    }, 250);
    return () => window.clearInterval(timer);
  }, [isTyping]);

  useEffect(() => {
    const handleGlobalKeyDown = (event: KeyboardEvent) => {
      if (chapterFinished || !activeItem) return;
      if (materialMenuOpen || accountMenuOpen) return;
      if (event.key === "Enter" && event.ctrlKey) {
        event.preventDefault();
        revealAnswer();
        return;
      }
      const target = event.target as HTMLElement | null;
      const isEditing =
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable;
      if (isTyping || isEditing) return;

      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        startTyping();
      } else if (isPrintableKey(event)) {
        event.preventDefault();
        startTyping();
        window.setTimeout(() => handleInputChange(input + event.key), 0);
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [accountMenuOpen, activeItem?.id, chapterFinished, ignoreCase, input, isTyping, materialMenuOpen]);

  function resetQuestion() {
    setInput("");
    setWrongCount(0);
    setMistakeStats({ spelling: 0, casing: 0, spacing: 0 });
    setStartedAt(null);
    setCompleted(false);
    setShowAnswer(false);
  }

  function goToItem(nextIndex: number) {
    resetQuestion();
    setIndex(Math.min(Math.max(0, nextIndex), Math.max(0, chapterItems.length - 1)));
  }

  function moveCaptureCaretToEnd(element = captureRef.current) {
    if (!element) return;
    const position = element.value.length;
    element.setSelectionRange(position, position);
  }

  function focusCapture(delay = 0) {
    window.setTimeout(() => {
      const element = captureRef.current;
      if (!element) return;
      element.focus({ preventScroll: true });
      moveCaptureCaretToEnd(element);
    }, delay);
  }

  function startTyping() {
    if (!activeItem) return;
    const now = Date.now();
    setIsTyping(true);
    setClockTick(now);
    if (sessionStartedAt === null) setSessionStartedAt(now);
    focusCapture();
  }

  function toggleTyping() {
    if (chapterFinished || !activeItem) return;
    if (isTyping) {
      setIsTyping(false);
    } else {
      startTyping();
    }
  }

  function handleInputChange(value: string) {
    if (completed || chapterFinished || !activeItem) return;
    const limitedValue = value.slice(0, activeItem.answerEn.length);
    if (startedAt === null) setStartedAt(Date.now());
    if (sessionStartedAt === null) setSessionStartedAt(Date.now());

    const previousStates = buildLetterStates(input, activeItem.answerEn, ignoreCase);
    const nextStates = buildLetterStates(limitedValue, activeItem.answerEn, ignoreCase);
    const newWrong = nextStates.filter((state, stateIndex) => {
      return state === "wrong" && previousStates[stateIndex] !== "wrong";
    }).length;

    setInput(limitedValue);
    window.setTimeout(() => moveCaptureCaretToEnd(), 0);
    if (newWrong > 0) {
      setWrongCount((count) => count + newWrong);
      setMistakeStats((current) => {
        const next = { ...current };
        nextStates.forEach((state, stateIndex) => {
          if (state !== "wrong" || previousStates[stateIndex] === "wrong") return;
          const inputChar = limitedValue[stateIndex] ?? "";
          const targetChar = activeItem.answerEn[stateIndex] ?? "";
          const kind = classifyMistake(inputChar, targetChar);
          next[kind] += 1;
        });
        return next;
      });
      setShakeKey((key) => key + 1);
    }
  }

  function completeCurrentItem() {
    if (!activeItem || !isExact || completed) return;
    const elapsedMs = Math.max(1, Date.now() - (startedAt ?? Date.now()));
    const attemptCourseId = activeItem.sourceCourseId ?? activeCourse.id;
    const record: AttemptRecord = {
      itemId: activeItem.id,
      courseId: attemptCourseId,
      answer: activeItem.answerEn,
      wrongCount,
      mistakeStats,
      elapsedMs,
      completedAt: new Date().toISOString(),
    };
    setAttempts((existing) => [...existing, record]);
    if (user) {
      saveAttempt({
        ...record,
        courseId: attemptCourseId,
        itemIndex: globalIndex,
      })
        .then(() => {
          if (!isWrongBook) return;
          getWrongBook()
            .then((result) => setWrongBookCourse(result.course))
            .catch(() => undefined);
        })
        .catch((error) => {
          setAppError(error instanceof Error ? error.message : "学习记录保存失败");
        });
      if (isWrongBook && wrongCount > 0) {
        setWrongBookCourse((course) => ({
          ...course,
          items: course.items.map((item) =>
            item.id === activeItem.id
              ? {
                  ...item,
                  wrongCount: (item.wrongCount ?? 0) + wrongCount,
                  wrongAttempts: (item.wrongAttempts ?? 0) + 1,
                  lastWrongAt: record.completedAt,
                }
              : item,
          ),
        }));
      }
    }
    setCompleted(true);
    setShowAnswer(true);
    speak(activeItem.answerEn);

    if (index >= chapterItems.length - 1) {
      setIsTyping(false);
      setChapterFinished(true);
    }
  }

  function goNext() {
    if (!activeItem) return;
    if (index >= chapterItems.length - 1) {
      setChapterFinished(true);
      setIsTyping(false);
      return;
    }
    if (user && activeCourse.id !== WRONG_BOOK_ID) {
      saveProgress({
        courseId: activeCourse.id,
        itemId: chapterItems[index + 1]?.id ?? null,
        itemIndex: globalIndex + 1,
        completedCount: sessionAttempts.length,
      }).catch(() => undefined);
    }
    goToItem(index + 1);
  }

  function goPrevious() {
    goToItem(index - 1);
  }

  function goNextChapter() {
    if (chapterStart + CHAPTER_SIZE >= items.length) {
      restartCourse();
      return;
    }
    selectChapter(chapterStart + CHAPTER_SIZE);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) {
    if (!activeItem) return;
    moveCaptureCaretToEnd(event.currentTarget);

    if (event.key === "Shift") {
      window.setTimeout(() => moveCaptureCaretToEnd(event.currentTarget), 0);
      return;
    }

    if (event.key === "Enter" && event.ctrlKey) {
      event.preventDefault();
      revealAnswer();
      return;
    }

    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      if (!isTyping) {
        startTyping();
      } else if (completed) {
        goNext();
      } else if (isExact) {
        completeCurrentItem();
      }
    }
  }

  function revealAnswer() {
    if (!activeItem) return;
    setShowAnswer(true);
    speak(activeItem.answerEn);
    if (isTyping) focusCapture();
  }

  function readAnswer() {
    if (!activeItem) return;
    speak(activeItem.answerEn);
    if (isTyping) focusCapture();
  }

  function selectMaterial(nextCourseId: string) {
    setCourseId(nextCourseId);
    setMaterialMenuOpen(false);
    setAccountMenuOpen(false);
    if (isTyping) focusCapture();
  }

  function openWrongBook() {
    setCourseId(WRONG_BOOK_ID);
    setMaterialMenuOpen(false);
    setAccountMenuOpen(false);
    if (isTyping) focusCapture();
  }

  function toggleShuffle() {
    setChapterStart(0);
    setIndex(0);
    resetQuestion();
    setShuffle((value) => !value);
    if (isTyping) focusCapture();
  }

  function toggleIgnoreCase() {
    setIgnoreCase((value) => !value);
    if (isTyping) focusCapture();
  }

  function restartCourse() {
    setIndex(0);
    setChapterStart(0);
    setChapterFinished(false);
    setIsTyping(false);
    setSessionStartedAt(null);
    setClockTick(0);
    resetQuestion();
  }

  function repeatCurrent() {
    setChapterFinished(false);
    setIsTyping(false);
    resetQuestion();
  }

  function selectChapter(nextChapterStart: number) {
    setChapterStart(clampChapterStart(nextChapterStart, items.length));
    setIndex(0);
    setChapterFinished(false);
    setIsTyping(false);
    setSessionStartedAt(null);
    setClockTick(0);
    resetQuestion();
  }

  const statusText = completed
    ? "已完成，按 Enter 下一题"
    : isExact
      ? "匹配成功，按 Enter 确认"
      : isTyping
        ? "输入中"
        : "按任意键开始";

  return (
    <main className="app-shell">
      <header className="q-header">
        <div className="brand">
          <div className="brand-mark">
            <Languages size={22} />
          </div>
          <div>
            <h1>MeowEnglish</h1>
            <p>Translate · Type · Remember</p>
          </div>
        </div>

        <div className="material-select-wrap" ref={materialMenuRef}>
          <button
            className={`material-button ${materialMenuOpen ? "active" : ""}`}
            onClick={() => {
              setMaterialMenuOpen((open) => !open);
              setAccountMenuOpen(false);
            }}
            title={activeCourse.subtitle}
          >
            <BookOpen size={17} />
            <span className="material-button-copy">
              <small>学习资料</small>
              <strong>{isWrongBook ? "请选择资料" : activeCourse.title}</strong>
            </span>
            <ChevronDown size={17} />
          </button>

          {materialMenuOpen && (
            <div className="material-menu" role="menu" aria-label="学习资料">
              <div className="material-menu-head">
                <span>学习资料</span>
                <small>{loadedCourses.length} 套</small>
              </div>
              <div className="material-options">
                {loadedCourses.map((course) => {
                  const wordCount = course.items.filter((item) => item.kind === "word").length;
                  const sentenceCount = course.items.length - wordCount;
                  return (
                    <button
                      className={`material-option ${course.id === activeCourse.id ? "active" : ""}`}
                      key={course.id}
                      onClick={() => selectMaterial(course.id)}
                      role="menuitem"
                    >
                      <span className="material-option-icon">
                        <BookOpen size={17} />
                      </span>
                      <span className="material-option-copy">
                        <strong>{course.title}</strong>
                        <small>{course.subtitle || "自定义学习资料"}</small>
                      </span>
                      <span className="material-option-meta">
                        {wordCount}词 · {sentenceCount}句
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        <div className="header-controls">
          <button
            className={`wrong-book-button ${isWrongBook ? "active" : ""}`}
            onClick={openWrongBook}
            title="错题本"
          >
            <ListRestart size={17} />
            <span>错题本</span>
            <small>{wrongBookCourse.items.length}</small>
          </button>

          <div className="segmented-control compact" aria-label="训练模式">
            {[
              { id: "mixed", label: "混合", icon: Shuffle },
              { id: "word", label: "单词", icon: Keyboard },
              { id: "sentence", label: "句子", icon: BookOpen },
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                className={mode === id ? "active" : ""}
                onClick={() => setMode(id as PracticeMode)}
                title={label}
              >
                <Icon size={16} />
                <span>{label}</span>
              </button>
            ))}
          </div>

          <button
            className={`start-button ${isTyping ? "pause" : ""}`}
            onClick={toggleTyping}
            title={isTyping ? "暂停" : "开始"}
          >
            {isTyping ? <Pause size={17} /> : <Play size={17} />}
            <span>{isTyping ? "Pause" : "Start"}</span>
          </button>

          {user ? (
            <div className="account-menu-wrap" ref={accountMenuRef}>
              <button
                className={`account-button ${accountMenuOpen ? "active" : ""}`}
                onClick={() => setAccountMenuOpen((open) => !open)}
                onMouseDown={() => setMaterialMenuOpen(false)}
                title={user.email}
              >
                <UserCircle size={17} />
                <span>{user.name}</span>
              </button>

              {accountMenuOpen && (
                <div className="account-menu">
                  <button
                    onClick={() => {
                      setAdminOpen(true);
                      setAccountMenuOpen(false);
                    }}
                  >
                    <Database size={16} />
                    <span>进入后台</span>
                  </button>
                  <button
                    onClick={() => {
                      logout()
                        .then(() => {
                          setUser(null);
                          setAccountMenuOpen(false);
                          setWrongBookCourse(buildLocalWrongBook(loadedCourses, attempts));
                        })
                        .catch((error) => setAppError(error instanceof Error ? error.message : "退出失败"));
                    }}
                  >
                    <UserCircle size={16} />
                    <span>退出登录</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              className="account-button"
              onClick={() => {
                setMaterialMenuOpen(false);
                setAuthOpen(true);
              }}
            >
              <UserCircle size={17} />
              <span>登录</span>
            </button>
          )}
        </div>
      </header>

      {appError && (
        <button className="toast" onClick={() => setAppError("")}>
          {appError}
        </button>
      )}

      <section className="practice-shell">
        <div className="practice-toolbar">
          <button className="tool-button" onClick={goPrevious} disabled={!activeItem || index === 0} title="上一题">
            <ChevronLeft size={18} />
          </button>
          <button className="tool-button" onClick={restartCourse} disabled={!activeItem} title="重练本章">
            <RotateCcw size={18} />
          </button>
          <button className="tool-button" onClick={revealAnswer} disabled={!activeItem} title="显示答案并朗读 (Ctrl+Enter)">
            <Eye size={18} />
          </button>
          <button className="tool-button" onClick={readAnswer} disabled={!activeItem} title="朗读答案">
            <Volume2 size={18} />
          </button>
          <button
            className={`tool-button ${shuffle ? "active" : ""}`}
            onClick={toggleShuffle}
            title="打乱顺序"
          >
            <Shuffle size={18} />
          </button>
          <button
            className={`tool-button text-toggle ${ignoreCase ? "active" : ""}`}
            onClick={toggleIgnoreCase}
            title="忽略大小写"
          >
            Aa
          </button>
        </div>

        <div className="progress-block">
          <span>第 {chapterNumber} / {chapterCount} 章</span>
          <span>
            {activeItem ? index + 1 : 0} / {chapterItems.length}
          </span>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${currentProgress}%` }} />
          </div>
          <span>{currentProgress}%</span>
        </div>

        <section className="typing-stage" aria-label="练习舞台">
          {!activeItem ? (
            <div className="empty-stage">
              <ListRestart size={34} />
              <h2>{emptyStageTitle}</h2>
              <p>{emptyStageText}</p>
              <button
                className="secondary-button"
                onClick={() => {
                  setMaterialMenuOpen(true);
                  setIsTyping(false);
                }}
              >
                选择学习资料
              </button>
            </div>
          ) : (
            <>
              {!isTyping && !chapterFinished && (
                <button className="stage-overlay" onClick={() => startTyping()}>
                  <span>{input ? "按任意键继续" : "按任意键开始"}</span>
                  <small>Enter 开始 · Ctrl+Enter 显示答案 · 完成后 Enter 下一题</small>
                </button>
              )}

              <div className="stage-copy">
                <div className="prompt-meta">
                  <span className={`kind-pill ${activeItem.kind}`}>
                    {activeItem.kind === "word" ? "单词" : "句子"}
                  </span>
                  {currentItemSource && <span className="tag source-tag">{currentItemSource}</span>}
                  {activeItem.tags
                    .filter((tag) => tag !== currentItemSource)
                    .map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                </div>

                <p className="translation-text">{activeItem.promptZh}</p>
                {activeItem.phonetic && <p className="phonetic">{activeItem.phonetic}</p>}
              </div>

              <div
                className={`letter-board ${shakeKey ? "shake" : ""}`}
                key={`${activeItem.id}-${shakeKey}`}
                aria-label="逐字符答案预览"
              >
                {activeItem.answerEn.split("").map((letter, letterIndex) => {
                  const typed = input[letterIndex];
                  const state = letterStates[letterIndex];
                  const placeholder = letter === " " ? "\u00A0" : "_";
                  return (
                    <span className={`letter ${state}`} key={`${activeItem.id}-${letterIndex}`}>
                      {typed ?? (showAnswer || completed ? letter : placeholder)}
                    </span>
                  );
                })}
              </div>

              <div className="status-row">
                <span className={`typing-status ${completed ? "done" : isExact ? "ready" : ""}`}>
                  {completed ? (
                    <CheckCircle2 size={18} />
                  ) : isExact ? (
                    <Sparkles size={18} />
                  ) : (
                    <Target size={18} />
                  )}
                  {statusText}
                </span>

                <button
                  className="next-button"
                  onClick={completed ? goNext : completeCurrentItem}
                  disabled={!isExact && !completed}
                >
                  {completed ? "Next" : "Check"}
                  <ChevronRight size={18} />
                </button>
              </div>

              {isSentence ? (
                <textarea
                  ref={(element) => {
                    captureRef.current = element;
                  }}
                  className="capture-input"
                  value={input}
                  onChange={(event) => handleInputChange(event.target.value)}
                  onKeyDown={handleKeyDown}
                  onBlur={() => {
                    if (isTyping && !completed && !chapterFinished) focusCapture(0);
                  }}
                  spellCheck={false}
                  aria-label="输入完整英文句子"
                />
              ) : (
                <input
                  ref={(element) => {
                    captureRef.current = element;
                  }}
                  className="capture-input"
                  value={input}
                  onChange={(event) => handleInputChange(event.target.value)}
                  onKeyDown={handleKeyDown}
                  onBlur={() => {
                    if (isTyping && !completed && !chapterFinished) focusCapture(0);
                  }}
                  spellCheck={false}
                  aria-label="输入英文单词"
                />
              )}
            </>
          )}
        </section>

        <section className="speed-card" aria-label="速度统计">
          <div className="speed-item">
            <Clock3 size={18} />
            <strong>{formatClock(elapsedSessionMs)}</strong>
            <span>时间</span>
          </div>
          <div className="speed-item">
            <Keyboard size={18} />
            <strong>
              {sessionAttempts.reduce((sum, record) => sum + record.answer.length, 0) + input.length}
            </strong>
            <span>输入数</span>
          </div>
          <div className="speed-item">
            <Zap size={18} />
            <strong>{getWordsPerMinute(sessionAttempts, elapsedSessionMs, input)}</strong>
            <span>WPM</span>
          </div>
          <div className="speed-item">
            <Target size={18} />
            <strong>{liveAccuracy}%</strong>
            <span>正确率</span>
          </div>
          <div className="speed-item">
            <Settings2 size={18} />
            <strong>{wrongCount}</strong>
            <span>当前错字</span>
          </div>
        </section>

        {items.length > CHAPTER_SIZE && (
          <section className="chapter-strip" aria-label="章节选择">
            {Array.from({ length: chapterCount }, (_, chapterIndex) => {
              const start = chapterIndex * CHAPTER_SIZE;
              const end = Math.min(start + CHAPTER_SIZE, items.length);
              return (
                <button
                  className={start === chapterStart ? "active" : ""}
                  key={start}
                  onClick={() => selectChapter(start)}
                  title={`第 ${chapterIndex + 1} 章：${start + 1}-${end}`}
                >
                  <span>第 {chapterIndex + 1} 章</span>
                  <small>{start + 1}-{end}</small>
                </button>
              );
            })}
          </section>
        )}

        <section className="word-dock" aria-label="本章题目">
          {chapterItems.map((item, itemIndex) => {
            const itemAttempts = attempts.filter((record) => record.itemId === item.id);
            const hasMistake = itemAttempts.some((record) => record.wrongCount > 0);
            return (
              <button
                key={item.id}
                className={`${itemIndex === index ? "active" : ""} ${hasMistake ? "mistake" : ""}`}
                onClick={() => goToItem(itemIndex)}
                title={`${item.kind === "word" ? "单词" : "句子"} ${chapterStart + itemIndex + 1}`}
              >
                <span>
                  {item.kind === "word" ? "W" : "S"}-{String(chapterStart + itemIndex + 1).padStart(3, "0")}
                </span>
                {itemAttempts.length > 0 && <small>{hasMistake ? "!" : "✓"}</small>}
              </button>
            );
          })}
        </section>
      </section>

      {chapterFinished && (
        <section className="result-overlay" aria-label="章节结果">
          <div className="result-panel">
            <div className="result-title">
              <Trophy size={26} />
              <div>
                <p>{activeCourse.title}</p>
                <h2>本章完成</h2>
              </div>
            </div>

            <div className="result-metrics">
              <div className="result-ring">
                <strong>{getAccuracy(sessionAttempts)}%</strong>
                <span>正确率</span>
              </div>
              <div className="result-ring">
                <strong>{formatClock(elapsedSessionMs)}</strong>
                <span>耗时</span>
              </div>
              <div className="result-ring">
                <strong>{getWordsPerMinute(sessionAttempts, elapsedSessionMs)}</strong>
                <span>WPM</span>
              </div>
            </div>

            <div className="result-words">
              <div className="history-title">
                <ListRestart size={16} />
                <span>最近错题</span>
              </div>
              {wrongItems.length === 0 ? (
                <p className="empty">这一轮没有错题，手感不错。</p>
              ) : (
                <ul>
                  {wrongItems.map((record) => {
                    const item =
                      activeCourse.items.find((entry) => entry.id === record.itemId) ?? activeItem;
                    return (
                      <li key={`${record.itemId}-${record.completedAt}`}>
                        <span>{item.answerEn}</span>
                        <small>
                          {record.wrongCount} 错 · {formatTime(record.elapsedMs)}
                        </small>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            <div className="result-actions">
              <button className="secondary-button" onClick={repeatCurrent}>
                复练当前题
              </button>
              <button className="primary-button" onClick={goNextChapter}>
                {chapterStart + CHAPTER_SIZE >= items.length ? "再练一遍" : "下一章"}
              </button>
            </div>
          </div>
        </section>
      )}

      {authOpen && (
        <AuthModal
          onClose={() => setAuthOpen(false)}
          onAuthed={(nextUser) => {
            setUser(nextUser);
            setAuthOpen(false);
            refreshBootstrap();
          }}
        />
      )}

      {adminOpen && user && (
        <AdminPanel
          user={user}
          onClose={() => setAdminOpen(false)}
          onImported={(course) => {
            setLoadedCourses((existing) => [...existing, course]);
            setCourseId(course.id);
            setMaterialMenuOpen(false);
          }}
          onCoursesChanged={refreshBootstrap}
        />
      )}
    </main>
  );
}

function AuthModal({
  onClose,
  onAuthed,
}: {
  onClose: () => void;
  onAuthed: (user: User) => void;
}) {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      const result =
        mode === "login"
          ? await login({ email, password })
          : await register({ email, name: name || email.split("@")[0], password });
      onAuthed(result.user);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "操作失败");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="result-overlay">
      <form className="auth-panel" onSubmit={submit}>
        <div className="result-title">
          <UserCircle size={26} />
          <div>
            <p>{mode === "login" ? "Welcome back" : "Create account"}</p>
            <h2>{mode === "login" ? "登录继续学习" : "注册账号"}</h2>
          </div>
        </div>

        <label>
          <span>邮箱</span>
          <input value={email} onChange={(event) => setEmail(event.target.value)} required />
        </label>
        {mode === "register" && (
          <label>
            <span>昵称</span>
            <input value={name} onChange={(event) => setName(event.target.value)} />
          </label>
        )}
        <label>
          <span>密码</span>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            minLength={mode === "register" ? 8 : 1}
            required
          />
        </label>

        {error && <p className="form-error">{error}</p>}

        <div className="result-actions">
          <button type="button" className="secondary-button" onClick={onClose}>
            取消
          </button>
          <button
            type="button"
            className="secondary-button"
            onClick={() => setMode(mode === "login" ? "register" : "login")}
          >
            {mode === "login" ? "去注册" : "去登录"}
          </button>
          <button className="primary-button" disabled={loading}>
            {loading ? "处理中" : mode === "login" ? "登录" : "注册"}
          </button>
        </div>
      </form>
    </section>
  );
}

const RESOURCE_TEMPLATE = `{
  "title": "我的单词书",
  "subtitle": "后台导入的自定义资源",
  "isPublic": false,
  "items": [
    {
      "kind": "word",
      "promptZh": "示例；例子",
      "answerEn": "example",
      "phonetic": "/ig'zampel/",
      "tags": ["custom"]
    },
    {
      "kind": "sentence",
      "promptZh": "这是一个导入的句子。",
      "answerEn": "This is an imported sentence.",
      "tags": ["custom", "sentence"]
    }
  ]
}`;

function parseCourseJson(raw: string) {
  const parsed = JSON.parse(raw) as {
    title: string;
    subtitle?: string;
    filename?: string;
    isPublic?: boolean;
    items: Array<{
      kind?: "word" | "sentence";
      promptZh: string;
      answerEn: string;
      phonetic?: string;
      note?: string;
      tags?: string[];
    }>;
  };

  return {
    title: parsed.title,
    subtitle: parsed.subtitle ?? "",
    filename: parsed.filename ?? "manual-import.json",
    isPublic: parsed.isPublic ?? false,
    items: parsed.items.map((item) => ({
      kind: item.kind ?? "word",
      promptZh: item.promptZh,
      answerEn: item.answerEn,
      phonetic: item.phonetic,
      note: item.note,
      tags: item.tags ?? [],
    })),
  };
}

function stringifyCourseResource(course: Course) {
  return JSON.stringify(
    {
      title: course.title,
      subtitle: course.subtitle,
      isPublic: course.isPublic ?? false,
      items: course.items.map((item) => ({
        kind: item.kind,
        promptZh: item.promptZh,
        answerEn: item.answerEn,
        phonetic: item.phonetic,
        note: item.note,
        tags: item.tags,
      })),
    },
    null,
    2,
  );
}

function AdminPanel({
  user,
  onClose,
  onImported,
  onCoursesChanged,
}: {
  user: User;
  onClose: () => void;
  onImported: (course: Course) => void;
  onCoursesChanged: () => void;
}) {
  const [tab, setTab] = useState<"overview" | "resources" | "store" | "settings">(
    user.role === "admin" ? "overview" : "resources",
  );
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [raw, setRaw] = useState(RESOURCE_TEMPLATE);
  const [imports, setImports] = useState<
    Array<{ id: string; filename: string; item_count: number; course_title: string; created_at: string }>
  >([]);
  const [resources, setResources] = useState<Course[]>([]);
  const [storeResources, setStoreResources] = useState<Course[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadPanelData();
  }, [user.role]);

  async function loadPanelData() {
    const tasks: Array<Promise<unknown>> = [
      getResources().then((result) => setResources(result.resources)),
      getStoreResources().then((result) => setStoreResources(result.resources)),
    ];
    if (user.role === "admin") {
      tasks.push(getImports().then((result) => setImports(result.imports)));
      tasks.push(getAdminStats().then((result) => setStats(result.stats)));
    }
    await Promise.all(tasks).catch(() => undefined);
  }

  async function submit() {
    setError("");
    setLoading(true);
    try {
      const parsed = parseCourseJson(raw);
      const result = editingId
        ? await updateResource(editingId, parsed)
        : await importCourse(parsed);
      await loadPanelData();
      if (!editingId) {
        onImported(result.resource);
      } else {
        onCoursesChanged();
      }
      setEditingId(null);
      setRaw(RESOURCE_TEMPLATE);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "操作失败，请检查 JSON 格式");
    } finally {
      setLoading(false);
    }
  }

  async function removeResource(courseId: string) {
    setError("");
    try {
      await deleteResource(courseId);
      await loadPanelData();
      onCoursesChanged();
    } catch (removeError) {
      setError(removeError instanceof Error ? removeError.message : "删除失败");
    }
  }

  async function downloadStoreResource(courseId: string) {
    setError("");
    try {
      const result = await downloadResource(courseId);
      await loadPanelData();
      onImported(result.resource);
      onCoursesChanged();
    } catch (downloadError) {
      setError(downloadError instanceof Error ? downloadError.message : "下载失败");
    }
  }

  function beginEdit(course: Course) {
    setEditingId(course.id);
    setRaw(stringifyCourseResource(course));
    setTab("resources");
  }

  return (
    <section className="result-overlay">
      <div className="admin-panel">
        <div className="admin-topbar">
          <div>
            <p>{user.role === "admin" ? "Admin Console" : "Learning Console"}</p>
            <h2>学习后台</h2>
          </div>
          <button className="secondary-button" onClick={onClose}>
            关闭
          </button>
        </div>

        <div className={`admin-tabs ${user.role === "admin" ? "" : "student-tabs"}`}>
          {user.role === "admin" && (
            <button className={tab === "overview" ? "active" : ""} onClick={() => setTab("overview")}>
              学习统计
            </button>
          )}
          <button className={tab === "resources" ? "active" : ""} onClick={() => setTab("resources")}>
            我的资源
          </button>
          <button className={tab === "store" ? "active" : ""} onClick={() => setTab("store")}>
            资源商店
          </button>
          <button className={tab === "settings" ? "active" : ""} onClick={() => setTab("settings")}>
            设置
          </button>
        </div>

        {error && <p className="form-error">{error}</p>}

        {tab === "overview" && user.role === "admin" && (
          <AdminOverview stats={stats} imports={imports} />
        )}

        {tab === "resources" && (
          <section className="admin-import-grid">
            <div className="admin-section">
              <div className="admin-section-head">
                <Upload size={18} />
                <div>
                  <h3>{editingId ? "编辑学习资料" : "添加学习资料"}</h3>
                  <p>支持 JSON 单词书/句子书，可以设为公开进入资源商店。</p>
                </div>
              </div>
              <textarea value={raw} onChange={(event) => setRaw(event.target.value)} spellCheck={false} />
              <div className="result-actions">
                {editingId && (
                  <button
                    className="secondary-button"
                    onClick={() => {
                      setEditingId(null);
                      setRaw(RESOURCE_TEMPLATE);
                    }}
                  >
                    取消编辑
                  </button>
                )}
                <button className="primary-button" onClick={submit} disabled={loading}>
                  {loading ? "处理中" : editingId ? "保存修改" : "添加资源"}
                </button>
              </div>
            </div>

            <div className="admin-section">
              <div className="admin-section-head">
                <Database size={18} />
                <div>
                  <h3>历史上传</h3>
                  <p>你上传或下载的资源，可以编辑、删除、设为公开。</p>
                </div>
              </div>
              <div className="resource-list">
                {resources.length === 0 ? (
                  <p className="empty">还没有资源。</p>
                ) : (
                  resources.map((course) => (
                    <div className="resource-row" key={course.id}>
                      <div>
                        <strong>{course.title}</strong>
                        <small>
                          {course.items.length} 条 · {course.isPublic ? "公开" : "私有"} · 下载 {course.downloadCount ?? 0}
                        </small>
                      </div>
                      <div className="resource-actions">
                        <button className="secondary-button compact" onClick={() => beginEdit(course)}>
                          编辑
                        </button>
                        <button className="secondary-button compact danger" onClick={() => removeResource(course.id)}>
                          <Trash2 size={14} />
                          删除
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </section>
        )}

        {tab === "store" && (
          <section className="admin-section">
            <div className="admin-section-head">
              <Download size={18} />
              <div>
                <h3>资源商店</h3>
                <p>其他用户公开的资料会出现在这里，下载后会加入你的学习资料。</p>
              </div>
            </div>
            <div className="store-grid">
              {storeResources.length === 0 ? (
                <p className="empty">暂无公开资源。</p>
              ) : (
                storeResources.map((course) => (
                  <div className="store-card" key={course.id}>
                    <div>
                      <strong>{course.title}</strong>
                      <p>{course.subtitle || "公开学习资源"}</p>
                    </div>
                    <small>
                      {course.items.length} 条 · {course.ownerName ?? "用户"} · 下载 {course.downloadCount ?? 0}
                    </small>
                    <button className="primary-button" onClick={() => downloadStoreResource(course.id)}>
                      <Download size={16} />
                      下载
                    </button>
                  </div>
                ))
              )}
            </div>
          </section>
        )}

        {tab === "settings" && (
          <section className="admin-section">
            <div className="admin-section-head">
              <Settings2 size={18} />
              <div>
                <h3>后台设置</h3>
                <p>资源默认私有；在 JSON 里把 isPublic 设为 true 后才会进入商店。</p>
              </div>
            </div>
            <div className="settings-grid">
              <div>
                <span>当前账号</span>
                <strong>{user.name}</strong>
                <small>{user.email}</small>
              </div>
              <div>
                <span>角色</span>
                <strong>{user.role === "admin" ? "管理员" : "学习者"}</strong>
                <small>管理员可查看全站统计。</small>
              </div>
              <div>
                <span>资源公开规则</span>
                <strong>手动公开</strong>
                <small>公开后其他用户可在资源商店下载副本。</small>
              </div>
            </div>
          </section>
        )}
      </div>
    </section>
  );
}

function AdminOverview({
  stats,
  imports,
}: {
  stats: AdminStats | null;
  imports: Array<{ id: string; filename: string; item_count: number; course_title: string; created_at: string }>;
}) {
  if (!stats) {
    return <div className="admin-loading">正在加载统计数据...</div>;
  }

  const maxDaily = Math.max(1, ...stats.dailyAttempts.map((item) => item.attempts));
  const maxCourseAttempts = Math.max(1, ...stats.courseActivity.map((item) => item.attempts));
  const maxHeatmapAttempts = Math.max(1, ...stats.heatmap.map((item) => item.attempts));
  const totalKinds = Math.max(1, stats.itemKinds.reduce((sum, item) => sum + item.count, 0));
  const wordKind = stats.itemKinds.find((item) => item.kind === "word")?.count ?? 0;
  const wordPercent = Math.round((wordKind / totalKinds) * 100);
  const totalMistakes = Math.max(
    1,
    stats.mistakeBreakdown.spelling +
      stats.mistakeBreakdown.casing +
      stats.mistakeBreakdown.spacing,
  );

  return (
    <section className="admin-dashboard">
      <div className="admin-kpis">
        <MetricCard label="用户" value={stats.totals.users} />
        <MetricCard label="课程" value={stats.totals.courses} />
        <MetricCard label="题目" value={stats.totals.items} />
        <MetricCard label="练习" value={stats.totals.attempts} />
        <MetricCard label="平均正确率" value={`${stats.totals.avgAccuracy}%`} />
      </div>

      <div className="diagnosis-grid">
        <div className="admin-section">
          <div className="admin-section-head">
            <Clock3 size={18} />
            <div>
              <h3>今日应复习</h3>
              <p>按遗忘风险、错题频率和间隔排序。</p>
            </div>
          </div>
          <div className="review-list">
            {stats.reviewQueue.length === 0 ? (
              <p className="empty">暂无复习压力，继续保持。</p>
            ) : (
              stats.reviewQueue.slice(0, 6).map((item) => (
                <div className="review-row" key={item.itemId}>
                  <div>
                    <strong>{item.answerEn}</strong>
                    <span>{item.promptZh}</span>
                  </div>
                  <small>
                    风险 {item.riskScore} · {item.daysSinceReview} 天前 · {item.courseTitle}
                  </small>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="admin-section">
          <div className="admin-section-head">
            <Trophy size={18} />
            <div>
              <h3>常忘词 Top</h3>
              <p>反复出错的单词和句子。</p>
            </div>
          </div>
          <div className="review-list">
            {stats.forgetfulItems.length === 0 ? (
              <p className="empty">还没有高频错题。</p>
            ) : (
              stats.forgetfulItems.slice(0, 6).map((item) => (
                <div className="review-row" key={item.itemId}>
                  <div>
                    <strong>{item.answerEn}</strong>
                    <span>{item.kind === "word" ? "单词" : "句子"} · {item.courseTitle}</span>
                  </div>
                  <small>
                    {item.wrongAttempts} 次出错 · {item.wrongCount} 错 · 正确率 {item.accuracy}%
                  </small>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <div className="admin-chart-grid">
        <div className="admin-section wide">
          <div className="admin-section-head">
            <Target size={18} />
            <div>
              <h3>课程掌握率</h3>
              <p>覆盖进度和正确率合成掌握情况。</p>
            </div>
          </div>
          <div className="mastery-list">
            {stats.masteryByCourse.map((course) => {
              const coverage = course.itemCount > 0
                ? Math.round((course.practicedItems / course.itemCount) * 100)
                : 0;
              const mastery = Math.round((coverage * 0.45) + (course.accuracy * 0.55));
              return (
                <div className="mastery-row" key={course.courseId}>
                  <div>
                    <span>{course.title}</span>
                    <small>
                      覆盖 {coverage}% · 正确率 {course.accuracy}% · {course.attempts} 次练习
                    </small>
                  </div>
                  <strong>{mastery}%</strong>
                  <div className="hbar-track">
                    <div style={{ width: `${Math.max(4, mastery)}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="admin-section">
          <div className="admin-section-head">
            <Settings2 size={18} />
            <div>
              <h3>错因分类</h3>
              <p>大小写、标点空格和拼写问题。</p>
            </div>
          </div>
          <div className="mistake-bars">
            {[
              { label: "拼写/键位", value: stats.mistakeBreakdown.spelling },
              { label: "大小写", value: stats.mistakeBreakdown.casing },
              { label: "空格标点", value: stats.mistakeBreakdown.spacing },
            ].map((item) => (
              <div className="mistake-row" key={item.label}>
                <span>{item.label}</span>
                <strong>{Math.round((item.value / totalMistakes) * 100)}%</strong>
                <div className="hbar-track">
                  <div style={{ width: `${Math.max(4, (item.value / totalMistakes) * 100)}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="admin-section wide">
          <div className="admin-section-head">
            <Clock3 size={18} />
            <div>
              <h3>每日学习热力图</h3>
              <p>最近 42 天练习密度。</p>
            </div>
          </div>
          <div className="heatmap-grid">
            {stats.heatmap.map((item) => {
              const level = item.attempts === 0
                ? 0
                : Math.min(4, Math.ceil((item.attempts / maxHeatmapAttempts) * 4));
              return (
                <span
                  className={`heatmap-cell level-${level}`}
                  key={item.date}
                  title={`${item.date} · ${item.attempts} 次 · ${item.avgAccuracy}%`}
                />
              );
            })}
          </div>
        </div>

        <div className="admin-section wide">
          <div className="admin-section-head">
            <Zap size={18} />
            <div>
              <h3>近 14 天练习趋势</h3>
              <p>每日完成题目数量与正确率。</p>
            </div>
          </div>
          <div className="bar-chart">
            {stats.dailyAttempts.length === 0 ? (
              <p className="empty">暂无练习记录。</p>
            ) : (
              stats.dailyAttempts.map((item) => (
                <div className="bar-column" key={item.date}>
                  <span className="bar-value">{item.attempts}</span>
                  <div
                    className="bar-fill"
                    style={{ height: `${Math.max(8, (item.attempts / maxDaily) * 100)}%` }}
                  />
                  <small>{item.date.slice(5)}</small>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="admin-section">
          <div className="admin-section-head">
            <Target size={18} />
            <div>
              <h3>题型分布</h3>
              <p>单词与句子资源占比。</p>
            </div>
          </div>
          <div className="donut-wrap">
            <div className="donut" style={{ "--word-percent": `${wordPercent}%` } as React.CSSProperties}>
              <strong>{wordPercent}%</strong>
              <span>单词</span>
            </div>
            <div className="donut-legend">
              {stats.itemKinds.map((item) => (
                <span key={item.kind}>{item.kind === "word" ? "单词" : "句子"} · {item.count}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="admin-section">
          <div className="admin-section-head">
            <BookOpen size={18} />
            <div>
              <h3>课程活跃度</h3>
              <p>每套课程的练习次数。</p>
            </div>
          </div>
          <div className="hbar-list">
            {stats.courseActivity.map((course) => (
              <div className="hbar-row" key={course.courseId}>
                <div>
                  <span>{course.title}</span>
                  <small>{course.itemCount} 题 · {course.attempts} 次</small>
                </div>
                <div className="hbar-track">
                  <div style={{ width: `${Math.max(4, (course.attempts / maxCourseAttempts) * 100)}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="admin-section wide">
          <div className="admin-section-head">
            <ListRestart size={18} />
            <div>
              <h3>最近练习</h3>
              <p>用户学习动态。</p>
            </div>
          </div>
          <div className="admin-table">
            {stats.recentAttempts.length === 0 ? (
              <p className="empty">暂无练习记录。</p>
            ) : (
              stats.recentAttempts.map((attempt) => (
                <div className="admin-table-row" key={attempt.id}>
                  <span>{attempt.user_name}</span>
                  <span>{attempt.course_title}</span>
                  <strong>{attempt.answer}</strong>
                  <small>{attempt.wrong_count} 错 · {formatTime(attempt.elapsed_ms)}</small>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="admin-section">
          <div className="admin-section-head">
            <Database size={18} />
            <div>
              <h3>资源概览</h3>
              <p>导入课程与最近资源。</p>
            </div>
          </div>
          <div className="import-history stacked">
            <span>导入课程 · {stats.totals.importedCourses}</span>
            {imports.slice(0, 4).map((item) => (
              <span key={item.id}>{item.course_title} · {item.item_count} 条</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="metric-card">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
