"use client";

import { calculateTotalPrice } from "@/lib/pricing";
import { Money } from "@/components/money";
import { useI18n } from "@/components/i18n-provider";

export function PriceBreakdown({
  hourlyRate,
  durationHours,
  currency = "OMR",
  size = "md",
}: {
  hourlyRate: number;
  durationHours: number;
  currency?: string;
  size?: "sm" | "md" | "lg";
}) {
  const { t } = useI18n();
  const total = calculateTotalPrice(hourlyRate, durationHours);

  if (size === "sm") {
    return (
      <div className="flex items-baseline justify-between">
        <span className="text-xs text-ink-500 dark:text-ink-400">{t("courses.totalPrice")}</span>
        <span className="text-lg font-bold text-brand-700 dark:text-brand-400"><Money amount={total} currency={currency} weight="bold" /></span>
      </div>
    );
  }

  return (
    <div className="rounded-xl2 border border-brand-100 bg-brand-50 p-5 dark:border-brand-900 dark:bg-brand-950">
      <p className="text-xs font-semibold uppercase tracking-wide text-ink-500 dark:text-ink-400">{t("courses.totalPrice")}</p>
      <div className={size === "lg" ? "mt-2 text-4xl font-extrabold text-brand-700 dark:text-brand-400" : "mt-2 text-2xl font-extrabold text-brand-700 dark:text-brand-400"}>
        <Money amount={total} currency={currency} weight="bold" />
      </div>
    </div>
  );
}
