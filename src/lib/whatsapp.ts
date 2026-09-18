/**
 * Builds a wa.me link from a phone number in any common format
 * (+968 9123 4567, 00968-9123-4567, etc). wa.me only accepts digits
 * (country code + number, no leading +), so everything else is stripped.
 */
export function whatsappLink(phone: string, message?: string): string {
  const digits = phone.replace(/[^\d]/g, "").replace(/^0+/, "");
  const query = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${digits}${query}`;
}
