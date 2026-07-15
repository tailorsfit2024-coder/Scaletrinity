"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { CaseStudyCard } from "@/components/sections/case-study-card";
import { cn } from "@/lib/utils";
import {
  caseStudies,
  industryFilters,
  marketplaceFilters,
  type IndustryTag,
  type Marketplace,
} from "@/data/case-studies";

function FilterPill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
        active
          ? "bg-gradient-to-r from-electric-500 to-cyan-500 text-white shadow-glow"
          : "glass text-mist-400 hover:text-white"
      )}
    >
      {children}
    </button>
  );
}

export function CaseStudiesFilterable() {
  const searchParams = useSearchParams();
  const initialIndustry = searchParams.get("industry");
  const validInitial = industryFilters.find(
    (i) => i.toLowerCase() === (initialIndustry ?? "").toLowerCase()
  );

  const [activeMarketplace, setActiveMarketplace] = useState<"All" | Marketplace>("All");
  const [activeIndustry, setActiveIndustry] = useState<"All" | IndustryTag>(validInitial ?? "All");

  const filtered = useMemo(() => {
    return caseStudies.filter((study) => {
      const marketplaceMatch = activeMarketplace === "All" || study.marketplace === activeMarketplace;
      const industryMatch = activeIndustry === "All" || study.industry === activeIndustry;
      return marketplaceMatch && industryMatch;
    });
  }, [activeMarketplace, activeIndustry]);

  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-2 text-xs font-semibold uppercase tracking-wide text-mist-500">
            Marketplace
          </span>
          <FilterPill active={activeMarketplace === "All"} onClick={() => setActiveMarketplace("All")}>
            All
          </FilterPill>
          {marketplaceFilters.map((m) => (
            <FilterPill key={m} active={activeMarketplace === m} onClick={() => setActiveMarketplace(m)}>
              {m}
            </FilterPill>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-2 text-xs font-semibold uppercase tracking-wide text-mist-500">
            Industry
          </span>
          <FilterPill active={activeIndustry === "All"} onClick={() => setActiveIndustry("All")}>
            All
          </FilterPill>
          {industryFilters.map((i) => (
            <FilterPill key={i} active={activeIndustry === i} onClick={() => setActiveIndustry(i)}>
              {i}
            </FilterPill>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-16 text-center text-mist-500">
          No case studies match this filter combination yet — check back soon.
        </p>
      ) : (
        <RevealGroup className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2" stagger={0.08}>
          {filtered.map((study) => (
            <RevealItem key={study.slug}>
              <CaseStudyCard study={study} />
            </RevealItem>
          ))}
        </RevealGroup>
      )}
    </div>
  );
}
