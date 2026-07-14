import { cn } from "@/lib/utils";

export function Logo({ className, iconOnly = false }: { className?: string; iconOnly?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id="st-grad" x1="2" y1="28" x2="30" y2="4" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3D6BFF" />
            <stop offset="1" stopColor="#6FE3F5" />
          </linearGradient>
        </defs>
        <path d="M16 2L29.8564 24H2.14359L16 2Z" stroke="url(#st-grad)" strokeWidth="2.4" strokeLinejoin="round" />
        <circle cx="16" cy="12.5" r="2.6" fill="url(#st-grad)" />
        <circle cx="10.2" cy="21.5" r="2.6" fill="url(#st-grad)" />
        <circle cx="21.8" cy="21.5" r="2.6" fill="url(#st-grad)" />
      </svg>
      {!iconOnly && (
        <span className="font-display text-lg font-bold tracking-tight text-white">
          Scale<span className="text-gradient-accent">Trinity</span>
        </span>
      )}
    </span>
  );
}
