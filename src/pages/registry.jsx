import PersonalPage from "./PersonalPage";
import BusinessPage from "./BusinessPage";
import PrivateBankingPage from "./PrivateBankingPage";

import InfoPage from "./sub/InfoPage";
import MortgageCalculator from "./sub/MortgageCalculator";
import LoanCalculator from "./sub/LoanCalculator";
import SavingsCalculator from "./sub/SavingsCalculator";
import RatesPage from "./sub/RatesPage";
import ReportCard from "./sub/ReportCard";
import LegalPage from "./sub/LegalPage";
import Sitemap from "./sub/Sitemap";

import { PAGE_DATA, genericPage } from "../data/pages";
import { LEGAL } from "../data/legal";
import { SECTIONS } from "../lib/slug";

const HOME = {
  personal: PersonalPage,
  business: BusinessPage,
  private: PrivateBankingPage,
};

// Bespoke interactive routes
const SPECIAL = {
  "mortgage-calculator": MortgageCalculator,
  "help-and-interest-rates": RatesPage,
  "reporting-a-card-lost-or-fraud": ReportCard,
  loans: LoanCalculator,
  savings: SavingsCalculator,
};

/**
 * Resolve a {section, slug} route to a ready-to-render React element.
 * Falls back to a generic InfoPage so no link ever dead-ends.
 */
export function renderRoute(section, slug) {
  const safeSection = SECTIONS.includes(section) ? section : "personal";

  if (!slug) {
    const Home = HOME[safeSection];
    return <Home />;
  }

  if (SPECIAL[slug]) {
    const Comp = SPECIAL[slug];
    return <Comp />;
  }

  if (slug === "sitemap") return <Sitemap />;

  if (LEGAL[slug]) return <LegalPage data={LEGAL[slug]} />;

  const data = PAGE_DATA[slug] || genericPage(safeSection, slug);
  return <InfoPage data={data} />;
}
