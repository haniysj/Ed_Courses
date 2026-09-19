"use client";

import { getCoursePricing, type DiscountInput } from "@/lib/pricing";
import { Money } from "@/components/money";
import { useI18n } from "@/components/i18n-provider";
import { formatDateLtr } from "@/lib/utils";

/** Soft sand-coloured pill that sits behind the price only (not the whole row). */
const PILL =
  "inline-flex items-center rounded-full border border-[#dcc28a] bg-[#f8ecd2] font-bold text-[#6f4a10] dark:border-amber-700/50 dark:bg-amber-900/30 dark:text-amber-200";

/** The original price, struck through with a diagonal line that also crosses the currency symbol. */
function StruckMoney({ amount, currency, className = "" }: { amount: number; currency: string; className?: string }) {
  return (
    <span className={`relative inline-block text-ink-400 after:absolute after:inset-x-[-2px] after:top-1/2 after:h-[1.5px] after:-rotate-6 after:rounded-full after:bg-current dark:text-ink-500 ${className}`}>
      <Money amount={amount} currency={currency} weight="medium" />
    </span>
  );
}

export function PriceBreakdown({
  hourlyRate,
  durationHours,
  currency = "OMR",
  size = "md",
  discountType,
  discountValue,
  discountEndsAt,
}: {
  hourlyRate: number;
  durationHours: number;
  currency?: string;
  size?: "sm" | "md" | "lg";
} & DiscountInput) {
  const { t } = useI18n();
  const p = getCoursePricing(hourlyRate, durationHours, { discountType, discountValue, discountEndsAt });

  const ends =
    p.active && p.endsAt ? (
      <span className="text-amber-700 dark:text-amber-300">
        {t("courses.offerEndsOn")}: <strong className="font-semibold">{formatDateLtr(p.endsAt)}</strong>
      </span>
    ) : null;

  const percentBadge = p.active ? (
    <span className="rounded-full bg-rose-600 px-2 py-0.5 text-[11px] font-extrabold text-white" dir="ltr">
      -{p.percentOff}%
    </span>
  ) : null;

  if (size === "sm") {
    return (
      <div className="space-y-1.5">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs text-ink-500 dark:text-ink-400">{t("courses.totalPrice")}</span>
          <div className="flex items-center gap-2">
            {p.active && <StruckMoney amount={p.original} currency={currency} className="text-xs" />}
            <span className={`${PILL} px-3 py-1 text-sm`}>
              <Money amount={p.final} currency={currency} weight="bold" />
            </span>
          </div>
        </div>
        {p.active && (
          <div className="flex items-center justify-between gap-2 text-[11px]">
            <span>{ends}</span>
            {percentBadge}
          </div>
        )}
      </div>
    );
  }

  const pillClass = size === "lg" ? "px-5 py-2 text-2xl" : "px-4 py-1.5 text-xl";

  return (
    <div className="rounded-xl2 border border-ink-100 bg-white p-5 shadow-card dark:border-ink-800 dark:bg-ink-900">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-500 dark:text-ink-400">{t("courses.totalPrice")}</p>
        {p.active && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-600 px-2.5 py-0.5 text-xs font-extrabold text-white">
            <span>{t("courses.specialOffer")}</span>
            <span dir="ltr">-{p.percentOff}%</span>
          </span>
        )}
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
        <span className={`${PILL} ${pillClass}`}>
          <Money amount={p.final} currency={currency} weight="bold" />
        </span>
        {p.active && <StruckMoney amount={p.original} currency={currency} className="text-base" />}
      </div>
      {p.active && (
        <div className="mt-3 space-y-1 text-sm">
          <p className="text-emerald-700 dark:text-emerald-400">
            {t("courses.youSave")} <Money amount={p.savings} currency={currency} weight="medium" />
          </p>
          {ends && <p>{ends}</p>}
        </div>
      )}
    </div>
  );
}
