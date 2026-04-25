import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { getAllProjects } from "@/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getAllProjects();

  const projectUrls: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${SITE_CONFIG.url}/projects/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: SITE_CONFIG.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectUrls,
  ];
}
