import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { ResourcesFilterable } from "@/components/sections/resources-filterable";
import { LeadFormSection } from "@/components/sections/lead-form";

export const metadata: Metadata = {
  title: "Resources — Marketplace Growth Insights, Guides & Templates",
  description:
    "Amazon, Shopify, and TikTok Shop growth insights, downloadable guides, checklists, audit templates, and industry reports from the ScaleTrinity team.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Marketplace growth knowledge, in one place."
        description="Insights, guides, checklists, and reports drawn from real marketplace engagements — built to help you diagnose and prioritize growth opportunities."
      />

      <section id="guides" className="relative bg-navy-950 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ResourcesFilterable />
        </div>
      </section>

      <section id="reports" className="sr-only" aria-hidden />

      <LeadFormSection />
    </>
  );
}
