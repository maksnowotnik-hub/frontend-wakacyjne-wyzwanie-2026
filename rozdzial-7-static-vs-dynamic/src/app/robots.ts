import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: '/search',
    },
    sitemap: 'https://twoj-katalog.pl/sitemap.xml',
  };
}