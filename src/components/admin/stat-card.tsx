import Link from "next/link";

export function StatCard({ label, value, hint, href }: { label: string; value: string; hint?: string; href?: string }) {
  const content = (
    <>
      <p className="text-xs font-medium uppercase tracking-wide text-ink-400">{label}</p>
      <p className="mt-2 text-2xl font-extrabold text-ink-900 dark:text-white">{value}</p>
      {hint && <p className="mt-1 text-xs text-ink-500 dark:text-ink-400">{hint}</p>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className="card hover-lift block p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500">
        {content}
      </Link>
    );
  }

  return <div className="card hover-lift p-5">{content}</div>;
}
