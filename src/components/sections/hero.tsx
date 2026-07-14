"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/gradient-blobs";
import { HeroDashboard } from "@/components/sections/hero-dashboard";
import { Reveal } from "@/components/ui/reveal";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 60, damping: 20 });
  const springY = useSpring(my, { stiffness: 60, damping: 20 });
  const blobOneX = useTransform(springX, (v) => v * 24);
  const blobOneY = useTransform(springY, (v) => v * 24);
  const blobTwoX = useTransform(springX, (v) => v * -18);
  const blobTwoY = useTransform(springY, (v) => v * -18);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden bg-navy-950 pb-20 pt-36 sm:pt-44 lg:pb-28"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          style={{ x: blobOneX, y: blobOneY }}
          className="absolute -top-32 left-[10%] size-[30rem] rounded-full bg-electric-600/25 blur-[120px]"
        />
        <motion.div
          style={{ x: blobTwoX, y: blobTwoY }}
          className="absolute top-1/4 -right-24 size-[26rem] rounded-full bg-cyan-500/20 blur-[130px]"
        />
        <div className="bg-grid absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_65%_55%_at_50%_10%,black,transparent)]" />
        <div className="bg-noise absolute inset-0" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div className="flex flex-col items-start gap-7">
          <Reveal>
            <Eyebrow>Amazon · Shopify · TikTok Shop Growth Partner</Eyebrow>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
              Scale Smarter.
              <br />
              Grow Faster.
              <br />
              <span className="text-gradient-accent">Dominate Every Marketplace.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="max-w-xl text-base leading-relaxed text-mist-400 sm:text-lg">
              ScaleTrinity partners with ambitious brands to accelerate growth across Amazon,
              Shopify, and TikTok Shop through marketplace optimization, paid advertising,
              conversion rate optimization, product launches, creative strategy, and performance
              marketing.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href="/contact" size="lg">
                Book Your Free Growth Audit
              </Button>
              <Button href="/case-studies" size="lg" variant="secondary">
                View Success Stories
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-2 text-sm text-mist-500">
              <span>3 Marketplaces</span>
              <span className="h-1 w-1 rounded-full bg-mist-600" />
              <span>92+ Brands Scaled</span>
              <span className="h-1 w-1 rounded-full bg-mist-600" />
              <span>Free, No-Obligation Audit</span>
            </div>
          </Reveal>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <HeroDashboard />
        </motion.div>
      </div>
    </section>
  );
}
