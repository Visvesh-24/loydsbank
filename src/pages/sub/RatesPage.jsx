import { useState } from "react";
import { SubHero, Faq } from "../../components/SubLayout";
import { SectionHead } from "../../components/ui";

const TABLES = {
  Savings: {
    head: ["Account", "AER", "Access", "Min deposit"],
    rows: [
      ["Easy Saver", "3.10%", "Instant", "£1"],
      ["Online Bonus Saver", "4.05%", "Instant", "£1"],
      ["1 Year Fixed Bond", "4.40%", "Fixed term", "£2,000"],
      ["Cash ISA", "4.15%", "Instant", "£1"],
      ["Junior ISA", "4.50%", "Until 18", "£1"],
    ],
  },
  Mortgages: {
    head: ["Product", "Initial rate", "Then (SVR)", "Max LTV"],
    rows: [
      ["2 Year Fixed", "4.49%", "7.99%", "60%"],
      ["5 Year Fixed", "4.29%", "7.99%", "75%"],
      ["First-time buyer 5%", "5.19%", "7.99%", "95%"],
      ["2 Year Tracker", "4.74%", "7.99%", "75%"],
      ["Buy to Let Fixed", "4.99%", "8.49%", "75%"],
    ],
  },
  Loans: {
    head: ["Amount", "Representative APR", "Term", "Example monthly"],
    rows: [
      ["£1,000–£7,499", "12.9%", "1–5 yrs", "£113 (£5k/4yr)"],
      ["£7,500–£25,000", "6.1%", "1–7 yrs", "£193 (£10k/5yr)"],
      ["£25,001–£50,000", "9.9%", "1–7 yrs", "£636 (£30k/5yr)"],
    ],
  },
  "Credit cards": {
    head: ["Card", "Purchase APR", "Intro offer", "Annual fee"],
    rows: [
      ["Everyday Card", "23.9%", "0% for 20 mo", "£0"],
      ["Balance Transfer", "24.9%", "0% for 24 mo", "£0"],
      ["Cashback Card", "26.9%", "—", "£0"],
    ],
  },
};

export default function RatesPage() {
  const tabs = Object.keys(TABLES);
  const [tab, setTab] = useState(tabs[0]);
  const t = TABLES[tab];

  return (
    <>
      <SubHero
        section="personal"
        eyebrow="Help and interest rates"
        title="Our rates, all in one place"
        intro="Browse current illustrative rates for savings, mortgages, loans and credit cards. Rates can change — always check before you apply."
      />

      <section className="py-16">
        <div className="container-x">
          {/* Tabs */}
          <div className="mb-6 flex flex-wrap gap-2">
            {tabs.map((name) => (
              <button
                key={name}
                onClick={() => setTab(name)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  tab === name ? "bg-forest text-white" : "bg-mint-soft text-forest hover:bg-mint"
                }`}
              >
                {name}
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="overflow-hidden rounded-3xl border border-charcoal/10 shadow-card">
            <table className="w-full text-left text-sm">
              <thead className="bg-forest text-white">
                <tr>
                  {t.head.map((h) => (
                    <th key={h} className="px-5 py-4 font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-charcoal/10 bg-white">
                {t.rows.map((row, i) => (
                  <tr key={i} className="transition hover:bg-mint-pale">
                    {row.map((cell, j) => (
                      <td key={j} className={`px-5 py-4 ${j === 1 ? "font-display font-bold text-forest" : "text-charcoal/80"}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-charcoal/55">
            All rates shown are representative and may change. The rate you're offered depends on your
            circumstances. AER = Annual Equivalent Rate. APR = Annual Percentage Rate. SVR = Standard Variable Rate.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="container-x">
          <SectionHead title="Help with rates" />
          <Faq
            items={[
              ["What does AER mean?", "AER shows the interest you'd earn over a year with compounding, making accounts easy to compare."],
              ["Why might my rate differ?", "Your rate can depend on the product, your circumstances, deposit size and the term you choose."],
              ["How often do rates change?", "Rates can change at any time in response to the market and Bank of England decisions."],
            ]}
          />
        </div>
      </section>
    </>
  );
}
