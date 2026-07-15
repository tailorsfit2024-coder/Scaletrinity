import { Counter } from "@/components/ui/counter";
import { Reveal } from "@/components/ui/reveal";

const stats = [
  { end: 92, suffix: "+", label: "Brands Scaled" },
  { end: 140, prefix: "$", suffix: "M+", label: "Managed Revenue" },
  { end: 3.4, decimals: 1, suffix: "x", label: "Average Blended ROAS" },
  { end: 3, label: "Marketplaces Mastered" },
];

export function StatsBand() {
  return (
    <section className="relative border-y border-white/[0.06] bg-navy-900/40 py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08} className="text-center">
            <p className="font-display text-3xl font-bold text-white sm:text-4xl">
              <Counter
                end={stat.end}
                prefix={stat.prefix}
                suffix={stat.suffix}
                decimals={stat.decimals}
              />
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-mist-500 sm:text-sm">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
