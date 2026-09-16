import Link from "next/link";

export function SiteFooter({
  platformName,
  contactEmail,
  contactPhone,
}: {
  platformName: string;
  contactEmail: string;
  contactPhone: string;
}) {
  return (
    <footer className="border-t border-ink-100 bg-ink-900 text-ink-200">
      <div className="container-page grid gap-10 py-12 md:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2 text-lg font-bold text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white">E</span>
            {platformName}
          </div>
          <p className="text-sm text-ink-300">
            Book professional online courses with qualified instructors at flexible times.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-white">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/courses" className="hover:text-white">Courses</Link></li>
            <li><Link href="/instructors" className="hover:text-white">Instructors</Link></li>
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-white">Account</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/login" className="hover:text-white">Login</Link></li>
            <li><Link href="/register" className="hover:text-white">Register</Link></li>
            <li><Link href="/my-bookings" className="hover:text-white">My Bookings</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-white">Contact</h4>
          <ul className="space-y-2 text-sm text-ink-300">
            <li>{contactEmail}</li>
            <li>{contactPhone}</li>
            <li>Muscat, Sultanate of Oman</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-800 py-5 text-center text-xs text-ink-400">
        &copy; {new Date().getFullYear()} {platformName}. All rights reserved.
      </div>
    </footer>
  );
}
