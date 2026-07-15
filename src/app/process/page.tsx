import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { SectionHeading } from "@/components/ui/section-heading";
import { LeadFormSection } from "@/components/sections/lead-form";

export const metadata: Metadata = {
  title: "Our Process — The ScaleTrinity Growth System",
  description:
    "A six-stage growth process — Discovery, Audit, Strategy, Implementation, Optimization, and Scale — built to compound results across Amazon, Shopify, and TikTok Shop.",
  alternates: { canonical: "/process" },
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Process"
        title="A disciplined system, not a one-off campaign."
        description="Growth compounds when it's systematic. Every ScaleTrinity partnership runs through the same six-stage process — click any stage to see what's delivered."
      />

      <section className="relative bg-navy-950 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Growth System"
            title="Six stages. One accountable roadmap."
            description="Select a stage below to see exactly what's delivered at each step of the partnership."
          />
          <div className="mt-16">
            <ProcessTimeline />
          </div>
        </div>
      </section>

      <LeadFormSection />
    </>
  );
}
