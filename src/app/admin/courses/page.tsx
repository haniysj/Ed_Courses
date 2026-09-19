import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { StatusBadge } from "@/components/status-badge";
import { CourseRowActions } from "@/components/admin/course-row-actions";
import { getCoursePricing } from "@/lib/pricing";
import { formatDateLtr } from "@/lib/utils";
import { Money } from "@/components/money";

export const dynamic = "force-dynamic";

export default async function AdminCoursesPage() {
  const courses = await prisma.course.findMany({
    include: { instructor: true, category: true, _count: { select: { bookings: true } } },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-ink-900 dark:text-white">Courses</h1>
          <p className="mt-1 text-ink-500 dark:text-ink-400">Manage your course catalogue.</p>
        </div>
        <Link href="/admin/courses/new" className="btn-primary">+ Add Course</Link>
      </div>

      <div className="card mt-6 overflow-x-auto">
        <table className="min-w-full divide-y divide-ink-100 text-sm">
          <thead className="bg-ink-50 dark:bg-ink-800 text-left text-xs uppercase text-ink-500 dark:text-ink-400">
            <tr>
              <th className="px-4 py-3">Course</th>
              <th className="px-4 py-3">Instructor</th>
              <th className="px-4 py-3">Duration</th>
              <th className="px-4 py-3">Hourly Rate</th>
              <th className="px-4 py-3">Total Price</th>
              <th className="px-4 py-3">Bookings</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-100 dark:divide-ink-800">
            {courses.map((c) => (
              <tr key={c.id}>
                <td className="px-4 py-3">
                  <p className="font-medium text-ink-800 dark:text-ink-100">{c.title}</p>
                  <p className="text-xs text-ink-400">{c.code} &middot; {c.category.name}</p>
                </td>
                <td className="px-4 py-3 text-ink-600 dark:text-ink-300">{c.instructor.fullName}</td>
                <td className="px-4 py-3 text-ink-600 dark:text-ink-300">{c.durationHours}h</td>
                <td className="px-4 py-3 text-ink-600 dark:text-ink-300"><Money amount={c.hourlyRate} currency={c.currency} weight="medium" /></td>
                <td className="px-4 py-3 font-semibold text-brand-700">
                  {(() => {
                    const p = getCoursePricing(c.hourlyRate, c.durationHours, c);
                    return p.active ? (
                      <div className="space-y-0.5">
                        <div className="text-xs font-normal text-ink-400 line-through"><Money amount={p.original} currency={c.currency} weight="medium" /></div>
                        <div className="flex items-center gap-1.5">
                          <Money amount={p.final} currency={c.currency} weight="bold" />
                          <span className="rounded-full bg-amber-400 px-1.5 py-0.5 text-[10px] font-bold text-amber-950">-{p.percentOff}%</span>
                        </div>
                        {p.endsAt && <div className="text-[11px] font-normal text-ink-500">until {formatDateLtr(p.endsAt)}</div>}
                      </div>
                    ) : (
                      <Money amount={p.original} currency={c.currency} weight="bold" />
                    );
                  })()}
                </td>
                <td className="px-4 py-3 text-ink-600 dark:text-ink-300">{c._count.bookings}</td>
                <td className="px-4 py-3"><StatusBadge status={c.status} /></td>
                <td className="px-4 py-3"><CourseRowActions id={c.id} status={c.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
        {courses.length === 0 && <p className="p-6 text-center text-ink-400">No courses yet.</p>}
      </div>
    </div>
  );
}
