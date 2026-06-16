import { useState, useMemo } from "react";
import { SubHero, Faq } from "../../components/SubLayout";
import { SectionHead } from "../../components/ui";
import { gbp, Slider } from "../../components/calc";

// Representative APR scales loosely with the amount band, like a real loan.
const aprFor = (amount) => (amount < 7500 ? 12.9 : amount <= 25000 ? 6.1 : 9.9);

export default function LoanCalculator() {
  const [amount, setAmount] = useState(10000);
  const [years, setYears] = useState(5);

  const { monthly, total, apr, interest } = useMemo(() => {
    const apr = aprFor(amount);
    const r = apr / 100 / 12;
    const n = years * 12;
    const monthly = (amount * r) / (1 - Math.pow(1 + r, -n));
    const total = monthly * n;
    return { monthly, total, apr, interest: total - amount };
  }, [amount, years]);

  return (
    <>
      <SubHero
        section="personal"
        eyebrow="Loans"
        title="Borrow for the things that matter"
        intro="From home improvements to a new car, see what a personal loan could cost. Check your rate without affecting your credit score."
      />

      <section className="py-16">
        <div className="container-x grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="rounded-3xl border border-charcoal/10 bg-white p-7 shadow-card">
            <h2 className="font-display text-xl font-bold text-charcoal">How much would you like?</h2>
            <div className="mt-6 space-y-7">
              <Slider label="Loan amount" value={amount} min={1000} max={50000} step={500} onChange={setAmount} format={gbp} sub={`Representative ${apr}% APR`} />
              <Slider label="Over" value={years} min={1} max={7} step={1} onChange={setYears} format={(v) => `${v} ${v === 1 ? "year" : "years"}`} />
            </div>
            <div className="mt-6 rounded-2xl bg-mint-soft p-4 text-xs leading-relaxed text-charcoal/65">
              Rates shown are representative and for illustration only. The rate you're offered depends on your
              circumstances and may differ. (Demo figures.)
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="rounded-3xl bg-forest p-8 text-white shadow-card">
              <p className="text-sm text-white/70">Estimated monthly repayment</p>
              <p className="mt-1 font-display text-5xl font-extrabold sm:text-6xl">
                {gbp(monthly)}<span className="text-xl font-semibold text-white/70">/mo</span>
              </p>
              <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/15">
                <Cell label="Amount" value={gbp(amount)} />
                <Cell label="Representative APR" value={`${apr}%`} />
                <Cell label="Total interest" value={gbp(interest)} />
                <Cell label="Total repayable" value={gbp(total)} />
              </div>
              <a href="#contact" className="btn bg-lime text-forest-deep hover:bg-lime-glow mt-6 w-full">Check my rate</a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-cream py-16">
        <div className="container-x">
          <SectionHead title="Loan questions, answered" />
          <Faq
            items={[
              ["Will applying affect my credit score?", "Checking your rate uses a soft search that only you can see. A full application involves a hard search."],
              ["Can I repay early?", "Yes — you can make overpayments or settle early, and we'll recalculate the interest."],
              ["How fast is the money?", "If approved, funds are often in your account the same or next working day."],
            ]}
          />
        </div>
      </section>
    </>
  );
}

function Cell({ label, value }) {
  return (
    <div className="bg-forest p-4">
      <p className="text-xs text-white/60">{label}</p>
      <p className="font-display text-lg font-bold">{value}</p>
    </div>
  );
}
