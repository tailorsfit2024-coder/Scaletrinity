import { Eyebrow, GradientBlobs } from "@/components/ui/gradient-blobs";
import { Reveal } from "@/components/ui/reveal";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.06] bg-navy-950 pb-20 pt-36 sm:pt-44">
      <GradientBlobs className="opacity-70" />
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center lg:px-8">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="max-w-2xl text-base leading-relaxed text-mist-400 sm:text-lg">
            {description}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
