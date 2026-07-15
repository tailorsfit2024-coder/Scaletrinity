import Link from "next/link";
import { ArrowRight, BookOpen, ClipboardList, FileText, LayoutTemplate, TrendingUp } from "lucide-react";
import type { Resource, ResourceType } from "@/data/resources";

const typeIcon: Record<ResourceType, React.ComponentType<{ className?: string }>> = {
  Insight: BookOpen,
  Guide: FileText,
  Checklist: ClipboardList,
  Template: LayoutTemplate,
  Report: TrendingUp,
};

const ctaLabel: Record<ResourceType, string> = {
  Insight: "Discuss This Insight",
  Guide: "Request the Guide",
  Checklist: "Get the Checklist",
  Template: "Get the Template",
  Report: "Request the Report",
};

export function ResourceCard({ resource }: { resource: Resource }) {
  const Icon = typeIcon[resource.type];
  return (
    <div className="group flex h-full flex-col rounded-3xl glass p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:shadow-glow">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-mist-300">
          <Icon className="size-3.5 text-cyan-400" />
          {resource.type}
        </span>
        <span className="rounded-full bg-electric-500/10 px-3 py-1 text-[11px] font-semibold text-electric-300">
          {resource.category}
        </span>
      </div>

      <h3 className="mt-5 font-display text-lg font-bold leading-snug text-white">
        {resource.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-mist-400">{resource.excerpt}</p>

      <div className="mt-6 flex items-center justify-between border-t border-white/[0.07] pt-4">
        <span className="text-xs text-mist-500">{resource.readTime}</span>
        <Link
          href="/contact#growth-audit"
          className="flex items-center gap-1 text-xs font-semibold text-white transition-colors group-hover:text-cyan-300"
        >
          {ctaLabel[resource.type]}
          <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
