export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  marketplace: string;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "ScaleTrinity rebuilt our entire Amazon presence in under 90 days — new listings, a restructured PPC account, and a storefront that finally looks like our brand. ACOS dropped 31% and organic traffic nearly doubled. It's the first agency that's treated our account like their own money was on the line.",
    name: "Marcus Chen",
    role: "Founder, Northfield Outdoors",
    marketplace: "Amazon",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    quote:
      "We'd been bleeding budget on ads that looked great but didn't convert. The team rebuilt our checkout flow and product pages from the ground up — conversion rate is up nearly 2.5 points and our blended ROAS finally makes sense on a spreadsheet.",
    name: "Sofia Ramirez",
    role: "CEO, Lumen & Co.",
    marketplace: "Shopify",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    quote:
      "We had zero creator relationships and no idea where to start on TikTok Shop. Six months later we have an always-on affiliate program and shop traffic that's grown over 200%. They didn't just set it up — they taught our team how to run it.",
    name: "Jordan Blake",
    role: "Marketing Director, Coastal Table Co.",
    marketplace: "TikTok Shop",
    avatar: "https://i.pravatar.cc/150?img=33",
  },
  {
    quote:
      "What sold me was the account management relationship — I'm not chasing anyone for updates, I get a straight answer every week. Eighteen months in, our Amazon channel now outperforms our own website.",
    name: "Rachel Bennett",
    role: "Brand Owner, Wildroot Botanicals",
    marketplace: "Amazon",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    quote:
      "Every other agency we talked to wanted a bigger ad budget as the answer. ScaleTrinity started with our funnel — landing pages, email flows, retention — before we spent another dollar on traffic. Revenue per visitor is up 40% since.",
    name: "David Whitfield",
    role: "Founder, Verve Athletics",
    marketplace: "Shopify",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      "Launching on TikTok Shop felt impossible without an existing following. ScaleTrinity built our creator pipeline from scratch and got us to consistent five-figure weeks within the first quarter.",
    name: "Amanda Cole",
    role: "CEO, Bright Cedar Skincare",
    marketplace: "TikTok Shop",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];
