import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { TestimonialCard } from "@/components/sections/testimonial-card";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section className="relative bg-navy-900/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Client Voices"
          title="Trusted by growth-focused brand teams."
          description="Placeholder testimonials shown below will be replaced with verified client quotes as partnerships are onboarded."
        />

        <RevealGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2" stagger={0.1}>
          {testimonials.map((t, i) => (
            <RevealItem key={`${t.name}-${t.marketplace}-${i}`}>
              <TestimonialCard testimonial={t} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
