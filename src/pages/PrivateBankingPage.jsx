import { IMG } from "../data/images";
import SmartImage from "../components/SmartImage";
import { href } from "../lib/slug";
import { Reveal, SectionHead, CallbackForm } from "../components/ui";

const EVERYDAY = [
  {
    img: IMG.pbEveryday1,
    title: "Private Banking service",
    body: "Our Private Banking service is designed for customers with £250,000 or more in savings or investments, or an annual income of £750,000 or more — excluding personal pensions or property.",
    cta: "Private Banking accounts",
    to: href("private", "private-banking-accounts"),
  },
  {
    img: IMG.pbMayfair,
    title: "Mayfair Banking",
    body: "Our Mayfair service is for clients with £2 million or more in savings and/or investments or an annual income of £500,000 or more. A face-to-face relationship with a Private Banking manager well versed in your circumstances.",
    cta: "Mayfair Banking accounts",
    to: href("private", "mayfair-banking"),
  },
];

const STANDALONE = [
  { img: IMG.pbLending, title: "Specialist Lending", body: "For complex or unique borrowing requirements, our Specialist Lending team are on hand to help finance your ambitions.", cta: "Specialist Lending", to: href("private", "specialist-lending"), tall: true },
  { img: IMG.pbEstates, title: "Estates administration", body: "Our Estate Administration Service can relieve the burden placed on executors following bereavement, taking care of the financial and legal matters that arise.", cta: "Estate Administration", to: href("private", "estate-administration") },
  { img: IMG.pbTrustee, title: "Trustee services", body: "Our Professional Trustee Services can help you preserve assets for future generations — set up a trust in your lifetime or transfer an existing one.", cta: "Professional Trustee Service", to: href("private", "trustee-services"), tall: true },
];

export default function PrivateBankingPage() {
  return (
    <>
      {/* Dark hero */}
      <section className="relative isolate overflow-hidden bg-forest-900 text-white">
        <SmartImage src={IMG.pbHero} seed={0} alt="" className="absolute inset-0 h-full w-full" imgClass="h-full w-full opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-900 via-forest-900/80 to-transparent" />
        <div className="container-x relative py-24 md:py-32">
          <Reveal>
            <span className="eyebrow text-lime">Loyds Private Banking</span>
            <h1 className="mt-3 max-w-2xl font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-7xl">
              The best way forward
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              Private Banking to help you make the most of your wealth — with people who take the time to
              understand what matters to you.
            </p>
            <a href="#contact" className="btn bg-lime text-forest-deep hover:bg-lime-glow mt-8">Request a callback</a>
          </Reveal>
        </div>
      </section>

      {/* Relationship-led intro */}
      <section className="py-20">
        <div className="container-x max-w-3xl text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold text-charcoal sm:text-4xl">
              We call it <span className="italic text-forest">'relationship-led banking.'</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-charcoal/65">
              At Loyds Private Banking, we understand that many of our customers lead demanding lives and have
              needs that go beyond conventional banking. That's why we take care of them personally. We introduce
              customers to specialist partners to ensure they safely navigate the complex world of wealth.
            </p>
            <a href="#contact" className="btn-outline mt-8">Request a callback</a>
          </Reveal>
        </div>
      </section>

      {/* Everyday Banking service */}
      <section className="bg-cream py-16">
        <div className="container-x">
          <SectionHead title="Everyday Banking service" />
          <div className="grid gap-6 md:grid-cols-3">
            {/* Testimonial card */}
            <Reveal className="md:col-span-1">
              <div className="flex h-full flex-col justify-between rounded-3xl bg-forest p-7 text-white">
                <p className="font-display text-lg leading-relaxed">
                  "At Loyds Private Banking, we are passionate about achieving the best for our customers. We do
                  this by proactively introducing them to specialist partners when required."
                </p>
                <div className="mt-6">
                  <p className="font-bold">Deborah Burton</p>
                  <p className="text-sm text-white/70">Managing Director, UK Private Banking</p>
                  <button className="btn-outline-light mt-5 !py-2">Why choose us?</button>
                </div>
              </div>
            </Reveal>
            {EVERYDAY.map((c, i) => (
              <Reveal key={c.title} delay={(i + 1) * 90}>
                <div className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card">
                  <SmartImage src={c.img} seed={i + 2} alt={c.title} className="h-44 w-full" imgClass="h-full w-full" />
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-xl font-bold text-charcoal">{c.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal/65">{c.body}</p>
                    <a href={c.to} className="btn-dark mt-5 !py-2.5">{c.cta}</a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Already a customer */}
      <section className="py-16">
        <div className="container-x">
          <SectionHead title="Already a Private Banking customer?" subtitle="There are many benefits to being a Private Banking customer. We've detailed some below." />
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="rounded-3xl border border-charcoal/10 bg-mint-pale p-8">
                <span className="text-3xl">🎧</span>
                <h3 className="mt-3 font-display text-xl font-bold text-charcoal">A dedicated support team</h3>
                <p className="mt-2 text-sm text-charcoal/65">
                  If you are an existing Private Banking customer, contact us on <strong>0345 600 2750</strong>.
                  Lines are open 8am to 6pm, 7 days a week, and closed on bank holidays.
                </p>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <div className="rounded-3xl bg-forest p-8 text-white">
                <span className="text-3xl">🚗</span>
                <h3 className="mt-3 font-display text-xl font-bold">AA Breakdown cover</h3>
                <p className="mt-2 text-sm text-white/80">
                  For more information on AA Breakdown cover, see your guide to account benefits in the Private
                  Banking Premier Current Account and Mayfair High Interest Cheque Account.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stand-alone services */}
      <section className="bg-forest-deep py-16 text-white">
        <div className="container-x">
          <div className="mb-9 text-center">
            <h2 className="font-display text-3xl font-extrabold sm:text-[34px]">Stand-alone services</h2>
            <p className="mx-auto mt-3 max-w-2xl text-white/75">
              The following services are available for customers even if they are not eligible for our Private
              Banking service.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {STANDALONE.map((s, i) => (
              <Reveal key={s.title} delay={(i % 2) * 90} className={s.tall ? "" : ""}>
                <div className="group relative h-72 overflow-hidden rounded-[2rem]">
                  <SmartImage src={s.img} seed={i + 5} alt={s.title} className="absolute inset-0 h-full w-full" imgClass="h-full w-full transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/40 to-transparent" />
                  <div className="absolute bottom-0 p-7">
                    <h3 className="font-display text-2xl font-bold">{s.title}</h3>
                    <p className="mt-2 max-w-md text-sm text-white/85">{s.body}</p>
                    <a href={s.to} className="btn bg-lime text-forest-deep hover:bg-lime-glow mt-4 !py-2.5">{s.cta}</a>
                  </div>
                </div>
              </Reveal>
            ))}
            {/* Expert advice card */}
            <Reveal delay={90}>
              <div className="flex h-full flex-col justify-center rounded-[2rem] bg-white p-8 text-charcoal">
                <h3 className="font-display text-2xl font-bold text-forest">Expert advice</h3>
                <p className="mt-3 text-sm text-charcoal/70">
                  For customers with £100,000 in sole income or spread across joint savings, investments or
                  personal pensions, our expert financial advisers offer a personalised plan to help you reach
                  your financial goals.
                </p>
                <a href={href("private", "financial-advice")} className="btn-dark mt-5 self-start">More about financial advice</a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Get in touch */}
      <section id="contact" className="relative overflow-hidden py-20">
        <div className="container-x grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow text-emerald2">Get in touch</span>
            <h2 className="mt-2 font-display text-4xl font-extrabold text-charcoal">
              Find out more about our Private Banking service
            </h2>
            <p className="mt-4 text-charcoal/65">
              Call us on <strong>0800 055 5181</strong> or request a callback. Tell us a little about you and
              when it's convenient, and we'll set up an appointment that suits.
            </p>
            <div className="mt-8 space-y-5">
              {[
                ["📝", "Complete the form", "Tell us a little about you and when it's convenient for us to call."],
                ["📞", "We'll then call you", "A member of our team will contact you at the time you requested."],
                ["📅", "Your appointment", "We'll talk about your financial situation and the services we can offer."],
              ].map(([icon, t, b]) => (
                <div key={t} className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-mint text-xl">{icon}</span>
                  <div>
                    <p className="font-bold text-charcoal">{t}</p>
                    <p className="text-sm text-charcoal/65">{b}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <CallbackForm title="Request a callback" />
          </Reveal>
        </div>
      </section>

      {/* Service eligibility note */}
      <section className="bg-cream py-12">
        <div className="container-x rounded-3xl bg-white p-8 shadow-soft">
          <h3 className="font-display text-lg font-bold text-charcoal">Service eligibility</h3>
          <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
            Our Private Banking service is available to customers with £250,000 or more in savings or investments,
            or a mortgage of £750,000 or more with Loyds, excluding personal pensions or property. Our Mayfair
            service is available to clients with £2 million or more in savings and/or investments or an annual
            income of £500,000 or more.
          </p>
        </div>
      </section>
    </>
  );
}
