"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { LOCALE_COOKIE, type Locale } from "@/lib/i18n/config";
import { useI18n } from "@/components/i18n-provider";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const router = useRouter();
  const { locale } = useI18n();
  const { data: session } = useSession();

  function setLocale(next: Locale) {
    if (next === locale) return;
    document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; SameSite=Lax`;
    if (session?.user) {
      fetch("/api/preferences", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ locale: next }),
      }).catch(() => {});
    }
    router.refresh();
  }

  return (
    <div className={compact ? "flex items-center gap-1 text-sm" : "flex items-center gap-1 rounded-full border border-ink-200 p-1 text-sm dark:border-ink-700"}>
      <button
        type="button"
        onClick={() => setLocale("ar")}
        className={`rounded-full px-3 py-1 font-medium transition-colors ${
          locale === "ar" ? "bg-brand-600 text-white" : "text-ink-500 hover:text-ink-800 dark:text-ink-400 dark:hover:text-ink-100"
        }`}
        aria-pressed={locale === "ar"}
      >
        العربية
      </button>
      <span className="text-ink-300 dark:text-ink-600">|</span>
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={`rounded-full px-3 py-1 font-medium transition-colors ${
          locale === "en" ? "bg-brand-600 text-white" : "text-ink-500 hover:text-ink-800 dark:text-ink-400 dark:hover:text-ink-100"
        }`}
        aria-pressed={locale === "en"}
      >
        English
      </button>
    </div>
  );
}
