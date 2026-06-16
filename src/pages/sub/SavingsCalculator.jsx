import { useState, useMemo } from "react";
import { SubHero, Faq } from "../../components/SubLayout";
import { SectionHead } from "../../components/ui";
import { gbp, Slider } from "../../components/calc";

export default function SavingsCalculator() {
  const [initial, setInitial] = useState(2000);
  const [monthly, setMonthly] = useState(150);
  const [years, setYears] = useState(5);
  const [rate, setRate] = useState(4.0);

  const { future, deposited, interest, bar } = useMemo(() => {
    const r = rate / 100 / 12;
    const n = years * 12;
    let bal = initial;
    for (let i = 0; i < n; i++) bal = bal * (1 + r) + monthly;
    const deposited = initial + monthly * n;
    const interest = bal - deposited;
    return {
      future: bal,
      deposited,
      interest,
      bar: bal > 0 ? Math.round((interest / bal) * 100) : 0,
    };
  }, [initial, monthly, years, rate]);

  return (
    <>
      <SubHero
        section="personal"
        eyebrow="Savings"
        title="Watch your savings grow"
        intro="See how regular saving and interest could add up over time. Adjust the figures to set a goal that works for you."
      />

      <section className="py-16">
        <div className="container-x grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="rounded-3xl border border-charcoal/10 bg-white p-7 shadow-card">
            <h2 className="font-display text-xl font-bold text-charcoal">Your savings plan</h2>
            <div className="mt-6 space-y-7">
              <Slider label="Starting amount" value={initial} min={0} max={50000} step={500} onChange={setInitial} format={gbp} />
              <Slider label="Monthly deposit" value={monthly} min={0} max={2000} step={25} onChange={setMonthly} format={gbp} />
              <Slider label="For" value={years} min={1} max={30} step={1} onChange={setYears} format={(v) => `${v} years`} />
              <Slider label="Interest rate (AER)" value={rate} min={0.5} max={8} step={0.1} onChange={setRate} format={(v) => `${v.toFixed(1)}%`} />
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="rounded-3xl bg-forest p-8 text-white shadow-card">
              <p className="text-sm text-white/70">Projected balance after {years} years</p>
              <p className="mt-1 font-display text-5xl font-extrabold sm:text-6xl">{gbp(future)}</p>

              <div className="mt-6">
                <div className="flex h-5 overflow-hidden rounded-full bg-white/15">
                  <div className="bg-white/40" style={{ width: `${100 - bar}%` }} />
                  <div className="bg-lime" style={{ width: `${bar}%` }} />
                </div>
                <div className="mt-2 flex justify-between text-xs text-white/75">
                  <span>You put in {gbp(deposited)}</span>
                  <span className="font-bold text-lime">+ {gbp(interest)} interest</span>
                </div>
              </div>

              <a href="#contact" className="btn bg-lime text-forest-deep hover:bg-lime-glow mt-6 w-full">Open a savings account</a>
            </div>
            <p className="rounded-2xl bg-mint-soft p-4 text-xs leading-relaxed text-charcoal/65">
              Projection assumes interest compounds monthly at a constant rate and deposits are made at month end.
              Rates can change and tax may apply. Figures are for illustration only and are not financial advice.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-cream py-16">
        <div className="container-x">
          <SectionHead title="Savings questions, answered" />
          <Faq
            items={[
              ["What's AER?", "Annual Equivalent Rate shows what you'd earn over a year if interest is compounded and paid."],
              ["Can I withdraw any time?", "It depends on the account — easy-access accounts allow withdrawals; fixed accounts lock funds for a term."],
              ["Is my money protected?", "Eligible deposits are protected up to the FSCS limit, per eligible person, per banking licence."],
            ]}
          />
        </div>
      </section>
    </>
  );
}
