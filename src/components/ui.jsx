import { useEffect, useRef, useState } from "react";
import SmartImage from "./SmartImage";
import { SURVEY } from "../data/content";

/* ——— Scroll reveal ——— */
export function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setShown(true), io.disconnect()),
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${
        shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* ——— Section heading ——— */
export function SectionHead({ title, subtitle, center = true, eyebrow }) {
  return (
    <div className={`mb-9 ${center ? "text-center" : ""}`}>
      {eyebrow && <p className="eyebrow mb-2 text-emerald2">{eyebrow}</p>}
      <h2 className="font-display text-3xl font-extrabold tracking-tight text-charcoal sm:text-[34px]">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-charcoal/65 ${center ? "mx-auto max-w-2xl" : ""}`}>{subtitle}</p>
      )}
    </div>
  );
}

/* ——— Product card (image-topped) ——— */
export function ProductCard({ img, seed, title, body, cta, to = "#" }) {
  return (
    <a
      href={to}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-charcoal/10 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
    >
      <div className="h-44 overflow-hidden">
        <SmartImage
          src={img}
          seed={seed}
          alt={title}
          className="h-full w-full"
          imgClass="h-full w-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-bold text-charcoal">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal/65">{body}</p>
        <span className="mt-5">
          <span className="btn-outline !px-5 !py-2.5 text-sm transition group-hover:bg-charcoal group-hover:text-white">
            {cta}
          </span>
        </span>
      </div>
    </a>
  );
}

/* ——— Icon tile (support grid) ——— */
export function IconTile({ icon, title, body, link }) {
  return (
    <div className="flex gap-4">
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-mint text-2xl">{icon}</div>
      <div>
        <h3 className="font-display text-lg font-bold text-charcoal">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-charcoal/65">{body}</p>
        <a href="#" onClick={(e) => e.preventDefault()} className="link-underline mt-3 inline-block text-sm">
          {link} ›
        </a>
      </div>
    </div>
  );
}

/* ——— Survey results (shared Personal + Business) ——— */
export function SurveyResults() {
  return (
    <section className="bg-cream py-16">
      <div className="container-x">
        <SectionHead title="Independent service quality survey results" />
        <div className="mx-auto max-w-3xl rounded-3xl border border-charcoal/10 bg-white p-6 shadow-soft sm:p-8">
          <div className="mb-4 flex items-center justify-between text-xs font-bold uppercase tracking-wide text-charcoal/50">
            <span>Ranking</span>
            <span>Customers who'd recommend</span>
          </div>
          <ul className="space-y-3">
            {SURVEY.map((b, i) => (
              <li key={b.name} className="flex items-center gap-3">
                <span className="w-5 text-sm font-bold text-charcoal/50">{i + 1}</span>
                <span
                  className={`w-28 shrink-0 text-sm font-bold ${b.self ? "text-forest" : "text-charcoal"}`}
                >
                  {b.name}
                </span>
                <div className="h-5 flex-1 overflow-hidden rounded-full bg-mint-soft">
                  <div
                    className={`h-full rounded-full ${b.self ? "bg-forest" : "bg-emerald2"}`}
                    style={{ width: `${b.score}%` }}
                  />
                </div>
                <span className="w-12 text-right text-sm font-bold text-charcoal">{b.score}%</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs leading-relaxed text-charcoal/50">
            Results are based on an independent survey in which customers were asked how likely they'd be to
            recommend their provider to friends and family. Source: independent service quality survey, 2026.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ——— Callback / contact form with state + mock success ——— */
export function CallbackForm({ dark = false, title = "Request a callback" }) {
  const [form, setForm] = useState({ name: "", phone: "", time: "Morning", topic: "" });
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const base = dark ? "bg-white/10 border-white/25 text-white placeholder-white/50" : "bg-mint-pale border-charcoal/15";
  const labelC = dark ? "text-white/80" : "text-charcoal/70";

  if (sent) {
    return (
      <div className={`animate-fadeIn rounded-3xl p-8 text-center ${dark ? "bg-white/10" : "bg-mint-soft"}`}>
        <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-lime">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#024731" strokeWidth="3">
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className={`font-display text-xl font-bold ${dark ? "text-white" : "text-forest"}`}>
          Thanks, {form.name || "there"}!
        </h3>
        <p className={`mt-2 text-sm ${dark ? "text-white/75" : "text-charcoal/65"}`}>
          A member of our team will call you on{" "}
          <span className="font-semibold">{form.phone || "your number"}</span> in the{" "}
          {form.time.toLowerCase()}.
        </p>
        <button
          onClick={() => {
            setSent(false);
            setForm({ name: "", phone: "", time: "Morning", topic: "" });
          }}
          className={dark ? "btn-outline-light mt-6" : "btn-outline mt-6"}
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className={`rounded-3xl p-7 ${dark ? "bg-white/5 ring-1 ring-white/15" : "bg-white shadow-card ring-1 ring-charcoal/5"}`}
    >
      <h3 className={`font-display text-xl font-bold ${dark ? "text-white" : "text-charcoal"}`}>{title}</h3>
      <div className="mt-5 space-y-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <FormField label="Your name" className={base} labelC={labelC} value={form.name} onChange={set("name")} placeholder="Alex Morgan" />
          <FormField label="Phone number" className={base} labelC={labelC} value={form.phone} onChange={set("phone")} placeholder="07123 456789" type="tel" />
        </div>
        <label className="block">
          <span className={`mb-1 block text-xs font-semibold ${labelC}`}>Best time to call</span>
          <select
            value={form.time}
            onChange={set("time")}
            className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:border-forest focus:ring-2 focus:ring-lime/50 ${base}`}
          >
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
          </select>
        </label>
        <label className="block">
          <span className={`mb-1 block text-xs font-semibold ${labelC}`}>What's it about? (optional)</span>
          <textarea
            value={form.topic}
            onChange={set("topic")}
            rows={2}
            placeholder="Tell us a little about your enquiry…"
            className={`w-full resize-none rounded-xl border px-4 py-3 text-sm outline-none transition focus:border-forest focus:ring-2 focus:ring-lime/50 ${base}`}
          />
        </label>
      </div>
      <button type="submit" className={dark ? "btn bg-lime text-forest-deep hover:bg-lime-glow mt-5 w-full" : "btn-green mt-5 w-full"}>
        Request callback
      </button>
    </form>
  );
}

function FormField({ label, className, labelC, ...rest }) {
  return (
    <label className="block">
      <span className={`mb-1 block text-xs font-semibold ${labelC}`}>{label}</span>
      <input
        {...rest}
        required
        className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:border-forest focus:ring-2 focus:ring-lime/50 ${className}`}
      />
    </label>
  );
}
