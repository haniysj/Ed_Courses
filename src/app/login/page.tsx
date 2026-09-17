"use client";

import { useState, Suspense } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useI18n } from "@/components/i18n-provider";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") ?? "/";
  const { t } = useI18n();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const res = await signIn("credentials", { email, password, redirect: false });
    setLoading(false);
    if (res?.error) {
      setError(t("auth.invalidCredentials"));
      return;
    }
    router.push(callbackUrl);
    router.refresh();
  }

  return (
    <div className="container-page flex min-h-[70vh] items-center justify-center py-12">
      <div className="card animate-fade-in w-full max-w-md p-8">
        <h1 className="text-2xl font-bold text-ink-900 dark:text-white">{t("auth.welcomeBack")}</h1>
        <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">{t("auth.signInSubtitle")}</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="label" htmlFor="email">{t("booking.email")}</label>
            <input id="email" type="email" required className="input" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label className="label" htmlFor="password">{t("auth.password")}</label>
            <input id="password" type="password" required className="input" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          {error && <p className="rounded-lg bg-red-50 p-3 text-sm text-red-700 dark:bg-red-950 dark:text-red-300">{error}</p>}
          <button type="submit" disabled={loading} className="btn-primary w-full">
            {loading ? t("auth.signingIn") : t("auth.signIn")}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-ink-500 dark:text-ink-400">
          {t("auth.noAccount")} <Link href="/register" className="font-semibold text-brand-700 hover:underline dark:text-brand-400">{t("nav.register")}</Link>
        </p>

        <div className="mt-6 rounded-lg bg-ink-50 p-3 text-xs text-ink-500 dark:bg-ink-800 dark:text-ink-400">
          <p className="font-semibold text-ink-600 dark:text-ink-300">Demo accounts</p>
          <p>Admin: admin@edusphere.om / Admin@123</p>
          <p>Learner: learner@edusphere.om / Learner@123</p>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
