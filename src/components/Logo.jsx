/**
 * Loyds — a prancing black-horse emblem paired with a bold "LOYDS" wordmark.
 * Recreated as a scalable SVG. Supports a light variant for dark/green headers.
 *
 * (For a pixel-exact match to the supplied artwork, drop the PNG at
 *  public/loyds-logo.png and swap the <Horse/> for <img src="/loyds-logo.png" />.)
 */
export default function Logo({ light = false, className = "" }) {
  const horse = light ? "#ffffff" : "#0a3d2b";
  const ink = light ? "#ffffff" : "#111111";

  return (
    <span className={`inline-flex select-none items-center gap-2.5 ${className}`}>
      <Horse fill={horse} />
      <span
        className="font-display text-[26px] font-extrabold leading-none tracking-[-0.01em]"
        style={{ color: ink }}
      >
        LOYDS
      </span>
    </span>
  );
}

function Horse({ fill }) {
  // Heraldic horse head facing left (single silhouette path; eye as negative space).
  return (
    <svg width="42" height="42" viewBox="0 0 100 100" aria-hidden="true" className="shrink-0">
      {/* horse head & neck (heraldic), facing left; eye as negative space */}
      <path
        fill={fill}
        fillRule="evenodd"
        d="M16 66
          C 10 62 12 53 18 49
          L 33 38
          C 34 31 33 24 37 18
          L 41 9 L45 21
          L 50 11 L53 23
          C 58 33 62 47 62 62
          C 62 74 60 84 59 90
          L 47 90
          C 47 74 44 63 37 57
          C 31 63 25 67 18 67
          Z
          M41 44 a3 3 0 1 0 0.01 0 Z"
      />
    </svg>
  );
}
