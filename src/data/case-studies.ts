export type Marketplace = "Amazon" | "Shopify" | "TikTok Shop";
export type IndustryTag = "Fashion" | "Beauty" | "Home" | "Electronics" | "Sportswear";

export type CaseStudy = {
  slug: string;
  clientLabel: string;
  marketplace: Marketplace;
  industry: IndustryTag;
  challenge: string;
  strategy: string;
  servicesDelivered: string[];
  kpis: {
    trafficGrowth: string;
    conversionRate: string;
    adPerformance: string;
    revenueTrend: string;
  };
  chartData: { month: string; before: number; after: number }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "amazon-fashion-relaunch",
    clientLabel: "Placeholder Case Study — Amazon Fashion Brand",
    marketplace: "Amazon",
    industry: "Fashion",
    challenge:
      "A category-leading apparel brand plateaued on Amazon after years of flat organic growth and rising ACOS.",
    strategy:
      "Full catalog SEO overhaul, PPC restructuring around profitability tiers, and a brand storefront redesign to lift conversion.",
    servicesDelivered: ["Amazon PPC", "Listing Optimization", "A+ Content", "Storefront Design"],
    kpis: {
      trafficGrowth: "+142% organic sessions",
      conversionRate: "+3.8 pts CVR",
      adPerformance: "-31% ACOS",
      revenueTrend: "+118% YoY revenue",
    },
    chartData: [
      { month: "M1", before: 40, after: 46 },
      { month: "M2", before: 42, after: 58 },
      { month: "M3", before: 39, after: 71 },
      { month: "M4", before: 44, after: 89 },
      { month: "M5", before: 41, after: 104 },
      { month: "M6", before: 45, after: 128 },
    ],
  },
  {
    slug: "shopify-beauty-cro",
    clientLabel: "Placeholder Case Study — Shopify Beauty Brand",
    marketplace: "Shopify",
    industry: "Beauty",
    challenge:
      "Strong paid traffic wasn't converting — a leaky checkout and generic PDPs were suppressing return on ad spend.",
    strategy:
      "Checkout and PDP conversion overhaul paired with a Meta and Google creative refresh built around retention economics.",
    servicesDelivered: ["Conversion Rate Optimization", "Checkout Optimization", "Meta Advertising", "Email Marketing"],
    kpis: {
      trafficGrowth: "+64% qualified traffic",
      conversionRate: "+2.4 pts CVR",
      adPerformance: "+1.9x ROAS",
      revenueTrend: "+96% quarter-over-quarter",
    },
    chartData: [
      { month: "M1", before: 30, after: 33 },
      { month: "M2", before: 31, after: 41 },
      { month: "M3", before: 29, after: 49 },
      { month: "M4", before: 33, after: 58 },
      { month: "M5", before: 32, after: 66 },
      { month: "M6", before: 34, after: 75 },
    ],
  },
  {
    slug: "tiktok-shop-home-launch",
    clientLabel: "Placeholder Case Study — TikTok Shop Home Brand",
    marketplace: "TikTok Shop",
    industry: "Home",
    challenge:
      "A home goods brand needed a credible TikTok Shop launch strategy with no existing creator network or content engine.",
    strategy:
      "Built an affiliate and creator seeding program alongside a always-on UGC content calendar and TikTok Ads spark campaigns.",
    servicesDelivered: ["TikTok Shop Setup", "Creator Outreach", "UGC Strategy", "TikTok Ads"],
    kpis: {
      trafficGrowth: "+210% shop visits",
      conversionRate: "5.1% shop CVR",
      adPerformance: "3.4x blended ROAS",
      revenueTrend: "$0 to six figures in 120 days",
    },
    chartData: [
      { month: "M1", before: 4, after: 12 },
      { month: "M2", before: 6, after: 28 },
      { month: "M3", before: 5, after: 47 },
      { month: "M4", before: 7, after: 69 },
      { month: "M5", before: 8, after: 94 },
      { month: "M6", before: 9, after: 126 },
    ],
  },
  {
    slug: "amazon-electronics-scale",
    clientLabel: "Placeholder Case Study — Amazon Electronics Brand",
    marketplace: "Amazon",
    industry: "Electronics",
    challenge:
      "A multi-SKU electronics brand faced account health flags and inconsistent inventory planning that capped growth.",
    strategy:
      "Account health remediation, demand-based inventory forecasting, and a PPC restructure around margin-adjusted bidding.",
    servicesDelivered: ["Account Health Monitoring", "Inventory Planning", "Amazon PPC", "Pricing Strategy"],
    kpis: {
      trafficGrowth: "+87% page views",
      conversionRate: "+2.1 pts CVR",
      adPerformance: "-22% ACOS",
      revenueTrend: "+74% YoY revenue",
    },
    chartData: [
      { month: "M1", before: 52, after: 58 },
      { month: "M2", before: 50, after: 66 },
      { month: "M3", before: 54, after: 79 },
      { month: "M4", before: 51, after: 88 },
      { month: "M5", before: 53, after: 97 },
      { month: "M6", before: 55, after: 108 },
    ],
  },
  {
    slug: "shopify-sportswear-retention",
    clientLabel: "Placeholder Case Study — Shopify Sportswear Brand",
    marketplace: "Shopify",
    industry: "Sportswear",
    challenge:
      "High customer acquisition cost with low repeat purchase rate was eroding lifetime value and blended profitability.",
    strategy:
      "Built a retention engine — segmented email/SMS flows, subscription upsells, and a loyalty-driven landing page strategy.",
    servicesDelivered: ["Retention Strategy", "Email Marketing", "Upsell Funnels", "Landing Pages"],
    kpis: {
      trafficGrowth: "+38% returning visitors",
      conversionRate: "+1.6 pts CVR",
      adPerformance: "+27% blended AOV",
      revenueTrend: "+61% repeat purchase revenue",
    },
    chartData: [
      { month: "M1", before: 26, after: 29 },
      { month: "M2", before: 27, after: 34 },
      { month: "M3", before: 25, after: 40 },
      { month: "M4", before: 28, after: 47 },
      { month: "M5", before: 29, after: 53 },
      { month: "M6", before: 30, after: 61 },
    ],
  },
  {
    slug: "amazon-beauty-launch",
    clientLabel: "Placeholder Case Study — Amazon Beauty Brand",
    marketplace: "Amazon",
    industry: "Beauty",
    challenge:
      "A new-to-Amazon beauty brand needed a credible first-90-days launch plan to establish rank and review velocity.",
    strategy:
      "Keyword-mapped listing architecture, a review acquisition strategy within TOS guidelines, and an aggressive-but-profitable PPC ramp.",
    servicesDelivered: ["Product Launches", "Keyword Research", "Review Strategy", "Amazon PPC"],
    kpis: {
      trafficGrowth: "12K+ sessions in 90 days",
      conversionRate: "14.2% launch CVR",
      adPerformance: "1.8x launch ROAS",
      revenueTrend: "Top 3 category rank by day 60",
    },
    chartData: [
      { month: "W1", before: 2, after: 5 },
      { month: "W3", before: 3, after: 14 },
      { month: "W5", before: 3, after: 26 },
      { month: "W7", before: 4, after: 39 },
      { month: "W9", before: 4, after: 52 },
      { month: "W12", before: 5, after: 68 },
    ],
  },
];

export const marketplaceFilters: Marketplace[] = ["Amazon", "Shopify", "TikTok Shop"];
export const industryFilters: IndustryTag[] = ["Fashion", "Beauty", "Home", "Electronics", "Sportswear"];
