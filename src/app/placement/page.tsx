import Link from "next/link";
import type { Metadata } from "next";
import { getServerLocale } from "@/lib/i18n/server";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export const metadata: Metadata = { title: "Placement Test" };

export default function PlacementLandingPage() {
  const locale = getServerLocale();
  const t = getDictionary(locale);

  return (
    <div className="container-page max-w-3xl py-14">
      <div className="text-center">
        <span className="text-5xl">🎓</span>
        <h1 className="mt-4 text-3xl font-bold text-ink-900 dark:text-white sm:text-4xl">{t.placement.landingTitle}</h1>
        <p className="mt-4 text-lg text-ink-500 dark:text-ink-400">{t.placement.landingIntro}</p>
        <Link href="/placement/test" className="btn-primary mt-8 inline-flex px-8 py-3 text-base">
          {t.placement.startNow}
        </Link>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {[
          { icon: "📝", title: locale === "ar" ? "قواعد ومفردات" : "Grammar & Vocabulary" },
          { icon: "📖", title: locale === "ar" ? "قراءة" : "Reading" },
          { icon: "🎧", title: locale === "ar" ? "استماع" : "Listening" },
        ].map((s) => (
          <div key={s.title} className="card p-5 text-center">
            <div className="text-2xl">{s.icon}</div>
            <p className="mt-2 font-semibold text-ink-800 dark:text-ink-100">{s.title}</p>
          </div>
        ))}
      </div>

      <div className="card mt-10 p-5 text-sm text-ink-500 dark:text-ink-400">
        <p>{t.placement.disclaimer}</p>
      </div>
    </div>
  );
}
