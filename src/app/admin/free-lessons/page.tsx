import Link from "next/link";
import type { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { FreeLessonRowActions } from "@/components/admin/free-lesson-row-actions";
import { StatCard } from "@/components/admin/stat-card";
import { FL_CATEGORIES, FL_CATEGORY_INFO, FL_LEVELS, FL_LEVEL_INFO, FL_STATUSES, FL_DIFFICULTY_LABELS, type FlDifficulty } from "@/lib/free-lessons/constants";

export const dynamic = "force-dynamic";

export default async function AdminFreeLessonsPage({ searchParams }: { searchParams: { [k: string]: string | undefined } }) {
  const { level, category, status, q } = searchParams;
  const where: Prisma.FreeLessonWhereInput = {};
  if (level) where.level = level;
  if (category) where.category = category;
  if (status) where.status = status;
  if (q) where.OR = [{ title: { contains: q, mode: "insensitive" } }, { topic: { contains: q, mode: "insensitive" } }];

  const [lessons, totals, learners, completed] = await Promise.all([
    prisma.freeLesson.findMany({
      where,
      include: { _count: { select: { exercises: true } } },
      orderBy: [{ level: "asc" }, { category: "asc" }, { order: "asc" }],
    }),
    prisma.freeLesson.groupBy({ by: ["status"], _count: { _all: true } }),
    prisma.freeLessonProgress.findMany({ distinct: ["userId"], select: { userId: true } }),
    prisma.freeLessonProgress.count({ where: { status: "COMPLETED" } }),
  ]);
  const count = (s: string) => totals.find((t) => t.status === s)?._count._all ?? 0;
  // sort by curriculum order rather than alphabetical level names
  lessons.sort(
    (a, b) =>
      FL_LEVELS.indexOf(a.level as (typeof FL_LEVELS)[number]) - FL_LEVELS.indexOf(b.level as (typeof FL_LEVELS)[number]) ||
      FL_CATEGORIES.indexOf(a.category as (typeof FL_CATEGORIES)[number]) - FL_CATEGORIES.indexOf(b.category as (typeof FL_CATEGORIES)[number]) ||
      a.order - b.order
  );

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-ink-900 dark:text-white">Free Lessons Management</h1>
          <p className="mt-1 text-ink-500 dark:text-ink-400">Create, edit, publish and order the free English lessons.</p>
        </div>
        <div className="flex gap-2">
          <Link href="/admin/free-lessons/analytics" className="btn-outline">Analytics</Link>
          <Link href="/admin/free-lessons/new" className="btn-primary">+ New Lesson</Link>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Published lessons" value={String(count("PUBLISHED"))} />
        <StatCard label="Drafts / unpublished" value={String(count("DRAFT") + count("UNPUBLISHED"))} />
        <StatCard label="Learners using lessons" value={String(learners.length)} href="/admin/free-lessons/analytics" />
        <StatCard label="Lessons completed" value={String(completed)} href="/admin/free-lessons/analytics" />
      </div>

      <form method="get" className="card mt-6 grid gap-4 p-5 sm:grid-cols-2 lg:grid-cols-5">
        <div>
          <label className="label">Search</label>
          <input name="q" defaultValue={q} className="input" placeholder="Title or topic" />
        </div>
        <div>
          <label className="label">Level</label>
          <select name="level" defaultValue={level ?? ""} className="input">
            <option value="">All levels</option>
            {FL_LEVELS.map((l) => <option key={l} value={l}>{FL_LEVEL_INFO[l].name.en}</option>)}
          </select>
        </div>
        <div>
          <label className="label">Category</label>
          <select name="category" defaultValue={category ?? ""} className="input">
            <option value="">All categories</option>
            {FL_CATEGORIES.map((c) => <option key={c} value={c}>{FL_CATEGORY_INFO[c].name.en}</option>)}
          </select>
        </div>
        <div>
          <label className="label">Status</label>
          <select name="status" defaultValue={status ?? ""} className="input">
            <option value="">All statuses</option>
            {FL_STATUSES.map((s) => <option key={s} value={s}>{s.charAt(0) + s.slice(1).toLowerCase()}</option>)}
          </select>
        </div>
        <div className="flex items-end gap-2">
          <button type="submit" className="btn-primary w-full">Filter</button>
          <a href="/admin/free-lessons" className="btn-outline w-full text-center">Reset</a>
        </div>
      </form>

      <div className="card mt-6 overflow-x-auto">
        <table className="min-w-full divide-y divide-ink-100 text-sm dark:divide-ink-800">
          <thead className="bg-ink-50 text-left text-xs uppercase text-ink-500 dark:bg-ink-800 dark:text-ink-400">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Lesson</th>
              <th className="px-4 py-3">Level</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Difficulty</th>
              <th className="px-4 py-3">Exercises</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-100 dark:divide-ink-800">
            {lessons.map((l) => (
              <tr key={l.id}>
                <td className="px-4 py-3 text-ink-500 dark:text-ink-400">{l.order}</td>
                <td className="min-w-[220px] px-4 py-3">
                  <Link href={`/admin/free-lessons/${l.id}`} className="font-medium text-ink-800 hover:text-brand-700 dark:text-ink-100">{l.title}</Link>
                  <p className="text-xs text-ink-400">{l.topic}</p>
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-ink-600 dark:text-ink-300">{FL_LEVEL_INFO[l.level as keyof typeof FL_LEVEL_INFO]?.name.en ?? l.level}</td>
                <td className="whitespace-nowrap px-4 py-3 text-ink-600 dark:text-ink-300">{FL_CATEGORY_INFO[l.category as keyof typeof FL_CATEGORY_INFO]?.name.en ?? l.category}</td>
                <td className="whitespace-nowrap px-4 py-3 text-ink-600 dark:text-ink-300">{FL_DIFFICULTY_LABELS[l.difficulty as FlDifficulty]?.en ?? l.difficulty}</td>
                <td className="whitespace-nowrap px-4 py-3 text-ink-600 dark:text-ink-300">{l._count.exercises}</td>
                <td className="px-4 py-3">
                  <span className={`badge ${l.status === "PUBLISHED" ? "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300" : "bg-ink-100 text-ink-600 dark:bg-ink-800 dark:text-ink-300"}`}>
                    {l.status.charAt(0) + l.status.slice(1).toLowerCase()}
                  </span>
                </td>
                <td className="min-w-[440px] px-4 py-3"><FreeLessonRowActions id={l.id} slug={l.slug} status={l.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
        {lessons.length === 0 && <p className="p-6 text-center text-ink-400">No lessons match your filters.</p>}
      </div>
    </div>
  );
}
