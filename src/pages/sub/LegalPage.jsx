import { slugify, href } from "../../lib/slug";

export default function LegalPage({ data }) {
  const { title, updated, intro, sections } = data;

  return (
    <>
      {/* Document header */}
      <section className="border-b border-charcoal/10 bg-forest-deep text-white">
        <div className="container-x py-12 md:py-16">
          <nav className="flex flex-wrap items-center gap-1.5 text-sm text-white/60" aria-label="Breadcrumb">
            <a href={href("personal")} className="transition hover:text-white">Home</a>
            <span aria-hidden>›</span>
            <span className="font-semibold text-white">Legal</span>
          </nav>
          <h1 className="mt-4 font-antique text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
          <p className="mt-3 max-w-2xl text-white/80">{intro}</p>
          <p className="mt-4 text-xs uppercase tracking-wider text-white/50">Last updated: {updated}</p>
        </div>
      </section>

      <section className="py-14">
        <div className="container-x grid gap-12 lg:grid-cols-[240px_1fr]">
          {/* Table of contents */}
          <aside className="hidden lg:block">
            <div className="sticky top-32">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-charcoal/50">On this page</p>
              <ul className="space-y-2 border-l border-charcoal/10">
                {sections.map((s) => (
                  <li key={s.h}>
                    <a
                      href={`#${slugify(s.h)}`}
                      className="-ml-px block border-l-2 border-transparent py-1 pl-4 text-sm text-charcoal/65 transition hover:border-forest hover:text-forest"
                    >
                      {s.h}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Body */}
          <article className="max-w-2xl">
            {sections.map((s) => (
              <div key={s.h} id={slugify(s.h)} className="mb-10 scroll-mt-32">
                <h2 className="font-display text-xl font-bold text-charcoal">{s.h}</h2>
                {s.p?.map((para, i) => (
                  <p key={i} className="mt-3 leading-relaxed text-charcoal/70">{para}</p>
                ))}
                {s.list && (
                  <ul className="mt-4 space-y-2">
                    {s.list.map((item) => (
                      <li key={item} className="flex gap-3 text-charcoal/70">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald2" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div className="mt-12 rounded-2xl bg-mint-soft p-6">
              <h3 className="font-display text-lg font-bold text-forest">Need help?</h3>
              <p className="mt-2 text-sm text-charcoal/70">
                If you have any questions about this policy, please{" "}
                <a href={href("personal", "contact-us")} className="link-underline">contact us</a>.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
