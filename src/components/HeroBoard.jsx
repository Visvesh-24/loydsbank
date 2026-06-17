import { href } from "../lib/slug";

/**
 * A "today's banking essentials" board — surfaces meaningful, real banking
 * terms (AER, APR, LTV, FSCS) instead of an app mockup.
 */
const ROWS = [
  { icon: "🏦", label: "Current accounts", value: "£175", note: "Switch offer", to: href("personal", "current-accounts") },
  { icon: "📈", label: "Easy-access savings", value: "4.05% AER", note: "Variable", to: href("personal", "savings") },
  { icon: "🏠", label: "Mortgages", value: "5% deposit", note: "First-time buyer", to: href("personal", "mortgage-calculator") },
  { icon: "💷", label: "Personal loans", value: "6.1% APR", note: "Representative", to: href("personal", "loans") },
];

export default function HeroBoard() {
  return (
    <div className="w-full max-w-sm rounded-[1.8rem] bg-white p-5 shadow-lift ring-1 ring-forest/5">
      <div className="mb-4 flex items-center justify-between">
        <p className="font-display text-sm font-bold uppercase tracking-wider text-forest">Today's rates</p>
        <span className="rounded-full bg-mint-soft px-3 py-1 text-[11px] font-semibold text-forest">FSCS protected</span>
      </div>

      <ul className="space-y-2.5">
        {ROWS.map((r) => (
          <li key={r.label}>
            <a
              href={r.to}
              className="group flex items-center gap-3 rounded-2xl bg-mint-pale px-3 py-3 transition hover:bg-mint-soft"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-lg shadow-sm">{r.icon}</span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-semibold text-charcoal">{r.label}</span>
                <span className="block text-[11px] text-charcoal/55">{r.note}</span>
              </span>
              <span className="text-right">
                <span className="block font-display text-base font-extrabold text-forest">{r.value}</span>
                <span className="text-[11px] font-semibold text-emerald2 opacity-0 transition group-hover:opacity-100">View ›</span>
              </span>
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex items-center gap-2 rounded-2xl bg-forest px-4 py-3 text-white">
        <span className="text-lg">🛡️</span>
        <p className="text-xs leading-snug text-white/85">
          Eligible deposits protected up to <span className="font-bold text-lime">£85,000</span> by the FSCS.
        </p>
      </div>
    </div>
  );
}
