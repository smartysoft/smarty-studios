import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://smartystudios.com";
  const lastModified = new Date();

  // Statik sayfalar
  const staticPages = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/customers`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/estimate-project`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
  ];

  // Gelecekte dinamik sayfalar eklenebilir
  // const dynamicPages = await getDynamicPages();

  return [...staticPages];
}
