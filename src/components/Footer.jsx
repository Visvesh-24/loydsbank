import Logo from "./Logo";
import { FOOTER } from "../data/content";
import { slugify, href } from "../lib/slug";

const SOCIALS = ["X", "f", "in", "▶", "◎"];

// A few footer labels point at bespoke pages; the rest resolve to a generic
// (but fully rendered) info page via slugify so nothing dead-ends.
const FOOTER_ROUTES = {
  "Current accounts": ["personal", "current-accounts"],
  "Credit cards": ["personal", "credit-cards"],
  Mortgages: ["personal", "mortgage-calculator"],
  Savings: ["personal", "savings"],
  "Banking online": ["personal", "mobile-banking-app"],
  "Mobile banking app": ["personal", "mobile-banking-app"],
  "About Loyds": ["personal", "about-loyds"],
};

const linkHref = (label) => {
  const r = FOOTER_ROUTES[label];
  return r ? href(r[0], r[1]) : href("personal", slugify(label));
};

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/80">
      {/* App banner strip */}
      <div className="bg-forest">
        <div className="container-x flex flex-col items-start gap-5 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-display text-2xl font-extrabold text-white">Banking is better in the app</h3>
            <p className="mt-1 text-sm text-white/80">It's simple, secure and made for everyday life.</p>
          </div>
          <a href={href("personal", "mobile-banking-app")} className="btn bg-lime text-forest-deep hover:bg-lime-glow">
            More about our app
          </a>
        </div>
      </div>

      <div className="container-x grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
        {Object.entries(FOOTER).map(([title, links]) => (
          <div key={title}>
            <h4 className="mb-4 text-sm font-bold text-white">{title}</h4>
            <ul className="space-y-2.5 text-sm">
              {links.map((l) => (
                <li key={l}>
                  <a href={linkHref(l)} className="transition hover:text-lime">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="text-sm text-white/60">Connect with us</span>
            <div className="flex gap-2">
              {SOCIALS.map((s, i) => (
                <a key={i} href="#" onClick={(e) => e.preventDefault()} className="grid h-8 w-8 place-items-center rounded-full border border-white/20 text-xs transition hover:border-lime hover:text-lime">
                  {s}
                </a>
              ))}
            </div>
          </div>
          <a
            href="#top"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="text-sm font-semibold text-lime"
          >
            Back to top ↑
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 bg-charcoal-soft">
        <div className="container-x flex flex-col gap-4 py-8 text-xs leading-relaxed text-white/45 md:flex-row md:items-center md:justify-between">
          <Logo light className="opacity-90" />
          <p className="max-w-3xl">
            This is a non-commercial design prototype. "Loyds" is a fictional brand created for a UI/UX cloning
            challenge and is not affiliated with any real bank. All imagery is license-free via Unsplash. © 2026 Loyds Demo.
          </p>
        </div>
      </div>
    </footer>
  );
}
