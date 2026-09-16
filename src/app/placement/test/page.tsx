"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useI18n } from "@/components/i18n-provider";

type PublicQuestion = {
  id: string;
  skill: "GRAMMAR" | "VOCABULARY" | "READING" | "LISTENING";
  topic: string;
  prompt: string;
  options: string[];
  audioText?: string | null;
  imageUrl?: string | null;
};

type VersionOption = { id: string; name: string; timeLimitMinutes: number; questionCount: number };

type Progress = { current: number; total: number };

function sectionLabel(skill: PublicQuestion["skill"], t: ReturnType<typeof useI18n>["t"]): string {
  if (skill === "READING") return t("placement.reading");
  if (skill === "LISTENING") return t("placement.listening");
  return t("placement.grammarVocab");
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const s = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
}

export default function PlacementTestPage() {
  const router = useRouter();
  const { t, locale } = useI18n();
  const { data: session } = useSession();

  const [phase, setPhase] = useState<"setup" | "testing" | "submitting">("setup");
  const [versions, setVersions] = useState<VersionOption[]>([]);
  const [versionId, setVersionId] = useState("");
  const [learnerName, setLearnerName] = useState("");
  const [learnerEmail, setLearnerEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [starting, setStarting] = useState(false);

  const [attemptId, setAttemptId] = useState<string | null>(null);
  const [question, setQuestion] = useState<PublicQuestion | null>(null);
  const [progress, setProgress] = useState<Progress>({ current: 1, total: 1 });
  const [selected, setSelected] = useState<number | null>(null);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [replaysLeft, setReplaysLeft] = useState(2);
  const [maxReplays, setMaxReplays] = useState(2);

  const questionStartRef = useRef<number>(Date.now());
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    fetch("/api/placement/versions")
      .then((r) => r.json())
      .then(setVersions)
      .catch(() => {});
    fetch("/api/settings")
      .then((r) => r.json())
      .then((s) => setMaxReplays(s.placementListeningReplays ?? 2))
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (session?.user?.name && !learnerName) setLearnerName(session.user.name);
    if (session?.user?.email && !learnerEmail) setLearnerEmail(session.user.email);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  useEffect(() => {
    if (phase !== "testing") return;
    timerRef.current = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          handleTimeUp();
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  async function handleTimeUp() {
    if (!attemptId) return;
    setPhase("submitting");
    await fetch(`/api/placement/attempts/${attemptId}/finish`, { method: "POST" });
    router.push(`/placement/result/${attemptId}`);
  }

  async function handleStart(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setStarting(true);
    try {
      const res = await fetch("/api/placement/attempts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ versionId: versionId || undefined, learnerName, learnerEmail }),
      });
      const data = await res.json();
      if (!res.ok) {
        if (data.error === "RETAKE_COOLDOWN") {
          setError(t("placement.retakeCooldown", { days: data.daysLeft }));
        } else {
          setError(data.error ?? "Unable to start the test.");
        }
        return;
      }
      setAttemptId(data.attemptId);
      setQuestion(data.question);
      setProgress(data.progress);
      setSecondsLeft(data.timeLimitMinutes * 60);
      setReplaysLeft(maxReplays);
      questionStartRef.current = Date.now();
      setPhase("testing");
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setStarting(false);
    }
  }

  function playAudio(text: string) {
    if (replaysLeft <= 0) return;
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.95;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    setReplaysLeft((r) => r - 1);
  }

  async function handleNext() {
    if (!attemptId || !question || selected === null) return;
    setPhase("submitting");
    const timeMs = Date.now() - questionStartRef.current;
    try {
      const res = await fetch(`/api/placement/attempts/${attemptId}/answer`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ questionId: question.id, selectedIndex: selected, timeMs }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Unable to submit your answer.");
        setPhase("testing");
        return;
      }
      if (data.done) {
        router.push(`/placement/result/${attemptId}`);
        return;
      }
      setQuestion(data.nextQuestion);
      setProgress(data.progress);
      setSelected(null);
      setReplaysLeft(maxReplays);
      questionStartRef.current = Date.now();
      setPhase("testing");
    } catch {
      setError("Network error. Please try again.");
      setPhase("testing");
    }
  }

  const progressPct = useMemo(() => Math.round((progress.current / Math.max(progress.total, 1)) * 100), [progress]);

  if (phase === "setup") {
    return (
      <div className="container-page max-w-lg py-14">
        <h1 className="text-2xl font-bold text-ink-900 dark:text-white">{t("placement.landingTitle")}</h1>
        <p className="mt-2 text-sm text-ink-500 dark:text-ink-400">{t("placement.disclaimer")}</p>

        <form onSubmit={handleStart} className="card mt-6 space-y-4 p-6">
          <div>
            <label className="label">{t("placement.chooseVersion")}</label>
            <select className="input" value={versionId} onChange={(e) => setVersionId(e.target.value)}>
              <option value="">{t("placement.letSystemChoose")}</option>
              {versions.map((v) => (
                <option key={v.id} value={v.id}>
                  {locale === "ar" ? `النسخة ${v.name}` : `Version ${v.name}`} ({v.timeLimitMinutes} {t("common.minutes")})
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="label">{t("placement.yourName")}</label>
            <input className="input" value={learnerName} onChange={(e) => setLearnerName(e.target.value)} />
          </div>
          <div>
            <label className="label">{t("placement.yourEmail")}</label>
            <input type="email" className="input" value={learnerEmail} onChange={(e) => setLearnerEmail(e.target.value)} />
          </div>

          {error && <p className="rounded-lg bg-red-50 p-3 text-sm text-red-700 dark:bg-red-950 dark:text-red-300">{error}</p>}

          <button type="submit" disabled={starting} className="btn-primary w-full">
            {starting ? t("common.loading") : t("placement.startTest")}
          </button>
        </form>
      </div>
    );
  }

  if (!question) return null;

  return (
    <div className="container-page max-w-2xl py-10">
      <div className="mb-4 flex items-center justify-between text-sm">
        <span className="font-semibold text-brand-700 dark:text-brand-400">{sectionLabel(question.skill, t)}</span>
        <span className="rounded-full bg-ink-100 px-3 py-1 font-mono text-ink-700 dark:bg-ink-800 dark:text-ink-200">
          {t("placement.timeRemaining")}: {formatTime(secondsLeft)}
        </span>
      </div>

      <div className="mb-2 h-2 w-full overflow-hidden rounded-full bg-ink-100 dark:bg-ink-800">
        <div className="h-full bg-brand-600 transition-all" style={{ width: `${progressPct}%` }} />
      </div>
      <p className="mb-6 text-xs text-ink-500 dark:text-ink-400">
        {t("placement.questionOf", { current: progress.current, total: progress.total })}
      </p>

      <div className="card p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-400">{question.topic}</p>

        {question.skill === "LISTENING" && question.audioText && (
          <div className="mt-3 flex items-center gap-3">
            <button
              type="button"
              onClick={() => playAudio(question.audioText!)}
              disabled={replaysLeft <= 0}
              className="btn-secondary btn-sm"
            >
              &#9658; {t("placement.playAudio")}
            </button>
            <span className="text-xs text-ink-400">
              {replaysLeft} {t("placement.replaysLeft")}
            </span>
          </div>
        )}

        <p className="mt-4 text-lg font-medium text-ink-900 dark:text-white">{question.prompt}</p>

        <div className="mt-5 space-y-3">
          {question.options.map((opt, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setSelected(i)}
              className={`w-full rounded-lg border p-4 text-start text-base transition-colors ${
                selected === i
                  ? "border-brand-500 bg-brand-50 dark:border-brand-500 dark:bg-brand-950"
                  : "border-ink-200 hover:border-brand-300 dark:border-ink-700 dark:hover:border-brand-600"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {error && <p className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-700 dark:bg-red-950 dark:text-red-300">{error}</p>}

      <button
        type="button"
        onClick={handleNext}
        disabled={selected === null || phase === "submitting"}
        className="btn-primary mt-6 w-full"
      >
        {progress.current >= progress.total ? t("placement.finishTest") : t("placement.submitAnswer")}
      </button>
    </div>
  );
}
