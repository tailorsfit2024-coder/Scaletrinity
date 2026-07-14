export type ProcessStep = {
  index: string;
  title: string;
  description: string;
  deliverables: string[];
};

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    title: "Discovery",
    description:
      "We start by understanding your brand, category, margins, and growth ambitions — not just your marketplace metrics.",
    deliverables: ["Stakeholder interviews", "Category & competitor landscape", "Goal alignment workshop"],
  },
  {
    index: "02",
    title: "Audit",
    description:
      "A full teardown of your Amazon, Shopify, and TikTok Shop presence — advertising, listings, conversion paths, and account health.",
    deliverables: ["Marketplace health scorecard", "Advertising performance review", "Conversion funnel analysis"],
  },
  {
    index: "03",
    title: "Strategy",
    description:
      "We translate audit findings into a prioritized, revenue-ranked roadmap built around your specific growth constraints.",
    deliverables: ["90-day growth roadmap", "Channel & budget allocation", "KPI framework & targets"],
  },
  {
    index: "04",
    title: "Implementation",
    description:
      "Our specialists execute — from listing rebuilds to campaign architecture to storefront design — with weekly visibility.",
    deliverables: ["Campaign & listing builds", "Creative production", "Technical & catalog fixes"],
  },
  {
    index: "05",
    title: "Optimization",
    description:
      "Continuous testing across bids, creative, pricing, and CRO — compounding small wins into meaningful performance gains.",
    deliverables: ["Weekly optimization cycles", "A/B testing program", "Bid & budget management"],
  },
  {
    index: "06",
    title: "Scale",
    description:
      "With a profitable foundation in place, we expand into new marketplaces, categories, and geographies with confidence.",
    deliverables: ["New marketplace launches", "Catalog expansion", "Quarterly growth reviews"],
  },
];
