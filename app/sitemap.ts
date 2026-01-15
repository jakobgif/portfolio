import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://jakobfrenzel.com',
      lastModified: new Date('2026-01-15'),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}