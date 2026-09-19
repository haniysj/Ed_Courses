"use client";

import Image from "next/image";
import Link from "next/link";
import { FORMAT_LABELS, LEVEL_LABELS, localize } from "@/lib/enums";
import { PriceBreakdown } from "@/components/price-breakdown";
import { formatDateLtr } from "@/lib/utils";
import { useI18n } from "@/components/i18n-provider";
import type { CourseCardData } from "@/lib/types";

export function CourseCard({ course }: { course: CourseCardData }) {
  const { t, locale } = useI18n();
  const upcoming = course.schedules
    .filter((s) => s.status === "OPEN" && new Date(s.date) >= new Date(new Date().setHours(0, 0, 0, 0)))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <div className="card hover-lift flex flex-col overflow-hidden">
      <div className="relative h-44 w-full overflow-hidden bg-ink-100 dark:bg-ink-800">
        {course.imageUrl && (
          <Image
            src={course.imageUrl}
            alt={course.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        )}
        <span className="absolute start-3 top-3 badge bg-white/90 text-ink-700 shadow-sm">
          {localize(LEVEL_LABELS, course.level, locale)}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-400">{course.category.name}</p>
          <h3 className="mt-1 text-lg font-bold text-ink-900 dark:text-white">
            <Link href={`/courses/${course.slug}`} className="hover:text-brand-700 dark:hover:text-brand-400">
              {course.title}
            </Link>
          </h3>
          <p className="mt-1 line-clamp-2 text-sm text-ink-500 dark:text-ink-400">{course.description}</p>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink-500 dark:text-ink-400">
          <span>
            {t("courseDetail.instructor")}: <strong className="text-ink-700 dark:text-ink-200">{course.instructor.fullName}</strong>
          </span>
          <span>
            {t("courses.duration")}: <strong className="text-ink-700 dark:text-ink-200">{course.durationHours}{locale === "ar" ? "س" : "h"}</strong>
          </span>
          <span>
            {t("courses.format")}: <strong className="text-ink-700 dark:text-ink-200">{localize(FORMAT_LABELS, course.format, locale)}</strong>
          </span>
        </div>

        <PriceBreakdown hourlyRate={course.hourlyRate} durationHours={course.durationHours} currency={course.currency} size="sm" discountType={course.discountType} discountValue={course.discountValue} discountEndsAt={course.discountEndsAt} />

        <div className="text-xs text-ink-500 dark:text-ink-400">
          {upcoming.length > 0 ? (
            <span>
              {t("courses.nextAvailable")}: <strong className="text-ink-700 dark:text-ink-200">{formatDateLtr(upcoming[0].date)}</strong>
            </span>
          ) : (
            <span className="text-amber-600 dark:text-amber-400">{t("courses.noUpcoming")}</span>
          )}
        </div>

        <Link href={`/courses/${course.slug}`} className="btn-primary mt-auto w-full">
          {t("courses.bookNow")}
        </Link>
      </div>
    </div>
  );
}
