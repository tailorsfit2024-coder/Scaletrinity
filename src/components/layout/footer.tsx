import Link from "next/link";
import { Mail } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { NewsletterForm } from "@/components/layout/newsletter-form";
import { InstagramIcon, LinkedinIcon } from "@/components/ui/social-icons";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Process", href: "/process" },
      { label: "Careers", href: "/about#careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Amazon Growth", href: "/services#amazon" },
      { label: "Shopify Growth", href: "/services#shopify" },
      { label: "TikTok Shop Growth", href: "/services#tiktok-shop" },
      { label: "Free Growth Audit", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Insights & Blog", href: "/resources" },
      { label: "Growth Checklists", href: "/resources#guides" },
      { label: "Audit Templates", href: "/resources#guides" },
      { label: "Industry Reports", href: "/resources#reports" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Case Studies", href: "/case-studies" },
      { label: "Industries", href: "/industries" },
      { label: "FAQ", href: "/faq" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-navy-950">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.4] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div className="lg:pr-8">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist-400">
              The outsourced growth team for ambitious e-commerce brands scaling across Amazon,
              Shopify, and TikTok Shop.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/scaletrinity"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ScaleTrinity on LinkedIn"
                className="inline-flex size-10 items-center justify-center rounded-full glass text-mist-300 transition-colors hover:text-white"
              >
                <LinkedinIcon className="size-4" />
              </a>
              <a
                href="https://www.instagram.com/scaletrinity"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ScaleTrinity on Instagram"
                className="inline-flex size-10 items-center justify-center rounded-full glass text-mist-300 transition-colors hover:text-white"
              >
                <InstagramIcon className="size-4" />
              </a>
              <a
                href="mailto:hello@scaletrinity.com"
                aria-label="Email ScaleTrinity"
                className="inline-flex size-10 items-center justify-center rounded-full glass text-mist-300 transition-colors hover:text-white"
              >
                <Mail className="size-4" />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-sm font-semibold text-white">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-mist-400 transition-colors hover:text-cyan-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/[0.06] pt-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="font-display text-sm font-semibold text-white">
              Growth insights, straight to your inbox
            </h3>
            <p className="mt-1 text-sm text-mist-500">
              Marketplace strategy, no fluff. Unsubscribe anytime.
            </p>
          </div>
          <NewsletterForm />
        </div>

        <div className="mt-10 flex flex-col gap-4 text-xs text-mist-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ScaleTrinity. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-mist-400">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-mist-400">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
