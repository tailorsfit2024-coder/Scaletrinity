import { SectionHeading } from "@/components/ui/section-heading";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function ProcessPreview() {
  return (
    <section className="relative bg-navy-900/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="How We Work"
          title="A proven six-stage growth system."
          description="Every partnership follows the same disciplined process — from discovery to scale — built to compound results quarter over quarter."
        />

        <div className="mt-16">
          <ProcessTimeline compact />
        </div>

        <Reveal delay={0.1} className="mt-14 flex justify-center">
          <Button href="/process" variant="secondary">
            See the Full Process
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
