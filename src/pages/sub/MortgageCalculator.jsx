import { useState, useMemo } from "react";
import { SubHero, Faq } from "../../components/SubLayout";
import { SectionHead } from "../../components/ui";
import { gbp, Slider } from "../../components/calc";

export default function MortgageCalculator() {
  const [price, setPrice] = useState(280000);
  const [deposit, setDeposit] = useState(28000);
  const [years, setYears] = useState(25);
  const [rate, setRate] = useState(4.5);

  const { loan, monthly, total, ltv } = useMemo(() => {
    const loan = Math.max(price - deposit, 0);
    const r = rate / 100 / 12;
    const n = years * 12;
    const monthly = r === 0 ? loan / n : (loan * r) / (1 - Math.pow(1 + r, -n));
    return {
      loan,
      monthly: isFinite(monthly) ? monthly : 0,
      total: (isFinite(monthly) ? monthly : 0) * n,
      ltv: price > 0 ? Math.round((loan / price) * 100) : 0,
    };
  }, [price, deposit, years, rate]);

  return (
    <>
      <SubHero
        section="personal"
        eyebrow="Mortgage Calculator"
        title="See what your mortgage could cost"
        intro="Get an instant estimate of your monthly repayments. Adjust the figures to explore your options — this is a guide, not a mortgage offer."
      />

      <section className="py-16">
        <div className="container-x grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          {/* Controls */}
          <div className="rounded-3xl border border-charcoal/10 bg-white p-7 shadow-card">
            <h2 className="font-display text-xl font-bold text-charcoal">Your details</h2>
            <div className="mt-6 space-y-7">
              <Slider label="Property price" value={price} min={50000} max={1500000} step={5000} onChange={setPrice} format={gbp} />
              <Slider label="Deposit" value={deposit} min={0} max={Math.max(price, 5000)} step={1000} onChange={setDeposit} format={gbp} sub={`${ltv}% loan-to-value`} />
              <Slider label="Term" value={years} min={5} max={40} step={1} onChange={setYears} format={(v) => `${v} years`} />
              <Slider label="Interest rate" value={rate} min={0.5} max={10} step={0.1} onChange={setRate} format={(v) => `${v.toFixed(1)}%`} />
            </div>
          </div>

          {/* Result */}
          <div className="flex flex-col gap-5">
            <div className="rounded-3xl bg-forest p-8 text-white shadow-card">
              <p className="text-sm text-white/70">Estimated monthly repayment</p>
              <p className="mt-1 font-display text-5xl font-extrabold sm:text-6xl">
                {gbp(monthly)}
                <span className="text-xl font-semibold text-white/70">/mo</span>
              </p>
              <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/15">
                <Stat label="Loan amount" value={gbp(loan)} />
                <Stat label="Loan-to-value" value={`${ltv}%`} />
                <Stat label="Total repayable" value={gbp(total)} />
                <Stat label="Over" value={`${years} years`} />
              </div>
              <a href="#contact" className="btn bg-lime text-forest-deep hover:bg-lime-glow mt-6 w-full">
                Start your mortgage journey
              </a>
            </div>
            <p className="rounded-2xl bg-mint-soft p-4 text-xs leading-relaxed text-charcoal/65">
              This calculator gives an illustration based on a repayment mortgage at a constant interest rate.
              Your actual rate, payments and eligibility will depend on your circumstances. Your home may be
              repossessed if you do not keep up repayments on your mortgage. Figures are for illustration only.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-cream py-16">
        <div className="container-x">
          <SectionHead title="Mortgage questions, answered" />
          <Faq
            items={[
              ["How big a deposit do I need?", "Most mortgages need at least 5–10% of the property's value. A bigger deposit usually means a lower interest rate."],
              ["What's loan-to-value (LTV)?", "LTV is the size of your mortgage as a percentage of the property's value. Lower LTV often unlocks better rates."],
              ["Is this a mortgage offer?", "No — it's an illustration. To borrow, you'd complete a full application and affordability assessment."],
            ]}
          />
        </div>
      </section>
    </>
  );
}

function Stat({ label, value }) {
  return (
    <div className="bg-forest p-4">
      <p className="text-xs text-white/60">{label}</p>
      <p className="font-display text-lg font-bold">{value}</p>
    </div>
  );
}
