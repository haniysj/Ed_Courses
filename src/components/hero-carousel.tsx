"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useI18n } from "@/components/i18n-provider";

type Slide = {
  url: string;
  altAr: string;
  altEn: string;
};

const SLIDES: Slide[] = [
  {
    url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80",
    altAr: "معلّمة تقدّم درسًا عبر الإنترنت",
    altEn: "Teacher conducting an online lesson",
  },
  {
    url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=80",
    altAr: "طالبة تدرس باستخدام حاسوب محمول",
    altEn: "Student studying using a laptop",
  },
  {
    url: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=1600&q=80",
    altAr: "فصل دراسي افتراضي تفاعلي",
    altEn: "Interactive virtual classroom",
  },
  {
    url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80",
    altAr: "جلسة تدريب مهني احترافية",
    altEn: "Professional training session",
  },
  {
    url: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=1600&q=80",
    altAr: "متعلم يقرأ لتطوير لغته الإنجليزية",
    altEn: "Learner reading to build English skills",
  },
];

const INTERVAL_MS = 5500;

export function HeroCarousel() {
  const { locale } = useI18n();
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const advance = useCallback(() => {
    setIndex((i) => (i + 1) % SLIDES.length);
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(advance, INTERVAL_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [advance]);

  function goTo(i: number) {
    setIndex(i);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(advance, INTERVAL_MS);
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      {SLIDES.map((slide, i) => (
        <div
          key={slide.url}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === index ? 1 : 0 }}
          aria-hidden={i !== index}
        >
          <Image
            src={slide.url}
            alt={locale === "ar" ? slide.altAr : slide.altEn}
            fill
            priority={i === 0}
            className="object-cover"
            sizes="100vw"
          />
        </div>
      ))}
      {/* Overlay for text readability, tuned separately for light/dark */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-950/85 via-brand-900/75 to-brand-950/90 dark:from-black/85 dark:via-black/75 dark:to-black/90" />

      <div className="absolute bottom-5 start-1/2 z-10 flex -translate-x-1/2 gap-2 rtl:translate-x-1/2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            aria-current={i === index}
            className={`h-2 rounded-full transition-all ${i === index ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/70"}`}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={() => goTo((index - 1 + SLIDES.length) % SLIDES.length)}
        aria-label="Previous slide"
        className="absolute start-3 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/50 sm:flex"
      >
        <span className="rtl:-scale-x-100">&#8249;</span>
      </button>
      <button
        type="button"
        onClick={() => goTo((index + 1) % SLIDES.length)}
        aria-label="Next slide"
        className="absolute end-3 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/50 sm:flex"
      >
        <span className="rtl:-scale-x-100">&#8250;</span>
      </button>
    </div>
  );
}
