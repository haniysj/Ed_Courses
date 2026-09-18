"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useI18n } from "@/components/i18n-provider";
import { fl } from "@/lib/free-lessons/i18n";
import {
  FL_CATEGORIES, FL_CATEGORY_INFO, FL_DIFFICULTIES, FL_DIFFICULTY_LABELS, FL_LEVELS, FL_LEVEL_INFO,
  type FlCategory, type FlDifficulty, type FlLevel,
} from "@/lib/free-lessons/constants";
import { cn } from "@/lib/utils";

export type BrowserLesson = {
  slug: string; title: string; topic: string; level: FlLevel; category: FlCategory; difficulty: FlDifficulty;
  order: number; minutes: number; state: "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";
};

export function StateIcon({ state }: { state: BrowserLesson["state"] }) {
  const { locale } = useI18n();
  const t = fl(locale);
  const label = state === "COMPLETED" ? t.completed : state === "IN_PROGRESS" ? t.inProgress : t.notStarted;
  return (
    <span
      title={label}
      className={cn(
        "inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-bold",
        state === "COMPLETED" ? "border-emerald-500 bg-emerald-500 text-white" : state === "IN_PROGRESS" ? "border-amber-400 text-amber-600" : "border-ink-300 text-ink-300 dark:border-ink-600"
      )}
    >
      <span aria-hidden>{state === "COMPLETED" ? "✓" : state === "IN_PROGRESS" ? "◐" : "○"}</span>
      <span className="sr-only">{label}</span>
    </span>
  );
}

/** Client-side filtering over lightweight lesson metadata (lesson bodies are never sent here). */
export function LessonBrowser({ lessons, showLevelFilter = true }: { lessons: BrowserLesson[]; showLevelFilter?: boolean }) {
  const { locale } = useI18n();
  const t = fl(locale);
  const [q, setQ] = useState("");
  const [level, setLevel] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [state, setState] = useState("");

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return lessons.filter(
      (l) =>
        (!level || l.level === level) &&
        (!category || l.category === category) &&
        (!difficulty || l.difficulty === difficulty) &&
        (!state || l.state === state) &&
        (!needle || l.title.toLowerCase().includes(needle) || l.topic.toLowerCase().includes(needle))
    );
  }, [lessons, q, level, category, difficulty, state]);

  return (
    <div>
      <div className="card grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-5">
        <div className="sm:col-span-2 lg:col-span-5">
          <label htmlFor="fl-search" className="sr-only">{t.searchPlaceholder}</label>
          <input id="fl-search" type="search" dir="ltr" className="input" placeholder={t.searchPlaceholder} value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
        {showLevelFilter && (
          <select aria-label={t.level} className="input" value={level} onChange={(e) => setLevel(e.target.value)}>
            <option value="">{t.allLevels}</option>
            {FL_LEVELS.map((l) => <option key={l} value={l}>{FL_LEVEL_INFO[l].name[locale]}</option>)}
          </select>
        )}
        <select aria-label={t.category} className="input" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">{t.allCategories}</option>
          {FL_CATEGORIES.map((c) => <option key={c} value={c}>{FL_CATEGORY_INFO[c].name[locale]}</option>)}
        </select>
        <select aria-label={t.difficulty} className="input" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option value="">{t.allDifficulties}</option>
          {FL_DIFFICULTIES.map((d) => <option key={d} value={d}>{FL_DIFFICULTY_LABELS[d][locale]}</option>)}
        </select>
        <select aria-label={t.status} className="input" value={state} onChange={(e) => setState(e.target.value)}>
          <option value="">{t.allStatuses}</option>
          <option value="NOT_STARTED">{t.notStarted}</option>
          <option value="IN_PROGRESS">{t.inProgress}</option>
          <option value="COMPLETED">{t.completed}</option>
        </select>
      </div>

      <ul className="mt-4 grid gap-3 md:grid-cols-2">
        {filtered.map((l) => (
          <li key={l.slug}>
            <Link href={`/free-lessons/lesson/${l.slug}`} className="card hover-lift flex items-center gap-3 p-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500">
              <StateIcon state={l.state} />
              <span className="min-w-0 flex-1">
                <span dir="ltr" lang="en" className="block truncate text-left font-semibold text-ink-900 dark:text-white">{l.title}</span>
                <span className="mt-0.5 flex flex-wrap items-center gap-x-2 text-xs text-ink-500 dark:text-ink-400">
                  <span className={cn("badge", FL_CATEGORY_INFO[l.category].accent)}>{FL_CATEGORY_INFO[l.category].name[locale]}</span>
                  <span>{FL_LEVEL_INFO[l.level].name[locale]}</span>
                  <span>· {FL_DIFFICULTY_LABELS[l.difficulty][locale]}</span>
                  <span>· {l.minutes} {t.minutes}</span>
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
      {filtered.length === 0 && <p className="mt-6 text-center text-ink-500 dark:text-ink-400">{t.noResults}</p>}
    </div>
  );
}
