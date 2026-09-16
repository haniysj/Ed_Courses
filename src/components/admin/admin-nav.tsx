"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/admin", label: "Dashboard", icon: "▦" },
  { href: "/admin/courses", label: "Courses", icon: "\u{1F4DA}" },
  { href: "/admin/instructors", label: "Instructors", icon: "\u{1F468}‍\u{1F3EB}" },
  { href: "/admin/schedules", label: "Schedules", icon: "\u{1F4C5}" },
  { href: "/admin/bookings", label: "Bookings", icon: "\u{1F4CB}" },
  { href: "/admin/learners", label: "Learners", icon: "\u{1F465}" },
  { href: "/admin/settings", label: "Settings", icon: "⚙️" },
];

export function AdminNav({ userName, mobile = false }: { userName: string; mobile?: boolean }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkList = (
    <nav className="flex flex-col gap-1">
      {LINKS.map((link) => {
        const active = link.href === "/admin" ? pathname === "/admin" : pathname.startsWith(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className={cn(
              "flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-ink-600 hover:bg-ink-50",
              active && "bg-brand-50 text-brand-700"
            )}
          >
            <span>{link.icon}</span>
            {link.label}
          </Link>
        );
      })}
    </nav>
  );

  if (mobile) {
    return (
      <div className="card p-3">
        <button className="btn-outline btn-sm w-full" onClick={() => setOpen((v) => !v)}>
          {open ? "Close Menu" : "Admin Menu"}
        </button>
        {open && <div className="mt-3">{linkList}</div>}
      </div>
    );
  }

  return (
    <div>
      <Link href="/" className="mb-6 flex items-center gap-2 px-1 text-lg font-bold text-ink-900">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white">E</span>
        Admin
      </Link>
      {linkList}
      <div className="mt-6 border-t border-ink-100 pt-4">
        <p className="px-3 text-xs text-ink-400">Signed in as</p>
        <p className="truncate px-3 text-sm font-semibold text-ink-800">{userName}</p>
        <button onClick={() => signOut({ callbackUrl: "/" })} className="btn-secondary btn-sm mt-3 w-full">
          Sign Out
        </button>
      </div>
    </div>
  );
}
