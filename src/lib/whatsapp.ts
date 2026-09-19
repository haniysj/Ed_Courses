/**
 * WhatsApp click-to-chat links.
 *
 * WhatsApp needs the full international number (country code + number, digits
 * only). Phone numbers on this platform are entered in many formats:
 *   "+968 9123 4567", "00968 9123 4567", "96891234567" (already international)
 *   "9123 4567", "0501234567"                          (local, no country code)
 * so we normalise them, using the learner's country to supply a missing code.
 *
 * A link opens the chat in the WhatsApp account of whoever clicks it. So the
 * "Chat on WhatsApp" button on the site opens a chat from the visitor's own
 * WhatsApp to the platform's number, and the admin's buttons open a chat from
 * the admin's WhatsApp (which should be the platform's account) to the learner.
 */

const DEFAULT_DIAL_CODE = "968"; // Oman

// Dial codes by country name (English and Arabic, lower-case).
const DIAL_CODES: Record<string, string> = {
  oman: "968", "عمان": "968", "سلطنة عمان": "968",
  "united arab emirates": "971", uae: "971", "الإمارات": "971", "الامارات": "971", "الإمارات العربية المتحدة": "971",
  "saudi arabia": "966", ksa: "966", "السعودية": "966", "المملكة العربية السعودية": "966",
  kuwait: "965", "الكويت": "965",
  qatar: "974", "قطر": "974",
  bahrain: "973", "البحرين": "973",
  yemen: "967", "اليمن": "967",
  egypt: "20", "مصر": "20",
  jordan: "962", "الأردن": "962", "الاردن": "962",
  lebanon: "961", "لبنان": "961",
  iraq: "964", "العراق": "964",
  syria: "963", "سوريا": "963", "سورية": "963",
  palestine: "970", "فلسطين": "970",
  sudan: "249", "السودان": "249",
  morocco: "212", "المغرب": "212",
  algeria: "213", "الجزائر": "213",
  tunisia: "216", "تونس": "216",
  libya: "218", "ليبيا": "218",
  somalia: "252", "الصومال": "252",
  india: "91", "الهند": "91",
  pakistan: "92", "باكستان": "92", "الباكستان": "92",
  bangladesh: "880", "بنغلاديش": "880",
  "sri lanka": "94", "سريلانكا": "94",
  philippines: "63", "الفلبين": "63",
  indonesia: "62", "إندونيسيا": "62", "اندونيسيا": "62",
  turkey: "90", "تركيا": "90",
  "united kingdom": "44", uk: "44", england: "44", "بريطانيا": "44", "المملكة المتحدة": "44",
  "united states": "1", usa: "1", us: "1", "أمريكا": "1", "الولايات المتحدة": "1",
  canada: "1", "كندا": "1",
  germany: "49", "ألمانيا": "49", "المانيا": "49",
  france: "33", "فرنسا": "33",
  australia: "61", "أستراليا": "61", "استراليا": "61",
};

const ALL_CODES = Array.from(new Set(Object.values(DIAL_CODES))).sort((a, b) => b.length - a.length);

/** Returns digits only, in international format (country code first), or "" if unusable. */
export function normalizeWhatsAppNumber(phone: string, country?: string | null): string {
  const raw = (phone ?? "").trim();
  if (!raw) return "";
  const hasPlus = raw.startsWith("+");
  let digits = raw.replace(/[^\d]/g, "");
  if (!digits) return "";

  // Explicit international prefixes: "+968…" or "00968…"
  if (hasPlus) return digits;
  if (digits.startsWith("00")) return digits.replace(/^00+/, "");

  const dial = (country && DIAL_CODES[country.trim().toLowerCase()]) || DEFAULT_DIAL_CODE;

  // Already carries the country code (e.g. "96891234567").
  if (digits.startsWith(dial) && digits.length >= dial.length + 7) return digits;

  // Carries some other known country code and is too long to be a local number.
  if (digits.length > 10) {
    const other = ALL_CODES.find((c) => digits.startsWith(c));
    if (other) return digits;
  }

  // Local number: drop the trunk "0" and add the country code.
  digits = digits.replace(/^0+/, "");
  return dial + digits;
}

export function whatsappLink(phone: string, message?: string, country?: string | null): string {
  const number = normalizeWhatsAppNumber(phone, country);
  const text = message ? `&text=${encodeURIComponent(message)}` : "";
  // api.whatsapp.com/send is WhatsApp's canonical click-to-chat endpoint; it opens the
  // app on phones and WhatsApp Web / Desktop on computers.
  return `https://api.whatsapp.com/send?phone=${number}${text}`;
}

/** Opening message an admin sends to a learner about their booking (Arabic + English). */
export function learnerGreeting(name: string, reference?: string | null, courseTitle?: string): string {
  const ref = reference ? ` (${reference})` : "";
  const course = courseTitle ? ` – ${courseTitle}` : "";
  return `مرحبًا ${name}، معك فريق المنصة بخصوص حجزك${ref}${course}.\nHello ${name}, this is the team regarding your booking${ref}${course}.`;
}
