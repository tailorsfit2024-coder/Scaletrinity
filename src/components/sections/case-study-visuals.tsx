import { ArrowRight, Lock, Star } from "lucide-react";
import type { CaseStudy, Marketplace } from "@/data/case-studies";

const marketplaceDomain: Record<Marketplace, string> = {
  Amazon: "sellercentral.amazon.com",
  Shopify: "admin.shopify.com",
  "TikTok Shop": "seller.tiktokshop.com",
};

const kpiLabels: { key: keyof CaseStudy["kpis"]; label: string }[] = [
  { key: "trafficGrowth", label: "Traffic" },
  { key: "conversionRate", label: "CVR" },
  { key: "adPerformance", label: "Ad Perf." },
  { key: "revenueTrend", label: "Revenue" },
];

export function AnalyticsScreenshotMock({ study }: { study: CaseStudy }) {
  const values = study.chartData.map((d) => d.after);
  const max = Math.max(...values);

  return (
    <div className="overflow-hidden rounded-2xl border border-ink/[0.08] bg-white shadow-sm">
      <div className="flex items-center gap-2 border-b border-ink/[0.06] bg-ink/[0.02] px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-ink/15" />
        <span className="size-2.5 rounded-full bg-ink/15" />
        <span className="size-2.5 rounded-full bg-ink/15" />
        <span className="ml-2 flex items-center gap-1.5 rounded-md bg-ink/[0.04] px-2.5 py-1 text-[10px] text-mist-500">
          <Lock className="size-2.5" />
          {marketplaceDomain[study.marketplace]}
        </span>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between">
          <p className="font-display text-xs font-bold text-ink">Performance Dashboard</p>
          <span className="rounded-full bg-ink/[0.05] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-mist-500">
            Last 90 Days
          </span>
        </div>

        <div className="mt-3 grid grid-cols-4 gap-2">
          {kpiLabels.map(({ key, label }) => (
            <div key={key} className="rounded-lg bg-ink/[0.03] px-2 py-1.5">
              <p className="text-[8px] font-semibold uppercase tracking-wide text-mist-500">
                {label}
              </p>
              <p className="mt-0.5 truncate font-display text-[10px] font-bold text-electric-600">
                {study.kpis[key]}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-3 flex h-16 items-end gap-1.5">
          {values.map((v, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm bg-gradient-to-t from-electric-500 to-cyan-400"
              style={{ height: `${Math.max((v / max) * 100, 8)}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function BeforeAfterMock({ study }: { study: CaseStudy }) {
  return (
    <div className="relative grid grid-cols-2 gap-3">
      <div className="rounded-2xl border border-ink/[0.08] bg-ink/[0.02] p-3">
        <p className="text-[9px] font-semibold uppercase tracking-wide text-mist-500">Before</p>
        <div className="mt-2 h-16 rounded-lg bg-ink/[0.06]" />
        <div className="mt-2 h-2 w-3/4 rounded bg-ink/[0.08]" />
        <div className="mt-1.5 flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`size-2.5 ${i < 3 ? "fill-mist-400 text-mist-400" : "text-ink/10"}`}
            />
          ))}
        </div>
      </div>

      <div className="relative rounded-2xl border border-electric-500/20 bg-gradient-to-br from-electric-500/[0.06] to-cyan-500/[0.06] p-3">
        <span className="absolute -top-2 right-3 rounded-full bg-gradient-to-r from-electric-500 to-cyan-500 px-2 py-0.5 text-[8px] font-bold uppercase tracking-wide text-white shadow-glow">
          {study.marketplace === "Amazon"
            ? "Best Seller"
            : study.marketplace === "Shopify"
              ? "Optimized"
              : "Trending"}
        </span>
        <p className="text-[9px] font-semibold uppercase tracking-wide text-electric-600">After</p>
        <div className="mt-2 h-16 rounded-lg bg-gradient-to-br from-electric-500/25 to-cyan-500/25" />
        <div className="mt-2 h-2 w-full rounded bg-ink/15" />
        <div className="mt-1.5 flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-2.5 fill-amber-400 text-amber-400" />
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-center">
        <span className="hidden size-6 items-center justify-center rounded-full bg-white shadow-md sm:flex">
          <ArrowRight className="size-3 text-electric-500" />
        </span>
      </div>
    </div>
  );
}
