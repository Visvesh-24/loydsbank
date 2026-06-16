import { NAV } from "../../data/content";
import { LEGAL } from "../../data/legal";
import { slugify, href, SECTION_LABEL } from "../../lib/slug";

export default function Sitemap() {
  return (
    <>
      <section className="border-b border-charcoal/10 bg-forest-deep text-white">
        <div className="container-x py-12 md:py-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/60">
            <a href={href("personal")} className="transition hover:text-white">Home</a>
            <span aria-hidden>›</span>
            <span className="font-semibold text-white">Sitemap</span>
          </nav>
          <h1 className="mt-4 font-antique text-4xl font-bold tracking-tight sm:text-5xl">Sitemap</h1>
          <p className="mt-3 max-w-2xl text-white/80">Every page on the Loyds website, all in one place.</p>
        </div>
      </section>

      <section className="py-14">
        <div className="container-x grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {Object.keys(NAV).map((section) => (
            <div key={section}>
              <a href={href(section)} className="font-display text-lg font-bold text-forest hover:underline">
                {SECTION_LABEL[section]}
              </a>
              <ul className="mt-4 space-y-2.5 text-sm">
                {NAV[section].map((label) => (
                  <li key={label}>
                    <a href={href(section, slugify(label))} className="text-charcoal/70 transition hover:text-forest">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <span className="font-display text-lg font-bold text-forest">Legal</span>
            <ul className="mt-4 space-y-2.5 text-sm">
              {Object.entries(LEGAL).map(([slug, page]) => (
                <li key={slug}>
                  <a href={href("personal", slug)} className="text-charcoal/70 transition hover:text-forest">
                    {page.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
