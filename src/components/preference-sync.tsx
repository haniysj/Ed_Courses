"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { LOCALE_COOKIE, isLocale } from "@/lib/i18n/config";
import { useI18n } from "@/components/i18n-provider";

function readCookie(name: string): string | undefined {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`))
    ?.split("=")[1];
}

/**
 * Restores a logged-in user's saved language/theme preference when they
 * arrive on a device or browser that doesn't have the cookie yet (e.g. a
 * fresh session after clearing cookies, or a different device).
 */
export function PreferenceSync() {
  const { data: session, status } = useSession();
  const { locale } = useI18n();
  const { setTheme, theme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    if (status !== "authenticated" || !session?.user) return;

    let changed = false;

    const cookieLocale = readCookie(LOCALE_COOKIE);
    if (!cookieLocale && isLocale(session.user.locale) && session.user.locale !== locale) {
      document.cookie = `${LOCALE_COOKIE}=${session.user.locale}; path=/; max-age=31536000; SameSite=Lax`;
      changed = true;
    }

    if (session.user.theme && (session.user.theme === "light" || session.user.theme === "dark") && session.user.theme !== theme) {
      setTheme(session.user.theme);
    }

    if (changed) router.refresh();
    // Only run this reconciliation once per session load.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return null;
}
