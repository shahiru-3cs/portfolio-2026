import { Bodoni_Moda, Geist } from 'next/font/google';
import './globals.css';
import { site } from '../data/portfolio';
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

export const metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} — React Developer`,
  description: site.tagline,
  openGraph: {
    title: `${site.name} — React Developer`,
    description: site.tagline,
    url: site.url,
    siteName: site.name,
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: `${site.name} — React Developer`, description: site.tagline },
};

export const viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${display.variable} ${body.variable} is-loading`}>
      <body>
        <SmoothScroll />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
