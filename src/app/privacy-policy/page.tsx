import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { LegalSection } from "@/components/ui/legal-content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How ScaleTrinity collects, uses, and protects your information.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="Last updated: January 2026. This placeholder policy should be reviewed by legal counsel before publication."
      />

      <section className="relative bg-navy-950 py-20 sm:py-24">
        <div className="mx-auto flex max-w-3xl flex-col gap-10 px-6 lg:px-8">
          <LegalSection title="Overview">
            <p>
              ScaleTrinity (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your
              privacy and is committed to protecting the personal information you share with us
              through our website and Free Growth Audit request forms.
            </p>
          </LegalSection>

          <LegalSection title="Information We Collect">
            <p>
              When you submit a Free Growth Audit request or newsletter signup, we may collect
              your name, company name, email address, phone number, website URL, marketplace
              information, revenue range, advertising spend, and details about your growth goals
              and challenges.
            </p>
          </LegalSection>

          <LegalSection title="How We Use Your Information">
            <p>
              Information submitted through our forms is used solely to evaluate your growth
              audit request, prepare relevant recommendations, and communicate with you about our
              services. We do not sell your personal information to third parties.
            </p>
          </LegalSection>

          <LegalSection title="Data Security">
            <p>
              We implement reasonable administrative, technical, and physical safeguards designed
              to protect your information from unauthorized access, disclosure, or misuse.
            </p>
          </LegalSection>

          <LegalSection title="Your Rights">
            <p>
              You may request access to, correction of, or deletion of your personal information
              at any time by contacting us at{" "}
              <a href="mailto:privacy@scaletrinity.com" className="text-cyan-300 hover:underline">
                privacy@scaletrinity.com
              </a>
              .
            </p>
          </LegalSection>

          <LegalSection title="Contact">
            <p>
              Questions about this policy can be directed to{" "}
              <a href="mailto:privacy@scaletrinity.com" className="text-cyan-300 hover:underline">
                privacy@scaletrinity.com
              </a>
              .
            </p>
          </LegalSection>
        </div>
      </section>
    </>
  );
}
