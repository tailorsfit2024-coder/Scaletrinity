export type Industry = {
  slug: string;
  name: string;
  description: string;
  focusAreas: string[];
};

export const industries: Industry[] = [
  {
    slug: "fashion",
    name: "Fashion & Apparel",
    description:
      "Size and variation complexity, seasonality, and brand storytelling define fashion growth. We build catalog structures and creative systems that convert browsers into buyers.",
    focusAreas: ["Variation optimization", "Seasonal launch planning", "Lookbook-driven creative", "Size/fit UGC strategy"],
  },
  {
    slug: "beauty",
    name: "Beauty & Personal Care",
    description:
      "Beauty wins on trust signals, review velocity, and ingredient-led content. We combine compliant review strategy with creator-led storytelling across every marketplace.",
    focusAreas: ["Review acquisition strategy", "Ingredient & claims-safe copy", "Creator seeding programs", "Subscription & replenishment"],
  },
  {
    slug: "home",
    name: "Home & Living",
    description:
      "Higher price points and longer consideration cycles mean home brands need strong visual storytelling and trust-building A+ Content, storefronts, and PDPs.",
    focusAreas: ["Room-in-context creative", "A+ Content & storefronts", "Bundling strategy", "Freight & fulfillment-aware pricing"],
  },
  {
    slug: "electronics",
    name: "Electronics & Tech Accessories",
    description:
      "Electronics compete on specs, compliance, and account health. We keep listings technically airtight while running advertising against real margin data.",
    focusAreas: ["Spec-driven listing architecture", "Account health monitoring", "Warranty & compliance content", "Margin-adjusted PPC"],
  },
  {
    slug: "sportswear",
    name: "Sportswear & Activewear",
    description:
      "Performance claims, community, and repeat purchase behavior drive activewear growth. We build retention systems alongside acquisition to maximize lifetime value.",
    focusAreas: ["Performance-led creative", "Community & UGC programs", "Retention & subscription flows", "Cross-marketplace bundling"],
  },
];
