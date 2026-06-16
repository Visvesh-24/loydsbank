import { IMG } from "./images";
import { deslug, SECTION_LABEL } from "../lib/slug";

// Rich content for template (InfoPage) routes. Special interactive routes
// (calculators, rates, fraud) are handled separately in the registry.
export const PAGE_DATA = {
  /* ——————————————————— PERSONAL ——————————————————— */
  "current-accounts": {
    section: "personal",
    eyebrow: "Current accounts",
    title: "A current account that fits your life",
    intro:
      "From everyday banking to accounts with added rewards and travel perks, find the account that's right for you — open in minutes, all in the app.",
    hero: IMG.currentAccount,
    highlights: [
      ["£175", "Switch offer*"],
      ["0", "Monthly fee on Classic"],
      ["24/7", "Mobile banking"],
    ],
    cards: [
      { tag: "Most popular", title: "Classic Account", body: "Everyday banking with no monthly fee, contactless debit card and Apple/Google Pay.", cta: "Apply now", img: IMG.currentAccount },
      { tag: "Rewards", title: "Club Loyds", body: "Earn rewards and a choice of lifestyle benefits for a small monthly fee (waived if you pay in £2,000).", cta: "Compare", img: IMG.cards },
      { tag: "Premium", title: "Platinum Account", body: "Worldwide travel insurance, AA breakdown cover and mobile phone insurance bundled in.", cta: "Explore", img: IMG.savings },
    ],
    faqs: [
      ["How do I switch to Loyds?", "Use the Current Account Switch Service — we move your payments and balance within 7 working days, guaranteed."],
      ["What do I need to apply?", "You'll need to be 18+, a UK resident, and have ID and proof of address handy."],
    ],
  },
  "credit-cards": {
    section: "personal",
    eyebrow: "Credit cards",
    title: "Find a credit card that works for you",
    intro:
      "Whether you're spreading the cost, transferring a balance or earning rewards, compare cards and check your eligibility without affecting your credit score.",
    hero: IMG.cards,
    cards: [
      { tag: "0% purchases", title: "Everyday Card", body: "0% interest on purchases for up to 20 months. Great for spreading a larger buy.", cta: "Check eligibility", img: IMG.cards },
      { tag: "Balance transfer", title: "Balance Transfer Card", body: "Move existing balances and pay 0% interest for up to 24 months.", cta: "Compare", img: IMG.loans },
      { tag: "Rewards", title: "Cashback Card", body: "Earn cashback on everyday spending with no annual fee.", cta: "Apply", img: IMG.currentAccount },
    ],
    faqs: [
      ["Will checking eligibility affect my score?", "No — our eligibility checker uses a soft search that's only visible to you."],
      ["How quickly can I use my card?", "Once approved you can add your card to your digital wallet and start spending right away."],
    ],
  },
  "mobile-banking-app": {
    section: "personal",
    eyebrow: "Mobile banking app",
    title: "Your bank, in your pocket",
    intro:
      "Join over 10 million customers who bank with our highly rated app. Move money, freeze cards, set savings goals and get real-time spending insights.",
    hero: IMG.appLifestyle,
    showPhone: true,
    features: [
      { title: "Move money in seconds", body: "Send payments, manage Direct Debits and split bills with friends — all secured by Face or Fingerprint ID.", img: IMG.appLifestyle, bullets: ["Instant payments", "Standing orders", "Pay a contact"] },
      { title: "Stay in control", body: "Freeze and unfreeze your card instantly, set spending limits and get a notification for every transaction.", img: IMG.creditScore, bullets: ["Freeze your card", "Spending insights", "Card controls"] },
    ],
    faqs: [
      ["Is the app secure?", "Yes — it uses biometric login, end-to-end encryption and our 24/7 fraud monitoring."],
      ["Which devices are supported?", "The app is available for recent iOS and Android devices."],
    ],
  },

  /* ——————————————————— BUSINESS ——————————————————— */
  "business-accounts": {
    section: "business",
    eyebrow: "Business accounts",
    title: "Business banking that works as hard as you",
    intro:
      "Open a business account in minutes and get £200 to kick things off. From start-ups to established companies, we've got an account to match.",
    hero: IMG.bizHero,
    highlights: [
      ["£200", "Business boost"],
      ["12 mo", "Free everyday banking"],
      ["1M+", "Businesses bank with us"],
    ],
    cards: [
      { tag: "Start-up", title: "Start Up Account", body: "For businesses trading less than 12 months — free everyday banking for your first 12 months.", cta: "Open account", img: IMG.bizMeeting },
      { tag: "Established", title: "Business Account", body: "For UK companies with turnover under £3m. Full-service banking with the £200 boost.", cta: "Apply", img: IMG.bizRoyal },
      { tag: "Sole trader", title: "Sole Trader Account", body: "Keep business and personal finances separate, with free everyday banking to start.", cta: "Get started", img: IMG.bizProfessionals },
    ],
    faqs: [
      ["How long does it take to open?", "Most eligible applications can be completed online in around 10 minutes."],
      ["How do I get the £200?", "Open an eligible account, then deposit and bank within 30 days — we'll pay £200 into your account."],
    ],
  },
  "take-payments": {
    section: "business",
    eyebrow: "Take payments",
    title: "Take payments, however your customers pay",
    intro:
      "Card readers, online checkout and pay-by-link — accept payments in person and online, with money in your account fast.",
    hero: IMG.bizRetail,
    cards: [
      { tag: "In person", title: "Card readers", body: "Take chip & PIN and contactless payments with a portable reader.", cta: "See readers", img: IMG.bizRetail },
      { tag: "Online", title: "Online checkout", body: "Add a secure checkout to your website and accept cards worldwide.", cta: "Learn more", img: IMG.bizMeeting },
      { tag: "Remote", title: "Pay by link", body: "Send a secure payment link by text or email and get paid remotely.", cta: "Get started", img: IMG.bizBarometer },
    ],
    faqs: [
      ["When do I get my money?", "Funds typically settle into your account the next business day."],
      ["Are there contracts?", "Choose flexible pay-as-you-go pricing or a monthly plan — no long lock-ins."],
    ],
  },
  borrowing: {
    section: "business",
    eyebrow: "Borrowing",
    title: "Finance to help your business grow",
    intro:
      "Whether you need a cash-flow boost or funding to expand, explore loans, overdrafts and asset finance built around your plans.",
    hero: IMG.bizManufacturing,
    cards: [
      { tag: "Flexible", title: "Business loan", body: "Borrow a fixed amount over a fixed term with predictable repayments.", cta: "Check rates", img: IMG.bizManufacturing },
      { tag: "Cash flow", title: "Business overdraft", body: "A safety net for short-term gaps — only pay for what you use.", cta: "Learn more", img: IMG.bizMeeting },
      { tag: "Equipment", title: "Asset finance", body: "Spread the cost of vehicles, machinery and equipment.", cta: "Explore", img: IMG.bizRealEstate },
    ],
    faqs: [
      ["Will I need security?", "It depends on the amount and product — our team will talk you through the options."],
      ["How do I apply?", "Start online or speak to a business manager for tailored support."],
    ],
  },
  "online-support": {
    section: "business",
    eyebrow: "Online support",
    title: "Help, whenever you need it",
    intro:
      "Manage your business banking online and get answers fast — guides, service status and a dedicated business support team.",
    hero: IMG.bizProfessionals,
    features: [
      { title: "Self-serve guides", body: "Step-by-step help for payments, statements, users and more — available 24/7.", img: IMG.bizProfessionals, bullets: ["Payments help", "Manage users", "Statements & exports"] },
      { title: "Talk to a human", body: "Our UK-based business team is on hand by phone and secure message during business hours.", img: IMG.bizMeeting, bullets: ["Phone support", "Secure messaging", "Relationship managers"] },
    ],
    faqs: [
      ["How do I check service status?", "Live status for online and mobile banking is shown on your dashboard."],
      ["Can I add team members?", "Yes — add users and set permissions from your account settings."],
    ],
  },
  "ways-to-bank": {
    section: "business",
    eyebrow: "Ways to bank",
    title: "Bank the way that suits your business",
    intro:
      "App, online, phone or branch — manage your money however works best for you, with the same security throughout.",
    hero: IMG.bizMeeting,
    cards: [
      { tag: "Mobile", title: "Business app", body: "Deposit cheques, make payments up to £250,000 a day and log in with your fingerprint.", cta: "Get the app", img: IMG.bizMeeting },
      { tag: "Online", title: "Online for Business", body: "A full dashboard for payments, payroll and cash management.", cta: "Log in", img: IMG.bizProfessionals },
      { tag: "In person", title: "Branch & phone", body: "Talk to us in branch or over the phone whenever you need a hand.", cta: "Find a branch", img: IMG.branch },
    ],
    faqs: [
      ["Is the app free?", "Yes, the business app is free to download and use with your account."],
      ["Can I bank in branch?", "Yes — find your nearest branch and opening hours in the app."],
    ],
  },
  insights: {
    section: "business",
    eyebrow: "Insights",
    title: "Insights to help your business thrive",
    intro:
      "Sector outlooks, practical guides and our monthly Business Barometer — the knowledge to make confident decisions.",
    hero: IMG.bizBarometer,
    cards: [
      { tag: "Report", title: "Business Barometer", body: "Our monthly read on business confidence, hiring and the wider economy.", cta: "Read the report", img: IMG.bizBarometer },
      { tag: "Sector", title: "Sector outlooks", body: "Tailored insight for manufacturing, retail, real estate and professional services.", cta: "Explore sectors", img: IMG.bizManufacturing },
      { tag: "Guide", title: "Making Tax Digital", body: "Get ready for MTD for Income Tax with our practical guides and software.", cta: "Learn more", img: IMG.bizProfessionals },
    ],
    faqs: [
      ["How often is the Barometer published?", "Monthly — with a deeper regional and sector breakdown each quarter."],
      ["Is the insight free?", "Yes, all of our business insight content is free to read."],
    ],
  },
  international: {
    section: "business",
    eyebrow: "International",
    title: "Trade and pay across borders",
    intro:
      "Send and receive international payments, manage currency risk and support your import and export plans.",
    hero: IMG.bizRoyal,
    cards: [
      { tag: "Payments", title: "International payments", body: "Send money abroad in multiple currencies with clear, upfront pricing.", cta: "Send a payment", img: IMG.bizRoyal },
      { tag: "FX", title: "Currency risk", body: "Tools to help you manage exchange-rate movements with confidence.", cta: "Learn more", img: IMG.bizBarometer },
      { tag: "Trade", title: "Trade finance", body: "Support for importers and exporters to keep cash flowing.", cta: "Explore", img: IMG.bizManufacturing },
    ],
    faqs: [
      ["Which currencies can I use?", "We support payments in a wide range of major and minor currencies."],
      ["How long do payments take?", "Many payments arrive within 1–2 business days depending on the destination."],
    ],
  },

  /* ——————————————————— PRIVATE BANKING ——————————————————— */
  "private-banking-accounts": {
    section: "private",
    eyebrow: "Private Banking",
    title: "Banking built around your wealth",
    intro:
      "Our Private Banking service is for customers with £250,000 or more in savings or investments — relationship-led banking with a dedicated point of contact.",
    hero: IMG.pbEveryday1,
    dark: true,
    highlights: [
      ["£250k+", "Eligibility threshold"],
      ["1:1", "Relationship management"],
      ["24/7", "Priority support"],
    ],
    features: [
      { title: "A dedicated relationship", body: "A named Private Banking manager who takes the time to understand your circumstances and goals.", img: IMG.pbEveryday1, bullets: ["Named contact", "Priority service", "Tailored solutions"] },
      { title: "Specialist partners", body: "We introduce you to lending, investment and estate specialists to help navigate complex needs.", img: IMG.pbEveryday2, bullets: ["Specialist lending", "Wealth planning", "Estate services"] },
    ],
    faqs: [
      ["How do I qualify?", "You'll need £250,000+ in savings or investments, or an annual income of £750,000+."],
      ["What does it cost?", "Speak to us about the current account options and any associated fees."],
    ],
  },
  "mayfair-banking": {
    section: "private",
    eyebrow: "Mayfair Banking",
    title: "Our most personal banking service",
    intro:
      "For clients with £2 million or more in savings and investments, Mayfair Banking offers a face-to-face relationship with a manager well versed in your world.",
    hero: IMG.pbMayfair,
    dark: true,
    highlights: [
      ["£2m+", "Eligibility"],
      ["Face-to-face", "Relationship"],
      ["Bespoke", "Solutions"],
    ],
    faqs: [
      ["What makes Mayfair different?", "A deeper, in-person relationship and access to bespoke lending and wealth solutions."],
      ["How do I find out more?", "Request a callback and a Mayfair manager will be in touch."],
    ],
  },
  "wealth-services": {
    section: "private",
    eyebrow: "Wealth services",
    title: "Grow and protect your wealth",
    intro:
      "Investment management, financial planning and advice to help you make the most of your wealth — now and for the generations that follow.",
    hero: IMG.pbExpert,
    cards: [
      { tag: "Invest", title: "Investment management", body: "Portfolios built and managed around your goals and appetite for risk.", cta: "Learn more", img: IMG.pbExpert },
      { tag: "Plan", title: "Financial planning", body: "A clear plan that brings together your savings, investments and pensions.", cta: "Explore", img: IMG.pbAdvice },
      { tag: "Protect", title: "Estate & legacy", body: "Trustee and estate services to preserve assets for the future.", cta: "Discover", img: IMG.pbTrustee },
    ],
    faqs: [
      ["Is my capital at risk?", "Investments can fall as well as rise — your manager will explain the risks clearly."],
      ["Can I speak to an adviser?", "Yes, our advisers offer a personalised plan after an initial conversation."],
    ],
  },
  "specialist-lending": {
    section: "private",
    eyebrow: "Specialist Lending",
    title: "Lending for complex needs",
    intro:
      "For unique or complex borrowing requirements, our Specialist Lending team helps finance your ambitions — from high-value mortgages to bespoke facilities.",
    hero: IMG.pbLending,
    dark: true,
    faqs: [
      ["What can you lend against?", "From high-value property to investment portfolios and other assets — talk to us about your needs."],
      ["Is eligibility required?", "Yes, lending eligibility and affordability checks apply."],
    ],
  },
  "estate-administration": {
    section: "private",
    eyebrow: "Estate Administration",
    title: "Support at a difficult time",
    intro:
      "Our Estate Administration Service can relieve the burden placed on executors following a bereavement, handling the financial and legal matters that arise.",
    hero: IMG.pbEstates,
    features: [
      { title: "We handle the details", body: "From valuing the estate to settling liabilities and distributing assets, we take care of the practicalities.", img: IMG.pbEstates, bullets: ["Estate valuation", "Settling liabilities", "Distributing assets"] },
    ],
    faqs: [
      ["Who can use this service?", "It's available to customers and non-customers alike — eligibility criteria apply."],
      ["How do I get started?", "Call our team or request a callback and we'll guide you through the next steps."],
    ],
  },
  "financial-advice": {
    section: "private",
    eyebrow: "Financial advice",
    title: "Advice that's tailored to you",
    intro:
      "For customers with £100,000 in sole income or savings, our expert advisers create a personalised plan to help you reach your financial goals.",
    hero: IMG.pbAdvice,
    features: [
      { title: "Expert financial advice", body: "Personalised recommendations across savings, investments and pensions, built around your circumstances.", img: IMG.pbAdvice, bullets: ["Personalised plan", "Ongoing reviews", "Clear, fee-based advice"] },
      { title: "More than just investing", body: "Comprehensive advice making sure all parts of your finances work towards your goals.", img: IMG.pbExpert, bullets: ["Retirement planning", "Tax-efficiency", "Legacy planning"] },
    ],
    faqs: [
      ["How much does advice cost?", "Fees apply if you take out a product or service — your adviser will explain these upfront."],
      ["Is there a charge for the first meeting?", "No, the initial meeting to discuss your circumstances and objectives is free."],
    ],
  },
};

// Generate generic-but-presentable content for any route without bespoke data
// (e.g. footer links), so no link ever dead-ends.
export function genericPage(section, slug) {
  const title = deslug(slug);
  return {
    section,
    eyebrow: SECTION_LABEL[section] || "Loyds",
    title,
    intro: `Everything you need to know about ${title.toLowerCase()} with Loyds. This is a demonstration page in the prototype — the layout and navigation are fully functional.`,
    hero: IMG.appLifestyle,
    features: [
      { title: `About ${title}`, body: "We're here to help you get the most from your money, with clear products and support whenever you need it.", img: IMG.currentAccount, bullets: ["Simple to use", "Clear pricing", "Support 24/7"] },
      { title: "Made for everyday life", body: "Manage everything in our highly rated app, online or in branch — whichever suits you.", img: IMG.appLifestyle, bullets: ["Mobile & online", "Secure by design", "In-branch help"] },
    ],
    faqs: [
      ["Is this a real banking product?", "No — Loyds is a fictional brand for a UI/UX design challenge. This page demonstrates working navigation and layout."],
      ["How do I get in touch?", "Use the Request a callback form below and we'll show you the mock confirmation flow."],
    ],
  };
}
