import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.scaletrinity.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ScaleTrinity — E-Commerce Growth Agency for Amazon, Shopify & TikTok Shop",
    template: "%s | ScaleTrinity",
  },
  description:
    "ScaleTrinity is the outsourced growth team for ambitious e-commerce brands — scaling revenue across Amazon, Shopify, and TikTok Shop through advertising, conversion optimization, and product launches.",
  keywords: [
    "e-commerce growth agency",
    "Amazon PPC agency",
    "Shopify growth agency",
    "TikTok Shop agency",
    "Amazon marketing agency",
    "conversion rate optimization",
    "marketplace growth partner",
  ],
  authors: [{ name: "ScaleTrinity" }],
  creator: "ScaleTrinity",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "ScaleTrinity",
    title: "ScaleTrinity — Scale Smarter. Grow Faster. Dominate Every Marketplace.",
    description:
      "The outsourced growth team for ambitious Amazon, Shopify, and TikTok Shop brands.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "ScaleTrinity" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ScaleTrinity — E-Commerce Growth Agency",
    description:
      "The outsourced growth team for ambitious Amazon, Shopify, and TikTok Shop brands.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-navy-950 text-mist-100 selection:bg-electric-500 selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "ScaleTrinity",
              url: siteUrl,
              description:
                "ScaleTrinity helps ambitious e-commerce brands grow through Amazon, Shopify, and TikTok Shop.",
              areaServed: "Worldwide",
              serviceType: [
                "Amazon Marketplace Management",
                "Shopify Growth Marketing",
                "TikTok Shop Growth",
                "Paid Advertising",
                "Conversion Rate Optimization",
              ],
              sameAs: [
                "https://www.linkedin.com/company/scaletrinity",
                "https://www.instagram.com/scaletrinity",
              ],
            }),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
