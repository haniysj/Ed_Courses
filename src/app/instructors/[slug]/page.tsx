import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { CourseCard } from "@/components/course-card";

export const dynamic = "force-dynamic";

async function getInstructor(slug: string) {
  return prisma.instructor.findUnique({
    where: { slug },
    include: {
      courses: {
        where: { status: "PUBLISHED" },
        include: { instructor: true, category: true, schedules: true },
      },
    },
  });
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const instructor = await getInstructor(params.slug);
  if (!instructor) return {};
  return { title: instructor.fullName, description: instructor.bio };
}

export default async function InstructorDetailPage({ params }: { params: { slug: string } }) {
  const instructor = await getInstructor(params.slug);
  if (!instructor) notFound();

  const languages = instructor.languages.split(",").map((l) => l.trim()).filter(Boolean);

  return (
    <div className="container-page py-10">
      <div className="card flex flex-col gap-6 p-8 sm:flex-row sm:items-center">
        <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full bg-ink-100">
          {instructor.photoUrl && (
            <Image src={instructor.photoUrl} alt={instructor.fullName} fill className="object-cover" sizes="128px" />
          )}
        </div>
        <div>
          <h1 className="text-2xl font-bold text-ink-900">{instructor.fullName}</h1>
          <p className="text-brand-700">{instructor.title}</p>
          <p className="mt-2 text-sm text-ink-500">{instructor.qualifications}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {languages.map((lang) => (
              <span key={lang} className="badge bg-ink-100 text-ink-600">{lang}</span>
            ))}
            <span className="badge bg-brand-50 text-brand-700">{instructor.experienceYears} yrs experience</span>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold text-ink-900">Biography</h2>
          <p className="mt-3 leading-relaxed text-ink-600">{instructor.bio}</p>
        </div>
        <div className="space-y-4">
          <div className="card p-5">
            <p className="text-xs font-semibold uppercase text-ink-400">Specialization</p>
            <p className="mt-1 text-sm text-ink-700">{instructor.specialization}</p>
          </div>
          {instructor.certifications && (
            <div className="card p-5">
              <p className="text-xs font-semibold uppercase text-ink-400">Certifications</p>
              <p className="mt-1 text-sm text-ink-700">{instructor.certifications}</p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-bold text-ink-900">Courses by {instructor.fullName}</h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {instructor.courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        {instructor.courses.length === 0 && <p className="text-ink-500">No published courses yet.</p>}
      </div>
    </div>
  );
}
