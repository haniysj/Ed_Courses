import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getServerLocale } from "@/lib/i18n/server";
import { fl } from "@/lib/free-lessons/i18n";
import { FL_CATEGORIES, FL_CATEGORY_INFO, FL_DIFFICULTY_LABELS, FL_LEVEL_INFO, levelFromSlug, type FlDifficulty } from "@/lib/free-lessons/constants";
import { getLearnerOverview } from "@/lib/free-lessons/overview";
import { StateIcon } from "@/components/free-lessons/lesson-browser";
import { SetLevelButton } from "@/components/free-lessons/level-card";
import { ProgressBar } from "@/components/free-lessons/progress-bar";
import { RecommendedLessons } from "@/components/free-lessons/recommended-lessons";
import { CourseCallout } from "@/components/free-lessons/course-callout";
import { cn } from "@/lib/utils";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Free Lessons · Level" };

export default async function LevelPage({ params }: { params: { level: string } }) {
  const level = levelFromSlug(params.level);
  if (!level) notFound();

  const session = await getServerSession(authOptions);
  if (!session?.user) redirect(`/login?callbackUrl=${encodeURIComponent(`/free-lessons/level/${params.level}`)}`);

  const locale = getServerLocale();
  const t = fl(locale);
  const overview = await getLearnerOverview(session.user.id);
  const info = FL_LEVEL_INFO[level];
  const stats = overview.levelStats[level];
  const lessons = overview.lessons.filter((l) => l.level === level);
  const recs = overview.recommendations.filter((r) => r.lesson.level === level).slice(0, 2);

  return (
    <div className="container-page max-w-5xl py-8">
      <nav aria-label="Breadcrumb" className="mb-4 text-sm text-ink-500 dark:text-ink-400">
        <Link href="/free-lessons" className="hover:underline">{t.title}</Link>
      </nav>

      <header className="card flex flex-col gap-4 p-6 sm:flex-row sm:items-center">
        <span aria-hidden className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-4xl dark:bg-brand-950">{info.icon}</span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-2xl font-extrabold text-ink-900 dark:text-white">{info.name[locale]}</h1>
            <span className="badge bg-ink-100 text-ink-700 dark:bg-ink-800 dark:text-ink-200">CEFR {info.cefr}</span>
            {overview.selectedLevel === level && <span className="badge bg-brand-600 text-white">✓ {t.yourLevel}</span>}
          </div>
          <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">{info.description[locale]}</p>
          <div className="mt-3 max-w-md">
            <div className="flex justify-between text-xs text-ink-500 dark:text-ink-400">
              <span>{stats.completed}/{stats.total} {t.completedCount}</span>
              <span>{stats.total === 0 ? 0 : Math.round((stats.completed / stats.total) * 100)}%</span>
            </div>
            <ProgressBar value={stats.completed} max={stats.total} label={info.name[locale]} className="mt-1" />
          </div>
        </div>
        {overview.selectedLevel !== level && <SetLevelButton level={level} />}
      </header>

      {recs.length > 0 && (
        <div className="mt-8">
          <RecommendedLessons recs={recs} locale={locale} heading={t.nextInPath} />
        </div>
      )}

      <div className="mt-8 space-y-8">
        {FL_CATEGORIES.map((c) => {
          const cat = FL_CATEGORY_INFO[c];
          const items = lessons.filter((l) => l.category === c).sort((a, b) => a.order - b.order);
          if (items.length === 0) return null;
          const done = items.filter((l) => overview.states[l.id] === "COMPLETED").length;
          return (
            <section key={c} aria-labelledby={`cat-${c}`}>
              <div className="flex items-center justify-between">
                <h2 id={`cat-${c}`} className="flex items-center gap-2 text-lg font-bold text-ink-900 dark:text-white">
                  <span aria-hidden>{cat.icon}</span>{cat.name[locale]}
                </h2>
                <span className="text-sm text-ink-500 dark:text-ink-400">{done}/{items.length}</span>
              </div>
              <ol className="mt-3 space-y-2">
                {items.map((l) => {
                  const state = overview.states[l.id] ?? "NOT_STARTED";
                  return (
                    <li key={l.id}>
                      <Link
                        href={`/free-lessons/lesson/${l.slug}`}
                        className="card hover-lift flex items-center gap-3 p-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                      >
                        <StateIcon state={state} />
                        <span className="min-w-0 flex-1">
                          <span dir="ltr" lang="en" className="block text-left">
                            <span className="font-medium text-ink-500 dark:text-ink-400">Lesson {String(l.order).padStart(2, "0")} – </span>
                            <span className={cn("font-semibold", state === "COMPLETED" ? "text-ink-500 dark:text-ink-400" : "text-ink-900 dark:text-white")}>{l.title}</span>
                          </span>
                          <span className="mt-0.5 block text-xs text-ink-500 dark:text-ink-400">
                            {FL_DIFFICULTY_LABELS[l.difficulty as FlDifficulty][locale]} · {l.estimatedMinutes} {t.minutes}
                          </span>
                        </span>
                        <span aria-hidden className="text-ink-300 rtl:rotate-180">→</span>
                      </Link>
                    </li>
                  );
                })}
              </ol>
            </section>
          );
        })}
        {lessons.length === 0 && <p className="text-ink-500 dark:text-ink-400">{t.noneYet}</p>}
      </div>

      {overview.course && stats.total > 0 && stats.completed === stats.total && (
        <div className="mt-10"><CourseCallout course={{ ...overview.course.course, reason: overview.course.reason }} /></div>
      )}
    </div>
  );
}
