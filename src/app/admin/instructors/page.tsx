import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { InstructorRowActions } from "@/components/admin/instructor-row-actions";

export const dynamic = "force-dynamic";

export default async function AdminInstructorsPage() {
  const instructors = await prisma.instructor.findMany({
    include: { _count: { select: { courses: true } } },
    orderBy: { fullName: "asc" },
  });

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-ink-900 dark:text-white">Instructors</h1>
          <p className="mt-1 text-ink-500 dark:text-ink-400">Manage instructor profiles and assignments.</p>
        </div>
        <Link href="/admin/instructors/new" className="btn-primary">+ Add Instructor</Link>
      </div>

      <div className="card mt-6 overflow-x-auto">
        <table className="min-w-full divide-y divide-ink-100 text-sm">
          <thead className="bg-ink-50 dark:bg-ink-800 text-left text-xs uppercase text-ink-500 dark:text-ink-400">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Experience</th>
              <th className="px-4 py-3">Courses</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-100 dark:divide-ink-800">
            {instructors.map((i) => (
              <tr key={i.id}>
                <td className="px-4 py-3 font-medium text-ink-800 dark:text-ink-100">{i.fullName}</td>
                <td className="px-4 py-3 text-ink-600 dark:text-ink-300">{i.title}</td>
                <td className="px-4 py-3 text-ink-600 dark:text-ink-300">{i.experienceYears} yrs</td>
                <td className="px-4 py-3 text-ink-600 dark:text-ink-300">{i._count.courses}</td>
                <td className="px-4 py-3">
                  <span className={`badge ${i.active ? "bg-green-100 text-green-700" : "bg-ink-100 dark:bg-ink-800 text-ink-500 dark:text-ink-400"}`}>
                    {i.active ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <InstructorRowActions id={i.id} active={i.active} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {instructors.length === 0 && <p className="p-6 text-center text-ink-400">No instructors yet.</p>}
      </div>
    </div>
  );
}
