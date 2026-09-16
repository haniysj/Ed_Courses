"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/instructors", label: "Instructors" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader({ platformName }: { platformName: string }) {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink-100 bg-white/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold text-ink-900">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white">E</span>
          {platformName}
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium text-ink-600 hover:bg-ink-50 hover:text-ink-900",
                pathname === link.href && "bg-brand-50 text-brand-700"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          {session?.user ? (
            <>
              {session.user.role === "ADMIN" && (
                <Link href="/admin" className="btn-outline btn-sm">
                  Admin Dashboard
                </Link>
              )}
              <Link href="/my-bookings" className="btn-outline btn-sm">
                My Bookings
              </Link>
              <button onClick={() => signOut({ callbackUrl: "/" })} className="btn-secondary btn-sm">
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="btn-outline btn-sm">
                Login
              </Link>
              <Link href="/register" className="btn-primary btn-sm">
                Register
              </Link>
            </>
          )}
        </div>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-md border border-ink-200 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="text-lg">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-ink-100 bg-white px-4 pb-4 md:hidden">
          <nav className="flex flex-col gap-1 pt-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-3 py-2.5 text-sm font-medium text-ink-700 hover:bg-ink-50",
                  pathname === link.href && "bg-brand-50 text-brand-700"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-ink-100 pt-3">
              {session?.user ? (
                <>
                  {session.user.role === "ADMIN" && (
                    <Link href="/admin" onClick={() => setOpen(false)} className="btn-outline btn-sm w-full">
                      Admin Dashboard
                    </Link>
                  )}
                  <Link href="/my-bookings" onClick={() => setOpen(false)} className="btn-outline btn-sm w-full">
                    My Bookings
                  </Link>
                  <button onClick={() => signOut({ callbackUrl: "/" })} className="btn-secondary btn-sm w-full">
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login" onClick={() => setOpen(false)} className="btn-outline btn-sm w-full">
                    Login
                  </Link>
                  <Link href="/register" onClick={() => setOpen(false)} className="btn-primary btn-sm w-full">
                    Register
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
