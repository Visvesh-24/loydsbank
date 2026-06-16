// Curated, license-free Unsplash imagery with a cohesive high-fashion editorial /
// cinematic aesthetic. Each entry is intentionally distinct to avoid repetition.
// Served via images.unsplash.com (free to use under the Unsplash license).

const u = (id, w = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMG = {
  // ——— Hero / lifestyle ———
  horse: u("1534773728080-33d31da27ae5", 1000), // cinematic black horse
  appLifestyle: u("1512941937669-90a1b58e7e9c", 1000),
  cityRunner: u("1483721310020-03333e577078", 1000),

  // ——— Personal products ———
  mortgage: u("1600585154340-be6161a56a0c"), // modern home
  currentAccount: u("1521791136064-7986c2920216"), // handshake / connection
  investments: u("1611974789855-9c2a0a7236a3"), // editorial finance
  loans: u("1556742049-0cfed4f6a45d"), // coins / saving
  cards: u("1556742502-ec7c0e9f34b1"),
  savings: u("1579621970563-ebec7560ff3e"),

  depositHome: u("1564013799919-ab600027ffc6", 1100), // luxury house exterior

  // ——— Customer support ———
  branch: u("1497366216548-37526070297c"),
  scamAlert: u("1563013544-824ae1b704d3"),
  accessibility: u("1573497019940-1c28c88b4f3e"),
  disability: u("1559136555-9303baea8ebd"),
  creditScore: u("1554224155-6726b3ff858f"),

  // ——— Business ———
  bizHero: u("1556761175-b413da4baf72", 1100),
  bizMeeting: u("1600880292203-757bb62b4baf"),
  bizManufacturing: u("1581091226825-a6a2a5aee158"),
  bizRetail: u("1441986300917-64674bd600d8"),
  bizRealEstate: u("1486406146926-c627a92ad1ab"),
  bizProfessionals: u("1521737604893-d14cc237f11d"),
  bizFarm: u("1500382017468-9049fed747ef"),
  bizRoyal: u("1518709268805-4e9042af9f23"),
  bizBlack: u("1573496799652-408c2ac9fe98", 1000),
  bizBarometer: u("1460925895917-afdab827c52f"),

  // ——— Private banking ———
  pbHero: u("1507003211169-0a1dd7228f2d", 1400), // refined portrait
  pbEveryday1: u("1573496359142-b8d87734a5a2"),
  pbEveryday2: u("1556157382-97eda2d62296"),
  pbMayfair: u("1600573472550-8090b5e0745e"),
  pbLending: u("1600607687939-ce8a6c25118c"),
  pbEstates: u("1524758631624-e2822e304c36"),
  pbTrustee: u("1542338347-4fff3276af78"),
  pbExpert: u("1551836022-d5d88e9218df"),
  pbContact: u("1573164713988-8665fc963095"),
  pbAdvice: u("1521791136064-7986c2920216"),

  // ——— Footer / app ———
  appBanner: u("1607082348824-0a96f2a4b9da", 1000),
};

// A small palette of gradients used as graceful fallbacks if a remote image fails.
export const FALLBACK_GRADIENTS = [
  "linear-gradient(135deg,#024731,#02684a 55%,#6fe39b)",
  "linear-gradient(135deg,#013023,#024731 60%,#5fdd8a)",
  "linear-gradient(135deg,#02684a,#00a05a 50%,#8ef0b0)",
  "linear-gradient(135deg,#0a3d2b,#024731 60%,#c9f3da)",
];
