import { site, seo } from '../data/portfolio';

export const dynamic = 'force-static';

export default function sitemap() {
  const base = site.url.replace(/\/$/, '');
  return [
    {
      url: `${base}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      images: [`${base}${seo.ogImage}`, '/ramidu.webp', '/nimroo.webp', '/alokana.webp'].map((u) =>
        u.startsWith('http') ? u : `${base}${u}`
      ),
    },
    {
      url: `${base}/llms.txt`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ];
}
