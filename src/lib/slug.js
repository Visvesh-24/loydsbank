export const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const deslug = (s) =>
  s
    .split("-")
    .map((w) => (w.length > 2 ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");

// Build a hash href for a route
export const href = (section, slug) => `#/${section}${slug ? `/${slug}` : ""}`;

export const SECTIONS = ["personal", "business", "private"];
export const SECTION_LABEL = {
  personal: "Personal",
  business: "Business",
  private: "Private Banking",
};
