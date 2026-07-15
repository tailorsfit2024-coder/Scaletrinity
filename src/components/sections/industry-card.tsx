import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Industry } from "@/data/industries";

export function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <div className="group flex h-full flex-col rounded-3xl glass p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:shadow-glow">
      <h3 className="font-display text-xl font-bold text-white sm:text-2xl">{industry.name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-mist-400 sm:text-base">
        {industry.description}
      </p>

      <ul className="mt-6 flex flex-col gap-2.5">
        {industry.focusAreas.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-mist-300">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-cyan-400" />
            {f}
          </li>
        ))}
      </ul>

      <Link
        href={`/case-studies?industry=${encodeURIComponent(industry.name.split(" ")[0])}`}
        className="mt-8 flex items-center gap-1.5 text-sm font-semibold text-white"
      >
        View {industry.name} Case Studies
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
