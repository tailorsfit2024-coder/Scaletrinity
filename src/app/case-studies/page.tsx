import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/ui/page-hero";
import { CaseStudiesFilterable } from "@/components/sections/case-studies-filterable";
import { LeadFormSection } from "@/components/sections/lead-form";

export const metadata: Metadata = {
  title: "Case Studies — Verified Marketplace Growth Results",
  description:
    "Explore anonymized case studies across Amazon, Shopify, and TikTok Shop — filterable by marketplace and industry, with KPIs, strategy breakdowns, and revenue trends.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Real strategies. Measurable outcomes."
        description="Every engagement starts with a challenge and ends with a number. Explore how we've approached growth across marketplaces and categories."
      />

      <section className="relative bg-navy-950 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Suspense fallback={null}>
            <CaseStudiesFilterable />
          </Suspense>
        </div>
      </section>

      <LeadFormSection />
    </>
  );
}
