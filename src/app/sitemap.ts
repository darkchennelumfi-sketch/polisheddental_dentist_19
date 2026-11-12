import type { MetadataRoute } from "next";
import { blogPosts, pages } from "@/lib/site";

const baseUrl = "https://www.polished-dental.net";

const staticRoutes = [
  { path: "/", priority: 1, changeFrequency: "monthly" as const },
  { path: "/office", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/patient", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/treatment", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/cosmetic-dentistry", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/pediatric-dentistry", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/appointment", priority: 0.7, changeFrequency: "yearly" as const },
  { path: "/contact-us", priority: 0.7, changeFrequency: "yearly" as const },
  { path: "/office/meet-our-doctors", priority: 0.7, changeFrequency: "yearly" as const },
  { path: "/office/meet-the-staff", priority: 0.5, changeFrequency: "yearly" as const },
  { path: "/patient/patient-forms", priority: 0.5, changeFrequency: "yearly" as const },
];

const customRoutes = new Set([
  "/contact-us",
  "/office/meet-our-doctors",
  "/office/meet-the-staff",
  "/office/polished-dental-blog",
]);

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const contentRoutes = Object.keys(pages)
    .filter((route) => !customRoutes.has(`/${route}`))
    .map((route) => ({
      url: `${baseUrl}/${route}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: route === "privacy-policy" ? 0.3 : 0.6,
    }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/office/polished-dental-blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  const blogIndex = {
    url: `${baseUrl}/office/polished-dental-blog`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  };

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route.path}`,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...contentRoutes,
    blogIndex,
    ...blogRoutes,
  ];
}
