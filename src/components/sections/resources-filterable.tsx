"use client";

import { useMemo, useState } from "react";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { ResourceCard } from "@/components/sections/resource-card";
import { cn } from "@/lib/utils";
import { resourceCategories, resources } from "@/data/resources";

export function ResourcesFilterable() {
  const [active, setActive] = useState<(typeof resourceCategories)[number]>("All");

  const filtered = useMemo(
    () => (active === "All" ? resources : resources.filter((r) => r.category === active)),
    [active]
  );

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {resourceCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
              active === category
                ? "bg-gradient-to-r from-electric-500 to-cyan-500 text-white shadow-glow"
                : "glass text-mist-400 hover:text-white"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <RevealGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
        {filtered.map((resource) => (
          <RevealItem key={resource.slug}>
            <ResourceCard resource={resource} />
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  );
}
