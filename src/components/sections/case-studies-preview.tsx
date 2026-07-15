import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { CaseStudyCard } from "@/components/sections/case-study-card";
import { caseStudies } from "@/data/case-studies";

export function CaseStudiesPreview() {
  const featured = caseStudies.slice(0, 3);
  return (
    <section className="relative bg-navy-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Proven Results"
          title="Growth stories across every marketplace."
          description="Anonymized, verified case studies from brands we've partnered with. Full metrics and dashboards are shared during your Free Growth Audit."
        />

        <RevealGroup className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3" stagger={0.12}>
          {featured.map((study) => (
            <RevealItem key={study.slug}>
              <CaseStudyCard study={study} />
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-14 flex justify-center">
          <Button href="/case-studies" variant="secondary" size="lg">
            View All Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
}
