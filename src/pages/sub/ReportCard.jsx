import { useState } from "react";
import { SubHero } from "../../components/SubLayout";

const CARDS = [
  { id: "debit", icon: "💳", label: "Debit card" },
  { id: "credit", icon: "🪙", label: "Credit card" },
];
const REASONS = [
  { id: "lost", icon: "🔍", label: "Lost card", desc: "I can't find my card." },
  { id: "stolen", icon: "🚨", label: "Stolen card", desc: "My card has been stolen." },
  { id: "fraud", icon: "⚠️", label: "Suspicious activity", desc: "I've spotted payments I don't recognise." },
];

export default function ReportCard() {
  const [step, setStep] = useState(0);
  const [card, setCard] = useState(null);
  const [reason, setReason] = useState(null);
  const [last4, setLast4] = useState("");

  const reasonObj = REASONS.find((r) => r.id === reason);
  const steps = ["Card", "What happened", "Details", "Done"];

  return (
    <>
      <SubHero
        section="personal"
        eyebrow="Reporting a card lost or fraud"
        title="Let's secure your account"
        intro="If your card is lost or stolen, or you've spotted something you don't recognise, we'll help you freeze it and order a replacement in a few steps."
        dark
      >
        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/90">
          <span className="text-lg">🔒</span> Your details are secure — this is a demo flow.
        </div>
      </SubHero>

      <section className="py-16">
        <div className="container-x max-w-2xl">
          {/* Progress */}
          <ol className="mb-8 flex items-center justify-between">
            {steps.map((s, i) => (
              <li key={s} className="flex flex-1 items-center">
                <div className="flex flex-col items-center">
                  <span className={`grid h-9 w-9 place-items-center rounded-full text-sm font-bold transition ${
                    i <= step ? "bg-forest text-white" : "bg-mint-soft text-charcoal/50"
                  }`}>
                    {i < step ? "✓" : i + 1}
                  </span>
                  <span className="mt-1.5 hidden text-xs font-medium text-charcoal/60 sm:block">{s}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className={`mx-2 h-0.5 flex-1 rounded ${i < step ? "bg-forest" : "bg-mint-soft"}`} />
                )}
              </li>
            ))}
          </ol>

          <div className="rounded-3xl border border-charcoal/10 bg-white p-7 shadow-card sm:p-9">
            {step === 0 && (
              <Stepper title="Which card is it?">
                <div className="grid gap-3 sm:grid-cols-2">
                  {CARDS.map((c) => (
                    <Choice key={c.id} active={card === c.id} onClick={() => setCard(c.id)} icon={c.icon} label={c.label} />
                  ))}
                </div>
                <Nav next={() => setStep(1)} disabled={!card} />
              </Stepper>
            )}

            {step === 1 && (
              <Stepper title="What's happened?">
                <div className="space-y-3">
                  {REASONS.map((r) => (
                    <Choice key={r.id} active={reason === r.id} onClick={() => setReason(r.id)} icon={r.icon} label={r.label} desc={r.desc} wide />
                  ))}
                </div>
                <Nav back={() => setStep(0)} next={() => setStep(2)} disabled={!reason} />
              </Stepper>
            )}

            {step === 2 && (
              <Stepper title="Confirm your card">
                <p className="text-sm text-charcoal/65">Enter the last 4 digits shown on your card so we can find it.</p>
                <input
                  inputMode="numeric"
                  maxLength={4}
                  value={last4}
                  onChange={(e) => setLast4(e.target.value.replace(/\D/g, "").slice(0, 4))}
                  placeholder="1234"
                  className="mt-3 w-40 rounded-xl border border-charcoal/15 bg-mint-pale px-4 py-3 text-center font-display text-2xl tracking-[0.4em] outline-none focus:border-forest focus:ring-2 focus:ring-lime/50"
                />
                <label className="mt-4 flex items-start gap-3 text-sm text-charcoal/70">
                  <input type="checkbox" className="mt-1 h-4 w-4 accent-forest" required defaultChecked />
                  Freeze this card immediately and order a replacement.
                </label>
                <Nav back={() => setStep(1)} next={() => setStep(3)} disabled={last4.length !== 4} nextLabel="Confirm & freeze card" />
              </Stepper>
            )}

            {step === 3 && (
              <div className="animate-fadeIn text-center">
                <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-lime">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#024731" strokeWidth="3">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h2 className="font-display text-2xl font-bold text-forest">Your card is frozen</h2>
                <p className="mx-auto mt-3 max-w-md text-charcoal/65">
                  We've frozen your {card === "credit" ? "credit" : "debit"} card ending{" "}
                  <strong>{last4}</strong> ({reasonObj?.label.toLowerCase()}) and a replacement is on its way —
                  it'll arrive within 3–5 working days. Any recognised payments will continue.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <a href="#/personal" className="btn-green">Back to Personal</a>
                  <button
                    onClick={() => { setStep(0); setCard(null); setReason(null); setLast4(""); }}
                    className="btn-outline"
                  >
                    Report another card
                  </button>
                </div>
              </div>
            )}
          </div>

          <p className="mt-5 text-center text-sm text-charcoal/55">
            In a real emergency you'd also be able to call us 24/7 on <strong>0800 056 4242</strong>.
          </p>
        </div>
      </section>
    </>
  );
}

function Stepper({ title, children }) {
  return (
    <div className="animate-fadeIn">
      <h2 className="font-display text-2xl font-bold text-charcoal">{title}</h2>
      <div className="mt-5">{children}</div>
    </div>
  );
}

function Choice({ active, onClick, icon, label, desc, wide }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 rounded-2xl border-2 p-4 text-left transition ${
        active ? "border-forest bg-mint-soft" : "border-charcoal/10 hover:border-forest/40"
      } ${wide ? "w-full" : ""}`}
    >
      <span className="text-2xl">{icon}</span>
      <span>
        <span className="block font-semibold text-charcoal">{label}</span>
        {desc && <span className="block text-sm text-charcoal/60">{desc}</span>}
      </span>
    </button>
  );
}

function Nav({ back, next, disabled, nextLabel = "Continue" }) {
  return (
    <div className="mt-7 flex items-center justify-between">
      {back ? (
        <button onClick={back} className="text-sm font-semibold text-charcoal/60 hover:text-charcoal">‹ Back</button>
      ) : (
        <span />
      )}
      <button onClick={next} disabled={disabled} className="btn-green disabled:cursor-not-allowed disabled:opacity-40">
        {nextLabel}
      </button>
    </div>
  );
}
