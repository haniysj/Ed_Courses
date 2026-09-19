import { whatsappLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.9-4.44 9.9-9.9 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm0 1.67c2.2 0 4.27.86 5.82 2.41a8.2 8.2 0 012.42 5.82c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.32a8.2 8.2 0 01-1.26-4.36c0-4.54 3.7-8.23 8.25-8.23zm-4.5 4.73c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.03s.87 2.36.99 2.52c.12.16 1.7 2.6 4.13 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.15.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.19-.71-.63-1.19-1.42-1.33-1.66-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.35-.76-1.84-.2-.48-.4-.42-.55-.42z" />
    </svg>
  );
}

/** A full button, for pages where WhatsApp is a primary call-to-action (e.g. Contact Us). */
export function WhatsAppButton({
  phone,
  message,
  className,
  children,
}: {
  phone: string;
  message?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={whatsappLink(phone, message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "btn-primary inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] focus-visible:ring-[#25D366]",
        className
      )}
    >
      <WhatsAppIcon className="h-5 w-5" />
      {children}
    </a>
  );
}

/** A small round icon-only button, for inline use next to a phone number in a table or detail row. */
export function WhatsAppIconButton({ phone, message, country, title = "Contact via WhatsApp" }: { phone: string; message?: string; country?: string | null; title?: string }) {
  return (
    <a
      href={whatsappLink(phone, message, country)}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      aria-label={title}
      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white hover:bg-[#1ebe57]"
    >
      <WhatsAppIcon className="h-3.5 w-3.5" />
    </a>
  );
}
