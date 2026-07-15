import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { servicePillars } from "@/data/services";

export function ServicesOverview() {
  return (
    <section className="relative bg-navy-900/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Three marketplaces. One accountable growth team."
          description="ScaleTrinity operates as your outsourced growth department across every channel that matters — with senior specialists dedicated to each marketplace."
        />

        <RevealGroup className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {servicePillars.map((pillar) => (
            <RevealItem key={pillar.id}>
              <Link
                href={`/services#${pillar.id}`}
                className="group flex h-full flex-col rounded-3xl glass p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:shadow-glow"
              >
                <span className="inline-flex w-fit rounded-full bg-gradient-to-r from-electric-500/20 to-cyan-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-300">
                  {pillar.tagline}
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold text-white">{pillar.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist-400">{pillar.description}</p>

                <ul className="mt-6 flex flex-col gap-2.5">
                  {pillar.services.slice(0, 5).map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-mist-300">
                      <span className="size-1 shrink-0 rounded-full bg-cyan-400" />
                      {s}
                    </li>
                  ))}
                </ul>

                <span className="mt-8 flex items-center gap-1.5 text-sm font-semibold text-white">
                  Explore {pillar.name} Services
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
