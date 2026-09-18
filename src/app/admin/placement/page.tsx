import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { StatCard } from "@/components/admin/stat-card";
import { CEFR_ORDER } from "@/lib/enums";
import { LevelDistributionChart } from "@/components/admin/placement-charts";

export const dynamic = "force-dynamic";

export default async function AdminPlacementDashboard() {
  const [totalAttempts, completedAttempts, versions, completed] = await Promise.all([
    prisma.placementAttempt.count(),
    prisma.placementAttempt.count({ where: { status: "COMPLETED" } }),
    prisma.placementVersion.findMany({ include: { _count: { select: { attempts: true } } } }),
    prisma.placementAttempt.findMany({
      where: { status: "COMPLETED" },
      select: { cefrOverall: true, scoreOverall: true, startedAt: true, completedAt: true },
    }),
  ]);

  const avgScore =
    completed.length > 0 ? Math.round(completed.reduce((s, a) => s + (a.scoreOverall ?? 0), 0) / completed.length) : 0;

  const avgCompletionMinutes =
    completed.length > 0
      ? Math.round(
          completed.reduce((s, a) => {
            if (!a.completedAt) return s;
            return s + (a.completedAt.getTime() - a.startedAt.getTime()) / 60000;
          }, 0) / completed.length
        )
      : 0;

  const levelCounts = CEFR_ORDER.map((level) => ({
    level,
    count: completed.filter((a) => a.cefrOverall === level).length,
  }));

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-ink-900 dark:text-white">Placement Tests</h1>
          <p className="mt-1 text-ink-500 dark:text-ink-400">Overview of the English placement assessment.</p>
        </div>
        <div className="flex gap-2">
          <Link href="/admin/placement/versions" className="btn-outline">
            Manage Versions
          </Link>
          <Link href="/admin/placement/questions" className="btn-primary">
            Manage Questions
          </Link>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        <StatCard label="Total Attempts" value={String(totalAttempts)} />
        <StatCard label="Completed Tests" value={String(completedAttempts)} href="/admin/placement/attempts" />
        <StatCard label="Average Score" value={`${avgScore} / 100`} />
        <StatCard label="Avg. Completion Time" value={`${avgCompletionMinutes} min`} />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="card p-5">
          <h2 className="font-bold text-ink-900 dark:text-white">Learner Levels</h2>
          <LevelDistributionChart data={levelCounts.map((l) => ({ level: l.level.replace("_", "-"), count: l.count }))} />
        </div>

        <div className="card p-5">
          <h2 className="font-bold text-ink-900 dark:text-white">Test Versions</h2>
          <div className="mt-3 space-y-2">
            {versions.map((v) => (
              <div key={v.id} className="flex items-center justify-between border-b border-ink-50 pb-2 text-sm last:border-0">
                <span className="font-medium text-ink-800 dark:text-ink-100">
                  Version {v.name} {!v.active && <span className="text-ink-400">(inactive)</span>}
                </span>
                <span className="text-ink-500 dark:text-ink-400">{v._count.attempts} attempts</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
