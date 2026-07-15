import { CheckCircle2 } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/gradient-blobs";
import { Button } from "@/components/ui/button";
import type { ServicePillar } from "@/data/services";
import { cn } from "@/lib/utils";

export function ServicePillarSection({
  pillar,
  reversed = false,
}: {
  pillar: ServicePillar;
  reversed?: boolean;
}) {
  return (
    <section
      id={pillar.id}
      className={cn(
        "scroll-mt-24 border-b border-white/[0.06] py-20 sm:py-24",
        reversed ? "bg-navy-900/40" : "bg-navy-950"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <Reveal>
              <Eyebrow>{pillar.tagline}</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {pillar.name} Growth Services
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-mist-400 sm:text-lg">
                {pillar.description}
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-8">
                <Button href="/contact" variant="primary">
                  Book Your Free {pillar.name} Audit
                </Button>
              </div>
            </Reveal>
          </div>

          <RevealGroup
            className="grid grid-cols-1 gap-3 sm:grid-cols-2"
            stagger={0.035}
          >
            {pillar.services.map((service) => (
              <RevealItem key={service}>
                <div className="flex items-center gap-3 rounded-xl glass px-4 py-3.5 transition-colors hover:border-white/20">
                  <CheckCircle2 className="size-4 shrink-0 text-cyan-400" />
                  <span className="text-sm text-mist-200">{service}</span>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
