import { Quote } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex h-full flex-col justify-between rounded-3xl glass p-8 transition-colors hover:border-white/20">
      <div>
        <Quote className="size-8 text-electric-400/60" />
        <p className="mt-5 text-sm leading-relaxed text-mist-300 sm:text-base">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>
      <div className="mt-8 flex items-center justify-between border-t border-white/[0.07] pt-5">
        <div>
          <p className="font-display text-sm font-semibold text-white">{testimonial.name}</p>
          <p className="text-xs text-mist-500">{testimonial.role}</p>
        </div>
        <span className="rounded-full glass px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-cyan-300">
          {testimonial.marketplace}
        </span>
      </div>
      <span className="mt-4 block text-center text-[10px] font-semibold uppercase tracking-[0.15em] text-mist-600">
        Placeholder Testimonial
      </span>
    </div>
  );
}
