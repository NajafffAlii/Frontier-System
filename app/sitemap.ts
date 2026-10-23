import type { MetadataRoute } from "next";
import { getAllServices } from "@/lib/data/services";

// Use a fixed date so the sitemap doesn't invalidate cache on every deploy.
// Update this when you publish new content.
const SITE_LAST_MODIFIED = new Date("2026-09-23T00:00:00Z");
const BASE_URL = "https://frontiersystems.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const services: MetadataRoute.Sitemap = getAllServices().map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: SITE_LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const coreRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/work`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/cookies`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  return [...coreRoutes, ...services];
}
