import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { CourseForm } from "@/components/admin/course-form";

export const dynamic = "force-dynamic";

export default async function EditCoursePage({ params }: { params: { id: string } }) {
  const [course, categories, instructors] = await Promise.all([
    prisma.course.findUnique({
      where: { id: params.id },
      include: { modules: { orderBy: { order: "asc" } } },
    }),
    prisma.category.findMany({ orderBy: { name: "asc" } }),
    prisma.instructor.findMany({ orderBy: { fullName: "asc" } }),
  ]);
  if (!course) notFound();

  return (
    <div>
      <h1 className="text-2xl font-bold text-ink-900">Edit Course</h1>
      <p className="mt-1 text-ink-500">{course.title}</p>
      <div className="mt-6 max-w-4xl">
        <CourseForm
          courseId={course.id}
          categories={categories.map((c) => ({ id: c.id, name: c.name }))}
          instructors={instructors.map((i) => ({ id: i.id, name: i.fullName }))}
          initial={{
            title: course.title,
            code: course.code,
            description: course.description,
            objectives: JSON.parse(course.objectives || "[]"),
            imageUrl: course.imageUrl ?? "",
            level: course.level,
            format: course.format,
            durationHours: course.durationHours,
            sessionsCount: course.sessionsCount,
            hourlyRate: course.hourlyRate,
            maxLearners: course.maxLearners,
            status: course.status,
            categoryId: course.categoryId,
            instructorId: course.instructorId,
            modules: course.modules.map((m) => ({ title: m.title, description: m.description })),
          }}
        />
      </div>
    </div>
  );
}
