import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { PriceBreakdown } from "@/components/price-breakdown";
import { BookingForm } from "@/components/booking-form";
import { StatusBadge } from "@/components/status-badge";
import { FORMAT_LABELS, LEVEL_LABELS } from "@/lib/enums";
import { formatDate, formatTimeRange } from "@/lib/utils";

export const dynamic = "force-dynamic";

async function getCourse(slug: string) {
  return prisma.course.findUnique({
    where: { slug },
    include: {
      instructor: true,
      category: true,
      modules: { orderBy: { order: "asc" } },
      schedules: { orderBy: { date: "asc" } },
    },
  });
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const course = await getCourse(params.slug);
  if (!course) return {};
  return { title: course.title, description: course.description };
}

export default async function CourseDetailsPage({ params }: { params: { slug: string } }) {
  const course = await getCourse(params.slug);
  if (!course || course.status === "ARCHIVED") notFound();

  const objectives: string[] = JSON.parse(course.objectives || "[]");

  return (
    <div className="container-page py-10">
      <div className="grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-xs">
            <StatusBadge status={course.status} />
            <span className="badge bg-ink-100 text-ink-600">{LEVEL_LABELS[course.level as keyof typeof LEVEL_LABELS]}</span>
            <span className="badge bg-ink-100 text-ink-600">{FORMAT_LABELS[course.format as keyof typeof FORMAT_LABELS]}</span>
            <span className="text-ink-400">{course.category.name}</span>
          </div>

          <h1 className="text-3xl font-bold text-ink-900 sm:text-4xl">{course.title}</h1>
          <p className="mt-3 text-lg text-ink-500">{course.description}</p>

          {course.imageUrl && (
            <div className="relative mt-6 h-72 w-full overflow-hidden rounded-xl2 bg-ink-100">
              <Image src={course.imageUrl} alt={course.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 66vw" />
            </div>
          )}

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Stat label="Duration" value={`${course.durationHours}h`} />
            <Stat label="Sessions" value={String(course.sessionsCount)} />
            <Stat label="Max Learners" value={String(course.maxLearners)} />
            <Stat label="Course Code" value={course.code} />
          </div>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-ink-900">Course Description</h2>
            <p className="mt-3 leading-relaxed text-ink-600">{course.description}</p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-ink-900">Learning Objectives</h2>
            <p className="mt-1 text-sm text-ink-500">By the end of this course, learners will be able to:</p>
            <ul className="mt-3 space-y-2">
              {objectives.map((obj, i) => (
                <li key={i} className="flex gap-2 text-ink-700">
                  <span className="mt-1 text-brand-600">&#10003;</span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-ink-900">Course Content</h2>
            <div className="mt-3 space-y-3">
              {course.modules.map((m) => (
                <div key={m.id} className="card p-4">
                  <p className="font-semibold text-ink-900">{m.title}</p>
                  <p className="mt-1 text-sm text-ink-500">{m.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-ink-900">Instructor</h2>
            <div className="card mt-3 flex flex-col gap-4 p-5 sm:flex-row sm:items-center">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full bg-ink-100">
                {course.instructor.photoUrl && (
                  <Image src={course.instructor.photoUrl} alt={course.instructor.fullName} fill className="object-cover" sizes="80px" />
                )}
              </div>
              <div className="flex-1">
                <p className="font-bold text-ink-900">{course.instructor.fullName}</p>
                <p className="text-sm text-brand-700">{course.instructor.title}</p>
                <p className="mt-1 text-sm text-ink-500">{course.instructor.qualifications}</p>
              </div>
              <Link href={`/instructors/${course.instructor.slug}`} className="btn-outline btn-sm shrink-0">
                View Instructor Profile
              </Link>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-ink-900">Available Dates &amp; Times</h2>
            <div className="mt-3 overflow-x-auto rounded-xl2 border border-ink-100">
              <table className="min-w-full divide-y divide-ink-100 text-sm">
                <thead className="bg-ink-50 text-left text-xs uppercase text-ink-500">
                  <tr>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3">Time</th>
                    <th className="px-4 py-3">Availability</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink-100">
                  {course.schedules.map((s) => (
                    <tr key={s.id}>
                      <td className="px-4 py-3 font-medium text-ink-800">{formatDate(s.date)}</td>
                      <td className="px-4 py-3 text-ink-600">{formatTimeRange(s.startTime, s.endTime)}</td>
                      <td className="px-4 py-3">
                        <StatusBadge status={s.seatsBooked >= s.capacity ? "FULL" : s.status} />
                        <span className="ml-2 text-xs text-ink-400">{Math.max(0, s.capacity - s.seatsBooked)} seats left</span>
                      </td>
                    </tr>
                  ))}
                  {course.schedules.length === 0 && (
                    <tr>
                      <td colSpan={3} className="px-4 py-6 text-center text-ink-400">No sessions scheduled yet.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <PriceBreakdown hourlyRate={course.hourlyRate} durationHours={course.durationHours} currency={course.currency} size="lg" />
          <div className="mt-6">
            {course.status === "PUBLISHED" ? (
              <BookingForm
                courseId={course.id}
                hourlyRate={course.hourlyRate}
                durationHours={course.durationHours}
                currency={course.currency}
                schedules={course.schedules}
              />
            ) : (
              <div className="card p-6 text-center text-sm text-ink-500">
                This course is not currently open for booking.
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="card p-4 text-center">
      <p className="text-lg font-bold text-ink-900">{value}</p>
      <p className="text-xs text-ink-500">{label}</p>
    </div>
  );
}
