import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { ServicePillarSection } from "@/components/sections/service-pillar-section";
import { LeadFormSection } from "@/components/sections/lead-form";
import { servicePillars } from "@/data/services";

export const metadata: Metadata = {
  title: "Services — Amazon, Shopify & TikTok Shop Growth Services",
  description:
    "Full-service Amazon management, Shopify growth marketing, and TikTok Shop scaling systems — advertising, conversion optimization, listing optimization, and creative strategy under one accountable team.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Every growth lever, under one accountable team."
        description="From marketplace optimization to performance advertising, ScaleTrinity delivers the full stack of services your brand needs to scale profitably across Amazon, Shopify, and TikTok Shop."
      />

      {servicePillars.map((pillar, i) => (
        <ServicePillarSection key={pillar.id} pillar={pillar} reversed={i % 2 === 1} />
      ))}

      <LeadFormSection />
    </>
  );
}
