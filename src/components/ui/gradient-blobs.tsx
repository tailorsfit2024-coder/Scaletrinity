import { cn } from "@/lib/utils";

export function GradientBlobs({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div className="absolute -top-40 left-1/4 size-[32rem] rounded-full bg-electric-600/25 blur-[120px] animate-float-slow" />
      <div className="absolute top-1/3 -right-32 size-[28rem] rounded-full bg-cyan-500/20 blur-[130px] animate-float-slower" />
      <div className="absolute -bottom-32 left-1/3 size-[26rem] rounded-full bg-electric-500/15 blur-[110px] animate-float-slow" />
    </div>
  );
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300",
        className
      )}
    >
      <span className="size-1.5 rounded-full bg-cyan-400 animate-pulse-soft" />
      {children}
    </span>
  );
}
