import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { LegalSection } from "@/components/ui/legal-content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing the use of the ScaleTrinity website and services.",
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="Last updated: January 2026. This placeholder policy should be reviewed by legal counsel before publication."
      />

      <section className="relative bg-navy-950 py-20 sm:py-24">
        <div className="mx-auto flex max-w-3xl flex-col gap-10 px-6 lg:px-8">
          <LegalSection title="Acceptance of Terms">
            <p>
              By accessing this website, you agree to be bound by these Terms of Service. If you
              do not agree with any part of these terms, please do not use this website.
            </p>
          </LegalSection>

          <LegalSection title="Services">
            <p>
              ScaleTrinity provides e-commerce growth consulting and management services across
              Amazon, Shopify, and TikTok Shop. Specific engagement terms, pricing, and
              deliverables are defined in a separate services agreement signed with each client.
            </p>
          </LegalSection>

          <LegalSection title="Use of Website">
            <p>
              This website and its content are provided for informational purposes. You may not
              reproduce, distribute, or use content from this site for commercial purposes without
              written permission from ScaleTrinity.
            </p>
          </LegalSection>

          <LegalSection title="No Guarantee of Results">
            <p>
              Case studies, statistics, and performance figures referenced on this website are
              illustrative and, where marked as placeholders, do not represent verified client
              outcomes. Marketplace performance depends on many factors outside our control, and
              past results do not guarantee future performance.
            </p>
          </LegalSection>

          <LegalSection title="Limitation of Liability">
            <p>
              ScaleTrinity shall not be liable for any indirect, incidental, or consequential
              damages arising from your use of this website or reliance on its content.
            </p>
          </LegalSection>

          <LegalSection title="Contact">
            <p>
              Questions about these terms can be directed to{" "}
              <a href="mailto:legal@scaletrinity.com" className="text-cyan-300 hover:underline">
                legal@scaletrinity.com
              </a>
              .
            </p>
          </LegalSection>
        </div>
      </section>
    </>
  );
}
