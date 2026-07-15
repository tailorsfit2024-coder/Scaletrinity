import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { Accordion } from "@/components/ui/accordion";
import { LeadFormSection } from "@/components/sections/lead-form";
import { faqCategories } from "@/data/faqs";

export const metadata: Metadata = {
  title: "FAQ — Amazon, Shopify & TikTok Shop Growth Questions Answered",
  description:
    "Answers to common questions about working with ScaleTrinity — Amazon, Shopify, and TikTok Shop services, pricing, timelines, reporting, and the Free Growth Audit.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  const allQa = faqCategories.flatMap((c) => c.items);

  return (
    <>
      <PageHero
        eyebrow="Frequently Asked Questions"
        title="Everything you need to know before we start."
        description="Straightforward answers about our process, pricing, and how we work across Amazon, Shopify, and TikTok Shop."
      />

      <section className="relative bg-navy-950 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex flex-col gap-14">
            {faqCategories.map((category, i) => (
              <Reveal key={category.category} delay={i * 0.04}>
                <h2 className="font-display text-xl font-bold text-white sm:text-2xl">
                  {category.category}
                </h2>
                <div className="mt-4 rounded-3xl glass px-6 sm:px-10">
                  <Accordion items={category.items} defaultOpenIndex={-1} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: allQa.map((qa) => ({
                "@type": "Question",
                name: qa.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: qa.answer,
                },
              })),
            }),
          }}
        />
      </section>

      <LeadFormSection />
    </>
  );
}
