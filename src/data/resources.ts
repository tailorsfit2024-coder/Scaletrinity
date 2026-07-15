export type ResourceType = "Insight" | "Guide" | "Checklist" | "Template" | "Report";

export type Resource = {
  slug: string;
  type: ResourceType;
  title: string;
  excerpt: string;
  readTime: string;
  category: "Amazon" | "Shopify" | "TikTok Shop" | "Growth Strategy";
};

export const resources: Resource[] = [
  {
    slug: "amazon-ppc-profitability-framework",
    type: "Insight",
    title: "The Profitability-First Framework for Amazon PPC in 2026",
    excerpt:
      "Why optimizing for ACOS alone is costing brands margin — and the bid framework we use to manage advertising against real unit economics.",
    readTime: "8 min read",
    category: "Amazon",
  },
  {
    slug: "shopify-checkout-conversion-audit",
    type: "Guide",
    title: "The Complete Shopify Checkout Conversion Audit",
    excerpt:
      "A step-by-step walkthrough of every friction point between add-to-cart and order confirmation, and how to fix each one.",
    readTime: "11 min read",
    category: "Shopify",
  },
  {
    slug: "tiktok-shop-creator-program-blueprint",
    type: "Guide",
    title: "Building a TikTok Shop Creator Program From Zero",
    excerpt:
      "How to structure affiliate commissions, seed product to creators, and build a repeatable content engine without an existing audience.",
    readTime: "9 min read",
    category: "TikTok Shop",
  },
  {
    slug: "marketplace-growth-audit-checklist",
    type: "Checklist",
    title: "The 40-Point Marketplace Growth Audit Checklist",
    excerpt:
      "The exact checklist our strategists use during every Free Growth Audit — across account health, advertising, and conversion.",
    readTime: "Downloadable PDF",
    category: "Growth Strategy",
  },
  {
    slug: "amazon-listing-optimization-template",
    type: "Template",
    title: "Amazon Listing Optimization Template",
    excerpt:
      "A structured worksheet for keyword mapping, title architecture, and bullet point copywriting that ranks and converts.",
    readTime: "Downloadable Template",
    category: "Amazon",
  },
  {
    slug: "2026-ecommerce-marketplace-report",
    type: "Report",
    title: "2026 E-Commerce Marketplace Growth Report",
    excerpt:
      "Benchmarks and trends across Amazon, Shopify, and TikTok Shop advertising costs, conversion rates, and category growth.",
    readTime: "Downloadable Report",
    category: "Growth Strategy",
  },
  {
    slug: "meta-ads-creative-testing-system",
    type: "Insight",
    title: "The Creative Testing System Behind Profitable Meta Ads",
    excerpt:
      "How we structure creative testing cadence and budget allocation to find winning ads faster without wasting spend.",
    readTime: "7 min read",
    category: "Shopify",
  },
  {
    slug: "brand-registry-setup-guide",
    type: "Guide",
    title: "Amazon Brand Registry: Setup Guide & Common Pitfalls",
    excerpt:
      "Everything brand owners need to know before enrolling, and the mistakes that slow down approval.",
    readTime: "6 min read",
    category: "Amazon",
  },
  {
    slug: "product-launch-readiness-checklist",
    type: "Checklist",
    title: "Product Launch Readiness Checklist",
    excerpt:
      "The pre-launch checklist covering listings, inventory, advertising, and creative before a new product goes live.",
    readTime: "Downloadable PDF",
    category: "Growth Strategy",
  },
];

export const resourceCategories = ["All", "Amazon", "Shopify", "TikTok Shop", "Growth Strategy"] as const;
