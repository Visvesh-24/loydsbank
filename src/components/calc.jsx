export const gbp = (n) =>
  (isFinite(n) ? n : 0).toLocaleString("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  });

export function Slider({ label, value, min, max, step, onChange, format, sub }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between">
        <label className="text-sm font-semibold text-charcoal/70">{label}</label>
        <span className="font-display text-lg font-bold text-forest">{format(value)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full outline-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-forest [&::-webkit-slider-thumb]:shadow"
        style={{ background: `linear-gradient(90deg,#024731 ${pct}%,#c9f3da ${pct}%)` }}
      />
      {sub && <p className="mt-1.5 text-xs text-charcoal/55">{sub}</p>}
    </div>
  );
}
