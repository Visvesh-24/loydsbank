import { useRef } from "react";
import { IMG } from "../data/images";
import SmartImage from "../components/SmartImage";
import HeroBoard from "../components/HeroBoard";
import { href } from "../lib/slug";
import { Reveal, SectionHead, ProductCard, IconTile, SurveyResults } from "../components/ui";

const PRODUCTS = [
  { img: IMG.mortgage, title: "Mortgages", body: "Find a mortgage that suits you. Explore and compare our deals, ready to apply online or in branch.", cta: "Find your mortgage deal", to: href("personal", "mortgage-calculator") },
  { img: IMG.currentAccount, title: "Current accounts", body: "From everyday banking to accounts with added rewards, find what's right for you.", cta: "View our current accounts", to: href("personal", "current-accounts") },
  { img: IMG.investments, title: "Investments", body: "Whether you're new to investing or an experienced investor, there are ways to invest with us.", cta: "Ways to invest", to: href("personal", "investments") },
  { img: IMG.loans, title: "Personal loans", body: "For big plans or smaller ones, see how much you could borrow before you apply.", cta: "Explore our loans", to: href("personal", "loans") },
  { img: IMG.savings, title: "Savings", body: "Build a rainy-day fund or save towards something special with competitive rates.", cta: "Start saving", to: href("personal", "savings") },
  { img: IMG.cards, title: "Credit cards", body: "Compare cards for everyday spending, balance transfers and building your credit.", cta: "Compare cards", to: href("personal", "credit-cards") },
];

const SUPPORT = [
  { icon: "🏛️", title: "Making banking easier", body: "We're introducing more ways you can manage the personal accounts you have with Loyds, Halifax or Bank of Scotland in one place.", link: "Co-servicing" },
  { icon: "🛡️", title: "Learn about the latest scams", body: "Fraudsters are always looking for new ways to try to steal your details and money. Discover which scams are common right now, how they work and the steps you can take to stay safe.", link: "See the latest scams" },
  { icon: "🏧", title: "Banking, made easier — right where you are", body: "Our Cash & Cashpoint machines and mobile branches are bringing banking into local communities, giving you access wherever it suits you.", link: "Find the nearest machines" },
  { icon: "💬", title: "Extra support if you have a disability", body: "Learn how we make it easier to bank with us. Find out about the different kinds of accessible support we provide, and how to get in touch.", link: "How we can support you" },
];

export default function PersonalPage() {
  const carousel = useRef(null);
  const scrollBy = (dir) => carousel.current?.scrollBy({ left: dir * 320, behavior: "smooth" });

  return (
    <>
      {/* Hero — £5k Deposit Mortgage */}
      <section className="relative isolate overflow-hidden bg-forest-900 text-white">
        <SmartImage src={IMG.depositHome} seed={3} alt="" className="absolute inset-0 h-full w-full" imgClass="h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-900 via-forest-900/85 to-forest-900/10" />
        <div className="container-x relative py-16 md:py-24">
          <Reveal className="max-w-lg">
            <p className="text-sm text-white/70">Last seen in 1996</p>
            <h1 className="mt-2 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
              £5k Deposit Mortgage
            </h1>
            <p className="mt-4 text-lg text-white/85">
              If you have a deposit of £5,000, you could get on the ladder sooner than you think. Conditions apply.
            </p>
            <p className="mt-3 text-xs text-white/60">
              Average first-time-buyer deposits were £4,901 in 1996 based on Office for National Statistics House
              Price Index data.
            </p>
            <a href={href("personal", "mortgage-calculator")} className="btn bg-white text-forest hover:bg-mint mt-7">
              Start your mortgage journey
            </a>
          </Reveal>
        </div>
      </section>

      {/* Promo — manage your money your way (non-app) */}
      <section className="bg-mint-pale py-16">
        <div className="container-x grid items-center gap-10 rounded-[2rem] bg-white p-8 shadow-card md:grid-cols-2 md:p-12">
          <Reveal>
            <span className="eyebrow text-emerald2">Banking online</span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-charcoal sm:text-4xl">Manage your money, your way</h2>
            <p className="mt-4 text-charcoal/65">
              Check balances, move money and stay on top of your accounts with secure Online Banking — quick,
              simple and available 24/7. See today's rates and switch in minutes.
            </p>
            <a href={href("personal", "online-banking")} className="btn-green mt-6">Explore Online Banking</a>
          </Reveal>
          <Reveal delay={120} className="flex justify-center md:justify-end">
            <HeroBoard />
          </Reveal>
        </div>
      </section>

      {/* Our products — carousel */}
      <section className="py-16">
        <div className="container-x">
          <div className="mb-9 flex items-end justify-between">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-charcoal sm:text-[34px]">Our products</h2>
            <div className="hidden gap-2 sm:flex">
              <CarouselBtn dir={-1} onClick={() => scrollBy(-1)} />
              <CarouselBtn dir={1} onClick={() => scrollBy(1)} />
            </div>
          </div>
          <div ref={carousel} className="no-scrollbar -mx-4 flex snap-x gap-6 overflow-x-auto px-4 pb-4">
            {PRODUCTS.map((p, i) => (
              <div key={p.title} className="w-[280px] shrink-0 snap-start">
                <ProductCard {...p} seed={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Go Getters — green strip with horse */}
      <section className="bg-lime">
        <div className="container-x grid items-center gap-6 py-10 md:grid-cols-2 md:py-12">
          <Reveal className="order-2 overflow-hidden rounded-[2rem] md:order-1">
            <SmartImage src={IMG.horse} seed={1} alt="A galloping horse" className="h-56 w-full md:h-72" imgClass="h-full w-full" />
          </Reveal>
          <Reveal delay={100} className="order-1 md:order-2">
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-forest-deep sm:text-5xl">Go Getters</h2>
            <p className="mt-4 max-w-md text-lg font-medium text-forest-deep/80">
              Over 14 million people Bank on Loyds to help turn plans into reality. We're ready when you are.
            </p>
            <a href={href("personal", "bank-on-loyds")} className="btn-dark mt-6">More about Bank on Loyds</a>
            <p className="mt-3 text-xs text-forest-deep/60">*Internal customer data, May 2026.</p>
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
            <a href={href("personal", "help-and-interest-rates")} className="btn bg-lime text-forest-deep hover:bg-lime-glow shrink-0">Help and guidance</a>
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
              <a href={href("personal", "credit-score")} className="btn-dark mt-6">Check Your Credit Score</a>
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
                <button onClick={(e) => e.preventDefault()} className="btn bg-lime text-forest-deep hover:bg-lime-glow">Log in</button>
                <button onClick={(e) => e.preventDefault()} className="btn-outline-light">Register</button>
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

      {/* APP scams */}
      <section className="py-16">
        <div className="container-x max-w-3xl">
          <h2 className="font-display text-2xl font-extrabold text-charcoal">
            Authorised push payment (APP) scams rankings in 2024
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-charcoal/65">
            Authorised push payment (APP) scams happen when someone is tricked into transferring money to a
            fraudster's bank account. As part of industry requirements, we publish data on how we handle
            reimbursing customers who fall victim to these scams.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-charcoal/65">
            We're committed to protecting our customers and to fair, prompt reimbursement where it's due. If you
            think you've been targeted, contact us straight away and we'll help.
          </p>
        </div>
      </section>
    </>
  );
}

function CarouselBtn({ dir, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={dir < 0 ? "Previous" : "Next"}
      className="grid h-10 w-10 place-items-center rounded-full border-2 border-charcoal text-charcoal transition hover:bg-charcoal hover:text-white"
    >
      {dir < 0 ? "‹" : "›"}
    </button>
  );
}
