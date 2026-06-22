/**
 * Loyds wordmark — uses the supplied artwork (public/logo.png).
 * Forced to a single colour: pure black on light surfaces, pure white on dark
 * surfaces (footer), via CSS filters so the green accent is dropped.
 */
export default function Logo({ light = false, className = "" }) {
  return (
    <img
      src="/logo.png"
      alt="Loyds"
      className={`h-9 w-auto select-none ${className}`}
      style={{ filter: light ? "brightness(0) invert(1)" : "brightness(0)" }}
    />
  );
}
