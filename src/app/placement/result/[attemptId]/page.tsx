import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { getServerLocale } from "@/lib/i18n/server";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { CEFR_DESCRIPTIONS, CEFR_LABELS, type CefrLevel, type PlacementSkill } from "@/lib/enums";
import { formatCefrLabel } from "@/lib/placement/scoring";
import { getHeadwayRecommendation, type BandPosition } from "@/lib/placement/headway";
import { getRecommendedCourses } from "@/lib/placement/recommendations";
import { CourseCard } from "@/components/course-card";
import { PlacementCertificate } from "@/components/placement/placement-certificate";
import { LearnerInfoForm } from "@/components/placement/learner-info-form";
import { RetakeSection } from "@/components/placement/retake-section";
import { formatDate } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function PlacementResultPage({ params }: { params: { attemptId: string } }) {
  const attempt = await prisma.placementAttempt.findUnique({
    where: { id: params.attemptId },
    include: { version: true },
  });
  if (!attempt) notFound();

  const locale = getServerLocale();
  const t = getDictionary(locale);

  if (attempt.status !== "COMPLETED" || !attempt.cefrOverall || !attempt.cefrOverallLabel) {
    return (
      <div className="container-page max-w-lg py-16 text-center">
        <p className="text-ink-500 dark:text-ink-400">This assessment has not been completed yet.</p>
        <Link href="/placement/test" className="btn-primary mt-4 inline-flex">
          {t.placement.startNow}
        </Link>
      </div>
    );
  }

  const cefr = attempt.cefrOverall as CefrLevel;
  const [, position] = attempt.cefrOverallLabel.split(":") as [CefrLevel, BandPosition];
  const headway = getHeadwayRecommendation(cefr, position);
  const skillScores: Record<PlacementSkill, CefrLevel | null> = JSON.parse(attempt.skillScores ?? "{}");
  const recommendedCourses = await getRecommendedCourses(cefr);

  const levelLabel = CEFR_LABELS[cefr][locale];
  const levelDescription = CEFR_DESCRIPTIONS[cefr][locale];
  const qualifier = formatCefrLabel(attempt.cefrOverallLabel, locale);

  const skillLabels: Record<PlacementSkill, string> = {
    GRAMMAR: locale === "ar" ? "القواعد" : "Grammar",
    VOCABULARY: locale === "ar" ? "المفردات" : "Vocabulary",
    READING: locale === "ar" ? "القراءة" : "Reading",
    LISTENING: locale === "ar" ? "الاستماع" : "Listening",
  };

  return (
    <div className="container-page max-w-3xl py-10">
      <div className="print:hidden">
      <div className="text-center">
        <span className="badge bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300">{t.placement.placementEstimate}</span>
        <h1 className="mt-3 text-2xl font-bold text-ink-900 dark:text-white sm:text-3xl">{t.placement.resultTitle}</h1>
      </div>

      <div className="card mt-8 p-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-400">{t.placement.overallLevel}</p>
        <p className="mt-2 text-4xl font-extrabold text-brand-700 dark:text-brand-400">{levelLabel}</p>
        <p className="mt-1 text-sm font-medium text-ink-500 dark:text-ink-400">{qualifier}</p>
        <p className="mx-auto mt-4 max-w-xl text-ink-600 dark:text-ink-300">{levelDescription}</p>

        <div className="mt-6 inline-flex items-center gap-2 rounded-lg bg-ink-50 px-4 py-2 text-sm dark:bg-ink-800">
          <span className="text-ink-500 dark:text-ink-400">{t.placement.estimatedScore}:</span>
          <span className="font-bold text-ink-800 dark:text-white">{attempt.scoreOverall} / 100</span>
        </div>
      </div>

      <div className="card mt-6 p-6">
        <h2 className="font-bold text-ink-900 dark:text-white">{t.placement.skillProfile}</h2>
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {(Object.keys(skillLabels) as PlacementSkill[]).map((skill) => (
            <div key={skill} className="rounded-lg bg-ink-50 p-4 text-center dark:bg-ink-800">
              <p className="text-xs text-ink-500 dark:text-ink-400">{skillLabels[skill]}</p>
              <p className="mt-1 text-lg font-bold text-ink-800 dark:text-white">
                {skillScores[skill] ? CEFR_LABELS[skillScores[skill] as CefrLevel][locale].split(" ")[0] : t.placement.notAssessed}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="card mt-6 p-6">
        <h2 className="font-bold text-ink-900 dark:text-white">{t.placement.recommendedHeadway}</h2>
        <p className="mt-2 text-xl font-bold text-brand-700 dark:text-brand-400">{headway.headline[locale]}</p>
        <p className="mt-2 text-sm text-ink-600 dark:text-ink-300">{headway.explanation[locale]}</p>
      </div>

      <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-300">
        {t.placement.finalDisclaimer}
      </div>

      {!attempt.learnerName && <LearnerInfoForm attemptId={attempt.id} />}
      </div>

      <PlacementCertificate
        learnerName={attempt.learnerName}
        levelLabel={levelLabel}
        qualifier={qualifier}
        headwayHeadline={headway.headline[locale]}
        skillScores={skillScores}
        skillLabels={skillLabels}
        testDate={formatDate(attempt.completedAt ?? attempt.startedAt)}
        reference={attempt.resultReference ?? ""}
      />

      <div className="print:hidden">
      <div className="mt-10">
        <h2 className="text-xl font-bold text-ink-900 dark:text-white">{t.placement.recommendedForYou}</h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recommendedCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        {recommendedCourses.length === 0 && (
          <p className="text-ink-500 dark:text-ink-400">No matching courses published yet.</p>
        )}
      </div>

      <RetakeSection />
      </div>
    </div>
  );
}
