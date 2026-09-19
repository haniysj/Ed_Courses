import { prisma } from "@/lib/prisma";
import { StatusBadge } from "@/components/status-badge";
import { ScheduleCreateForm } from "@/components/admin/schedule-create-form";
import { ScheduleRowActions } from "@/components/admin/schedule-row-actions";
import { formatTimeRange, formatDateLtr } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function AdminSchedulesPage() {
  const [schedules, courses] = await Promise.all([
    prisma.courseSchedule.findMany({
      include: { course: { include: { instructor: true } } },
      orderBy: { date: "asc" },
    }),
    prisma.course.findMany({ where: { status: { not: "ARCHIVED" } }, orderBy: { title: "asc" } }),
  ]);

  return (
    <div>
      <h1 className="text-2xl font-bold text-ink-900 dark:text-white">Schedules</h1>
      <p className="mt-1 text-ink-500 dark:text-ink-400">Manage course dates, times, and capacity. Conflicting sessions for the same instructor are blocked automatically.</p>

      <div className="mt-6">
        <ScheduleCreateForm courses={courses.map((c) => ({ id: c.id, title: c.title, maxLearners: c.maxLearners }))} />
      </div>

      <div className="card mt-6 overflow-x-auto">
        <table className="min-w-full divide-y divide-ink-100 text-sm">
          <thead className="bg-ink-50 dark:bg-ink-800 text-left text-xs uppercase text-ink-500 dark:text-ink-400">
            <tr>
              <th className="px-4 py-3">Course</th>
              <th className="px-4 py-3">Instructor</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Time</th>
              <th className="px-4 py-3">Seats</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-100 dark:divide-ink-800">
            {schedules.map((s) => (
              <tr key={s.id}>
                <td className="px-4 py-3 font-medium text-ink-800 dark:text-ink-100">{s.course.title}</td>
                <td className="px-4 py-3 text-ink-600 dark:text-ink-300">{s.course.instructor.fullName}</td>
                <td className="px-4 py-3 text-ink-600 dark:text-ink-300">{formatDateLtr(s.date)}</td>
                <td className="px-4 py-3 text-ink-600 dark:text-ink-300">{formatTimeRange(s.startTime, s.endTime)}</td>
                <td className="px-4 py-3 text-ink-600 dark:text-ink-300">{s.seatsBooked}/{s.capacity}</td>
                <td className="px-4 py-3"><StatusBadge status={s.seatsBooked >= s.capacity && s.status === "OPEN" ? "FULL" : s.status} /></td>
                <td className="px-4 py-3"><ScheduleRowActions id={s.id} status={s.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
        {schedules.length === 0 && <p className="p-6 text-center text-ink-400">No schedules yet.</p>}
      </div>
    </div>
  );
}
