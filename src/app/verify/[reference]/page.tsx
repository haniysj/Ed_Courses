import { prisma } from "@/lib/prisma";
import { getServerLocale } from "@/lib/i18n/server";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { CEFR_LABELS, type CefrLevel } from "@/lib/enums";
import { getHeadwayRecommendation, type BandPosition } from "@/lib/placement/headway";
import { formatDateLtr } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function VerifyPage({ params }: { params: { reference: string } }) {
  const locale = getServerLocale();
  const t = getDictionary(locale);

  const attempt = await prisma.placementAttempt.findFirst({
    where: { resultReference: params.reference, status: "COMPLETED" },
  });

  return (
    <div className="container-page flex min-h-[70vh] max-w-md items-center py-16">
      <div className="card w-full p-8 text-center">
        <h1 className="text-xl font-bold text-ink-900 dark:text-white">{t.placement.verify}</h1>
        <p className="mt-1 text-sm text-ink-400">{params.reference}</p>

        {attempt && attempt.cefrOverall && attempt.cefrOverallLabel ? (
          <div className="mt-6 space-y-3 text-start">
            <div className="flex justify-center">
              <span className="badge bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300">
                {t.placement.verifyValid}
              </span>
            </div>
            <Row label={locale === "ar" ? "المتعلم" : "Learner"} value={attempt.learnerName || (locale === "ar" ? "متعلم مجهول" : "Anonymous")} />
            <Row label={t.placement.testDate} value={formatDateLtr(attempt.completedAt ?? attempt.startedAt)} />
            <Row label={t.placement.overallLevel} value={CEFR_LABELS[attempt.cefrOverall as CefrLevel][locale]} />
            <Row
              label={t.placement.recommendedHeadway}
              value={
                getHeadwayRecommendation(
                  attempt.cefrOverall as CefrLevel,
                  attempt.cefrOverallLabel.split(":")[1] as BandPosition
                ).headline[locale]
              }
            />
          </div>
        ) : (
          <p className="mt-6 text-ink-500 dark:text-ink-400">{t.placement.verifyNotFound}</p>
        )}
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-ink-100 py-2 text-sm last:border-0 dark:border-ink-800">
      <span className="text-ink-500 dark:text-ink-400">{label}</span>
      <span className="font-medium text-ink-800 dark:text-white">{value}</span>
    </div>
  );
}
