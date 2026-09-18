import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { StatCard } from "@/components/admin/stat-card";
import { FL_CATEGORIES, FL_CATEGORY_INFO, FL_LEVELS, FL_LEVEL_INFO } from "@/lib/free-lessons/constants";

export const dynamic = "force-dynamic";

const pct = (a: number, b: number) => (b === 0 ? 0 : Math.round((a / b) * 100));

function Bar({ value, max }: { value: number; max: number }) {
  return (
    <div className="h-2 w-full rounded-full bg-ink-100 dark:bg-ink-800">
      <div className="h-2 rounded-full bg-brand-500" style={{ width: `${pct(value, max)}%` }} />
    </div>
  );
}

export default async function FreeLessonAnalyticsPage() {
  const [lessons, progress, attempts] = await Promise.all([
    prisma.freeLesson.findMany({ select: { id: true, title: true, level: true, category: true } }),
    prisma.freeLessonProgress.findMany({ select: { lessonId: true, userId: true, status: true, viewCount: true, scorePercent: true } }),
    prisma.freeLessonAttempt.findMany({ select: { lessonId: true, exerciseId: true, correct: true, answerText: true } }),
  ]);
  const byLesson = new Map(lessons.map((l) => [l.id, l]));

  // -------- headline numbers
  const learners = new Set(progress.map((p) => p.userId));
  const totalViews = progress.reduce((s, p) => s + p.viewCount, 0);
  const completed = progress.filter((p) => p.status === "COMPLETED").length;
  const scored = progress.filter((p) => p.scorePercent > 0);
  const avgScore = scored.length ? Math.round(scored.reduce((s, p) => s + p.scorePercent, 0) / scored.length) : 0;

  // -------- per lesson
  type Row = { id: string; title: string; views: number; started: number; completed: number; attempts: number; correct: number };
  const rows = new Map<string, Row>();
  for (const l of lessons) rows.set(l.id, { id: l.id, title: l.title, views: 0, started: 0, completed: 0, attempts: 0, correct: 0 });
  for (const p of progress) {
    const r = rows.get(p.lessonId);
    if (!r) continue;
    r.views += p.viewCount;
    r.started += 1;
    if (p.status === "COMPLETED") r.completed += 1;
  }
  for (const a of attempts) {
    const r = rows.get(a.lessonId);
    if (!r) continue;
    r.attempts += 1;
    if (a.correct) r.correct += 1;
  }
  const all = Array.from(rows.values());
  const popular = [...all].filter((r) => r.views > 0).sort((a, b) => b.views - a.views).slice(0, 8);
  const difficult = [...all].filter((r) => r.attempts >= 5).sort((a, b) => pct(a.correct, a.attempts) - pct(b.correct, b.attempts)).slice(0, 8);

  // -------- most common wrong answers
  const wrong = new Map<string, { exerciseId: string; lessonId: string; answer: string; n: number }>();
  for (const a of attempts) {
    if (a.correct) continue;
    const key = `${a.exerciseId}::${a.answerText}`;
    const e = wrong.get(key) ?? { exerciseId: a.exerciseId, lessonId: a.lessonId, answer: a.answerText, n: 0 };
    e.n += 1;
    wrong.set(key, e);
  }
  const topWrong = Array.from(wrong.values()).sort((a, b) => b.n - a.n).slice(0, 10);
  const exercises = topWrong.length
    ? await prisma.freeLessonExercise.findMany({ where: { id: { in: topWrong.map((w) => w.exerciseId) } }, select: { id: true, prompt: true } })
    : [];
  const promptOf = new Map(exercises.map((e) => [e.id, e.prompt]));

  // -------- by level and by category
  function bucket(keyOf: (lessonId: string) => string | undefined) {
    const m = new Map<string, { learners: Set<string>; started: number; completed: number; attempts: number; correct: number }>();
    const get = (k: string) => m.get(k) ?? m.set(k, { learners: new Set(), started: 0, completed: 0, attempts: 0, correct: 0 }).get(k)!;
    for (const p of progress) {
      const k = keyOf(p.lessonId);
      if (!k) continue;
      const b = get(k);
      b.learners.add(p.userId);
      b.started += 1;
      if (p.status === "COMPLETED") b.completed += 1;
    }
    for (const a of attempts) {
      const k = keyOf(a.lessonId);
      if (!k) continue;
      const b = get(k);
      b.attempts += 1;
      if (a.correct) b.correct += 1;
    }
    return m;
  }
  const byLevel = bucket((id) => byLesson.get(id)?.level);
  const byCategory = bucket((id) => byLesson.get(id)?.category);
  const maxStarted = Math.max(1, ...Array.from(byLevel.values()).map((b) => b.started), ...Array.from(byCategory.values()).map((b) => b.started));

  const table = (title: string, keys: readonly string[], m: typeof byLevel, label: (k: string) => string) => (
    <div className="card p-5">
      <h2 className="font-bold text-ink-900 dark:text-white">{title}</h2>
      <div className="mt-4 space-y-4">
        {keys.map((k) => {
          const b = m.get(k);
          return (
            <div key={k}>
              <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
                <span className="font-medium text-ink-800 dark:text-ink-100">{label(k)}</span>
                <span className="text-xs text-ink-500 dark:text-ink-400">
                  {b?.learners.size ?? 0} learners · {b?.completed ?? 0}/{b?.started ?? 0} completed · {b ? pct(b.correct, b.attempts) : 0}% correct
                </span>
              </div>
              <Bar value={b?.started ?? 0} max={maxStarted} />
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div>
      <Link href="/admin/free-lessons" className="text-sm text-brand-700 hover:underline dark:text-brand-400">← Free lessons</Link>
      <h1 className="mt-2 text-2xl font-bold text-ink-900 dark:text-white">Free Lessons Analytics</h1>
      <p className="mt-1 text-ink-500 dark:text-ink-400">See where learners engage and where they struggle.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <StatCard label="Learners" value={String(learners.size)} hint="registered learners who opened a lesson" />
        <StatCard label="Lesson views" value={String(totalViews)} />
        <StatCard label="Completed" value={String(completed)} />
        <StatCard label="Completion rate" value={`${pct(completed, progress.length)}%`} hint="completed / started" />
        <StatCard label="Average score" value={`${avgScore}%`} hint="exercise score per lesson" />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        {table("Progress by level", FL_LEVELS, byLevel, (k) => FL_LEVEL_INFO[k as keyof typeof FL_LEVEL_INFO].name.en)}
        {table("Progress by skill", FL_CATEGORIES, byCategory, (k) => FL_CATEGORY_INFO[k as keyof typeof FL_CATEGORY_INFO].name.en)}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="card overflow-x-auto p-5">
          <h2 className="font-bold text-ink-900 dark:text-white">Most popular lessons</h2>
          <table className="mt-3 min-w-full text-sm">
            <thead className="text-left text-xs uppercase text-ink-400"><tr><th className="py-2">Lesson</th><th>Views</th><th>Started</th><th>Completed</th></tr></thead>
            <tbody className="divide-y divide-ink-100 dark:divide-ink-800">
              {popular.map((r) => (
                <tr key={r.id}><td className="py-2 pe-3 text-ink-800 dark:text-ink-100">{r.title}</td><td>{r.views}</td><td>{r.started}</td><td>{r.completed}</td></tr>
              ))}
            </tbody>
          </table>
          {popular.length === 0 && <p className="mt-3 text-sm text-ink-400">No learner activity yet.</p>}
        </div>

        <div className="card overflow-x-auto p-5">
          <h2 className="font-bold text-ink-900 dark:text-white">Most difficult lessons</h2>
          <p className="text-xs text-ink-400">Lowest share of correct answers (needs at least 5 answers).</p>
          <table className="mt-3 min-w-full text-sm">
            <thead className="text-left text-xs uppercase text-ink-400"><tr><th className="py-2">Lesson</th><th>Correct</th><th>Answers</th></tr></thead>
            <tbody className="divide-y divide-ink-100 dark:divide-ink-800">
              {difficult.map((r) => (
                <tr key={r.id}><td className="py-2 pe-3 text-ink-800 dark:text-ink-100">{r.title}</td><td>{pct(r.correct, r.attempts)}%</td><td>{r.attempts}</td></tr>
              ))}
            </tbody>
          </table>
          {difficult.length === 0 && <p className="mt-3 text-sm text-ink-400">Not enough answers yet.</p>}
        </div>
      </div>

      <div className="card mt-6 overflow-x-auto p-5">
        <h2 className="font-bold text-ink-900 dark:text-white">Most common incorrect answers</h2>
        <table className="mt-3 min-w-full text-sm">
          <thead className="text-left text-xs uppercase text-ink-400"><tr><th className="py-2">Lesson</th><th>Question</th><th>Wrong answer given</th><th>Times</th></tr></thead>
          <tbody className="divide-y divide-ink-100 dark:divide-ink-800">
            {topWrong.map((w, i) => (
              <tr key={i} className="align-top">
                <td className="py-2 pe-3 text-ink-800 dark:text-ink-100">{byLesson.get(w.lessonId)?.title ?? "—"}</td>
                <td className="pe-3 text-ink-600 dark:text-ink-300">{(promptOf.get(w.exerciseId) ?? "—").slice(0, 90)}</td>
                <td className="pe-3 font-mono text-xs text-red-700 dark:text-red-400">{w.answer}</td>
                <td>{w.n}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {topWrong.length === 0 && <p className="mt-3 text-sm text-ink-400">No incorrect answers recorded yet.</p>}
      </div>
    </div>
  );
}
