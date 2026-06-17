import SmartImage from "../../components/SmartImage";
import { SubHero, Faq } from "../../components/SubLayout";
import { Reveal, SectionHead, CallbackForm } from "../../components/ui";

export default function InfoPage({ data }) {
  const { section, eyebrow, title, intro, hero, dark, highlights, cards, features, faqs } = data;

  return (
    <>
      <SubHero section={section} eyebrow={eyebrow} title={title} intro={intro} image={hero} dark={dark}>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href="#contact" className={dark ? "btn bg-lime text-forest-deep hover:bg-lime-glow" : "btn-green"}>
            Request a callback
          </a>
          <a href="#detail" className={dark ? "btn-outline-light" : "btn-outline"}>
            Learn more
          </a>
        </div>
      </SubHero>

      {/* Highlights strip */}
      {highlights && (
        <section className="bg-forest py-8 text-white">
          <div className="container-x grid grid-cols-3 divide-x divide-white/15 text-center">
            {highlights.map(([k, label]) => (
              <div key={label} className="px-2">
                <p className="font-display text-3xl font-extrabold sm:text-4xl">{k}</p>
                <p className="mt-1 text-xs text-white/75 sm:text-sm">{label}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <div id="detail" />

      {/* Product cards */}
      {cards && (
        <section className="py-16">
          <div className="container-x">
            <SectionHead title="Compare your options" subtitle="Pick the one that fits — you can switch or upgrade later." />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {cards.map((c, i) => (
                <Reveal key={c.title} delay={(i % 3) * 90}>
                  <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-charcoal/10 bg-white shadow-card transition hover:-translate-y-1.5 hover:shadow-lift">
                    <div className="relative h-40 overflow-hidden">
                      <SmartImage src={c.img} seed={i} alt={c.title} className="h-full w-full" imgClass="h-full w-full transition-transform duration-500 group-hover:scale-105" />
                      {c.tag && (
                        <span className="absolute left-4 top-4 rounded-full bg-forest px-3 py-1 text-xs font-bold text-white">{c.tag}</span>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-display text-xl font-bold text-charcoal">{c.title}</h3>
                      <p className="mt-2 flex-1 text-sm text-charcoal/65">{c.body}</p>
                      <a href="#contact" className="btn-outline mt-5 !py-2.5 group-hover:bg-charcoal group-hover:text-white">{c.cta}</a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Alternating feature rows */}
      {features && (
        <section className={cards ? "bg-cream py-16" : "py-16"}>
          <div className="container-x space-y-14">
            {features.map((f, i) => (
              <Reveal key={f.title}>
                <div className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <div className="overflow-hidden rounded-[2rem] shadow-card">
                    <SmartImage src={f.img} seed={i + 5} alt={f.title} className="h-64 w-full md:h-80" imgClass="h-full w-full" />
                  </div>
                  <div>
                    <h2 className="font-display text-3xl font-extrabold text-charcoal">{f.title}</h2>
                    <p className="mt-3 text-charcoal/65">{f.body}</p>
                    {f.bullets && (
                      <ul className="mt-5 space-y-2">
                        {f.bullets.map((b) => (
                          <li key={b} className="flex items-center gap-3 text-charcoal/80">
                            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-lime text-xs font-bold text-forest-deep">✓</span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      {faqs && (
        <section className="py-16">
          <div className="container-x">
            <SectionHead title="Frequently asked questions" />
            <Faq items={faqs} />
          </div>
        </section>
      )}

      {/* Contact / CTA */}
      <section id="contact" className="bg-cream py-16">
        <div className="container-x grid items-start gap-10 lg:grid-cols-2">
          <div>
            <span className="eyebrow text-emerald2">Get in touch</span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-charcoal sm:text-4xl">
              Ready to talk it through?
            </h2>
            <p className="mt-4 text-charcoal/65">
              Leave your details and a member of our team will call you back at a time that suits. It only takes a minute.
            </p>
            <div className="mt-6 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-soft">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-mint text-xl">📞</span>
              <div>
                <p className="text-sm text-charcoal/60">Prefer to call?</p>
                <p className="font-display text-lg font-bold text-forest">0800 055 5181</p>
              </div>
            </div>
          </div>
          <CallbackForm title="Request a callback" />
        </div>
      </section>
    </>
  );
}
