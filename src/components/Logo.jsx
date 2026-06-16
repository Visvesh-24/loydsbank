/**
 * Loyds — an antique, heritage-style wordmark.
 * A vintage coin/seal medallion (beaded "coin edge", twin rings, serif "L"
 * monogram and small heraldic stars) paired with an elegant Playfair Display
 * wordmark for an old-world banking feel.
 */
export default function Logo({ light = false, className = "" }) {
  const ink = light ? "#ffffff" : "#024731"; // primary
  const gold = light ? "#d4b765" : "#b08d3c"; // antique gold accent

  return (
    <span className={`inline-flex select-none items-center gap-2.5 ${className}`}>
      <Medallion ink={ink} gold={gold} />
      <span
        className="font-antique text-[27px] font-bold leading-none tracking-[0.02em]"
        style={{ color: ink }}
      >
        Lo<span style={{ color: gold }}>y</span>ds
      </span>
    </span>
  );
}

function Medallion({ ink, gold }) {
  return (
    <svg width="38" height="38" viewBox="0 0 64 64" aria-hidden="true" className="shrink-0">
      {/* coin edge — beaded ring */}
      <circle cx="32" cy="32" r="30" fill="none" stroke={gold} strokeWidth="2" strokeDasharray="1.6 2.6" strokeLinecap="round" />
      {/* twin rings */}
      <circle cx="32" cy="32" r="25.5" fill="none" stroke={ink} strokeWidth="2.2" />
      <circle cx="32" cy="32" r="22" fill="none" stroke={gold} strokeWidth="1" />
      {/* serif L monogram */}
      <text
        x="32"
        y="43"
        textAnchor="middle"
        fontFamily="'Playfair Display', Georgia, serif"
        fontWeight="700"
        fontSize="34"
        fill={ink}
      >
        L
      </text>
      {/* heraldic stars top & bottom */}
      <Star cx={32} cy={11.5} fill={gold} />
      <Star cx={32} cy={52.5} fill={gold} />
    </svg>
  );
}

function Star({ cx, cy, fill }) {
  // tiny 4-point diamond star
  const r = 2.4;
  return (
    <path
      d={`M${cx} ${cy - r} L${cx + r * 0.5} ${cy} L${cx} ${cy + r} L${cx - r * 0.5} ${cy} Z`}
      fill={fill}
    />
  );
}
