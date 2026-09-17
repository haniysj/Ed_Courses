import { prisma } from "@/lib/prisma";
import { formatDate } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function AdminLearnersPage() {
  const learners = await prisma.user.findMany({
    where: { role: "LEARNER" },
    include: { _count: { select: { bookings: true } } },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <h1 className="text-2xl font-bold text-ink-900 dark:text-white">Learners</h1>
      <p className="mt-1 text-ink-500 dark:text-ink-400">All registered learner accounts.</p>

      <div className="card mt-6 overflow-x-auto">
        <table className="min-w-full divide-y divide-ink-100 text-sm">
          <thead className="bg-ink-50 dark:bg-ink-800 text-left text-xs uppercase text-ink-500 dark:text-ink-400">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Country</th>
              <th className="px-4 py-3">Bookings</th>
              <th className="px-4 py-3">Joined</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-100 dark:divide-ink-800">
            {learners.map((l) => (
              <tr key={l.id}>
                <td className="px-4 py-3 font-medium text-ink-800 dark:text-ink-100">{l.name}</td>
                <td className="px-4 py-3 text-ink-600 dark:text-ink-300">{l.email}</td>
                <td className="px-4 py-3 text-ink-600 dark:text-ink-300">{l.phone ?? "—"}</td>
                <td className="px-4 py-3 text-ink-600 dark:text-ink-300">{l.country ?? "—"}</td>
                <td className="px-4 py-3 text-ink-600 dark:text-ink-300">{l._count.bookings}</td>
                <td className="px-4 py-3 text-ink-500 dark:text-ink-400">{formatDate(l.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {learners.length === 0 && <p className="p-6 text-center text-ink-400">No learners registered yet.</p>}
      </div>
    </div>
  );
}
