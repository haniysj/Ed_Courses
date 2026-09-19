import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { PriceBreakdown } from "@/components/price-breakdown";
import { BookingForm } from "@/components/booking-form";
import { StatusBadge } from "@/components/status-badge";
import { Reveal } from "@/components/reveal";
import { FORMAT_LABELS, LEVEL_LABELS, localize } from "@/lib/enums";
import { formatTimeRange, formatDateLtr } from "@/lib/utils";
import { getServerLocale } from "@/lib/i18n/server";
import { getDictionary } from "@/lib/i18n/get-dictionary";

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

  const locale = getServerLocale();
  const t = getDictionary(locale);
  const objectives: string[] = JSON.parse(course.objectives || "[]");

  return (
    <div className="container-page py-10">
      <div className="grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-xs">
            <StatusBadge status={course.status} />
            <span className="badge bg-ink-100 text-ink-600 dark:bg-ink-800 dark:text-ink-300">{localize(LEVEL_LABELS, course.level, locale)}</span>
            <span className="badge bg-ink-100 text-ink-600 dark:bg-ink-800 dark:text-ink-300">{localize(FORMAT_LABELS, course.format, locale)}</span>
            <span className="text-ink-400">{course.category.name}</span>
          </div>

          <h1 className="text-3xl font-bold text-ink-900 dark:text-white sm:text-4xl">{course.title}</h1>
          <p className="mt-3 text-lg text-ink-500 dark:text-ink-400">{course.description}</p>

          {course.imageUrl && (
            <div className="relative mt-6 h-72 w-full overflow-hidden rounded-xl2 bg-ink-100 dark:bg-ink-800">
              <Image src={course.imageUrl} alt={course.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 66vw" />
            </div>
          )}

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Stat label={t.courses.duration} value={`${course.durationHours}${locale === "ar" ? "س" : "h"}`} />
            <Stat label={t.courseDetail.sessions} value={String(course.sessionsCount)} />
            <Stat label={t.courseDetail.maxLearners} value={String(course.maxLearners)} />
            <Stat label={t.courseDetail.courseCode} value={course.code} />
          </div>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-ink-900 dark:text-white">{t.courseDetail.description}</h2>
            <p className="mt-3 leading-relaxed text-ink-600 dark:text-ink-300">{course.description}</p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-ink-900 dark:text-white">{t.courseDetail.objectives}</h2>
            <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">{t.courseDetail.objectivesIntro}</p>
            <ul className="mt-3 space-y-2">
              {objectives.map((obj, i) => (
                <Reveal key={i} delay={i * 60}>
                  <li className="flex gap-2 text-ink-700 dark:text-ink-200">
                    <span className="mt-1 text-brand-600 dark:text-brand-400">&#10003;</span>
                    <span>{obj}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-ink-900 dark:text-white">{t.courseDetail.content}</h2>
            <div className="mt-3 space-y-3">
              {course.modules.map((m, i) => (
                <Reveal key={m.id} delay={i * 60}>
                  <div className="card hover-lift p-4">
                    <p className="font-semibold text-ink-900 dark:text-white">{m.title}</p>
                    <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">{m.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-ink-900 dark:text-white">{t.courseDetail.instructor}</h2>
            <div className="card mt-3 flex flex-col gap-4 p-5 sm:flex-row sm:items-center">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full bg-ink-100 dark:bg-ink-800">
                {course.instructor.photoUrl && (
                  <Image src={course.instructor.photoUrl} alt={course.instructor.fullName} fill className="object-cover" sizes="80px" />
                )}
              </div>
              <div className="flex-1">
                <p className="font-bold text-ink-900 dark:text-white">{course.instructor.fullName}</p>
                <p className="text-sm text-brand-700 dark:text-brand-400">{course.instructor.title}</p>
                <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">{course.instructor.qualifications}</p>
              </div>
              <Link href={`/instructors/${course.instructor.slug}`} className="btn-outline btn-sm shrink-0">
                {t.courseDetail.viewInstructorProfile}
              </Link>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-ink-900 dark:text-white">{t.courseDetail.availableDates}</h2>
            <div className="mt-3 overflow-x-auto rounded-xl2 border border-ink-100 dark:border-ink-800">
              <table className="min-w-full divide-y divide-ink-100 text-sm dark:divide-ink-800">
                <thead className="bg-ink-50 text-start text-xs uppercase text-ink-500 dark:bg-ink-800 dark:text-ink-400">
                  <tr>
                    <th className="px-4 py-3">{t.courseDetail.date}</th>
                    <th className="px-4 py-3">{t.courseDetail.time}</th>
                    <th className="px-4 py-3">{t.courseDetail.availability}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink-100 dark:divide-ink-800">
                  {course.schedules.map((s) => (
                    <tr key={s.id}>
                      <td className="px-4 py-3 font-medium text-ink-800 dark:text-ink-100">{formatDateLtr(s.date)}</td>
                      <td className="px-4 py-3 text-ink-600 dark:text-ink-300">{formatTimeRange(s.startTime, s.endTime)}</td>
                      <td className="px-4 py-3">
                        <StatusBadge status={s.seatsBooked >= s.capacity ? "FULL" : s.status} />
                        <span className="ms-2 text-xs text-ink-400">
                          {Math.max(0, s.capacity - s.seatsBooked)} {t.courseDetail.seatsLeft}
                        </span>
                      </td>
                    </tr>
                  ))}
                  {course.schedules.length === 0 && (
                    <tr>
                      <td colSpan={3} className="px-4 py-6 text-center text-ink-400">
                        {locale === "ar" ? "لا توجد جلسات مجدولة بعد." : "No sessions scheduled yet."}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <PriceBreakdown hourlyRate={course.hourlyRate} durationHours={course.durationHours} currency={course.currency} size="lg" discountType={course.discountType} discountValue={course.discountValue} discountEndsAt={course.discountEndsAt} />
          <div className="mt-6">
            {course.status === "PUBLISHED" ? (
              <BookingForm
                courseId={course.id}
                hourlyRate={course.hourlyRate}
                durationHours={course.durationHours}
                currency={course.currency}
                discountType={course.discountType}
                discountValue={course.discountValue}
                discountEndsAt={course.discountEndsAt}
                schedules={course.schedules}
              />
            ) : (
              <div className="card p-6 text-center text-sm text-ink-500 dark:text-ink-400">{t.courseDetail.notAvailable}</div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="card hover-lift p-4 text-center">
      <p className="text-lg font-bold text-ink-900 dark:text-white">{value}</p>
      <p className="text-xs text-ink-500 dark:text-ink-400">{label}</p>
    </div>
  );
}
