import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.polished-dental.net/sitemap.xml",
    host: "https://www.polished-dental.net",
  };
}
