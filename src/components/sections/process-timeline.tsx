"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { processSteps } from "@/data/process";

export function ProcessTimeline({ compact = false }: { compact?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.7", "end 0.3"],
  });
  const lineHeight = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <div ref={containerRef} className="relative mx-auto max-w-4xl">
      <div className="absolute left-[27px] top-2 bottom-2 w-px bg-white/10 sm:left-[31px]">
        <motion.div
          style={{ scaleY: lineHeight }}
          className="h-full w-full origin-top bg-gradient-to-b from-electric-400 to-cyan-400"
        />
      </div>

      <ol className="flex flex-col gap-3">
        {processSteps.map((step, i) => {
          const isActive = active === i;
          return (
            <motion.li
              key={step.index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-[70px] sm:pl-[80px]"
            >
              <button
                type="button"
                onClick={() => setActive(isActive ? -1 : i)}
                className="absolute left-0 top-0 flex size-14 items-center justify-center rounded-2xl glass-strong font-display text-lg font-bold text-white transition-all duration-300 sm:size-16"
                style={
                  isActive
                    ? { boxShadow: "0 0 0 1px rgba(111,227,245,0.4), 0 12px 30px -10px rgba(111,227,245,0.5)" }
                    : undefined
                }
                aria-expanded={isActive}
              >
                <span className={cn(isActive && "text-gradient-accent")}>{step.index}</span>
              </button>

              <div
                onClick={() => setActive(isActive ? -1 : i)}
                className={cn(
                  "cursor-pointer rounded-2xl border px-6 py-5 transition-all duration-300",
                  isActive
                    ? "border-white/20 bg-white/[0.05]"
                    : "border-white/[0.06] bg-white/[0.015] hover:border-white/12 hover:bg-white/[0.03]"
                )}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-lg font-bold text-white sm:text-xl">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-mist-400 sm:text-base">
                  {step.description}
                </p>

                {!compact && (
                  <motion.div
                    initial={false}
                    animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <ul className="mt-4 flex flex-col gap-2 border-t border-white/[0.07] pt-4">
                      {step.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm text-mist-300">
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-cyan-400" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}
