import type { Metadata } from "next";
import { Compass, Gem, Rocket } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { StatsBand } from "@/components/sections/stats-band";
import { TeamGrid } from "@/components/sections/team-grid";
import { LeadFormSection } from "@/components/sections/lead-form";

export const metadata: Metadata = {
  title: "About ScaleTrinity — Your Outsourced Growth Team",
  description:
    "ScaleTrinity is a strategic growth partner combining marketplace expertise, creative execution, and performance marketing to help e-commerce brands scale efficiently.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    icon: Compass,
    title: "Strategy Before Spend",
    description:
      "We never run advertising or launch a listing without a strategy tying it back to profitability. Activity without direction isn't growth.",
  },
  {
    icon: Gem,
    title: "Craft in Every Detail",
    description:
      "From bullet-point copy to checkout flows, the difference between good and great is execution. We sweat the details others skip.",
  },
  {
    icon: Rocket,
    title: "Built to Compound",
    description:
      "Every optimization is designed to stack on the last. We measure success in trajectory, not isolated campaign wins.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About ScaleTrinity"
        title="We exist to be the growth team most brands can't build in-house."
        description="ScaleTrinity was founded on a simple observation: the brands winning across Amazon, Shopify, and TikTok Shop weren't necessarily the ones with the biggest budgets — they were the ones with the most disciplined operators."
      />

      <section className="relative bg-navy-950 py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:px-8">
          <div className="flex flex-col gap-6">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Our Story
              </span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Built by operators who scaled marketplaces from the inside.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="space-y-4 text-base leading-relaxed text-mist-400">
                <p>
                  Most agencies specialize in a single channel — an Amazon shop, a Shopify design
                  studio, a TikTok creator network. Brands were left stitching together
                  disconnected vendors, each optimizing their own slice of the business without a
                  shared view of profitability.
                </p>
                <p>
                  ScaleTrinity was built to close that gap. We operate as a single, accountable
                  growth team across every marketplace that matters — combining marketplace
                  operations, performance advertising, conversion optimization, and creative
                  strategy under one roof, one roadmap, and one set of numbers everyone is
                  measured against.
                </p>
                <p>
                  We call it the Trinity: marketplace expertise, creative execution, and
                  performance marketing, unified around a single growth objective. It&apos;s the
                  model we believe every ambitious e-commerce brand deserves.
                </p>
              </div>
            </Reveal>
          </div>

          <RevealGroup className="flex flex-col gap-5" stagger={0.1}>
            {principles.map((principle) => (
              <RevealItem key={principle.title}>
                <div className="flex gap-5 rounded-2xl glass p-6">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-electric-500/20 to-cyan-500/20 text-cyan-300">
                    <principle.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-white">
                      {principle.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist-400">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <StatsBand />
      <TeamGrid />

      <section id="careers" className="relative bg-navy-950 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Careers
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
              We&apos;re always looking for senior marketplace operators.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-4 text-base leading-relaxed text-mist-400">
              If you&apos;ve run Amazon PPC at scale, built a Shopify CRO program, or grown a
              TikTok Shop creator network, we&apos;d like to hear from you. Reach out at{" "}
              <a href="mailto:careers@scaletrinity.com" className="text-cyan-300 hover:underline">
                careers@scaletrinity.com
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <LeadFormSection />
    </>
  );
}
