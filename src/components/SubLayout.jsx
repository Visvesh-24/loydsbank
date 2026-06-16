import { useState } from "react";
import SmartImage from "./SmartImage";
import { href, SECTION_LABEL } from "../lib/slug";

export function Breadcrumb({ section, title, light = false }) {
  const c = light ? "text-white/70" : "text-charcoal/55";
  const cur = light ? "text-white" : "text-charcoal";
  return (
    <nav className={`flex flex-wrap items-center gap-1.5 text-sm ${c}`} aria-label="Breadcrumb">
      <a href={href(section)} className="transition hover:underline">
        {SECTION_LABEL[section]}
      </a>
      <span aria-hidden>›</span>
      <span className={`font-semibold ${cur}`}>{title}</span>
    </nav>
  );
}

export function SubHero({ section, eyebrow, title, intro, image, dark = false, children }) {
  if (dark) {
    return (
      <section className="relative isolate overflow-hidden bg-forest-900 text-white">
        {image && (
          <SmartImage src={image} seed={2} alt="" className="absolute inset-0 h-full w-full" imgClass="h-full w-full opacity-35" />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-forest-900 via-forest-900/80 to-transparent" />
        <div className="container-x relative py-12 md:py-16">
          <Breadcrumb section={section} title={eyebrow} light />
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/80">{intro}</p>
          {children}
        </div>
      </section>
    );
  }
  return (
    <section className="border-b border-charcoal/10 bg-mint-pale">
      <div className="container-x grid items-center gap-8 py-12 md:grid-cols-2 md:py-16">
        <div>
          <Breadcrumb section={section} title={eyebrow} />
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight text-charcoal sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-lg text-charcoal/65">{intro}</p>
          {children}
        </div>
        {image && (
          <div className="overflow-hidden rounded-[2rem] shadow-card">
            <SmartImage src={image} seed={4} alt={title} className="h-64 w-full md:h-80" imgClass="h-full w-full" />
          </div>
        )}
      </div>
    </section>
  );
}

export function Faq({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="mx-auto max-w-3xl divide-y divide-charcoal/10 rounded-3xl border border-charcoal/10 bg-white">
      {items.map(([q, a], i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            aria-expanded={open === i}
          >
            <span className="font-display text-lg font-bold text-charcoal">{q}</span>
            <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full bg-mint text-forest transition-transform ${open === i ? "rotate-45" : ""}`}>
              +
            </span>
          </button>
          {open === i && <p className="animate-fadeIn px-6 pb-5 text-charcoal/65">{a}</p>}
        </div>
      ))}
    </div>
  );
}
