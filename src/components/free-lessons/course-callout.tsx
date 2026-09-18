"use client";

import Link from "next/link";
import { useI18n } from "@/components/i18n-provider";
import { fl } from "@/lib/free-lessons/i18n";
import { FORMAT_LABELS, localize } from "@/lib/enums";

export type CourseCalloutData = {
  slug: string;
  title: string;
  durationHours: number;
  format: string;
  reason: { en: string; ar: string };
};

/** A deliberately quiet "next step" card: it never interrupts learning, and only shows real, published courses. */
export function CourseCallout({ course, cefrText }: { course: CourseCalloutData; cefrText?: string }) {
  const { locale } = useI18n();
  const t = fl(locale);
  return (
    <aside className="rounded-xl border border-ink-100 bg-ink-50 p-4 dark:border-ink-800 dark:bg-ink-800/50">
      <p className="text-xs font-bold uppercase tracking-wide text-ink-500 dark:text-ink-400">{t.furtherTitle}</p>
      <p className="mt-2 text-sm text-ink-600 dark:text-ink-300">{course.reason[locale]}</p>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-3 rounded-lg bg-white p-3 dark:bg-ink-900">
        <div>
          <p className="font-semibold text-ink-900 dark:text-white">{course.title}</p>
          <p className="text-xs text-ink-500 dark:text-ink-400">
            {course.durationHours} {t.hours} · {localize(FORMAT_LABELS, course.format, locale)}
            {cefrText ? ` · ${cefrText}` : ""}
          </p>
        </div>
        <Link href={`/courses/${course.slug}`} className="btn-outline btn-sm">{t.viewCourse}</Link>
      </div>
    </aside>
  );
}
