"use client";

import { getCoursePricing, type DiscountInput } from "@/lib/pricing";
import { Money } from "@/components/money";
import { useI18n } from "@/components/i18n-provider";
import { formatDateLtr } from "@/lib/utils";

/** The original price, struck through with a diagonal line that also crosses the currency symbol. */
function StruckMoney({ amount, currency, className = "" }: { amount: number; currency: string; className?: string }) {
  return (
    <span className={`relative inline-block opacity-80 after:absolute after:inset-x-[-2px] after:top-1/2 after:h-[1.5px] after:-rotate-6 after:rounded-full after:bg-current ${className}`}>
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

  const ends = p.active && p.endsAt ? (
    <span className="inline-flex items-center gap-1">
      {t("courses.offerEndsOn")}: <strong className="font-semibold">{formatDateLtr(p.endsAt)}</strong>
    </span>
  ) : null;

  if (size === "sm") {
    return (
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 px-4 py-2.5 text-white shadow-md shadow-brand-900/20 ring-1 ring-white/10">
        <span aria-hidden className="pointer-events-none absolute -end-6 -top-8 h-20 w-20 rounded-full bg-white/10" />
        <span aria-hidden className="pointer-events-none absolute -bottom-10 start-10 h-16 w-16 rounded-full bg-white/5" />
        <div className="relative flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[11px] font-medium leading-tight text-white/75">{t("courses.totalPrice")}</p>
            {p.active && (
              <p className="mt-0.5 text-[11px] text-white/70">
                <StruckMoney amount={p.original} currency={currency} />
              </p>
            )}
          </div>
          <div className="flex items-center gap-2">
            {p.active && (
              <span className="rounded-full bg-amber-400 px-2 py-0.5 text-[10px] font-extrabold text-amber-950" dir="ltr">
                -{p.percentOff}%
              </span>
            )}
            <span className="text-base font-bold leading-none">
              <Money amount={p.final} currency={currency} weight="bold" />
            </span>
          </div>
        </div>
        {ends && <p className="relative mt-1.5 border-t border-white/15 pt-1.5 text-[11px] text-amber-200">{ends}</p>}
      </div>
    );
  }

  const amountClass = size === "lg" ? "text-3xl font-extrabold" : "text-2xl font-extrabold";

  return (
    <div className="relative overflow-hidden rounded-xl2 bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 p-5 text-white shadow-lg shadow-brand-900/25 ring-1 ring-white/10">
      <span aria-hidden className="pointer-events-none absolute -end-10 -top-12 h-36 w-36 rounded-full bg-white/10" />
      <span aria-hidden className="pointer-events-none absolute -bottom-14 start-6 h-28 w-28 rounded-full bg-white/5" />
      <div className="relative">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-white/75">{t("courses.totalPrice")}</p>
          {p.active && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400 px-2.5 py-0.5 text-xs font-extrabold text-amber-950">
              <span>{t("courses.specialOffer")}</span>
              <span dir="ltr">-{p.percentOff}%</span>
            </span>
          )}
        </div>
        {p.active && (
          <div className="mt-3 text-base text-white/80">
            <StruckMoney amount={p.original} currency={currency} />
          </div>
        )}
        <div className={`${p.active ? "mt-1" : "mt-2"} ${amountClass}`}>
          <Money amount={p.final} currency={currency} weight="bold" />
        </div>
        {p.active && (
          <p className="mt-2 text-sm text-emerald-200">
            {t("courses.youSave")} <Money amount={p.savings} currency={currency} weight="medium" />
          </p>
        )}
        {ends && <p className="mt-3 border-t border-white/15 pt-3 text-sm text-amber-200">{ends}</p>}
      </div>
    </div>
  );
}
