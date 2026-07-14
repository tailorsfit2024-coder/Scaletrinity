import { Reveal } from "@/components/ui/reveal";

const platforms = ["Amazon", "Shopify", "TikTok Shop", "Google Ads", "Meta Ads"];

export function TrustBar() {
  const loop = [...platforms, ...platforms];
  return (
    <section className="relative border-y border-white/[0.06] bg-navy-900/60 py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-mist-500">
            Helping ambitious brands scale through data-driven growth systems
          </p>
        </Reveal>
      </div>
      <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-16">
          {loop.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-display text-xl font-bold tracking-tight whitespace-nowrap text-mist-500/70 transition-colors hover:text-white sm:text-2xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
