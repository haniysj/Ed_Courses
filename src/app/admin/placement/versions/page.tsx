import { prisma } from "@/lib/prisma";
import { PlacementVersionCreateForm, PlacementVersionRowActions } from "@/components/admin/placement-version-form";

export const dynamic = "force-dynamic";

export default async function AdminPlacementVersionsPage() {
  const versions = await prisma.placementVersion.findMany({
    include: { _count: { select: { attempts: true } } },
    orderBy: { name: "asc" },
  });

  return (
    <div>
      <h1 className="text-2xl font-bold text-ink-900 dark:text-white">Placement Test Versions</h1>
      <p className="mt-1 text-ink-500 dark:text-ink-400">
        Each version controls the number of questions, time limit, and CEFR range used when the system draws a
        balanced, randomized set of questions for a learner&apos;s attempt.
      </p>

      <div className="mt-6">
        <PlacementVersionCreateForm />
      </div>

      <div className="card mt-6 overflow-x-auto">
        <table className="min-w-full divide-y divide-ink-100 text-sm">
          <thead className="bg-ink-50 dark:bg-ink-800 text-left text-xs uppercase text-ink-500 dark:text-ink-400">
            <tr>
              <th className="px-4 py-3">Version</th>
              <th className="px-4 py-3">CEFR Range</th>
              <th className="px-4 py-3">Questions</th>
              <th className="px-4 py-3">Time Limit</th>
              <th className="px-4 py-3">Attempts</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-100 dark:divide-ink-800">
            {versions.map((v) => (
              <tr key={v.id}>
                <td className="px-4 py-3 font-medium text-ink-800 dark:text-ink-100">Version {v.name}</td>
                <td className="px-4 py-3 text-ink-600 dark:text-ink-300">
                  {v.cefrRangeMin.replace("_", "-")} &ndash; {v.cefrRangeMax.replace("_", "-")}
                </td>
                <td className="px-4 py-3 text-ink-600 dark:text-ink-300">{v.questionCount}</td>
                <td className="px-4 py-3 text-ink-600 dark:text-ink-300">{v.timeLimitMinutes} min</td>
                <td className="px-4 py-3 text-ink-600 dark:text-ink-300">{v._count.attempts}</td>
                <td className="px-4 py-3">
                  <span className={`badge ${v.active ? "bg-green-100 text-green-700" : "bg-ink-100 dark:bg-ink-800 text-ink-500 dark:text-ink-400"}`}>
                    {v.active ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <PlacementVersionRowActions id={v.id} active={v.active} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {versions.length === 0 && <p className="p-6 text-center text-ink-400">No versions yet.</p>}
      </div>
    </div>
  );
}
