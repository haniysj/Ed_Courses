"use client";

import Link from "next/link";
import { useI18n } from "@/components/i18n-provider";

export function RetakeSection() {
  const { t } = useI18n();

  return (
    <div className="mt-10 flex flex-col items-center gap-2 border-t border-ink-100 pt-8 text-center dark:border-ink-800">
      <Link href="/placement/test" className="btn-outline">
        {t("placement.retakeTest")}
      </Link>
      <p className="max-w-md text-xs text-ink-400 dark:text-ink-500">{t("placement.retakeCooldown", { days: 7 })}</p>
    </div>
  );
}
