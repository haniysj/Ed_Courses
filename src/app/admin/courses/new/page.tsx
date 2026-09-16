import { prisma } from "@/lib/prisma";
import { CourseForm } from "@/components/admin/course-form";

export const dynamic = "force-dynamic";

export default async function NewCoursePage() {
  const [categories, instructors] = await Promise.all([
    prisma.category.findMany({ orderBy: { name: "asc" } }),
    prisma.instructor.findMany({ where: { active: true }, orderBy: { fullName: "asc" } }),
  ]);

  return (
    <div>
      <h1 className="text-2xl font-bold text-ink-900">Add Course</h1>
      <p className="mt-1 text-ink-500">Create a new course listing.</p>
      <div className="mt-6 max-w-4xl">
        <CourseForm
          categories={categories.map((c) => ({ id: c.id, name: c.name }))}
          instructors={instructors.map((i) => ({ id: i.id, name: i.fullName }))}
        />
      </div>
    </div>
  );
}
