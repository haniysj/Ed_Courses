import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getSettings } from "@/lib/settings";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// The layout reads platform settings from the database on every request
// (header/footer branding), so nothing under it can be statically prerendered
// at build time -- that would run a DB query before a database even exists
// in the build environment.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: {
    default: "EduSphere | Online Educational Courses",
    template: "%s | EduSphere",
  },
  description:
    "Book professional online courses with qualified instructors at flexible times. Browse courses, view instructor profiles, and manage your learning journey.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const settings = await getSettings();

  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <Providers>
          <SiteHeader platformName={settings.platformName} />
          <main className="flex-1">{children}</main>
          <SiteFooter
            platformName={settings.platformName}
            contactEmail={settings.contactEmail}
            contactPhone={settings.contactPhone}
          />
        </Providers>
      </body>
    </html>
  );
}
