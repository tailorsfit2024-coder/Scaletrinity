import type { MetadataRoute } from "next";

const baseUrl = "https://www.scaletrinity.com";

const routes = [
  "",
  "/services",
  "/industries",
  "/case-studies",
  "/process",
  "/resources",
  "/about",
  "/contact",
  "/faq",
  "/privacy-policy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
