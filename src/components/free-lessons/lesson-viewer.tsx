"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useI18n } from "@/components/i18n-provider";
import { fl } from "@/lib/free-lessons/i18n";
import { FL_CATEGORY_INFO, FL_LEVEL_INFO, levelSlug, type FlCategory, type FlLevel } from "@/lib/free-lessons/constants";
import type { PublicExercise } from "@/lib/free-lessons/grade";
import type { Section } from "@/lib/free-lessons/schema";
import { cn } from "@/lib/utils";
import { LessonContent } from "./lesson-content";
import { ExerciseCard, type CheckResponse, type InitialResult } from "./exercise-card";
import { CourseCallout, type CourseCalloutData } from "./course-callout";

type Prog = { status: string; scorePercent: number; answered: number; total: number; blocker: "read" | "answer" | "score" | null };
type NavLesson = { slug: string; title: string } | null;

export type LessonViewerProps = {
  lesson: {
    slug: string; title: string; level: FlLevel; category: FlCategory; order: number; estimatedMinutes: number;
    objective: string; allowRetry: boolean; minScorePercent: number; sections: Section[];
  };
  exercises: PublicExercise[];
  initialResults: Record<string, InitialResult>;
  initialProgress: Prog;
  contentRead: boolean;
  prev: NavLesson;
  next: NavLesson;
  upNext: { slug: string; title: string; reason: { en: string; ar: string } } | null;
  course: CourseCalloutData | null;
  preview: boolean;
};

export function LessonViewer(props: LessonViewerProps) {
  const { lesson, exercises, initialResults, prev, next, upNext, course, preview } = props;
  const { locale } = useI18n();
  const t = fl(locale);
  const [tab, setTab] = useState<"lesson" | "practice">("lesson");
  const [prog, setProg] = useState<Prog>(props.initialProgress);
  const [contentRead, setContentRead] = useState(props.contentRead);
  const [celebrate, setCelebrate] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const [atEnd, setAtEnd] = useState(false);

  const completed = prog.status === "COMPLETED";
  const level = FL_LEVEL_INFO[lesson.level];
  const cat = FL_CATEGORY_INFO[lesson.category];

  const markRead = useCallback(async () => {
    if (contentRead || preview) {
      setContentRead(true);
      return;
    }
    setContentRead(true);
    try {
      const res = await fetch(`/api/free-lessons/${lesson.slug}/progress`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ event: "content_read" }),
      });
      if (res.ok) {
        const data = await res.json();
        if (data.progress) setProg(data.progress);
        if (data.justCompleted) setCelebrate(true);
      }
    } catch {
      /* the next answer will retry via the server's own state */
    }
  }, [contentRead, lesson.slug, preview]);

  // Reaching the end of the lesson text (and staying a few seconds) counts as having read it.
  useEffect(() => {
    const el = endRef.current;
    if (!el || contentRead || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([e]) => setAtEnd(e.isIntersecting), { threshold: 1 });
    io.observe(el);
    return () => io.disconnect();
  }, [contentRead]);
  useEffect(() => {
    if (!atEnd || tab !== "lesson" || contentRead) return;
    const id = setTimeout(markRead, 4000);
    return () => clearTimeout(id);
  }, [atEnd, tab, contentRead, markRead]);

  function go(next: "lesson" | "practice") {
    setTab(next);
    requestAnimationFrame(() => topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }

  function onChecked(_id: string, res: CheckResponse) {
    if (res.progress) setProg(res.progress);
    if (res.justCompleted) setCelebrate(true);
  }

  function openPractice() {
    markRead();
    go("practice");
  }

  const blockerText =
    prog.blocker === "read" ? t.readFirst : prog.blocker === "answer" ? t.answerAll : prog.blocker === "score" ? t.scoreMore : null;
  const pct = prog.total === 0 ? 0 : Math.round((prog.answered / prog.total) * 100);

  return (
    <div>
      {/* ------------------------------------------------ header */}
      <header className="card p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3 text-sm font-semibold">
          {prev ? (
            <Link href={`/free-lessons/lesson/${prev.slug}`} className="inline-flex items-center gap-1.5 text-brand-700 hover:underline dark:text-brand-300">
              <span aria-hidden className="rtl:rotate-180">←</span>
              <span className="hidden sm:inline">{t.prevLesson}</span>
              <span className="sm:hidden">{t.prevShort}</span>
            </Link>
          ) : <span />}
          <span className="text-xs font-bold tracking-[0.2em] text-ink-500 dark:text-ink-400">
            {t.lesson} {String(lesson.order).padStart(2, "0")}
          </span>
          {next ? (
            <Link href={`/free-lessons/lesson/${next.slug}`} className="inline-flex items-center gap-1.5 text-brand-700 hover:underline dark:text-brand-300">
              <span className="hidden sm:inline">{t.nextLesson}</span>
              <span className="sm:hidden">{t.nextShort}</span>
              <span aria-hidden className="rtl:rotate-180">→</span>
            </Link>
          ) : <span />}
        </div>

        <div className="mt-4 text-center">
          <span className={cn("badge", cat.accent)}>
            <span aria-hidden className="me-1">{cat.icon}</span>{cat.name[locale]} · {String(lesson.order).padStart(2, "0")}
          </span>
          <h1 dir="ltr" lang="en" className="mt-2 text-2xl font-extrabold text-ink-900 dark:text-white sm:text-3xl">{lesson.title}</h1>
          <p className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-ink-500 dark:text-ink-400">
            <span>{level.name[locale]} ({level.cefr})</span>
            <span>{t.estimatedTime}: {lesson.estimatedMinutes} {t.minutes}</span>
            <span className={cn("font-semibold", completed ? "text-emerald-700 dark:text-emerald-400" : "")}>
              {completed ? `✓ ${t.completed}` : prog.status === "IN_PROGRESS" ? `◐ ${t.inProgress}` : `○ ${t.notCompleted}`}
            </span>
          </p>
        </div>
      </header>

      {preview && (
        <p className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-200">{t.previewBanner}</p>
      )}

      {/* ------------------------------------------------ tabs */}
      <div ref={topRef} className="scroll-mt-20" />
      <div
        role="tablist"
        aria-label="Lesson sections"
        className="mt-6 grid grid-cols-2 gap-1 rounded-xl bg-ink-100 p-1 dark:bg-ink-800 lg:mx-auto lg:max-w-md"
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft" || e.key === "ArrowRight") go(tab === "lesson" ? "practice" : "lesson");
        }}
      >
        {(["lesson", "practice"] as const).map((id) => (
          <button
            key={id} role="tab" type="button" id={`tab-${id}`} aria-selected={tab === id} aria-controls={`panel-${id}`}
            tabIndex={tab === id ? 0 : -1}
            onClick={() => go(id)}
            className={cn(
              "rounded-lg px-4 py-2 text-sm font-bold tracking-wide transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
              tab === id ? "bg-white text-brand-700 shadow-card dark:bg-ink-900 dark:text-brand-300" : "text-ink-500 hover:text-ink-800 dark:text-ink-400 dark:hover:text-white"
            )}
          >
            {id === "lesson" ? t.lesson : t.practice}
            {id === "practice" && (
              <span className="ms-2 text-xs font-medium opacity-70">{prog.answered}/{prog.total}</span>
            )}
          </button>
        ))}
      </div>

      {/* ------------------------------------------------ panels */}
      <div
        className={cn(
          "mt-6 grid grid-cols-1 gap-4 lg:transition-[grid-template-columns] lg:duration-500 lg:ease-out",
          tab === "lesson" ? "lg:grid-cols-[3fr_1fr]" : "lg:grid-cols-[1fr_3fr]"
        )}
      >
        {/* LESSON */}
        <div className={cn("relative min-w-0", tab !== "lesson" && "hidden lg:block")}>
          <section
            id="panel-lesson" role="tabpanel" aria-labelledby="tab-lesson"
            {...(tab !== "lesson" ? ({ inert: "" } as Record<string, string>) : {})}
            className={cn("card min-w-0 p-5 transition-opacity duration-500 sm:p-6", tab !== "lesson" && "max-h-[70vh] overflow-hidden opacity-60")}
          >
            <div dir="ltr" lang="en" className="mb-6 rounded-xl bg-brand-50 p-4 text-left dark:bg-brand-950">
              <p className="text-xs font-bold uppercase tracking-wide text-brand-700 dark:text-brand-300">{t.objective}</p>
              <p className="mt-1 text-sm text-brand-900 dark:text-brand-100">{lesson.objective}</p>
            </div>
            <LessonContent sections={lesson.sections} locale={locale} />
            <div ref={endRef} className="h-px" />
            <div className="mt-8 border-t border-ink-100 pt-5 dark:border-ink-800">
              <button type="button" onClick={openPractice} className="btn-primary w-full sm:w-auto">
                {t.readDone} <span aria-hidden className="rtl:rotate-180">→</span>
              </button>
            </div>
          </section>
          {tab !== "lesson" && (
            <button type="button" onClick={() => go("lesson")} className="absolute inset-0 z-10 hidden items-end justify-center rounded-xl bg-gradient-to-t from-white via-white/40 to-transparent pb-6 text-sm font-bold text-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:from-ink-950 dark:via-ink-950/40 dark:text-brand-300 lg:flex">
              <span className="rounded-full bg-white px-4 py-2 shadow-soft dark:bg-ink-900">← {t.switchToLesson}</span>
            </button>
          )}
        </div>

        {/* PRACTICE */}
        <div className={cn("relative min-w-0", tab !== "practice" && "hidden lg:block")}>
          <section
            id="panel-practice" role="tabpanel" aria-labelledby="tab-practice"
            {...(tab !== "practice" ? ({ inert: "" } as Record<string, string>) : {})}
            className={cn("card min-w-0 p-5 transition-opacity duration-500 sm:p-6", tab !== "practice" && "max-h-[70vh] overflow-hidden opacity-60")}
          >
            <div className="mb-5">
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold text-ink-700 dark:text-ink-200">{t.answered}: {prog.answered}/{prog.total}</span>
                <span className="font-semibold text-ink-700 dark:text-ink-200">{t.score}: {prog.scorePercent}%</span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-ink-100 dark:bg-ink-800" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label={t.answered}>
                <div className="h-full rounded-full bg-brand-500 transition-all duration-500" style={{ width: `${pct}%` }} />
              </div>
              <p className="mt-2 text-xs text-ink-400">{t.required} {lesson.minScorePercent}%.</p>
            </div>

            {!contentRead && !completed && !preview && (
              <p className="mb-4 rounded-lg bg-amber-50 p-3 text-sm text-amber-800 dark:bg-amber-950 dark:text-amber-200">
                {t.readFirst}{" "}
                <button type="button" className="font-semibold underline" onClick={() => go("lesson")}>{t.switchToLesson}</button>
              </p>
            )}

            <ol className="space-y-4">
              {exercises.map((ex, i) => (
                <ExerciseCard
                  key={ex.id} ex={ex} index={i} slug={lesson.slug} preview={preview} allowRetry={lesson.allowRetry}
                  initial={initialResults[ex.id]} onChecked={onChecked}
                />
              ))}
            </ol>
            {exercises.length === 0 && <p className="text-sm text-ink-500">{t.noneYet}</p>}

            <div aria-live="polite" className="mt-6 space-y-4">
              {completed ? (
                <div className={cn("rounded-xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-900 dark:bg-emerald-950", celebrate && "animate-fade-in")}>
                  <p className="text-lg font-bold text-emerald-800 dark:text-emerald-200">✓ {t.lessonComplete}</p>
                  <p className="mt-1 text-sm text-emerald-700 dark:text-emerald-300">{t.lessonCompleteBody} ({t.score}: {prog.scorePercent}%)</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {next && <Link href={`/free-lessons/lesson/${next.slug}`} className="btn-primary btn-sm">{t.nextLesson} →</Link>}
                    <Link href={`/free-lessons/level/${levelSlug(lesson.level)}`} className="btn-outline btn-sm">{t.backToLevel}</Link>
                  </div>
                </div>
              ) : (
                blockerText && prog.answered > 0 && <p className="text-sm text-ink-500 dark:text-ink-400">{blockerText}</p>
              )}
              {completed && upNext && (
                <div className="rounded-xl border border-ink-100 p-4 dark:border-ink-800">
                  <p className="text-xs font-bold uppercase tracking-wide text-ink-500 dark:text-ink-400">{t.upNext}</p>
                  <Link href={`/free-lessons/lesson/${upNext.slug}`} className="mt-1 block font-semibold text-brand-700 hover:underline dark:text-brand-300" dir="ltr" lang="en">{upNext.title}</Link>
                  <p className="mt-0.5 text-sm text-ink-500 dark:text-ink-400">{upNext.reason[locale]}</p>
                </div>
              )}
              {completed && course && <CourseCallout course={course} />}
            </div>
          </section>
          {tab !== "practice" && (
            <button type="button" onClick={() => go("practice")} className="absolute inset-0 z-10 hidden items-end justify-center rounded-xl bg-gradient-to-t from-white via-white/40 to-transparent pb-6 text-sm font-bold text-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:from-ink-950 dark:via-ink-950/40 dark:text-brand-300 lg:flex">
              <span className="rounded-full bg-white px-4 py-2 shadow-soft dark:bg-ink-900">{t.switchToPractice} →</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
