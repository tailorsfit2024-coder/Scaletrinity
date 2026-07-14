export type FaqCategory = {
  category: string;
  items: { question: string; answer: string }[];
};

export const faqCategories: FaqCategory[] = [
  {
    category: "Amazon",
    items: [
      {
        question: "Do you require Brand Registry to start working on Amazon?",
        answer:
          "Brand Registry unlocks A+ Content, Storefronts, and stronger IP protection, so we strongly recommend it — but we can begin with account audits, PPC, and listing optimization before enrollment is complete, and we'll guide you through the registration process.",
      },
      {
        question: "Can you fix an Amazon account health or suppression issue?",
        answer:
          "Yes. Account health monitoring and remediation is part of our core Amazon service. We diagnose the root cause, prepare the appeal or plan of action, and put monitoring in place to prevent recurrence.",
      },
      {
        question: "How do you approach Amazon PPC differently than most agencies?",
        answer:
          "We manage PPC against margin-adjusted profitability targets, not just ACOS in isolation — bidding decisions account for your actual unit economics, seasonality, and inventory position.",
      },
    ],
  },
  {
    category: "Shopify",
    items: [
      {
        question: "Do you build new Shopify stores or only optimize existing ones?",
        answer:
          "Both. We design and develop new Shopify storefronts for brands launching or migrating platforms, and we run conversion optimization programs for established stores with existing traffic.",
      },
      {
        question: "What platforms do you advertise on for Shopify brands?",
        answer:
          "Primarily Meta and Google, supplemented by email and SMS retention marketing. Channel mix is determined during the Strategy phase based on your margin structure and customer acquisition cost targets.",
      },
      {
        question: "How is conversion rate optimization measured?",
        answer:
          "We run structured A/B and multivariate tests across landing pages, product pages, and checkout, tracked against statistically significant sample sizes — not vanity metrics.",
      },
    ],
  },
  {
    category: "TikTok Shop",
    items: [
      {
        question: "We have zero creator relationships — can you still launch us on TikTok Shop?",
        answer:
          "Yes, this is our most common starting point. We build your affiliate program, source and manage creator relationships, and develop your UGC content engine from the ground up.",
      },
      {
        question: "How quickly can a TikTok Shop launch show results?",
        answer:
          "Timelines vary by category and content velocity, but most brands see meaningful shop traffic within 30–60 days of a coordinated creator and paid media launch.",
      },
    ],
  },
  {
    category: "Pricing & Timelines",
    items: [
      {
        question: "How is pricing structured?",
        answer:
          "Engagements are scoped around your marketplace mix, catalog size, and advertising spend. Most partnerships combine a monthly retainer with a percentage-of-ad-spend management fee. Exact pricing is confirmed after your Free Growth Audit.",
      },
      {
        question: "How long before we see measurable results?",
        answer:
          "Foundational fixes (account health, listing quality, campaign structure) typically show impact within 30 days. Compounding growth from optimization and scale strategies is usually evident within one to two quarters.",
      },
      {
        question: "Are there long-term contracts?",
        answer:
          "We structure partnerships for long-term growth, but terms are discussed transparently during onboarding — we earn renewal through performance, not lock-in.",
      },
    ],
  },
  {
    category: "Process & Reporting",
    items: [
      {
        question: "What happens during the Free Growth Audit?",
        answer:
          "A senior strategist reviews your marketplace presence, advertising accounts, and conversion funnels, then delivers a prioritized set of findings and a recommended path forward — no cost, no obligation.",
      },
      {
        question: "How will we communicate with our account team?",
        answer:
          "Every partner is paired with a dedicated account manager and a direct line to channel specialists, with a standing weekly or bi-weekly cadence depending on account complexity.",
      },
      {
        question: "How do you report on performance?",
        answer:
          "You'll receive a live performance dashboard alongside monthly strategic reviews that connect marketplace metrics directly to revenue and profitability outcomes.",
      },
    ],
  },
];
