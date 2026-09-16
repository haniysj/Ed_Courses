import { calculateTotalPrice, formatCurrency } from "@/lib/pricing";

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
  const total = calculateTotalPrice(hourlyRate, durationHours);

  if (size === "sm") {
    return (
      <div className="flex items-baseline justify-between">
        <span className="text-xs text-ink-500">
          {formatCurrency(hourlyRate, currency)}/hr &times; {durationHours}h
        </span>
        <span className="text-lg font-bold text-brand-700">{formatCurrency(total, currency)}</span>
      </div>
    );
  }

  return (
    <div className="rounded-xl2 border border-brand-100 bg-brand-50 p-5">
      <div className="flex flex-wrap items-center gap-2 text-sm text-ink-600">
        <span className="font-semibold text-ink-800">{formatCurrency(hourlyRate, currency)} / hour</span>
        <span aria-hidden>&times;</span>
        <span className="font-semibold text-ink-800">{durationHours} hours</span>
        <span aria-hidden>=</span>
      </div>
      <div className={size === "lg" ? "mt-2 text-4xl font-extrabold text-brand-700" : "mt-2 text-2xl font-extrabold text-brand-700"}>
        {formatCurrency(total, currency)}
      </div>
      <p className="mt-1 text-xs text-ink-500">Total Course Price</p>
    </div>
  );
}
