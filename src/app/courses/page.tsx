import type { Metadata } from "next";
import type { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { CourseCard } from "@/components/course-card";
import { CourseFilters } from "@/components/course-filters";

export const metadata: Metadata = { title: "Courses" };
export const dynamic = "force-dynamic";

export default async function CoursesPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const { q, category, level, instructor, format, duration, price } = searchParams;

  const where: Prisma.CourseWhereInput = { status: "PUBLISHED" };

  if (q) {
    where.OR = [
      { title: { contains: q } },
      { description: { contains: q } },
    ];
  }
  if (category) where.category = { slug: category };
  if (level) where.level = level;
  if (instructor) where.instructor = { slug: instructor };
  if (format) where.format = format;

  if (duration === "short") where.durationHours = { lt: 10 };
  else if (duration === "medium") where.durationHours = { gte: 10, lte: 15 };
  else if (duration === "long") where.durationHours = { gt: 15 };

  if (price === "low") where.hourlyRate = { lt: 100 };
  else if (price === "mid") where.hourlyRate = { gte: 100, lte: 200 };
  else if (price === "high") where.hourlyRate = { gt: 200 };

  // Price filter is expressed on total price (rate x duration), applied client-side below
  // since SQLite cannot express the multiplication in a where clause.

  const [courses, categories, instructors] = await Promise.all([
    prisma.course.findMany({
      where,
      include: { instructor: true, category: true, schedules: true },
      orderBy: { createdAt: "desc" },
    }),
    prisma.category.findMany({ orderBy: { name: "asc" } }),
    prisma.instructor.findMany({ where: { active: true }, orderBy: { fullName: "asc" } }),
  ]);

  const filtered = courses.filter((c) => {
    const total = c.hourlyRate * c.durationHours;
    if (price === "low") return total < 100;
    if (price === "mid") return total >= 100 && total <= 200;
    if (price === "high") return total > 200;
    return true;
  });

  return (
    <div className="container-page py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-ink-900">Course Catalogue</h1>
        <p className="mt-1 text-ink-500">Browse our full range of professional online courses.</p>
      </div>

      <div className="mb-8">
        <CourseFilters
          categories={categories.map((c) => ({ value: c.slug, label: c.name }))}
          instructors={instructors.map((i) => ({ value: i.slug, label: i.fullName }))}
          values={{ q, category, level, instructor, format, duration, price }}
        />
      </div>

      <p className="mb-4 text-sm text-ink-500">{filtered.length} course{filtered.length === 1 ? "" : "s"} found</p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="card p-10 text-center text-ink-500">
          No courses match your filters. Try adjusting your search.
        </div>
      )}
    </div>
  );
}
