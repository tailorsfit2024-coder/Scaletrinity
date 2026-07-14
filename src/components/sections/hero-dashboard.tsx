"use client";

import { motion } from "framer-motion";
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import { ShoppingBag, Sparkles, TrendingUp } from "lucide-react";

const chartData = [
  { m: 0, v: 30 },
  { m: 1, v: 42 },
  { m: 2, v: 38 },
  { m: 3, v: 58 },
  { m: 4, v: 52 },
  { m: 5, v: 74 },
  { m: 6, v: 68 },
  { m: 7, v: 92 },
  { m: 8, v: 88 },
  { m: 9, v: 112 },
  { m: 10, v: 104 },
  { m: 11, v: 134 },
];

const chips = [
  { icon: TrendingUp, label: "+142% Revenue", position: "-top-6 -left-6 sm:-left-10", delay: 0.4 },
  { icon: ShoppingBag, label: "3.4x ROAS", position: "top-1/3 -right-6 sm:-right-10", delay: 0.7 },
  { icon: Sparkles, label: "92 Brands Scaled", position: "-bottom-8 left-8 sm:left-4", delay: 1.0 },
];

export function HeroDashboard() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="relative rounded-3xl glass-strong p-6 shadow-glow sm:p-8"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-mist-500">
              Blended Revenue
            </p>
            <p className="mt-1 font-display text-3xl font-bold text-white">$1.84M</p>
          </div>
          <span className="flex items-center gap-1 rounded-full bg-cyan-500/15 px-3 py-1.5 text-xs font-semibold text-cyan-300">
            <TrendingUp className="size-3.5" />
            +118% YoY
          </span>
        </div>

        <div className="mt-6 h-40 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 6, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="hero-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6FE3F5" stopOpacity={0.55} />
                  <stop offset="100%" stopColor="#3D6BFF" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="v"
                stroke="#6FE3F5"
                strokeWidth={2.5}
                fill="url(#hero-fill)"
                isAnimationActive
                animationDuration={1800}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3 border-t border-white/[0.08] pt-4">
          {[
            { label: "Amazon", value: "+96%" },
            { label: "Shopify", value: "+84%" },
            { label: "TikTok Shop", value: "+210%" },
          ].map((row) => (
            <div key={row.label} className="text-center">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-mist-500">
                {row.label}
              </p>
              <p className="mt-1 font-display text-sm font-bold text-white">{row.value}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {chips.map(({ icon: Icon, label, position, delay }) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
          className={`absolute ${position} hidden animate-float-slow items-center gap-2 rounded-2xl glass-strong px-4 py-3 sm:flex`}
        >
          <span className="flex size-8 items-center justify-center rounded-full bg-gradient-to-r from-electric-500 to-cyan-500">
            <Icon className="size-4 text-white" />
          </span>
          <span className="text-xs font-semibold text-white">{label}</span>
        </motion.div>
      ))}
    </div>
  );
}
