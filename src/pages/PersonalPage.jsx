import { IMG } from "../data/images";
import SmartImage from "../components/SmartImage";
import PhoneMockup from "../components/PhoneMockup";
import { href } from "../lib/slug";
import { Reveal, SectionHead, ProductCard, IconTile, SurveyResults } from "../components/ui";

const PRODUCTS = [
  { img: IMG.mortgage, title: "Mortgages", body: "Find a mortgage that suits you. Explore and compare our deals, ready to apply online or in our app.", cta: "Find your deal", to: href("personal", "mortgage-calculator") },
  { img: IMG.currentAccount, title: "Current accounts", body: "From everyday banking to accounts with added rewards, find what's right for you.", cta: "View accounts", to: href("personal", "current-accounts") },
  { img: IMG.investments, title: "Investments", body: "Whether you're new to investing or experienced, there are ways to invest with us.", cta: "Ways to invest", to: href("personal", "investments") },
  { img: IMG.loans, title: "Personal loans", body: "For big plans or smaller ones, see how much you could borrow before you apply.", cta: "Explore loans", to: href("personal", "loans") },
  { img: IMG.savings, title: "Savings", body: "Build a rainy-day fund or save towards something special with competitive rates.", cta: "Start saving", to: href("personal", "savings") },
  { img: IMG.cards, title: "Credit cards", body: "Compare cards for everyday spending, balance transfers and building credit.", cta: "Compare cards", to: href("personal", "credit-cards") },
];

const SUPPORT = [
  { icon: "🤝", title: "Making banking easier", body: "We're introducing more ways you can manage your personal accounts you have with Loyds, Halifax or Bank of Scotland in one place.", link: "Co-servicing" },
  { icon: "🛡️", title: "Learn about the latest scams", body: "If scammers are pretending to be us, you may get a text or call that looks real. Learn how to spot the latest scams.", link: "See the latest scams" },
  { icon: "♿", title: "Banking, made easier — right where you are", body: "Our Cash & Cashpoint machines and mobile branches are giving you 24/7 access wherever it suits you.", link: "Find the nearest machines" },
  { icon: "💬", title: "Extra support if you have a disability", body: "Learn how we make banking easier to bank with us. Find out about the different kinds of accessible support we provide.", link: "How we can support you" },
];

export default function PersonalPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-lime">
        <div className="absolute inset-0 opacity-90">
          <SmartImage src={IMG.horse} seed={1} alt="" className="h-full w-full" imgClass="h-full w-full opacity-25 mix-blend-luminosity" />
        </div>
        <div className="container-x relative grid items-center gap-8 py-14 md:grid-cols-2 md:py-20">
          <Reveal>
            <span className="inline-block rounded-full bg-forest px-3 py-1 text-xs font-bold text-white">Get on with life</span>
            <h1 className="mt-4 font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-forest-deep sm:text-7xl">
              Go<br />Getters
            </h1>
            <p className="mt-5 max-w-md text-lg font-medium text-forest-deep/80">
              Over a million people bank with Loyds to help turn plans into reality. We're ready when you are.
            </p>
            <button className="btn-dark mt-7">More about Bank on Loyds</button>
            <p className="mt-3 text-xs text-forest-deep/60">*see source data, Nov 2025.</p>
          </Reveal>
          <Reveal delay={120} className="hidden justify-center md:flex">
            <PhoneMockup />
          </Reveal>
        </div>
      </section>

      {/* Your bank in your pocket */}
      <section className="bg-mint-pale py-16">
        <div className="container-x grid items-center gap-10 rounded-[2rem] bg-white p-8 shadow-card md:grid-cols-2 md:p-12">
          <Reveal>
            <span className="eyebrow text-emerald2">The Loyds app</span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-charcoal sm:text-4xl">Your bank in your pocket</h2>
            <p className="mt-4 text-charcoal/65">
              Join over 10 million customers who already use our highly rated app. Check balances, move money,
              freeze cards and get spending insights — all in a few taps.
            </p>
            <a href={href("personal", "mobile-banking-app")} className="btn-green mt-6">More about our app</a>
          </Reveal>
          <Reveal delay={120} className="flex justify-center">
            <PhoneMockup />
          </Reveal>
        </div>
      </section>

      {/* Our products */}
      <section className="py-16">
        <div className="container-x">
          <SectionHead title="Our products" subtitle="Everything you need to bank, borrow, save and invest — built around your life." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 90}>
                <ProductCard {...p} seed={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* £5k Deposit mortgage banner */}
      <section className="bg-forest py-16 text-white">
        <div className="container-x grid items-center gap-10 md:grid-cols-2">
          <Reveal className="order-2 overflow-hidden rounded-[2rem] md:order-1">
            <SmartImage src={IMG.depositHome} seed={3} alt="A modern home" className="h-72 w-full md:h-96" imgClass="h-full w-full" />
          </Reveal>
          <Reveal delay={100} className="order-1 md:order-2">
            <span className="inline-block rounded-full bg-lime px-3 py-1 text-xs font-bold text-forest-deep">New</span>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight">£5k Deposit mortgage</h2>
            <p className="mt-4 text-white/80">
              Your first home could be closer than you think. If you have a deposit of £5,000, you could step onto
              the property ladder with a 5% deposit mortgage. Average first-time-buyer deposits were £4,901 in 2024.
            </p>
            <a href={href("personal", "mortgage-calculator")} className="btn bg-white text-forest hover:bg-mint mt-7">Start your mortgage journey</a>
          </Reveal>
        </div>
      </section>

      {/* Customer support */}
      <section className="bg-cream py-16">
        <div className="container-x">
          <SectionHead title="Customer Support" />
          <div className="mb-10 flex flex-col items-center gap-4 rounded-3xl bg-forest p-8 text-white sm:flex-row sm:justify-between">
            <div className="flex items-center gap-4">
              <span className="text-4xl">🧭</span>
              <div>
                <h3 className="font-display text-xl font-bold">Help and guidance</h3>
                <p className="text-sm text-white/80">Looking for help? Use the information and guides to find what you need.</p>
              </div>
            </div>
            <button className="btn bg-lime text-forest-deep hover:bg-lime-glow shrink-0">Help and guidance</button>
          </div>
          <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
            {SUPPORT.map((s, i) => (
              <Reveal key={s.title} delay={(i % 2) * 90}>
                <IconTile {...s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Credit score banner */}
      <section className="py-16">
        <div className="container-x">
          <div className="grid items-center gap-8 overflow-hidden rounded-[2rem] bg-mint-soft md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="font-display text-3xl font-extrabold text-charcoal">Your Credit Score</h2>
              <p className="mt-3 text-charcoal/65">
                Take control of your finances with the power to check your credit score for free. Find your score
                and your accounts all in one app.
              </p>
              <button className="btn-dark mt-6">Check your Credit Score</button>
            </div>
            <SmartImage src={IMG.creditScore} seed={2} alt="Checking finances" className="h-64 w-full md:h-80" imgClass="h-full w-full" />
          </div>
        </div>
      </section>

      {/* Banking online */}
      <section className="bg-forest-deep py-16 text-white">
        <div className="container-x">
          <SectionHead title="Banking online" subtitle="It's simple and additional apps from our website." />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col items-start gap-6 rounded-3xl bg-forest p-8 sm:flex-row sm:items-center">
              <div className="grid h-28 w-28 shrink-0 place-items-center rounded-2xl bg-white p-2">
                <QR />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold">Mobile banking app</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-white/80">
                  <li>✓ Scan to download in seconds</li>
                  <li>✓ Set up Face and Fingerprint login</li>
                  <li>✓ Manage your money on the go</li>
                </ul>
              </div>
            </div>
            <div className="rounded-3xl bg-forest p-8">
              <h3 className="font-display text-xl font-bold">Online banking</h3>
              <p className="mt-3 text-sm text-white/80">
                Log in to view or manage your accounts on our website. It's quick, secure and available 24/7.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <button className="btn bg-lime text-forest-deep hover:bg-lime-glow">Log in</button>
                <button className="btn-outline-light">Register</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SurveyResults />

      {/* APP scams rankings note */}
      <section className="py-16">
        <div className="container-x max-w-3xl">
          <h2 className="font-display text-2xl font-extrabold text-charcoal">
            Authorised push payment (APP) scams rankings in 2024
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-charcoal/65">
            In a real publication, banks are required to publish data on how they handle reimbursing customers
            who fall victim to APP scams. Loyds is a fictional brand created for this design challenge — the
            figures shown here are illustrative only.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-charcoal/65">
            We're up together for further guidance to help with any questions you may have.
          </p>
        </div>
      </section>
    </>
  );
}

function QR() {
  // simple decorative QR-style grid
  const cells = Array.from({ length: 49 }, (_, i) => (i * 7 + 3) % 5 !== 0);
  return (
    <div className="grid h-full w-full grid-cols-7 gap-[2px]">
      {cells.map((on, i) => (
        <span key={i} className={on ? "bg-forest-deep" : "bg-transparent"} />
      ))}
    </div>
  );
}
