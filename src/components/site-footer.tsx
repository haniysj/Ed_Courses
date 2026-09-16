"use client";

import Link from "next/link";
import { useI18n } from "@/components/i18n-provider";

export function SiteFooter({
  platformName,
  contactEmail,
  contactPhone,
}: {
  platformName: string;
  contactEmail: string;
  contactPhone: string;
}) {
  const { t } = useI18n();

  return (
    <footer className="border-t border-ink-800 bg-ink-900 text-ink-200 dark:border-ink-800 dark:bg-black print:hidden">
      <div className="container-page grid gap-10 py-12 md:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2 text-lg font-bold text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white">E</span>
            {platformName}
          </div>
          <p className="text-sm text-ink-300">{t("footer.tagline")}</p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-white">{t("footer.explore")}</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/courses" className="hover:text-white">{t("nav.courses")}</Link></li>
            <li><Link href="/instructors" className="hover:text-white">{t("nav.instructors")}</Link></li>
            <li><Link href="/placement" className="hover:text-white">{t("nav.placementTest")}</Link></li>
            <li><Link href="/about" className="hover:text-white">{t("nav.about")}</Link></li>
            <li><Link href="/contact" className="hover:text-white">{t("nav.contact")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-white">{t("footer.account")}</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/login" className="hover:text-white">{t("nav.login")}</Link></li>
            <li><Link href="/register" className="hover:text-white">{t("nav.register")}</Link></li>
            <li><Link href="/my-bookings" className="hover:text-white">{t("nav.myBookings")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-white">{t("footer.contact")}</h4>
          <ul className="space-y-2 text-sm text-ink-300">
            <li>{contactEmail}</li>
            <li>{contactPhone}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-800 py-5 text-center text-xs text-ink-400">
        &copy; {new Date().getFullYear()} {platformName}. {t("footer.rights")}
      </div>
    </footer>
  );
}
