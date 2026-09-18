import Link from "next/link";
import type { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { CEFR_LABELS, type CefrLevel } from "@/lib/enums";
import { formatDate } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function AdminPlacementAttemptsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const { q, cefr, versionId, from, to } = searchParams;

  const where: Prisma.PlacementAttemptWhereInput = { status: "COMPLETED" };

  if (q) {
    where.OR = [
      { learnerName: { contains: q, mode: "insensitive" } },
      { learnerEmail: { contains: q, mode: "insensitive" } },
      { resultReference: { contains: q, mode: "insensitive" } },
    ];
  }
  if (cefr) where.cefrOverall = cefr;
  if (versionId) where.versionId = versionId;
  if (from || to) {
    where.completedAt = {
      ...(from ? { gte: new Date(from) } : {}),
      ...(to ? { lte: new Date(`${to}T23:59:59`) } : {}),
    };
  }

  const [attempts, versions] = await Promise.all([
    prisma.placementAttempt.findMany({
      where,
      include: { version: true },
      orderBy: { completedAt: "desc" },
      take: 200,
    }),
    prisma.placementVersion.findMany({ orderBy: { name: "asc" } }),
  ]);

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-ink-900 dark:text-white">Completed Placement Tests</h1>
          <p className="mt-1 text-ink-500 dark:text-ink-400">{attempts.length} completed attempt{attempts.length === 1 ? "" : "s"}.</p>
        </div>
        <Link href="/admin/placement" className="btn-outline">Back to Overview</Link>
      </div>

      <form method="get" className="card mt-6 grid gap-4 p-5 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <label className="label">Search</label>
          <input name="q" defaultValue={q} className="input" placeholder="Name, email, or reference..." />
        </div>
        <div>
          <label className="label">CEFR Level</label>
          <select name="cefr" defaultValue={cefr ?? ""} className="input">
            <option value="">All Levels</option>
            {Object.keys(CEFR_LABELS).map((l) => (
              <option key={l} value={l}>{CEFR_LABELS[l as CefrLevel].en}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="label">Version</label>
          <select name="versionId" defaultValue={versionId ?? ""} className="input">
            <option value="">All Versions</option>
            {versions.map((v) => (
              <option key={v.id} value={v.id}>Version {v.name}</option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="label">From</label>
            <input type="date" name="from" defaultValue={from} className="input" />
          </div>
          <div>
            <label className="label">To</label>
            <input type="date" name="to" defaultValue={to} className="input" />
          </div>
        </div>
        <div className="flex items-end gap-2 lg:col-span-5">
          <button type="submit" className="btn-primary">Filter</button>
          <a href="/admin/placement/attempts" className="btn-outline">Reset</a>
        </div>
      </form>

      <div className="card mt-6 overflow-x-auto">
        <table className="min-w-full divide-y divide-ink-100 text-sm dark:divide-ink-800">
          <thead className="bg-ink-50 text-left text-xs uppercase text-ink-500 dark:bg-ink-800 dark:text-ink-400">
            <tr>
              <th className="px-4 py-3">Candidate</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Version</th>
              <th className="px-4 py-3">Score</th>
              <th className="px-4 py-3">CEFR Level</th>
              <th className="px-4 py-3">Reference</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-100 dark:divide-ink-800">
            {attempts.map((a) => (
              <tr key={a.id}>
                <td className="px-4 py-3">
                  <p className="font-medium text-ink-800 dark:text-ink-100">{a.learnerName || "Anonymous"}</p>
                  {a.learnerEmail && <p className="text-xs text-ink-400">{a.learnerEmail}</p>}
                </td>
                <td className="px-4 py-3 text-ink-600 dark:text-ink-300">{formatDate(a.completedAt ?? a.startedAt)}</td>
                <td className="px-4 py-3 text-ink-600 dark:text-ink-300">{a.version.name}</td>
                <td className="px-4 py-3 text-ink-600 dark:text-ink-300">{a.scoreOverall} / 100</td>
                <td className="px-4 py-3">
                  <span className="badge bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300">
                    {a.cefrOverall ? CEFR_LABELS[a.cefrOverall as CefrLevel].en : "—"}
                  </span>
                </td>
                <td className="px-4 py-3 font-mono text-xs text-ink-500 dark:text-ink-400">{a.resultReference}</td>
                <td className="px-4 py-3 text-right">
                  <Link href={`/admin/placement/attempts/${a.id}`} className="btn-outline btn-sm">View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {attempts.length === 0 && <p className="p-6 text-center text-ink-400">No completed attempts match this filter.</p>}
      </div>
    </div>
  );
}
