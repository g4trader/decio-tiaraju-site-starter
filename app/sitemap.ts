import type { MetadataRoute } from "next";
import { siteConfig } from "../lib/site-config";

const staticRoutes = [
  "",
  "/sobre",
  "/servicos",
  "/portfolio",
  "/conteudos",
  "/contato",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url.replace(/\/$/, "");

  return staticRoutes.map((path) => {
    const url = `${baseUrl}${path}`;
    return {
      url: path === "" ? baseUrl : url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: path === "" ? 1 : 0.7,
    };
  });
}

