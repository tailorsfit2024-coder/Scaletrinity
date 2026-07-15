export type ServicePillar = {
  id: "amazon" | "shopify" | "tiktok-shop";
  name: string;
  tagline: string;
  description: string;
  color: string;
  services: string[];
};

export const servicePillars: ServicePillar[] = [
  {
    id: "amazon",
    name: "Amazon",
    tagline: "Marketplace Growth & Advertising",
    description:
      "Full-funnel Amazon management for brands ready to defend market share, launch with confidence, and scale advertising profitably at any catalog size.",
    color: "electric",
    services: [
      "Amazon Account Management",
      "Amazon PPC",
      "Amazon SEO",
      "Listing Optimization",
      "Keyword Research",
      "Product Launches",
      "Brand Registry Support",
      "Inventory Planning",
      "Pricing Strategy",
      "A+ Content",
      "Storefront Design",
      "Product Photography Direction",
      "Listing Images",
      "Competitor Analysis",
      "Review Strategy",
      "Variation Optimization",
      "Account Health Monitoring",
      "Growth Strategy",
      "Analytics & Reporting",
    ],
  },
  {
    id: "shopify",
    name: "Shopify",
    tagline: "DTC Performance & Conversion",
    description:
      "End-to-end Shopify growth partnerships — design, development, and performance marketing built around one metric that matters: profitable revenue.",
    color: "cyan",
    services: [
      "Shopify Store Design",
      "Store Development",
      "Conversion Rate Optimization",
      "Meta Advertising",
      "Google Advertising",
      "Email Marketing",
      "Landing Pages",
      "Product Pages",
      "Checkout Optimization",
      "Upsell Funnels",
      "Retention Strategy",
      "Analytics & Reporting",
      "Performance Marketing",
      "Content Strategy",
      "Brand Positioning",
      "Growth Consulting",
    ],
  },
  {
    id: "tiktok-shop",
    name: "TikTok Shop",
    tagline: "Creator-Led Commerce at Scale",
    description:
      "TikTok Shop is a different game — built on creators, content velocity, and live selling. We build the systems that turn attention into repeatable revenue.",
    color: "electric",
    services: [
      "TikTok Shop Setup",
      "Shop Optimization",
      "Affiliate Program Management",
      "Creator Outreach",
      "UGC Strategy",
      "TikTok Ads",
      "Product Research",
      "Creative Strategy",
      "Performance Marketing",
      "Live Selling Strategy",
      "Content Planning",
      "Scaling Systems",
      "Marketplace Growth",
    ],
  },
];
