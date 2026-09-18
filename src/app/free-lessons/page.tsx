import type { Metadata } from "next";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getServerLocale } from "@/lib/i18n/server";
import { fl } from "@/lib/free-lessons/i18n";
import { FL_LEVELS, FL_LEVEL_INFO, type FlLevel } from "@/lib/free-lessons/constants";
import { getLearnerOverview } from "@/lib/free-lessons/overview";
import { LevelCard } from "@/components/free-lessons/level-card";
import { LessonBrowser, type BrowserLesson } from "@/components/free-lessons/lesson-browser";
import { LearningProgressCard } from "@/components/free-lessons/learning-progress-card";
import { RecommendedLessons } from "@/components/free-lessons/recommended-lessons";
import { CourseCallout } from "@/components/free-lessons/course-callout";
import { Reveal } from "@/components/reveal";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Free English Lessons",
  description: "Free structured English lessons in grammar, vocabulary, writing and reading with interactive practice.",
};

export default async function FreeLessonsPage() {
  const session = await getServerSession(authOptions);
  const locale = getServerLocale();
  const t = fl(locale);

  // ------------------------------------------------------------ visitors: landing page only
  if (!session?.user) {
    const counts = await prisma.freeLesson.groupBy({ by: ["level"], where: { status: "PUBLISHED" }, _count: { _all: true } });
    const byLevel = new Map(counts.map((c) => [c.level, c._count._all]));

    return (
      <div>
        <section className="relative overflow-hidden bg-gradient-to-br from-brand-700 to-brand-900 text-white dark:from-brand-950 dark:to-black">
          <div className="container-page grid gap-8 py-16 sm:py-24 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <span className="badge bg-white/10 text-brand-100">{t.eyebrow}</span>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">{t.heroTitle}</h1>
              <p className="mt-4 max-w-xl text-lg text-brand-100">{t.heroBody}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/register?callbackUrl=/free-lessons" className="btn-primary bg-white text-brand-800 hover:bg-brand-50">{t.register}</Link>
                <Link href="/login?callbackUrl=/free-lessons" className="btn-outline border-white/40 bg-white/10 text-white hover:bg-white/20">{t.login}</Link>
              </div>
            </div>
            <div aria-hidden className="hidden justify-center lg:flex">
              <div className="animate-float grid grid-cols-2 gap-4 text-5xl">
                {["🧩", "🔤", "✍️", "📖"].map((e) => (
                  <span key={e} className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">{e}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container-page py-16">
          <h2 className="text-2xl font-bold text-ink-900 dark:text-white">{t.featuresTitle}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.features.map((f, i) => (
              <Reveal key={f.title} delay={i * 60}>
                <div className="card hover-lift h-full p-5">
                  <span aria-hidden className="text-3xl">{f.icon}</span>
                  <h3 className="mt-2 font-bold text-ink-900 dark:text-white">{f.title}</h3>
                  <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="bg-ink-50 py-16 dark:bg-ink-900">
          <div className="container-page">
            <h2 className="text-2xl font-bold text-ink-900 dark:text-white">{t.levelsTitle}</h2>
            <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">{t.levelsNote}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {FL_LEVELS.map((l, i) => (
                <Reveal key={l} delay={i * 60}>
                  <LevelCard level={l} total={byLevel.get(l) ?? 0} completed={0} selected={false} mode="public" />
                </Reveal>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link href="/register?callbackUrl=/free-lessons" className="btn-primary">{t.register}</Link>
              <Link href="/login?callbackUrl=/free-lessons" className="btn-outline">{t.login}</Link>
              <Link href="/placement" className="text-sm font-semibold text-brand-700 hover:underline dark:text-brand-400">{t.takePlacementBtn} →</Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // ------------------------------------------------------------ signed-in learners: the hub
  const overview = await getLearnerOverview(session.user.id);
  const chosen = overview.selectedLevel;
  const browserLessons: BrowserLesson[] = overview.lessons.map((l) => ({
    slug: l.slug, title: l.title, topic: l.topic, level: l.level as FlLevel, category: l.category as BrowserLesson["category"],
    difficulty: l.difficulty as BrowserLesson["difficulty"], order: l.order, minutes: l.estimatedMinutes, state: overview.states[l.id] ?? "NOT_STARTED",
  }));

  return (
    <div className="container-page max-w-6xl py-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="badge bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300">{t.eyebrow}</span>
          <h1 className="mt-2 text-3xl font-extrabold text-ink-900 dark:text-white">{t.title}</h1>
          <p className="mt-1 text-ink-500 dark:text-ink-400">{t.hubWelcome}, {session.user.name}.</p>
        </div>
        {overview.continueLesson && (
          <Link href={`/free-lessons/lesson/${overview.continueLesson.slug}`} className="btn-primary">
            {t.continueLearning}: <span dir="ltr" lang="en">{overview.continueLesson.title}</span>
          </Link>
        )}
      </div>

      {!chosen ? (
        <section className="mt-8" aria-labelledby="choose-level">
          <h2 id="choose-level" className="text-xl font-bold text-ink-900 dark:text-white">{t.chooseLevel}</h2>
          <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">{t.chooseLevelBody}</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FL_LEVELS.map((l) => (
              <LevelCard key={l} level={l} total={overview.levelStats[l].total} completed={overview.levelStats[l].completed} selected={false} mode="choose" />
            ))}
          </div>
        </section>
      ) : (
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          <LearningProgressCard overview={overview} locale={locale} />
          <div className="space-y-6">
            <section className="card p-6">
              <h2 className="text-lg font-bold text-ink-900 dark:text-white">{t.recommendedTitle}</h2>
              <p className="mt-0.5 text-sm text-ink-500 dark:text-ink-400">
                {overview.profile ? t.basedOnPlacement : t.recommendedBody}
              </p>
              <div className="mt-4">
                <RecommendedLessons recs={overview.recommendations} locale={locale} />
              </div>
              {!overview.profile && (
                <Link href="/placement" className="mt-4 inline-block text-sm font-semibold text-brand-700 hover:underline dark:text-brand-400">
                  {t.takePlacement} →
                </Link>
              )}
            </section>
            {overview.course && <CourseCallout course={{ ...overview.course.course, reason: overview.course.reason }} />}
          </div>
        </div>
      )}

      {chosen && (
        <section className="mt-12" aria-labelledby="levels">
          <h2 id="levels" className="text-xl font-bold text-ink-900 dark:text-white">{t.levelsTitle}</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FL_LEVELS.map((l) => (
              <LevelCard key={l} level={l} total={overview.levelStats[l].total} completed={overview.levelStats[l].completed} selected={l === chosen} mode="browse" />
            ))}
          </div>
        </section>
      )}

      <section className="mt-12" aria-labelledby="browse">
        <h2 id="browse" className="text-xl font-bold text-ink-900 dark:text-white">{t.browseTitle}</h2>
        <div className="mt-4">
          <LessonBrowser lessons={browserLessons} />
        </div>
      </section>
    </div>
  );
}

void FL_LEVEL_INFO;
