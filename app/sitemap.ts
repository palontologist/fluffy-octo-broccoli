import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://frontforumfocus.com";
  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/products`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/community`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/podcasts`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/impact-intelligence`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${base}/use-cases`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/for-founders`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/our-story`, changeFrequency: "monthly", priority: 0.5 },
  ];
}
