import type { MetadataRoute } from "next";

// This preview deliberately has no public, canonical URL to index.
export default function sitemap(): MetadataRoute.Sitemap {
  return [];
}
