import { useState, useEffect } from "react";
import Logo from "./Logo";
import { NAV } from "../data/content";
import { slugify } from "../lib/slug";

const TABS = [
  { id: "personal", label: "Personal" },
  { id: "business", label: "Business" },
  { id: "private", label: "Private Banking" },
];

const SEARCHABLE = [
  ["Mortgage Calculator", "personal", "mortgage-calculator"],
  ["Help and interest rates", "personal", "help-and-interest-rates"],
  ["Report a lost card", "personal", "reporting-a-card-lost-or-fraud"],
  ["Current accounts", "personal", "current-accounts"],
  ["Credit cards", "personal", "credit-cards"],
  ["Loans", "personal", "loans"],
  ["Savings", "personal", "savings"],
  ["Business accounts", "business", "business-accounts"],
  ["Take payments", "business", "take-payments"],
  ["Private Banking", "private", "private-banking-accounts"],
  ["Financial advice", "private", "financial-advice"],
];

export default function Navbar({ section, slug, go, onAuth }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  // Close drawer when the route changes
  useEffect(() => setMenuOpen(false), [section, slug]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [menuOpen]);

  const sub = NAV[section] || [];
  const matches = query
    ? SEARCHABLE.filter(([label]) => label.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <header className="sticky top-0 z-50">
      {/* Tier 1 — segment tabs */}
      <div className="bg-forest-deep text-white">
        <div className="container-x flex h-9 items-center justify-between text-[13px]">
          <nav className="flex h-full">
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => go(t.id)}
                className={`relative h-full px-3 font-medium transition first:pl-0 ${
                  section === t.id ? "text-lime" : "text-white/75 hover:text-white"
                }`}
              >
                {t.label}
                {section === t.id && (
                  <span className="absolute inset-x-3 -bottom-px h-[3px] rounded-t bg-lime first:left-0" />
                )}
              </button>
            ))}
          </nav>
          <button onClick={() => onAuth("login")} className="hidden text-white/80 transition hover:text-white sm:block">
            Log in
          </button>
        </div>
      </div>

      {/* Tier 2 — main bar */}
      <div className="border-b border-charcoal/10 bg-white">
        <div className="container-x flex h-16 items-center gap-4">
          <button onClick={() => go("personal")} className="shrink-0" aria-label="Loyds home">
            <Logo />
          </button>

          <button
            onClick={() => setMenuOpen(true)}
            className="ml-1 flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-charcoal transition hover:bg-mint-soft"
            aria-expanded={menuOpen}
          >
            <Burger />
            <span className="hidden sm:inline">Menu</span>
          </button>

          {/* Search */}
          <div className={`relative ml-auto flex items-center transition-all duration-300 ${searchOpen ? "w-full max-w-md" : "w-44 sm:w-56"}`}>
            <svg className="pointer-events-none absolute left-3 text-charcoal/45" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4-4" strokeLinecap="round" />
            </svg>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setSearchOpen(true)}
              onBlur={() => setTimeout(() => setSearchOpen(false), 120)}
              placeholder="Search loyds.com"
              className="w-full rounded-full border border-charcoal/20 bg-mint-pale py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-forest focus:bg-white focus:ring-2 focus:ring-lime/50"
            />
            {searchOpen && query && (
              <div className="absolute left-0 top-full z-20 mt-2 w-full animate-fadeIn overflow-hidden rounded-2xl border border-charcoal/10 bg-white shadow-lift">
                {matches.length ? (
                  matches.map(([label, sec, sl]) => (
                    <button
                      key={label}
                      onMouseDown={() => {
                        go(sec, sl);
                        setQuery("");
                      }}
                      className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm hover:bg-mint-soft"
                    >
                      <span className="text-charcoal/40">↗</span> {label}
                    </button>
                  ))
                ) : (
                  <p className="px-4 py-3 text-sm text-charcoal/50">No results for "{query}"</p>
                )}
              </div>
            )}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <button onClick={() => onAuth("register")} className="btn-outline !px-5 !py-2.5">Register</button>
            <button onClick={() => onAuth("login")} className="btn-dark !px-5 !py-2.5">Log in</button>
          </div>
        </div>
      </div>

      {/* Tier 3 — page sub-nav */}
      <div className="hidden border-b border-charcoal/10 bg-lime/90 md:block">
        <div className="container-x flex h-11 items-center gap-1 overflow-x-auto no-scrollbar">
          {sub.map((label) => {
            const sl = slugify(label);
            const active = slug === sl;
            return (
              <button
                key={label}
                onClick={() => go(section, sl)}
                className={`whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-semibold transition ${
                  active ? "bg-white text-forest-deep" : "text-forest-deep hover:bg-white/60"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      <Drawer open={menuOpen} onClose={() => setMenuOpen(false)} section={section} slug={slug} go={go} onAuth={onAuth} />
    </header>
  );
}

function Burger() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
    </svg>
  );
}

function Drawer({ open, onClose, section, slug, go, onAuth }) {
  if (!open) return null;
  const links = NAV[section] || [];

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 animate-fadeIn bg-charcoal/50" onClick={onClose} />
      <aside className="absolute right-0 top-0 flex h-full w-[88%] max-w-sm animate-slideIn flex-col bg-white shadow-lift">
        <div className="flex items-center justify-between border-b border-charcoal/10 px-5 py-4">
          <Logo />
          <button onClick={onClose} aria-label="Close menu" className="grid h-9 w-9 place-items-center rounded-full text-charcoal/60 hover:bg-mint-soft">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="flex gap-2 border-b border-charcoal/10 p-4">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => go(t.id)}
              className={`flex-1 rounded-full px-2 py-2 text-xs font-bold transition ${
                section === t.id ? "bg-forest text-white" : "bg-mint-soft text-forest hover:bg-mint"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-3">
          {links.map((label) => {
            const sl = slugify(label);
            return (
              <button
                key={label}
                onClick={() => go(section, sl)}
                className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-[15px] font-medium transition hover:bg-mint-soft ${
                  slug === sl ? "bg-mint-soft text-forest" : "text-charcoal"
                }`}
              >
                {label}
                <span className="text-charcoal/30">›</span>
              </button>
            );
          })}
        </nav>

        <div className="space-y-2 border-t border-charcoal/10 p-4">
          <button onClick={() => onAuth("login")} className="btn-dark w-full">Log in</button>
          <button onClick={() => onAuth("register")} className="btn-outline w-full">Register</button>
        </div>
      </aside>
    </div>
  );
}
