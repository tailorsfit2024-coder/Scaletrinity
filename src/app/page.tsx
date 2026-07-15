import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { StatsBand } from "@/components/sections/stats-band";
import { ServicesOverview } from "@/components/sections/services-overview";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { CaseStudiesPreview } from "@/components/sections/case-studies-preview";
import { ProcessPreview } from "@/components/sections/process-preview";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FaqPreview } from "@/components/sections/faq-preview";
import { LeadFormSection } from "@/components/sections/lead-form";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <StatsBand />
      <ServicesOverview />
      <WhyChooseUs />
      <CaseStudiesPreview />
      <ProcessPreview />
      <TestimonialsSection />
      <FaqPreview />
      <LeadFormSection />
    </>
  );
}
