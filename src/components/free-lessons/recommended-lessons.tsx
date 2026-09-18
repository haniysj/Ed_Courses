import Link from "next/link";
import { FL_CATEGORY_INFO, FL_LEVEL_INFO, type FlCategory, type FlLevel } from "@/lib/free-lessons/constants";
import type { Recommendation } from "@/lib/free-lessons/recommend";
import { fl } from "@/lib/free-lessons/i18n";
import type { Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

/** Numbered list of recommended lessons, each with the reason it was picked. */
export function RecommendedLessons({
  recs, locale, guest = false, heading,
}: {
  recs: Recommendation[];
  locale: Locale;
  /** When true, the reader isn't signed in: links go through login. */
  guest?: boolean;
  heading?: string;
}) {
  const t = fl(locale);
  if (recs.length === 0) return null;
  return (
    <div>
      {heading && <h2 className="text-xl font-bold text-ink-900 dark:text-white">{heading}</h2>}
      <ol className={cn("grid gap-3 sm:grid-cols-2", heading && "mt-4")}>
        {recs.map((r, i) => {
          const cat = FL_CATEGORY_INFO[r.lesson.category as FlCategory];
          const lvl = FL_LEVEL_INFO[r.lesson.level as FlLevel];
          const href = `/free-lessons/lesson/${r.lesson.slug}`;
          return (
            <li key={r.lesson.id}>
              <Link
                href={guest ? `/login?callbackUrl=${encodeURIComponent(href)}` : href}
                className="card hover-lift flex h-full gap-3 p-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">{i + 1}</span>
                <span className="min-w-0">
                  <span dir="ltr" lang="en" className="block text-left font-semibold text-ink-900 dark:text-white">{r.lesson.title}</span>
                  <span className="mt-1 flex flex-wrap items-center gap-2 text-xs">
                    <span className={cn("badge", cat.accent)}><span aria-hidden className="me-1">{cat.icon}</span>{cat.name[locale]}</span>
                    <span className="text-ink-500 dark:text-ink-400">{lvl.name[locale]} · {r.lesson.estimatedMinutes} {t.minutes}</span>
                  </span>
                  <span className="mt-2 block text-sm text-ink-600 dark:text-ink-300">{r.reason[locale]}</span>
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
