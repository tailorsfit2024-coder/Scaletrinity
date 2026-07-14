import { BarChart4, Handshake, LineChart, ShieldCheck, Target, UserCog, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

const reasons = [
  {
    icon: LineChart,
    title: "Data-Driven Growth",
    description: "Every decision is backed by performance data, not guesswork or industry folklore.",
  },
  {
    icon: Users,
    title: "Senior Marketplace Specialists",
    description: "Your account is run by senior operators, not junior staff learning on your budget.",
  },
  {
    icon: BarChart4,
    title: "Transparent Reporting",
    description: "Live dashboards and plain-language reviews connect activity directly to revenue.",
  },
  {
    icon: Target,
    title: "Growth-Focused Strategy",
    description: "Every engagement is built around a prioritized roadmap tied to your growth targets.",
  },
  {
    icon: UserCog,
    title: "Dedicated Account Managers",
    description: "One accountable point of contact, backed by a full bench of channel specialists.",
  },
  {
    icon: ShieldCheck,
    title: "Performance-First Mindset",
    description: "We're measured on outcomes — revenue, profitability, and growth — not busywork.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnerships",
    description: "We build for compounding growth over years, not one-off campaigns or quick wins.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative bg-navy-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why ScaleTrinity"
          title="A growth partner built like a consultancy, not a vendor."
          description="We operate as an extension of your team — senior talent, transparent systems, and a relentless focus on the metrics that actually move your business."
        />

        <RevealGroup className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <RevealItem key={reason.title}>
              <div className="group h-full rounded-2xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-glow">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-electric-500/20 to-cyan-500/20 text-cyan-300 transition-colors group-hover:text-cyan-200">
                  <reason.icon className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-white">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-400">{reason.description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
