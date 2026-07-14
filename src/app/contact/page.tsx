import type { Metadata } from "next";
import { Calendar, Mail } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { MapPlaceholder } from "@/components/sections/map-placeholder";
import { LeadFormSection } from "@/components/sections/lead-form";
import { InstagramIcon, LinkedinIcon } from "@/components/ui/social-icons";

export const metadata: Metadata = {
  title: "Contact ScaleTrinity — Book Your Free Growth Audit",
  description:
    "Get in touch with ScaleTrinity to book your Free Growth Audit and start scaling your brand across Amazon, Shopify, and TikTok Shop.",
  alternates: { canonical: "/contact" },
};

const contactMethods = [
  {
    icon: Mail,
    label: "Business Email",
    value: "hello@scaletrinity.com",
    href: "mailto:hello@scaletrinity.com",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "@scaletrinity",
    href: "https://www.linkedin.com/company/scaletrinity",
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: "@scaletrinity",
    href: "https://www.instagram.com/scaletrinity",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about where your brand is headed."
        description="Whether you're ready for a Free Growth Audit or just have a question about how we work, our team responds within one business day."
      />

      <section className="relative bg-navy-950 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="flex h-full flex-col justify-between gap-8 rounded-3xl glass p-8 sm:p-10">
              <div>
                <h2 className="font-display text-2xl font-bold text-white">Get in Touch</h2>
                <p className="mt-3 text-sm leading-relaxed text-mist-400">
                  Reach us directly, or book a strategy call with a senior growth lead.
                </p>

                <div className="mt-8 flex flex-col gap-4">
                  {contactMethods.map((method) => (
                    <a
                      key={method.label}
                      href={method.href}
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-5 py-4 transition-colors hover:border-white/20 hover:bg-white/[0.05]"
                    >
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-electric-500/20 to-cyan-500/20 text-cyan-300">
                        <method.icon className="size-4" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-mist-500">
                          {method.label}
                        </p>
                        <p className="text-sm font-medium text-white">{method.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <a
                href="#growth-audit"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-electric-500 to-cyan-500 px-6 py-4 text-sm font-semibold text-white shadow-glow transition-all hover:brightness-110"
              >
                <Calendar className="size-4" />
                Schedule a Strategy Call
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <MapPlaceholder />
          </Reveal>
        </div>
      </section>

      <LeadFormSection />
    </>
  );
}
