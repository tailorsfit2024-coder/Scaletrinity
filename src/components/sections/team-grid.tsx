import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

const roles = [
  { role: "Marketplace Strategy Lead", focus: "Amazon growth & account health" },
  { role: "Performance Marketing Lead", focus: "Meta, Google & TikTok advertising" },
  { role: "Conversion & Creative Lead", focus: "Shopify CRO & brand storytelling" },
  { role: "Creator Partnerships Lead", focus: "TikTok Shop affiliate & UGC programs" },
];

export function TeamGrid() {
  return (
    <section className="relative bg-navy-900/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Team"
          title="Senior specialists, not generalists."
          description="Every partnership is staffed by channel specialists who have run the exact playbooks your brand needs — team bios and headshots are added here as partnerships are onboarded."
        />

        <RevealGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {roles.map((member) => (
            <RevealItem key={member.role}>
              <div className="flex flex-col items-center gap-4 rounded-3xl glass p-8 text-center transition-colors hover:border-white/20">
                <div className="flex size-20 items-center justify-center rounded-full bg-gradient-to-br from-electric-500/25 to-cyan-500/25 font-display text-2xl font-bold text-white">
                  ST
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-white">{member.role}</p>
                  <p className="mt-1 text-xs text-mist-500">{member.focus}</p>
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-mist-600">
                  Placeholder Profile
                </span>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
