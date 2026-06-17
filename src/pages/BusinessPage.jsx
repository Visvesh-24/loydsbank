import { IMG } from "../data/images";
import SmartImage from "../components/SmartImage";
import { href } from "../lib/slug";
import { Reveal, SectionHead, SurveyResults } from "../components/ui";

const BOOST = [
  { icon: "💼", title: "Get more from your account", body: "Your Business boost comes with the tools and rewards to help your money work harder." },
  { icon: "👍", title: "Products and services for you", body: "Wherever your business is on its journey, we've got products and services to help you grow." },
  { icon: "🤝", title: "You're in good company", body: "A million businesses already bank with us. Join them and see what's possible." },
];

const STEPS = [
  { icon: "🏢", title: "Small to Medium Business Account", body: "Open a business account for UK companies with a turnover under £3 million.", cta: "Open a business account", to: href("business", "business-accounts") },
  { icon: "🚀", title: "Start Up Bank Account", body: "A start-up bank account for new businesses trading less than 12 months.", cta: "Start up bank account", to: href("business", "business-accounts") },
  { icon: "🧑‍💼", title: "Sole Trader Bank Account", body: "Open a sole-trader business account with 12 months' free everyday account fees.", cta: "Sole trader bank account", to: href("business", "business-accounts") },
  { icon: "🔁", title: "Switch-back account", body: "Switch to us and get the interest-relating benefits of the Current Account Switch Service.", cta: "Switch your account", to: href("business", "ways-to-bank") },
  { icon: "📊", title: "Making Tax Digital software", body: "From the software the Making Tax Digital for Income Tax (MTD) journey starts here.", cta: "Making Tax Digital software", to: href("business", "insights") },
  { icon: "💷", title: "Borrowing", body: "Whether a business needs a boost or finance to grow, explore our borrowing options.", cta: "Borrowing options", to: href("business", "borrowing") },
  { icon: "💳", title: "Credit cards", body: "Get more from your cash-flow and manage your business expenses with a credit card.", cta: "Business credit cards", to: href("business", "borrowing") },
  { icon: "🐖", title: "Savings", body: "Make the most of your surplus cash and put it to work with a business savings account.", cta: "Business savings", to: href("business", "business-savings") },
];

const INSIGHTS = [
  { img: IMG.bizProfessionals, title: "Legal and professionals", body: "Specialist support for law firms and professional practices." },
  { img: IMG.bizManufacturing, title: "Manufacturing", body: "Helping makers and producers build resilient supply chains." },
  { img: IMG.bizRetail, title: "Retail", body: "Tools to help retailers sell more and bank smarter." },
  { img: IMG.bizRealEstate, title: "Real estate and housing", body: "Funding and insight for property and housing businesses." },
];

export default function BusinessPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-forest text-white">
        <div className="absolute inset-0">
          <SmartImage src={IMG.bizHero} seed={1} alt="" className="h-full w-full" imgClass="h-full w-full opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-deep via-forest/90 to-forest/40" />
        </div>
        <div className="container-x relative grid items-center gap-8 py-16 md:grid-cols-2 md:py-24">
          <Reveal>
            <span className="inline-block rounded-full bg-lime px-3 py-1 text-xs font-bold text-forest-deep">£200 Business boost</span>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl">
              Business banking that works as hard as you
            </h1>
            <p className="mt-5 max-w-md text-lg text-white/80">
              Open a business bank account and get £200. Discover the ways we support you and your business.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={href("business", "business-accounts")} className="btn bg-lime text-forest-deep hover:bg-lime-glow">Open a business account</a>
              <a href={href("business", "online-support")} className="btn-outline-light">View all support</a>
            </div>
          </Reveal>
          <Reveal delay={120} className="flex justify-center">
            <div className="relative grid h-56 w-56 place-items-center rounded-full bg-lime text-forest-deep shadow-lift sm:h-72 sm:w-72">
              <div className="text-center">
                <p className="font-display text-6xl font-extrabold sm:text-7xl">£200</p>
                <p className="text-sm font-bold uppercase tracking-widest">Business boost</p>
              </div>
              <span className="absolute -right-2 -top-2 text-3xl">💸</span>
              <span className="absolute -bottom-3 left-4 text-2xl">💷</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Boost your business with us */}
      <section className="py-16">
        <div className="container-x">
          <SectionHead title="Boost your business with us" subtitle="Get the tools and rewards to help your business grow." />
          <div className="grid gap-6 md:grid-cols-3">
            {BOOST.map((b, i) => (
              <Reveal key={b.title} delay={i * 90}>
                <div className="flex h-full flex-col rounded-3xl border border-charcoal/10 bg-mint-pale p-7 transition hover:-translate-y-1.5 hover:shadow-card">
                  <span className="text-4xl">{b.icon}</span>
                  <h3 className="mt-4 font-display text-xl font-bold text-charcoal">{b.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-charcoal/65">{b.body}</p>
                  <a href="#" onClick={(e) => e.preventDefault()} className="link-underline mt-4 text-sm">Learn more ›</a>
                </div>
              </Reveal>
            ))}
          </div>

          {/* £200 steps */}
          <Reveal>
            <div className="mt-8 grid items-center gap-8 rounded-[2rem] bg-charcoal p-8 text-white md:grid-cols-2 md:p-12">
              <div>
                <h3 className="font-display text-3xl font-extrabold">£200 to kick things off</h3>
                <p className="mt-3 text-white/75">Open a business account with a debit card and £200 in three simple steps.</p>
              </div>
              <ol className="space-y-3">
                {["Open an eligible business account", "Apply, deposit and bank within 30 days", "We'll pay £200 into your account"].map((s, i) => (
                  <li key={i} className="flex items-center gap-4 rounded-2xl bg-white/10 px-5 py-4">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-lime font-bold text-forest-deep">{i + 1}</span>
                    <span className="text-sm">{s}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8-card grid */}
      <section className="bg-cream py-16">
        <div className="container-x">
          <SectionHead title="Business banking to help you take the next step" subtitle="See our full range and find the right banking for your business." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={(i % 4) * 70}>
                <a href={s.to} className="flex h-full flex-col rounded-2xl border border-charcoal/10 bg-white p-6 transition hover:-translate-y-1 hover:border-emerald2 hover:shadow-card">
                  <span className="text-3xl">{s.icon}</span>
                  <h3 className="mt-3 font-display text-base font-bold leading-snug text-charcoal">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-charcoal/60">{s.body}</p>
                  <span className="mt-4 text-sm font-semibold text-forest">{s.cta} ›</span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Business on Loyds */}
      <section className="py-16">
        <div className="container-x">
          <SectionHead title="Business on Loyds. Bank on Loyds." subtitle="The ways we work to take the next step matter to your business." />
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { img: IMG.bizRoyal, title: "Banking made business", body: "Backing the ambitions of UK businesses with full-service current accounts and everyday banking designed around how you work." },
              { img: IMG.bizFarm, title: "From Royal Warrant to global growth", body: "We've been a proud financial partner to UK businesses across generations, scaling with their growth." },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 100}>
                <div className="group overflow-hidden rounded-[2rem] shadow-card">
                  <div className="h-60 overflow-hidden">
                    <SmartImage src={c.img} seed={i + 4} alt={c.title} className="h-full w-full" imgClass="h-full w-full transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="bg-white p-7">
                    <h3 className="font-display text-xl font-bold text-charcoal">{c.title}</h3>
                    <p className="mt-2 text-sm text-charcoal/65">{c.body}</p>
                    <a href="#" onClick={(e) => e.preventDefault()} className="link-underline mt-4 inline-block text-sm">Discover more ›</a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Online Banking for Business */}
      <section className="bg-forest py-16 text-white">
        <div className="container-x grid items-center gap-10 md:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold sm:text-4xl">Powerful Online Banking for Business</h2>
            <ul className="mt-6 space-y-4">
              {[
                ["💸", "Make payments", "Pay suppliers and staff, set up Direct Debits and make payments up to £250,000 a day."],
                ["👥", "Manage your team", "Add users, set permissions and give your finance team the access they need."],
                ["📊", "Stay in control", "View balances, download statements and reconcile transactions in real time."],
              ].map(([i, t, b]) => (
                <li key={t} className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/10 text-xl">{i}</span>
                  <div>
                    <p className="font-bold">{t}</p>
                    <p className="text-sm text-white/75">{b}</p>
                  </div>
                </li>
              ))}
            </ul>
            <a href={href("business", "ways-to-bank")} className="btn bg-lime text-forest-deep hover:bg-lime-glow mt-7">Explore Online Banking</a>
          </Reveal>
          <Reveal delay={120} className="overflow-hidden rounded-[2rem]">
            <SmartImage src={IMG.bizMeeting} seed={6} alt="Business team" className="h-80 w-full" imgClass="h-full w-full" />
          </Reveal>
        </div>
      </section>

      {/* Expert insights */}
      <section className="py-16">
        <div className="container-x">
          <SectionHead title="Expert insights for your business sector" subtitle="Demonstrate value alongside the expert outlook anywhere in your situation." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {INSIGHTS.map((c, i) => (
              <Reveal key={c.title} delay={(i % 4) * 80}>
                <div className="group relative h-72 overflow-hidden rounded-2xl shadow-card">
                  <SmartImage src={c.img} seed={i + 8} alt={c.title} className="absolute inset-0 h-full w-full" imgClass="h-full w-full transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent" />
                  <div className="absolute bottom-0 p-5 text-white">
                    <h3 className="font-display text-lg font-bold">{c.title}</h3>
                    <p className="mt-1 text-xs text-white/80">{c.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Insights, guides + Business Barometer */}
      <section className="bg-cream py-16">
        <div className="container-x">
          <SectionHead title="Insights, guides and business stories" subtitle="Find out new ways to grow a range of businesses across helpful topics." />
          <div className="grid gap-6 md:grid-cols-3">
            <Reveal>
              <article className="overflow-hidden rounded-3xl bg-white shadow-card">
                <SmartImage src={IMG.bizRetail} seed={9} alt="" className="h-40 w-full" imgClass="h-full w-full" />
                <div className="p-6">
                  <span className="eyebrow text-emerald2">Guide</span>
                  <h3 className="mt-2 font-display text-lg font-bold text-charcoal">Running your business, made simpler</h3>
                  <p className="mt-2 text-sm text-charcoal/65">Practical tips to help you save time and stay on top of cash flow.</p>
                </div>
              </article>
            </Reveal>
            <Reveal delay={90}>
              <article className="flex h-full flex-col justify-between rounded-3xl bg-charcoal p-7 text-white">
                <div>
                  <span className="font-display text-3xl font-extrabold tracking-tight">BLACK IN<br />BUSINESS</span>
                  <p className="mt-4 text-sm text-white/75">Proud partner of Black in Business — championing diverse founders across the UK.</p>
                </div>
                <a href="#" onClick={(e) => e.preventDefault()} className="mt-6 font-semibold text-lime">More about the offering ›</a>
              </article>
            </Reveal>
            <Reveal delay={180}>
              <article className="overflow-hidden rounded-3xl bg-white shadow-card">
                <SmartImage src={IMG.bizBarometer} seed={10} alt="" className="h-40 w-full" imgClass="h-full w-full" />
                <div className="p-6">
                  <span className="eyebrow text-emerald2">Report</span>
                  <h3 className="mt-2 font-display text-lg font-bold text-charcoal">Business Barometer</h3>
                  <p className="mt-2 text-sm text-charcoal/65">Our monthly snapshot of business confidence, hiring intentions and the wider economy.</p>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <SurveyResults />
    </>
  );
}
