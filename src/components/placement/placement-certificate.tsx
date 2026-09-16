"use client";

import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";
import { useI18n } from "@/components/i18n-provider";
import type { CefrLevel, PlacementSkill } from "@/lib/enums";
import { CEFR_LABELS } from "@/lib/enums";

type Props = {
  learnerName: string | null;
  levelLabel: string;
  qualifier: string;
  headwayHeadline: string;
  skillScores: Record<PlacementSkill, CefrLevel | null>;
  skillLabels: Record<PlacementSkill, string>;
  testDate: string;
  reference: string;
};

export function PlacementCertificate({
  learnerName,
  levelLabel,
  qualifier,
  headwayHeadline,
  skillScores,
  skillLabels,
  testDate,
  reference,
}: Props) {
  const { t, locale } = useI18n();
  const certRef = useRef<HTMLDivElement>(null);
  const [qrDataUrl, setQrDataUrl] = useState<string | null>(null);
  const [generating, setGenerating] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !reference) return;
    const verifyUrl = `${window.location.origin}/verify/${reference}`;
    QRCode.toDataURL(verifyUrl, { width: 160, margin: 1 }).then(setQrDataUrl).catch(() => {});
  }, [reference]);

  async function handleDownloadPdf() {
    if (!certRef.current) return;
    setGenerating(true);
    try {
      const [{ default: html2canvas }, { jsPDF }] = await Promise.all([import("html2canvas"), import("jspdf")]);
      const canvas = await html2canvas(certRef.current, { scale: 2, backgroundColor: "#ffffff" });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = (canvas.height * pageWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 10, pageWidth, Math.min(pageHeight, pdf.internal.pageSize.getHeight() - 20));
      pdf.save(`${reference || "placement-result"}.pdf`);
    } finally {
      setGenerating(false);
    }
  }

  function handlePrint() {
    window.print();
  }

  return (
    <div className="mt-10">
      <div className="mb-4 flex flex-wrap justify-center gap-3 print:hidden">
        <button type="button" onClick={handlePrint} className="btn-outline">
          {t("placement.printResult")}
        </button>
        <button type="button" onClick={handleDownloadPdf} disabled={generating} className="btn-primary">
          {generating ? t("common.loading") : t("placement.downloadPdf")}
        </button>
      </div>

      <div
        ref={certRef}
        className="mx-auto max-w-2xl rounded-xl2 border-2 border-brand-100 bg-white p-8 text-ink-900 shadow-soft dark:border-brand-900"
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        <div className="flex items-center justify-between border-b border-ink-100 pb-4">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 font-bold text-white">E</span>
            <span className="font-bold">EduSphere</span>
          </div>
          {qrDataUrl && <img src={qrDataUrl} alt="QR verification" width={64} height={64} />}
        </div>

        <h2 className="mt-5 text-center text-xl font-bold">{t("placement.certificateTitle")}</h2>
        <p className="mt-3 text-center text-sm text-ink-500">
          {t("placement.certificateConfirm")} <strong className="text-ink-900">{learnerName || (locale === "ar" ? "متعلم مجهول" : "Anonymous Learner")}</strong>{" "}
          {t("placement.certificateCompleted")}
        </p>

        <div className="mt-6 grid grid-cols-2 gap-4 text-center">
          <div className="rounded-lg bg-brand-50 p-4">
            <p className="text-xs text-ink-500">{t("placement.overallLevel")}</p>
            <p className="mt-1 text-lg font-extrabold text-brand-700">{levelLabel}</p>
            <p className="text-xs text-ink-500">{qualifier}</p>
          </div>
          <div className="rounded-lg bg-brand-50 p-4">
            <p className="text-xs text-ink-500">{t("placement.recommendedHeadway")}</p>
            <p className="mt-1 text-lg font-extrabold text-brand-700">{headwayHeadline}</p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-4 gap-2 text-center text-xs">
          {(Object.keys(skillLabels) as PlacementSkill[]).map((skill) => (
            <div key={skill} className="rounded-lg border border-ink-100 p-2">
              <p className="text-ink-500">{skillLabels[skill]}</p>
              <p className="font-bold text-ink-800">
                {skillScores[skill] ? CEFR_LABELS[skillScores[skill] as CefrLevel][locale].split(" ")[0] : "—"}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-ink-100 pt-4 text-xs text-ink-500">
          <span>
            {t("placement.testDate")}: {testDate}
          </span>
          <span>{reference}</span>
        </div>

        <p className="mt-4 text-center text-[10px] leading-relaxed text-ink-400">{t("placement.finalDisclaimer")}</p>
      </div>
    </div>
  );
}
