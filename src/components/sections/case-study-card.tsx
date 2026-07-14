"use client";

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { BarChart3, Quote, TrendingUp } from "lucide-react";
import type { CaseStudy } from "@/data/case-studies";

const kpiLabels: { key: keyof CaseStudy["kpis"]; label: string }[] = [
  { key: "trafficGrowth", label: "Traffic Growth" },
  { key: "conversionRate", label: "Conversion Rate" },
  { key: "adPerformance", label: "Ad Performance" },
  { key: "revenueTrend", label: "Revenue Trend" },
];

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-3xl glass transition-all duration-300 hover:border-white/20 hover:shadow-glow">
      <div className="flex items-center justify-between gap-3 border-b border-white/[0.07] px-6 py-4 sm:px-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-electric-500/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-electric-300">
            {study.marketplace}
          </span>
          <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-cyan-300">
            {study.industry}
          </span>
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-mist-600">
          Placeholder Data
        </span>
      </div>

      <div className="flex-1 px-6 py-6 sm:px-8">
        <h3 className="font-display text-xl font-bold text-white sm:text-2xl">{study.clientLabel}</h3>

        <div className="mt-5 space-y-4 text-sm">
          <div>
            <p className="font-semibold text-mist-300">Challenge</p>
            <p className="mt-1 leading-relaxed text-mist-400">{study.challenge}</p>
          </div>
          <div>
            <p className="font-semibold text-mist-300">Strategy</p>
            <p className="mt-1 leading-relaxed text-mist-400">{study.strategy}</p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {study.servicesDelivered.map((s) => (
            <span
              key={s}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-mist-400"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4">
          <div className="mb-2 flex items-center justify-between">
            <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-mist-400">
              <TrendingUp className="size-3.5 text-cyan-400" />
              Before / After Revenue Index
            </p>
          </div>
          <div className="h-32 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={study.chartData} margin={{ top: 4, right: 4, left: 4, bottom: 0 }}>
                <defs>
                  <linearGradient id={`after-${study.slug}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6FE3F5" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="#6FE3F5" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id={`before-${study.slug}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4d5773" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="#4d5773" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" hide />
                <Tooltip
                  contentStyle={{
                    background: "#0b1220",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 12,
                    fontSize: 12,
                  }}
                  labelStyle={{ color: "#96a3bd" }}
                />
                <Area
                  type="monotone"
                  dataKey="before"
                  stroke="#4d5773"
                  strokeWidth={2}
                  fill={`url(#before-${study.slug})`}
                />
                <Area
                  type="monotone"
                  dataKey="after"
                  stroke="#6FE3F5"
                  strokeWidth={2.5}
                  fill={`url(#after-${study.slug})`}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          {kpiLabels.map(({ key, label }) => (
            <div key={key} className="rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-mist-500">{label}</p>
              <p className="mt-1 font-display text-sm font-bold text-white">{study.kpis[key]}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-2 rounded-xl border border-dashed border-white/15 px-4 py-3 text-xs text-mist-500">
          <BarChart3 className="size-4 shrink-0" />
          Analytics Screenshot Placeholder — to be replaced with verified dashboard export
        </div>

        <div className="mt-5 flex items-start gap-2 rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3">
          <Quote className="mt-0.5 size-4 shrink-0 text-electric-400/70" />
          <p className="text-xs italic text-mist-500">
            Client quote placeholder — to be replaced with a verified testimonial upon case study
            publication.
          </p>
        </div>
      </div>
    </div>
  );
}
