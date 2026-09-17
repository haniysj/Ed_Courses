export function StatCard({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="card hover-lift p-5">
      <p className="text-xs font-medium uppercase tracking-wide text-ink-400">{label}</p>
      <p className="mt-2 text-2xl font-extrabold text-ink-900 dark:text-white">{value}</p>
      {hint && <p className="mt-1 text-xs text-ink-500 dark:text-ink-400">{hint}</p>}
    </div>
  );
}
