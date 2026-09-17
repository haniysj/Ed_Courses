"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useI18n } from "@/components/i18n-provider";

export default function RegisterPage() {
  const router = useRouter();
  const { t } = useI18n();
  const [form, setForm] = useState({ name: "", email: "", password: "", phone: "", country: "" });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Unable to register");
        return;
      }
      await signIn("credentials", { email: form.email, password: form.password, redirect: false });
      router.push("/");
      router.refresh();
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container-page flex min-h-[70vh] items-center justify-center py-12">
      <div className="card animate-fade-in w-full max-w-md p-8">
        <h1 className="text-2xl font-bold text-ink-900 dark:text-white">{t("auth.createAccount")}</h1>
        <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">{t("auth.registerSubtitle")}</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="label" htmlFor="name">{t("booking.fullName")}</label>
            <input id="name" required className="input" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          </div>
          <div>
            <label className="label" htmlFor="email">{t("booking.email")}</label>
            <input id="email" type="email" required className="input" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          </div>
          <div>
            <label className="label" htmlFor="password">{t("auth.password")}</label>
            <input id="password" type="password" required minLength={8} className="input" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="label" htmlFor="phone">{t("booking.phone")}</label>
              <input id="phone" className="input" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            </div>
            <div>
              <label className="label" htmlFor="country">{t("booking.country")}</label>
              <input id="country" className="input" value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} />
            </div>
          </div>
          {error && <p className="rounded-lg bg-red-50 p-3 text-sm text-red-700 dark:bg-red-950 dark:text-red-300">{error}</p>}
          <button type="submit" disabled={loading} className="btn-primary w-full">
            {loading ? t("auth.creatingAccount") : t("nav.register")}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-ink-500 dark:text-ink-400">
          {t("auth.alreadyHaveAccount")} <Link href="/login" className="font-semibold text-brand-700 hover:underline dark:text-brand-400">{t("auth.signIn")}</Link>
        </p>
      </div>
    </div>
  );
}
