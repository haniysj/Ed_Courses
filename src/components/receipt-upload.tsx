"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useI18n } from "@/components/i18n-provider";

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "application/pdf"];
const MAX_BYTES = 5 * 1024 * 1024;

function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export function ReceiptUpload({
  bookingId,
  existingFileName,
}: {
  bookingId: string;
  existingFileName?: string | null;
}) {
  const router = useRouter();
  const { locale } = useI18n();
  const isAr = locale === "ar";
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [uploadedName, setUploadedName] = useState<string | null>(existingFileName ?? null);

  async function handleFile(file: File) {
    setError(null);
    if (!ALLOWED_TYPES.includes(file.type)) {
      setError(isAr ? "الملفات المقبولة: JPG أو PNG أو WEBP أو PDF فقط." : "Only JPG, PNG, WEBP, or PDF files are accepted.");
      return;
    }
    if (file.size > MAX_BYTES) {
      setError(isAr ? "حجم الملف كبير جدًا. الحد الأقصى 5 ميجابايت." : "File is too large. Maximum size is 5MB.");
      return;
    }

    setUploading(true);
    try {
      const dataUrl = await readFileAsDataUrl(file);
      const res = await fetch(`/api/bookings/${bookingId}/receipt`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fileName: file.name, mimeType: file.type, dataUrl }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? (isAr ? "تعذّر رفع الملف." : "Unable to upload the file."));
        return;
      }
      setUploadedName(data.receiptFileName ?? file.name);
      router.refresh();
    } catch {
      setError(isAr ? "خطأ في الشبكة. حاول مرة أخرى." : "Network error. Please try again.");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="card p-5">
      <h3 className="font-bold text-ink-900 dark:text-white">{isAr ? "إيصال الدفع" : "Payment Receipt"}</h3>
      <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">
        {isAr
          ? "أرفق صورة أو ملف PDF لإيصال الدفع ليتحقق منه فريقنا."
          : "Attach a photo or PDF of your payment receipt so our team can verify it."}
      </p>

      {uploadedName && (
        <p className="mt-3 flex items-center gap-2 rounded-lg bg-green-50 p-3 text-sm text-green-700 dark:bg-green-950 dark:text-green-300">
          <span>&#10003;</span>
          {isAr ? `تم رفع: ${uploadedName}` : `Uploaded: ${uploadedName}`}
        </p>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,application/pdf"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
        }}
      />
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        disabled={uploading}
        className="btn-secondary btn-sm mt-3"
      >
        {uploading ? (isAr ? "جارٍ الرفع..." : "Uploading...") : uploadedName ? (isAr ? "استبدال الملف" : "Replace File") : isAr ? "رفع الإيصال" : "Upload Receipt"}
      </button>

      {error && <p className="mt-3 rounded-lg bg-red-50 p-3 text-sm text-red-700 dark:bg-red-950 dark:text-red-300">{error}</p>}
    </div>
  );
}
