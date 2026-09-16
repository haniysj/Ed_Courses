/**
 * Single source of truth for the platform's core calculation:
 *
 *   TOTAL COURSE PRICE = HOURLY RATE x COURSE DURATION (hours)
 *
 * Every place that shows or stores a course price must go through this
 * function so the formula never drifts between the catalogue, the course
 * detail page, the booking flow, and the admin dashboard.
 */
export function calculateTotalPrice(hourlyRate: number, durationHours: number): number {
  const total = hourlyRate * durationHours;
  return Math.round(total * 100) / 100;
}

export function formatCurrency(amount: number, currency = "OMR"): string {
  return `${currency} ${amount.toFixed(currency === "OMR" ? 3 : 2)}`;
}
