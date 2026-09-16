import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { ThemeProvider } from "@/components/theme-provider";
import { I18nProvider } from "@/components/i18n-provider";
import { PreferenceSync } from "@/components/preference-sync";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getSettings } from "@/lib/settings";
import { getServerLocale } from "@/lib/i18n/server";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { dirForLocale } from "@/lib/i18n/config";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// The layout reads platform settings from the database on every request
// (header/footer branding), so nothing under it can be statically prerendered
// at build time -- that would run a DB query before a database even exists
// in the build environment.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: {
    default: "EduSphere | منصة الدورات التعليمية",
    template: "%s | EduSphere",
  },
  description:
    "احجز دورات تعليمية إلكترونية احترافية مع مدربين مؤهلين وبأوقات مرنة.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const [settings, locale] = await Promise.all([getSettings(), Promise.resolve(getServerLocale())]);
  const dict = getDictionary(locale);
  const dir = dirForLocale(locale);

  return (
    <html lang={locale} dir={dir} className={inter.variable} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col bg-white font-sans text-ink-900 dark:bg-ink-950 dark:text-ink-50">
        <ThemeProvider>
          <I18nProvider locale={locale} dict={dict}>
            <Providers>
              <PreferenceSync />
              <SiteHeader platformName={settings.platformName} />
              <main className="flex-1">{children}</main>
              <SiteFooter
                platformName={settings.platformName}
                contactEmail={settings.contactEmail}
                contactPhone={settings.contactPhone}
              />
            </Providers>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
