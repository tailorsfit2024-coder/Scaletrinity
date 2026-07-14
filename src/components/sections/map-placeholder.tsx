import { MapPin } from "lucide-react";

export function MapPlaceholder() {
  return (
    <div className="relative flex h-full min-h-[320px] w-full items-center justify-center overflow-hidden rounded-3xl glass">
      <div className="bg-grid absolute inset-0 opacity-40" />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(61,107,255,0.28),transparent_55%)]"
      />
      <div className="relative flex flex-col items-center gap-3 text-center">
        <span className="relative flex size-14 items-center justify-center">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-cyan-400/40" />
          <span className="relative flex size-12 items-center justify-center rounded-full bg-gradient-to-r from-electric-500 to-cyan-500 shadow-glow">
            <MapPin className="size-6 text-white" />
          </span>
        </span>
        <p className="font-display text-sm font-semibold text-white">Remote-First · Global Reach</p>
        <p className="max-w-[220px] text-xs text-mist-500">
          Interactive map placeholder — embed your live office/service map here.
        </p>
      </div>
    </div>
  );
}
