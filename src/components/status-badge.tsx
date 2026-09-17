"use client";

import { cn } from "@/lib/utils";
import { useI18n } from "@/components/i18n-provider";

const STYLES: Record<string, string> = {
  PUBLISHED: "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300",
  DRAFT: "bg-ink-100 text-ink-600 dark:bg-ink-800 dark:text-ink-300",
  FULLY_BOOKED: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
  INACTIVE: "bg-ink-100 text-ink-500 dark:bg-ink-800 dark:text-ink-400",
  ARCHIVED: "bg-ink-100 text-ink-400 dark:bg-ink-800 dark:text-ink-500",

  OPEN: "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300",
  FULL: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
  CANCELLED: "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300",

  PENDING: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
  CONFIRMED: "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300",
  COMPLETED: "bg-brand-100 text-brand-700 dark:bg-brand-950 dark:text-brand-300",

  UNPAID: "bg-ink-100 text-ink-600 dark:bg-ink-800 dark:text-ink-300",
  PAID: "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300",
  REFUNDED: "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
  FAILED: "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300",
};

const LABELS: Record<string, { en: string; ar: string }> = {
  PUBLISHED: { en: "Published", ar: "منشورة" },
  DRAFT: { en: "Draft", ar: "مسودة" },
  FULLY_BOOKED: { en: "Fully Booked", ar: "مكتملة الحجز" },
  INACTIVE: { en: "Inactive", ar: "غير نشطة" },
  ARCHIVED: { en: "Archived", ar: "مؤرشفة" },
  OPEN: { en: "Available", ar: "متاح" },
  FULL: { en: "Full", ar: "مكتمل" },
  CANCELLED: { en: "Cancelled", ar: "ملغى" },
  PENDING: { en: "Pending", ar: "قيد الانتظار" },
  CONFIRMED: { en: "Confirmed", ar: "مؤكد" },
  COMPLETED: { en: "Completed", ar: "مكتمل" },
  UNPAID: { en: "Unpaid", ar: "غير مدفوع" },
  PAID: { en: "Paid", ar: "مدفوع" },
  REFUNDED: { en: "Refunded", ar: "مسترد" },
  FAILED: { en: "Failed", ar: "فشل" },
};

export function StatusBadge({ status }: { status: string }) {
  const { locale } = useI18n();
  return (
    <span className={cn("badge", STYLES[status] ?? "bg-ink-100 text-ink-600")}>
      {LABELS[status]?.[locale] ?? status}
    </span>
  );
}
