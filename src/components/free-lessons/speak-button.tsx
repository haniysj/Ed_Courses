"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/components/i18n-provider";
import { fl } from "@/lib/free-lessons/i18n";

/** Reads a word aloud with the browser's built-in speech synthesis (no audio files needed). */
export function SpeakButton({ text }: { text: string }) {
  const { locale } = useI18n();
  const t = fl(locale);
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    setSupported(typeof window !== "undefined" && "speechSynthesis" in window);
  }, []);

  if (!supported) return null;

  return (
    <button
      type="button"
      onClick={() => {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = "en-GB";
        u.rate = 0.9;
        window.speechSynthesis.speak(u);
      }}
      className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-50 text-sm text-brand-700 hover:bg-brand-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:bg-brand-950 dark:text-brand-300"
      aria-label={`${t.listen}: ${text}`}
      title={t.listen}
    >
      <span aria-hidden>🔊</span>
    </button>
  );
}
