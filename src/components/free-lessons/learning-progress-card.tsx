import Link from "next/link";
import type { LearnerOverview } from "@/lib/free-lessons/overview";
import { FL_CATEGORIES, FL_CATEGORY_INFO, FL_LEVEL_INFO, levelSlug } from "@/lib/free-lessons/constants";
import { fl } from "@/lib/free-lessons/i18n";
import type { Locale } from "@/lib/i18n/config";
import { ProgressBar } from "./progress-bar";

/** "Free Learning Progress" summary used on the hub and on the learner's account page. */
export function LearningProgressCard({ overview, locale }: { overview: LearnerOverview; locale: Locale }) {
  const t = fl(locale);
  const lvl = overview.selectedLevel;

  if (!lvl) {
    return (
      <section className="card p-6">
        <h2 className="text-lg font-bold text-ink-900 dark:text-white">{t.progressTitle}</h2>
        <p className="mt-2 text-sm text-ink-500 dark:text-ink-400">{t.chooseLevelBody}</p>
        <Link href="/free-lessons" className="btn-primary btn-sm mt-4">{t.pickLevelCta}</Link>
      </section>
    );
  }

  const stats = overview.levelStats[lvl];
  const info = FL_LEVEL_INFO[lvl];

  return (
    <section className="card p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-bold text-ink-900 dark:text-white">{t.progressTitle}</h2>
          <p className="mt-0.5 text-sm text-ink-500 dark:text-ink-400">
            {info.name[locale]} · CEFR {info.cefr}
          </p>
        </div>
        <Link href={`/free-lessons/level/${levelSlug(lvl)}`} className="btn-outline btn-sm">{t.openHub}</Link>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between text-sm font-semibold text-ink-700 dark:text-ink-200">
          <span>{t.overall}</span>
          <span>{stats.total === 0 ? 0 : Math.round((stats.completed / stats.total) * 100)}%</span>
        </div>
        <ProgressBar value={stats.completed} max={stats.total} label={t.overall} className="mt-2" />
        <p className="mt-1 text-xs text-ink-400">
          {stats.completed}/{stats.total} {t.completedCount} · {stats.inProgress} {t.inProgress}
        </p>
      </div>

      <dl className="mt-5 grid grid-cols-2 gap-3">
        {FL_CATEGORIES.map((c) => {
          const s = overview.categoryStats[c];
          return (
            <div key={c} className="rounded-lg bg-ink-50 p-3 dark:bg-ink-800">
              <dt className="text-xs text-ink-500 dark:text-ink-400">
                <span aria-hidden className="me-1">{FL_CATEGORY_INFO[c].icon}</span>{FL_CATEGORY_INFO[c].name[locale]}
              </dt>
              <dd className="mt-0.5 text-lg font-bold text-ink-900 dark:text-white">{s.completed}/{s.total}</dd>
            </div>
          );
        })}
      </dl>

      {overview.weakAreas.length > 0 && (
        <div className="mt-5">
          <h3 className="text-sm font-bold text-ink-800 dark:text-ink-100">{t.weakAreas}</h3>
          <ul className="mt-2 flex flex-wrap gap-2">
            {overview.weakAreas.map((w) => (
              <li key={w.category} className="badge bg-amber-50 text-amber-800 dark:bg-amber-950 dark:text-amber-200">
                {FL_CATEGORY_INFO[w.category].name[locale]} · {w.accuracy}% {t.accuracy}
              </li>
            ))}
          </ul>
        </div>
      )}

      {overview.recentlyCompleted.length > 0 && (
        <div className="mt-5">
          <h3 className="text-sm font-bold text-ink-800 dark:text-ink-100">{t.recentlyCompleted}</h3>
          <ul className="mt-2 space-y-1.5 text-sm">
            {overview.recentlyCompleted.slice(0, 4).map((l) => (
              <li key={l.id} className="flex items-center gap-2">
                <span aria-hidden className="text-emerald-600">✓</span>
                <Link dir="ltr" lang="en" href={`/free-lessons/lesson/${l.slug}`} className="text-left text-ink-700 hover:text-brand-700 hover:underline dark:text-ink-200">{l.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
