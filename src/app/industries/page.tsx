import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { IndustryCard } from "@/components/sections/industry-card";
import { LeadFormSection } from "@/components/sections/lead-form";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industries — E-Commerce Growth by Category",
  description:
    "ScaleTrinity builds category-specific growth strategies for Fashion, Beauty, Home, Electronics, and Sportswear brands across Amazon, Shopify, and TikTok Shop.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries We Serve"
        title="Category expertise built into every strategy."
        description="Every vertical has different margins, purchase cycles, and creative requirements. Our strategies are built around the specifics of your category — not a generic playbook."
      />

      <section className="relative bg-navy-950 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
            {industries.map((industry) => (
              <RevealItem key={industry.slug}>
                <IndustryCard industry={industry} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <LeadFormSection />
    </>
  );
}
