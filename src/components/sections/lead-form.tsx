"use client";

import { useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { ButtonEl } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow, GradientBlobs } from "@/components/ui/gradient-blobs";
import type { GrowthAuditPayload } from "@/lib/growth-audit";

const marketplaces = ["Amazon", "Shopify", "TikTok Shop", "Multiple Marketplaces"];
const revenueRanges = [
  "$20K–$50K / mo",
  "$50K–$150K / mo",
  "$150K–$500K / mo",
  "$500K–$1M / mo",
  "$1M+ / mo",
];
const adSpendRanges = ["Under $5K / mo", "$5K–$20K / mo", "$20K–$75K / mo", "$75K+ / mo"];

const fieldClasses =
  "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white placeholder:text-mist-500 outline-none transition-colors focus:border-electric-400 focus:bg-white/[0.06]";
const labelClasses = "mb-2 block text-xs font-semibold uppercase tracking-wide text-mist-400";

export function LeadForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "submitted" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries()) as unknown as GrowthAuditPayload;

    try {
      const res = await fetch("/api/growth-audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("submitted");
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "submitted") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl glass-strong px-8 py-16 text-center">
        <span className="flex size-14 items-center justify-center rounded-full bg-gradient-to-r from-electric-500 to-cyan-500">
          <CheckCircle2 className="size-7 text-white" />
        </span>
        <h3 className="font-display text-2xl font-bold text-white">Request received.</h3>
        <p className="max-w-md text-mist-400">
          A ScaleTrinity growth strategist will review your brand and follow up within one
          business day to schedule your Free Growth Audit.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-3xl glass-strong ${compact ? "p-6 sm:p-8" : "p-6 sm:p-10 lg:p-12"}`}
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClasses} htmlFor="name">
            Full Name
          </label>
          <input id="name" name="name" required className={fieldClasses} placeholder="Jordan Reyes" />
        </div>
        <div>
          <label className={labelClasses} htmlFor="company">
            Company / Brand
          </label>
          <input id="company" name="company" required className={fieldClasses} placeholder="Brand Co." />
        </div>
        <div>
          <label className={labelClasses} htmlFor="email">
            Work Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={fieldClasses}
            placeholder="you@brand.com"
          />
        </div>
        <div>
          <label className={labelClasses} htmlFor="phone">
            Phone Number
          </label>
          <input id="phone" name="phone" type="tel" className={fieldClasses} placeholder="+1 (555) 000-0000" />
        </div>
        <div>
          <label className={labelClasses} htmlFor="website">
            Website / Store URL
          </label>
          <input id="website" name="website" className={fieldClasses} placeholder="www.yourbrand.com" />
        </div>
        <div>
          <label className={labelClasses} htmlFor="marketplace">
            Primary Marketplace
          </label>
          <select id="marketplace" name="marketplace" required className={fieldClasses} defaultValue="">
            <option value="" disabled>
              Select marketplace
            </option>
            {marketplaces.map((m) => (
              <option key={m} value={m} className="bg-navy-900">
                {m}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClasses} htmlFor="revenue">
            Monthly Revenue
          </label>
          <select id="revenue" name="revenue" required className={fieldClasses} defaultValue="">
            <option value="" disabled>
              Select revenue range
            </option>
            {revenueRanges.map((r) => (
              <option key={r} value={r} className="bg-navy-900">
                {r}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClasses} htmlFor="adSpend">
            Current Advertising Spend
          </label>
          <select id="adSpend" name="adSpend" className={fieldClasses} defaultValue="">
            <option value="" disabled>
              Select ad spend range
            </option>
            {adSpendRanges.map((r) => (
              <option key={r} value={r} className="bg-navy-900">
                {r}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={labelClasses} htmlFor="challenges">
            Current Challenges
          </label>
          <textarea
            id="challenges"
            name="challenges"
            rows={3}
            className={fieldClasses}
            placeholder="Stalled advertising ROAS, low conversion rate, inventory issues, new marketplace launch…"
          />
        </div>
        <div className="sm:col-span-2">
          <label className={labelClasses} htmlFor="goals">
            Growth Goals
          </label>
          <textarea
            id="goals"
            name="goals"
            rows={3}
            className={fieldClasses}
            placeholder="What does success look like over the next 6–12 months?"
          />
        </div>
      </div>

      {status === "error" && (
        <div className="mt-6 flex items-start gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          <AlertCircle className="mt-0.5 size-4 shrink-0" />
          {errorMessage}
        </div>
      )}

      <ButtonEl
        type="submit"
        size="lg"
        showArrow
        disabled={status === "submitting"}
        className="mt-8 w-full justify-center disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? (
          <span className="flex items-center gap-2">
            <Loader2 className="size-4 animate-spin" />
            Submitting…
          </span>
        ) : (
          "Book My Free Growth Audit"
        )}
      </ButtonEl>
      <p className="mt-4 text-center text-xs text-mist-500">
        No cost, no obligation. Your audit is reviewed by a senior marketplace strategist, not a
        bot.
      </p>
    </form>
  );
}

export function LeadFormSection() {
  return (
    <section id="growth-audit" className="relative overflow-hidden bg-navy-900 py-24 sm:py-32">
      <GradientBlobs className="opacity-50" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="flex flex-col justify-center gap-6">
          <Reveal>
            <Eyebrow>Free Growth Audit</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Let&apos;s Scale Your Brand.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="max-w-md text-base leading-relaxed text-mist-400 sm:text-lg">
              Tell us about your brand and where you&apos;re headed. We&apos;ll map the fastest
              path to profitable growth across your marketplaces — free, no obligation.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <ul className="space-y-3 text-sm text-mist-300">
              {[
                "30-minute strategy session with a senior growth lead",
                "Marketplace, advertising & conversion teardown",
                "A prioritized 90-day growth roadmap",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-cyan-400" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Reveal direction="left" delay={0.1}>
          <LeadForm />
        </Reveal>
      </div>
    </section>
  );
}
