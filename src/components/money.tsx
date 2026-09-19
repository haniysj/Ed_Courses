import { OMR_SYMBOL, type OmrWeight } from "@/lib/omr-symbol";

/** The official Omani rial symbol. Inherits the surrounding text colour and scales with font size. */
export function OmrSymbol({ weight = "medium", className }: { weight?: OmrWeight; className?: string }) {
  const s = OMR_SYMBOL[weight];
  return (
    <svg
      viewBox={s.viewBox}
      aria-hidden="true"
      focusable="false"
      fill="currentColor"
      className={className}
      style={{ display: "inline-block", height: "0.72em", width: "auto", verticalAlign: "baseline", flexShrink: 0 }}
    >
      <path d={s.d} />
    </svg>
  );
}

/**
 * A price. Omani rials show the official symbol followed by the amount (three
 * decimals, as OMR is divided into 1,000 baisa). Other currencies fall back to
 * their code. Direction is forced LTR so "symbol amount" reads the same in
 * Arabic and English layouts.
 */
export function Money({ amount, currency = "OMR", weight = "medium", className = "" }: { amount: number; currency?: string; weight?: OmrWeight; className?: string }) {
  if (currency !== "OMR") {
    return <span dir="ltr" className={`whitespace-nowrap ${className}`}>{currency} {amount.toFixed(2)}</span>;
  }
  return (
    <span dir="ltr" className={`inline-flex items-baseline gap-[0.3em] whitespace-nowrap ${className}`}>
      <span className="sr-only">OMR </span>
      <OmrSymbol weight={weight} />
      <span>{amount.toFixed(3)}</span>
    </span>
  );
}
