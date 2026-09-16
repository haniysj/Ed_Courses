"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useI18n } from "@/components/i18n-provider";

export function LearnerInfoForm({ attemptId }: { attemptId: string }) {
  const router = useRouter();
  const { locale } = useI18n();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    const res = await fetch(`/api/placement/attempts/${attemptId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ learnerName: name, learnerEmail: email }),
    });
    setSaving(false);
    if (res.ok) {
      setSaved(true);
      router.refresh();
    }
  }

  if (saved) return null;

  return (
    <form onSubmit={handleSave} className="card mt-6 space-y-3 p-5">
      <p className="text-sm font-medium text-ink-700 dark:text-ink-200">
        {locale === "ar"
          ? "أضف اسمك (اختياري) لتظهر في نتيجة الاختبار والشهادة القابلة للطباعة."
          : "Add your name (optional) so it appears on your printable result."}
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        <input className="input" placeholder={locale === "ar" ? "الاسم" : "Name"} value={name} onChange={(e) => setName(e.target.value)} />
        <input
          type="email"
          className="input"
          placeholder={locale === "ar" ? "البريد الإلكتروني (اختياري)" : "Email (optional)"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit" disabled={saving || !name.trim()} className="btn-secondary btn-sm">
        {locale === "ar" ? "حفظ" : "Save"}
      </button>
    </form>
  );
}
