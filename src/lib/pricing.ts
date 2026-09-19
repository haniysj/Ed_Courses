/**
 * Single source of truth for the platform's core calculation:
 *
 *   TOTAL COURSE PRICE = HOURLY RATE x COURSE DURATION (hours)
 *
 * Every place that shows or stores a course price must go through these
 * functions so the formula never drifts between the catalogue, the course
 * detail page, the booking flow, and the admin dashboard.
 *
 * A course may carry a time-limited discount (percentage or fixed amount off
 * the total). getCoursePricing() decides whether it is currently active and
 * returns both the original and the discounted price.
 */
export function calculateTotalPrice(hourlyRate: number, durationHours: number): number {
  const total = hourlyRate * durationHours;
  return Math.round(total * 100) / 100;
}

export function formatCurrency(amount: number, currency = "OMR"): string {
  return `${currency} ${amount.toFixed(currency === "OMR" ? 3 : 2)}`;
}

export const DISCOUNT_TYPES = ["NONE", "PERCENT", "AMOUNT"] as const;
export type DiscountType = (typeof DISCOUNT_TYPES)[number];

export type DiscountInput = {
  discountType?: string | null;
  discountValue?: number | null;
  discountEndsAt?: Date | string | null;
};

export type CoursePricing = {
  original: number;
  final: number;
  savings: number;
  percentOff: number;
  active: boolean;
  endsAt: Date | null;
};

const round2 = (n: number) => Math.round(n * 100) / 100;

export function getCoursePricing(
  hourlyRate: number,
  durationHours: number,
  discount?: DiscountInput | null,
  now: Date = new Date()
): CoursePricing {
  const original = calculateTotalPrice(hourlyRate, durationHours);
  const endsAt = discount?.discountEndsAt ? new Date(discount.discountEndsAt) : null;
  const type = discount?.discountType ?? "NONE";
  const value = Number(discount?.discountValue ?? 0);

  let savings = 0;
  if (type === "PERCENT" && value > 0) savings = round2(original * (Math.min(value, 100) / 100));
  else if (type === "AMOUNT" && value > 0) savings = round2(Math.min(value, original));

  const notExpired = !endsAt || endsAt.getTime() > now.getTime();
  const active = savings > 0 && notExpired;
  if (!active) return { original, final: original, savings: 0, percentOff: 0, active: false, endsAt };

  const final = Math.max(0, round2(original - savings));
  return { original, final, savings, percentOff: original > 0 ? Math.round((savings / original) * 100) : 0, active: true, endsAt };
}

/** The last moment of the chosen calendar day in Oman (UTC+4), so an offer "valid until 30 Sept" includes the whole of 30 Sept. */
export function endOfDayOman(dateStr: string): Date {
  return new Date(`${dateStr}T23:59:59.999+04:00`);
}

/** Inverse of endOfDayOman for pre-filling a date input. */
export function omanDateInputValue(date: Date | string | null | undefined): string {
  if (!date) return "";
  const d = new Date(new Date(date).getTime() + 4 * 3600 * 1000);
  return d.toISOString().slice(0, 10);
}
