import Image from "next/image";
import Link from "next/link";
import { FORMAT_LABELS, LEVEL_LABELS } from "@/lib/enums";
import { PriceBreakdown } from "@/components/price-breakdown";
import { formatDate } from "@/lib/utils";
import type { CourseCardData } from "@/lib/types";

export function CourseCard({ course }: { course: CourseCardData }) {
  const upcoming = course.schedules
    .filter((s) => s.status === "OPEN" && new Date(s.date) >= new Date(new Date().setHours(0, 0, 0, 0)))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <div className="card flex flex-col overflow-hidden transition-shadow hover:shadow-soft">
      <div className="relative h-44 w-full bg-ink-100">
        {course.imageUrl && (
          <Image src={course.imageUrl} alt={course.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
        )}
        <span className="absolute left-3 top-3 badge bg-white/90 text-ink-700 shadow-sm">
          {LEVEL_LABELS[course.level as keyof typeof LEVEL_LABELS] ?? course.level}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">{course.category.name}</p>
          <h3 className="mt-1 text-lg font-bold text-ink-900">
            <Link href={`/courses/${course.slug}`} className="hover:text-brand-700">
              {course.title}
            </Link>
          </h3>
          <p className="mt-1 line-clamp-2 text-sm text-ink-500">{course.description}</p>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink-500">
          <span>Instructor: <strong className="text-ink-700">{course.instructor.fullName}</strong></span>
          <span>Duration: <strong className="text-ink-700">{course.durationHours}h</strong></span>
          <span>Format: <strong className="text-ink-700">{FORMAT_LABELS[course.format as keyof typeof FORMAT_LABELS] ?? course.format}</strong></span>
        </div>

        <PriceBreakdown hourlyRate={course.hourlyRate} durationHours={course.durationHours} currency={course.currency} size="sm" />

        <div className="text-xs text-ink-500">
          {upcoming.length > 0 ? (
            <span>Next available: <strong className="text-ink-700">{formatDate(upcoming[0].date)}</strong></span>
          ) : (
            <span className="text-amber-600">No upcoming dates</span>
          )}
        </div>

        <Link href={`/courses/${course.slug}`} className="btn-primary mt-auto w-full">
          Book Now
        </Link>
      </div>
    </div>
  );
}
