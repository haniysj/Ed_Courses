import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatDate(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

/** Same as formatDate, wrapped in an LTR isolate so the day/month/year order survives inside RTL (Arabic) text. Use for on-screen text only. */
export function formatDateLtr(date: Date | string): string {
  return "⁦" + formatDate(date) + "⁩";
}

export function formatTimeRange(startTime: string, endTime: string): string {
  return `${startTime} – ${endTime}`;
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}
