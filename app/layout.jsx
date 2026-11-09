import { Bodoni_Moda, Geist } from 'next/font/google';
import './globals.css';
import { site, seo } from '../data/portfolio';
import SmoothScroll from '../components/SmoothScroll';
import Cursor from '../components/Cursor';

const display = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-display',
  display: 'swap',
});

const body = Geist({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const [firstName, ...lastNames] = site.name.split(' ');

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: seo.title,
    template: `%s | ${site.name}`,
  },
  description: seo.description,
  applicationName: site.name,
  keywords: seo.keywords,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: 'technology',
  referrer: 'origin-when-cross-origin',
  alternates: {
    canonical: '/',
    types: { 'text/plain': '/llms.txt' },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'profile',
    firstName,
    lastName: lastNames.join(' '),
    title: seo.title,
    description: seo.description,
    url: '/',
    siteName: site.name,
    locale: seo.locale,
    images: [{ url: seo.ogImage, width: 1200, height: 630, alt: seo.ogImageAlt, type: 'image/png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.title,
    description: seo.description,
    images: [{ url: seo.ogImage, alt: seo.ogImageAlt }],
    ...(seo.twitterHandle && { creator: seo.twitterHandle, site: seo.twitterHandle }),
  },
  verification: {
    ...(seo.googleVerification && { google: seo.googleVerification }),
    ...(seo.bingVerification && { other: { 'msvalidate.01': seo.bingVerification } }),
  },
  formatDetection: { telephone: false, email: false, address: false },
  other: {
    'geo.region': seo.region,
    'geo.placename': seo.locality,
  },
};

export const viewport = {
  themeColor: '#000000',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang={seo.language} suppressHydrationWarning className={`${display.variable} ${body.variable} is-loading`}>
      <body>
        <SmoothScroll />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
