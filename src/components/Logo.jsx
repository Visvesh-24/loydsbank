/**
 * Loyds — a bold, typography-driven wordmark.
 * The "o" is rendered as a minimalist coin/ring monogram to feel premium & brand-y.
 */
export default function Logo({ light = false, className = "" }) {
  const text = light ? "text-white" : "text-forest";
  const ring = light ? "border-lime" : "border-emerald2";
  const dot = light ? "bg-lime" : "bg-emerald2";

  return (
    <span className={`inline-flex select-none items-center gap-[3px] font-display ${className}`}>
      <span className={`text-2xl font-extrabold tracking-tight ${text}`}>L</span>
      {/* monogram "o" — a coin ring */}
      <span
        className={`relative grid h-[22px] w-[22px] place-items-center rounded-full border-[3px] ${ring}`}
        aria-hidden="true"
      >
        <span className={`h-[6px] w-[6px] rounded-full ${dot}`} />
      </span>
      <span className={`text-2xl font-extrabold tracking-tight ${text}`}>yds</span>
    </span>
  );
}
