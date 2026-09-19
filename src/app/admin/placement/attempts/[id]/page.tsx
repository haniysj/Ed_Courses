import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { CEFR_DESCRIPTIONS, CEFR_LABELS, type CefrLevel, type PlacementSkill } from "@/lib/enums";
import { formatCefrLabel } from "@/lib/placement/scoring";
import { getHeadwayRecommendation, type BandPosition } from "@/lib/placement/headway";
import { PlacementCertificate } from "@/components/placement/placement-certificate";
import { formatDate, formatDateLtr } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function AdminPlacementAttemptDetailPage({ params }: { params: { id: string } }) {
  const attempt = await prisma.placementAttempt.findUnique({
    where: { id: params.id },
    include: { version: true, user: true },
  });
  if (!attempt) notFound();

  if (attempt.status !== "COMPLETED" || !attempt.cefrOverall || !attempt.cefrOverallLabel) {
    return (
      <div>
        <h1 className="text-2xl font-bold text-ink-900 dark:text-white">Attempt Not Completed</h1>
        <p className="mt-2 text-ink-500 dark:text-ink-400">
          This candidate started version {attempt.version.name} but has not finished the assessment yet.
        </p>
        <Link href="/admin/placement/attempts" className="btn-outline mt-4 inline-flex">Back to Completed Tests</Link>
      </div>
    );
  }

  const cefr = attempt.cefrOverall as CefrLevel;
  const [, position] = attempt.cefrOverallLabel.split(":") as [CefrLevel, BandPosition];
  const headway = getHeadwayRecommendation(cefr, position);
  const skillScores: Record<PlacementSkill, CefrLevel | null> = JSON.parse(attempt.skillScores ?? "{}");
  const qualifier = formatCefrLabel(attempt.cefrOverallLabel, "en");

  const skillLabels: Record<PlacementSkill, string> = {
    GRAMMAR: "Grammar",
    VOCABULARY: "Vocabulary",
    READING: "Reading",
    LISTENING: "Listening",
  };

  const completionMinutes = attempt.completedAt
    ? Math.round((attempt.completedAt.getTime() - attempt.startedAt.getTime()) / 60000)
    : null;

  return (
    <div dir="ltr" className="text-left">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-ink-900 dark:text-white">Placement Test Result</h1>
          <p className="mt-1 text-ink-500 dark:text-ink-400">Reference: {attempt.resultReference}</p>
        </div>
        <Link href="/admin/placement/attempts" className="btn-outline">Back to Completed Tests</Link>
      </div>

      <div className="card mt-6 grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-4">
        <Info label="Candidate" value={attempt.learnerName || "Anonymous"} />
        <Info label="Email" value={attempt.learnerEmail || "—"} />
        <Info label="Account" value={attempt.user ? attempt.user.email : "Guest (no account)"} />
        <Info label="Test Version" value={`Version ${attempt.version.name}`} />
        <Info label="Test Date" value={formatDateLtr(attempt.completedAt ?? attempt.startedAt)} />
        <Info label="Completion Time" value={completionMinutes !== null ? `${completionMinutes} min` : "—"} />
        <Info label="Overall Score" value={`${attempt.scoreOverall} / 100`} />
        <Info label="CEFR Level" value={`${CEFR_LABELS[cefr].en} (${qualifier})`} />
      </div>

      <div className="card mt-6 p-6">
        <h2 className="font-bold text-ink-900 dark:text-white">Skill Profile</h2>
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {(Object.keys(skillLabels) as PlacementSkill[]).map((skill) => (
            <div key={skill} className="rounded-lg bg-ink-50 p-4 text-center dark:bg-ink-800">
              <p className="text-xs text-ink-500 dark:text-ink-400">{skillLabels[skill]}</p>
              <p className="mt-1 text-lg font-bold text-ink-800 dark:text-white">
                {skillScores[skill] ? CEFR_LABELS[skillScores[skill] as CefrLevel].en : "Not assessed"}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="card mt-6 p-6">
        <h2 className="font-bold text-ink-900 dark:text-white">Recommended Headway Level</h2>
        <p className="mt-2 text-xl font-bold text-brand-700 dark:text-brand-400">{headway.headline.en}</p>
        <p className="mt-2 text-sm text-ink-600 dark:text-ink-300">{headway.explanation.en}</p>
      </div>

      <div className="card mt-6 p-6">
        <h2 className="font-bold text-ink-900 dark:text-white">Level Description</h2>
        <p className="mt-2 text-sm text-ink-600 dark:text-ink-300">{CEFR_DESCRIPTIONS[cefr].en}</p>
      </div>

      <div>
        <h2 className="mt-8 text-lg font-bold text-ink-900 dark:text-white">Certificate / Result Document</h2>
        <PlacementCertificate
          learnerName={attempt.learnerName}
          levelLabel={CEFR_LABELS[cefr].en}
          qualifier={qualifier}
          headwayHeadline={headway.headline.en}
          skillScores={skillScores}
          skillLabels={skillLabels}
          testDate={formatDate(attempt.completedAt ?? attempt.startedAt)}
          reference={attempt.resultReference ?? ""}
        />
      </div>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase text-ink-400">{label}</p>
      <p className="mt-1 text-sm font-medium text-ink-800 dark:text-ink-100">{value}</p>
    </div>
  );
}
