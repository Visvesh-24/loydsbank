# Loyds — Banking UI/UX Prototype

A fully interactive, multi-page banking website prototype built for a design challenge.
It recreates the structure, layout and colour language of a major UK bank's site while
**rebranding everything to the fictional "Loyds"** brand. No real bank affiliation.

> "Loyds" is a fictional brand. All imagery is license-free (Unsplash). Figures are illustrative.

## Stack

- **React 19** + **Vite 5**
- **Tailwind CSS 3** (custom forest/mint/lime palette + animations)
- No backend — all interactivity is client-side state.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the build
```

## What's interactive (not a static mockup)

| Feature | Behaviour |
|---|---|
| **Tab + sub-page routing** | Hash routing (`#/section/slug`). The three tabs switch sections, and **every sub-nav link, footer link and home-page CTA opens a working page**. *International Banking is intentionally excluded.* |
| **Hamburger menu** | Animated slide-out drawer (desktop + mobile) with section tabs, the active section's nav links and auth buttons; closes on overlay click / route change. |
| **Search bar** | Focus expands the field and shows live suggestions that navigate to the matching page. |
| **Log in / Register** | Mock modal with controlled-input forms, switchable login↔register and a success screen. `Esc` / overlay closes it. |
| **Callback forms** | "Request a callback" / "Get in touch" use controlled state and render a personalised mock success message on submit. |
| **No dead links** | Any unmapped slug resolves to a generated-but-fully-rendered info page, so nothing ever 404s. |
| **Scroll reveals + image fallback** | Sections fade in via `IntersectionObserver`; `SmartImage` swaps any failed image for an on-brand gradient. |

## Working pages

Every item in the sub-navigation of all three tabs opens a real page. Several are genuinely
interactive:

- **Mortgage Calculator** — live amortisation with sliders (price, deposit, term, rate) → monthly payment, LTV, total repayable.
- **Loans** — loan calculator with amount-banded representative APR.
- **Savings** — compound-growth projector with a deposits-vs-interest breakdown bar.
- **Help and interest rates** — tabbed rate tables (Savings / Mortgages / Loans / Credit cards).
- **Reporting a card lost or fraud** — a 4-step wizard (card → reason → confirm → frozen) with progress tracker.
- **All other nav/footer links** — a rich, content-driven `InfoPage` template (hero, highlights, product cards, feature rows, FAQ accordion, callback form).

## Structure

```
src/
├── App.jsx                  # shell + hash routing + modal state
├── components/
│   ├── Navbar.jsx           # 3-tier nav, search, hamburger drawer
│   ├── Footer.jsx
│   ├── Logo.jsx             # typography-driven "Loyds" wordmark (coin-ring "o")
│   ├── Modal.jsx            # reusable accessible modal
│   ├── AuthModal.jsx        # login / register flow
│   ├── PhoneMockup.jsx      # pure-CSS banking app phone
│   ├── SmartImage.jsx       # image with graceful gradient fallback
│   └── ui.jsx               # Reveal, SectionHead, ProductCard, IconTile,
│                            #   SurveyResults, CallbackForm
├── pages/
│   ├── registry.jsx         # maps {section, slug} → page component (with fallback)
│   ├── PersonalPage.jsx     # hero, products grid, £5k mortgage, support, survey
│   ├── BusinessPage.jsx     # £200 boost, 8-card grid, insights, barometer
│   ├── PrivateBankingPage.jsx # dark hero, everyday cards, standalone, contact
│   └── sub/
│       ├── InfoPage.jsx          # generic template for content pages
│       ├── MortgageCalculator.jsx
│       ├── LoanCalculator.jsx
│       ├── SavingsCalculator.jsx
│       ├── RatesPage.jsx         # tabbed rate tables
│       └── ReportCard.jsx        # 4-step lost/fraud wizard
├── lib/slug.js              # slugify / href helpers, section constants
└── data/
    ├── content.js           # nav links, survey, footer
    ├── pages.js             # content for InfoPage routes + generic fallback
    └── images.js            # curated Unsplash imagery + fallbacks
```

## Branding

The Lloyds name/logo is fully replaced with **Loyds** — a bold display wordmark where the
"o" is a minimalist coin-ring monogram. The palette (forest, moss, lime, mint, charcoal)
mirrors the references' green-forward identity.
