import { site, seo } from '../data/portfolio';

export const dynamic = 'force-static';

export default function manifest() {
  return {
    name: `${site.name} — React & Next.js Developer`,
    short_name: site.firstName,
    description: seo.description,
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    lang: seo.language,
    categories: ['portfolio', 'developer', 'business'],
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      { src: '/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
