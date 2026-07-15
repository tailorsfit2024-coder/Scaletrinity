import { SectionHeading } from "@/components/ui/section-heading";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { faqCategories } from "@/data/faqs";

export function FaqPreview() {
  const items = faqCategories.flatMap((c) => c.items).slice(0, 6);
  return (
    <section className="relative bg-navy-950 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Common Questions"
          title="What brands ask before partnering with us."
          description="Straightforward answers about our process, pricing, and how we work with Amazon, Shopify, and TikTok Shop brands."
        />

        <div className="mt-14 rounded-3xl glass px-6 sm:px-10">
          <Accordion items={items} />
        </div>

        <Reveal delay={0.1} className="mt-10 flex justify-center">
          <Button href="/faq" variant="secondary">
            View Full FAQ
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
