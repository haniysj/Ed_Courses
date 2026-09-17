"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/components/i18n-provider";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader({ platformName }: { platformName: string }) {
  const pathname = usePathname();
  const { data: session } = useSession();
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/courses", label: t("nav.courses") },
    { href: "/instructors", label: t("nav.instructors") },
    { href: "/placement", label: t("nav.placementTest") },
    { href: "/about", label: t("nav.about") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-ink-100 bg-white/90 backdrop-blur dark:border-ink-800 dark:bg-ink-950/90 print:hidden">
      <div className="container-page flex h-16 items-center justify-between gap-2">
        <Link href="/" className="flex shrink-0 items-center gap-2 text-lg font-bold text-ink-900 dark:text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white">E</span>
          <span className="hidden sm:inline">{platformName}</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium text-ink-600 hover:bg-ink-50 hover:text-ink-900 dark:text-ink-300 dark:hover:bg-ink-800 dark:hover:text-white",
                pathname === link.href && "bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <LanguageSwitcher compact />
          <ThemeToggle />
          {session?.user ? (
            <>
              {session.user.role === "ADMIN" && (
                <Link href="/admin" className="btn-outline btn-sm">
                  {t("nav.adminDashboard")}
                </Link>
              )}
              <Link href="/my-bookings" className="btn-outline btn-sm">
                {t("nav.myBookings")}
              </Link>
              <button onClick={() => signOut({ callbackUrl: "/" })} className="btn-secondary btn-sm">
                {t("nav.signOut")}
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="btn-outline btn-sm">
                {t("nav.login")}
              </Link>
              <Link href="/register" className="btn-primary btn-sm">
                {t("nav.register")}
              </Link>
            </>
          )}
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher compact />
          <ThemeToggle />
          <button
            className="flex h-9 w-9 items-center justify-center rounded-md border border-ink-200 dark:border-ink-700 dark:text-ink-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className="text-lg">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-ink-100 bg-white px-4 pb-4 dark:border-ink-800 dark:bg-ink-950 lg:hidden">
          <nav className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-3 py-2.5 text-sm font-medium text-ink-700 hover:bg-ink-50 dark:text-ink-200 dark:hover:bg-ink-800",
                  pathname === link.href && "bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-ink-100 pt-3 dark:border-ink-800">
              {session?.user ? (
                <>
                  {session.user.role === "ADMIN" && (
                    <Link href="/admin" onClick={() => setOpen(false)} className="btn-outline btn-sm w-full">
                      {t("nav.adminDashboard")}
                    </Link>
                  )}
                  <Link href="/my-bookings" onClick={() => setOpen(false)} className="btn-outline btn-sm w-full">
                    {t("nav.myBookings")}
                  </Link>
                  <button onClick={() => signOut({ callbackUrl: "/" })} className="btn-secondary btn-sm w-full">
                    {t("nav.signOut")}
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login" onClick={() => setOpen(false)} className="btn-outline btn-sm w-full">
                    {t("nav.login")}
                  </Link>
                  <Link href="/register" onClick={() => setOpen(false)} className="btn-primary btn-sm w-full">
                    {t("nav.register")}
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
