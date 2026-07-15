"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");
  const [email, setEmail] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <div className="flex items-center gap-2 rounded-full glass px-4 py-3 text-sm text-cyan-300">
        <CheckCircle2 className="size-4 shrink-0" />
        You&apos;re on the list — watch for growth insights soon.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-sm items-center gap-2">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@brand.com"
        className="w-full rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder:text-mist-500 outline-none transition-colors focus:border-electric-400"
      />
      <button
        type="submit"
        aria-label="Subscribe to newsletter"
        className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-electric-500 to-cyan-500 text-white transition-transform hover:scale-105 active:scale-95"
      >
        <ArrowRight className="size-4" />
      </button>
    </form>
  );
}
