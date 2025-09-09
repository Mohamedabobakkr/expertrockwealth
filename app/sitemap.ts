import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://expertrockwealth.com';

  // Static pages
  const staticPages = [
    '',
    '/services',
    '/calculator',
    '/case-studies',
    '/blog',
    '/about',
    '/team',
    '/careers',
    '/contact',
    '/legal/privacy',
    '/legal/terms',
    '/legal/cookies',
  ];

  // Generate sitemap for static pages
  const staticSitemap = staticPages.flatMap(page => [
    {
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: page === '' ? 1.0 : 0.8,
    },
    {
      url: `${baseUrl}/ar${page}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: page === '' ? 1.0 : 0.8,
    },
  ]);

  // TODO: Add dynamic pages from Sanity CMS
  // - Services from CMS
  // - Case studies
  // - Blog posts

  return staticSitemap;
}