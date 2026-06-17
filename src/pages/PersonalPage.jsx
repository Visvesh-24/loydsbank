import { IMG } from "../data/images";
import SmartImage from "../components/SmartImage";
import HeroBoard from "../components/HeroBoard";
import { href } from "../lib/slug";
import { Reveal, SectionHead, ProductCard, IconTile, SurveyResults } from "../components/ui";

const PRODUCTS = [
  { img: IMG.mortgage, title: "Mortgages", body: "Find a mortgage that suits you. Explore and compare our deals, ready to apply online or in branch.", cta: "Find your deal", to: href("personal", "mortgage-calculator") },
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
            <a href={href("personal", "bank-on-loyds")} className="btn-dark mt-7">More about Bank on Loyds</a>
            <p className="mt-3 text-xs text-forest-deep/60">*see source data, Nov 2025.</p>
          </Reveal>
          <Reveal delay={120} className="flex justify-center md:justify-end">
            <HeroBoard />
          </Reveal>
        </div>
      </section>

      {/* Ways to bank with us */}
      <section className="bg-mint-pale py-16">
        <div className="container-x">
          <SectionHead title="Ways to bank with us" subtitle="Manage your money the way that suits you — securely, whenever you need to." />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: "💻", title: "Online Banking", body: "Check balances, move money, pay bills and manage your accounts securely from any browser, 24/7.", cta: "Explore Online Banking", to: href("personal", "online-banking") },
              { icon: "📞", title: "Telephone Banking", body: "Speak to our UK-based team or use automated banking to manage your money over the phone.", cta: "Call us", to: href("personal", "online-banking") },
              { icon: "🏛️", title: "In branch", body: "Get face-to-face help with your everyday banking and bigger decisions at a branch near you.", cta: "Find a branch", to: href("personal", "find-a-branch") },
            ].map((w, i) => (
              <Reveal key={w.title} delay={i * 90}>
                <div className="flex h-full flex-col rounded-3xl border border-charcoal/10 bg-white p-7 shadow-card transition hover:-translate-y-1.5 hover:shadow-lift">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-mint text-2xl">{w.icon}</span>
                  <h3 className="mt-4 font-display text-xl font-bold text-charcoal">{w.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-charcoal/65">{w.body}</p>
                  <a href={w.to} className="link-underline mt-4 text-sm">{w.cta} ›</a>
                </div>
              </Reveal>
            ))}
          </div>
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
                Take control of your finances with the power to check your credit score for free. See your score
                and manage your accounts together in Online Banking.
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
          <SectionHead title="Banking online" subtitle="Manage your money securely from any browser — quick, simple and available 24/7." />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-forest p-8">
              <h3 className="font-display text-xl font-bold">Online Banking</h3>
              <ul className="mt-4 space-y-2 text-sm text-white/85">
                <li>✓ View balances and statements</li>
                <li>✓ Pay bills and move money</li>
                <li>✓ Manage Direct Debits and standing orders</li>
                <li>✓ Available 24/7, securely</li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="btn bg-lime text-forest-deep hover:bg-lime-glow">Log in</button>
                <button className="btn-outline-light">Register</button>
              </div>
            </div>
            <div className="rounded-3xl bg-forest p-8">
              <h3 className="font-display text-xl font-bold">Banking you can trust</h3>
              <p className="mt-3 text-sm text-white/85">
                Your money is safeguarded by secure log-in, round-the-clock fraud monitoring and our commitment
                to keeping your details private.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-white/85">
                <li>🛡️ 24/7 fraud monitoring</li>
                <li>🔒 Secure, encrypted log-in</li>
                <li>🏦 FSCS-protected deposits up to £85,000</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SurveyResults />

      {/* APP scams rankings note */}
      <section className="py-16">
        <div className="container-x max-w-3xl">
          <h2 className="font-display text-2xl font-extrabold text-charcoal">
            Authorised push payment (APP) scams reimbursement
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-charcoal/65">
            We publish data on how we handle reimbursing customers who fall victim to APP scams, in line with
            industry requirements. We're committed to protecting our customers and to fair, prompt reimbursement
            where it's due.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-charcoal/65">
            If you think you've been targeted by a scam, contact us straight away and we'll help.
          </p>
        </div>
      </section>
    </>
  );
}
