import type { Section } from "@/lib/free-lessons/schema";
import { fl } from "@/lib/free-lessons/i18n";
import type { Locale } from "@/lib/i18n/config";
import { Rich } from "./rich";
import { SpeakButton } from "./speak-button";

const PART_COLORS = [
  "border-brand-300 bg-brand-50 text-brand-800 dark:border-brand-800 dark:bg-brand-950 dark:text-brand-200",
  "border-emerald-300 bg-emerald-50 text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-200",
  "border-amber-300 bg-amber-50 text-amber-800 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-200",
  "border-rose-300 bg-rose-50 text-rose-800 dark:border-rose-800 dark:bg-rose-950 dark:text-rose-200",
  "border-violet-300 bg-violet-50 text-violet-800 dark:border-violet-800 dark:bg-violet-950 dark:text-violet-200",
];

function Heading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-base font-bold text-ink-900 dark:text-white">{children}</h3>;
}

/** Renders the explanation side of a lesson. Lesson text is English, so this block is always LTR. */
export function LessonContent({ sections, locale }: { sections: Section[]; locale: Locale }) {
  const t = fl(locale);
  return (
    <div dir="ltr" lang="en" className="space-y-7 text-left text-[15px] leading-relaxed text-ink-700 dark:text-ink-200">
      {sections.map((s, i) => {
        switch (s.type) {
          case "text":
            return (
              <section key={i} className="space-y-2">
                {s.title && <Heading>{s.title}</Heading>}
                <p><Rich text={s.body} /></p>
              </section>
            );
          case "list":
            return (
              <section key={i} className="space-y-2">
                <Heading>{s.title}</Heading>
                <ul className="list-disc space-y-1.5 ps-5 marker:text-brand-500">
                  {s.items.map((it, j) => (
                    <li key={j}><Rich text={it} /></li>
                  ))}
                </ul>
              </section>
            );
          case "structure":
            return (
              <section key={i} className="space-y-2">
                <Heading>{s.title}</Heading>
                <div className="rounded-xl border border-brand-200 bg-brand-50 p-4 font-semibold text-brand-900 dark:border-brand-900 dark:bg-brand-950 dark:text-brand-100">
                  <Rich text={s.formula} />
                </div>
                {s.note && <p className="text-sm text-ink-500 dark:text-ink-400"><Rich text={s.note} /></p>}
              </section>
            );
          case "examples":
            return (
              <section key={i} className="space-y-3">
                <Heading>{s.title}</Heading>
                <div className="grid gap-3 sm:grid-cols-2">
                  {s.groups.map((g, j) => (
                    <div key={j} className={`rounded-xl border border-ink-100 p-3 dark:border-ink-800 ${s.groups.length === 1 ? "sm:col-span-2" : ""}`}>
                      {g.label && <p className="mb-1.5 text-xs font-bold uppercase tracking-wide text-brand-700 dark:text-brand-300">{g.label}</p>}
                      <ul className="space-y-1.5">
                        {g.items.map((it, k) => (
                          <li key={k} className="flex gap-2">
                            <span aria-hidden className="text-brand-500">›</span>
                            <span>
                              {it.text}
                              {it.note && <span className="ms-2 text-xs text-ink-400">({it.note})</span>}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            );
          case "vocab":
            return (
              <section key={i} className="space-y-3">
                {s.title && <Heading>{s.title}</Heading>}
                <div className="grid gap-4 md:grid-cols-2">
                  {s.words.map((w, j) => (
                    <article key={j} className="rounded-xl border border-ink-100 bg-white p-4 shadow-card dark:border-ink-800 dark:bg-ink-900">
                      <div className="flex items-start gap-3">
                        {(w.visual || w.imageUrl) && (
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-ink-50 text-3xl dark:bg-ink-800">
                            {w.imageUrl ? (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img src={w.imageUrl} alt={w.word} loading="lazy" className="h-full w-full object-cover" />
                            ) : (
                              <span role="img" aria-label={w.word}>{w.visual}</span>
                            )}
                          </div>
                        )}
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <p className="text-lg font-bold text-ink-900 dark:text-white">{w.word}</p>
                            <span className="badge bg-ink-100 text-ink-600 dark:bg-ink-800 dark:text-ink-300">{w.pos}</span>
                            <SpeakButton text={w.word} />
                          </div>
                          {w.pronunciation && <p className="text-sm text-ink-400">{w.pronunciation}</p>}
                        </div>
                      </div>
                      <p className="mt-3">{w.meaning}</p>
                      {w.meaningAr && <p dir="rtl" lang="ar" className="mt-1 text-sm text-ink-500 dark:text-ink-400">{w.meaningAr}</p>}
                      <p className="mt-2 rounded-lg bg-ink-50 px-3 py-2 text-sm italic dark:bg-ink-800">
                        <span className="not-italic font-semibold text-ink-500 dark:text-ink-400">{t.example}: </span>
                        {w.example}
                      </p>
                      {w.collocations.length > 0 && (
                        <div className="mt-2 flex flex-wrap items-center gap-1.5">
                          <span className="text-xs font-semibold text-ink-400">{t.collocations}:</span>
                          {w.collocations.map((c, k) => (
                            <span key={k} className="badge bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300">{c}</span>
                          ))}
                        </div>
                      )}
                      {(w.correct || w.incorrect) && (
                        <div className="mt-3 space-y-1 text-sm">
                          {w.incorrect && (
                            <p className="text-red-700 dark:text-red-400">
                              <span aria-hidden>❌ </span><span className="sr-only">{t.incorrect}: </span>{w.incorrect}
                            </p>
                          )}
                          {w.correct && (
                            <p className="text-emerald-700 dark:text-emerald-400">
                              <span aria-hidden>✓ </span><span className="sr-only">{t.correctUse}: </span>{w.correct}
                            </p>
                          )}
                          {w.note && <p className="text-xs text-ink-500 dark:text-ink-400">{w.note}</p>}
                        </div>
                      )}
                      {!w.correct && !w.incorrect && w.note && <p className="mt-2 text-xs text-ink-500 dark:text-ink-400">{w.note}</p>}
                    </article>
                  ))}
                </div>
              </section>
            );
          case "passage":
            return (
              <section key={i} className="space-y-2">
                <Heading>{s.title}</Heading>
                <blockquote className="rounded-xl border-s-4 border-brand-400 bg-ink-50 p-4 dark:bg-ink-800">
                  <p className="whitespace-pre-line">{s.text}</p>
                  {s.caption && <footer className="mt-2 text-xs text-ink-400">{s.caption}</footer>}
                </blockquote>
              </section>
            );
          case "annotated":
            return (
              <section key={i} className="space-y-2">
                <Heading>{s.title}</Heading>
                <ol className="space-y-2">
                  {s.parts.map((p, j) => (
                    <li key={j} className={`rounded-xl border-s-4 p-3 ${PART_COLORS[j % PART_COLORS.length]}`}>
                      <p className="text-xs font-bold uppercase tracking-wide">{p.label}</p>
                      <p className="mt-0.5 text-ink-800 dark:text-ink-100">{p.text}</p>
                    </li>
                  ))}
                </ol>
              </section>
            );
          case "compare":
            return (
              <section key={i} className="space-y-2">
                <Heading>{s.title}</Heading>
                <ul className="space-y-2">
                  {s.rows.map((r, j) => (
                    <li key={j} className="rounded-xl border border-ink-100 p-3 dark:border-ink-800">
                      <p className="text-red-700 dark:text-red-400"><span aria-hidden>❌ </span><span className="sr-only">{t.incorrect}: </span>{r.wrong}</p>
                      <p className="text-emerald-700 dark:text-emerald-400"><span aria-hidden>✓ </span><span className="sr-only">{t.correctUse}: </span>{r.right}</p>
                      {r.why && <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">{r.why}</p>}
                    </li>
                  ))}
                </ul>
              </section>
            );
          case "table":
            return (
              <section key={i} className="space-y-2">
                <Heading>{s.title}</Heading>
                <div className="overflow-x-auto rounded-xl border border-ink-100 dark:border-ink-800">
                  <table className="min-w-full text-sm">
                    <thead className="bg-brand-50 text-left text-xs font-bold uppercase tracking-wide text-brand-800 dark:bg-brand-950 dark:text-brand-200">
                      <tr>{s.headers.map((h, j) => <th key={j} scope="col" className="px-3 py-2">{h}</th>)}</tr>
                    </thead>
                    <tbody className="divide-y divide-ink-100 dark:divide-ink-800">
                      {s.rows.map((r, j) => (
                        <tr key={j}>
                          {r.map((c, k) => <td key={k} className={k === 0 ? "px-3 py-2 font-semibold text-ink-900 dark:text-white" : "px-3 py-2"}>{c}</td>)}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            );
          case "flow":
            return (
              <section key={i} className="space-y-2">
                <Heading>{s.title}</Heading>
                <ol className="space-y-2">
                  {s.steps.map((st, j) => (
                    <li key={j}>
                      <div className="rounded-xl border border-brand-200 bg-brand-50 p-3 dark:border-brand-900 dark:bg-brand-950">
                        <p className="font-semibold text-brand-900 dark:text-brand-100"><span aria-hidden>{j + 1}. ❓ </span>{st.question}</p>
                        <p className="mt-1.5 rounded-lg bg-white px-3 py-1.5 text-sm text-emerald-800 dark:bg-ink-900 dark:text-emerald-300">
                          <span className="font-bold">✓ Yes → </span>{st.yes}
                        </p>
                      </div>
                      <p className="py-1 ps-4 text-xs font-semibold text-ink-400" aria-hidden>✗ No ↓</p>
                    </li>
                  ))}
                  <li className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-amber-900 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-100">
                    <span className="font-bold">Otherwise → </span>{s.otherwise}
                  </li>
                </ol>
              </section>
            );
          case "tip":
            return (
              <aside key={i} className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-900 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-100">
                {s.title && <p className="text-xs font-bold uppercase tracking-wide">💡 {s.title}</p>}
                <p className={s.title ? "mt-1" : ""}><Rich text={s.body} /></p>
              </aside>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
