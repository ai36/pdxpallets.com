import type { Metadata, Viewport } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Developer } from '@/components/developer/Developer';
import { SITE_NAME, SITE_URL } from '@/constants';

export const viewport: Viewport = {
  themeColor: '#2D6347',
  colorScheme: 'light dark',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Portland's Pallet Experts Since 2003`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'New and used pallets for Portland-area businesses. ISPM-15 certified, same-week delivery across the PDX metro. Grade A, B & C available. Get a free quote today.',
  keywords: [
    'pallet supplier portland',
    'used pallets pdx',
    'new pallets portland oregon',
    'wholesale pallets portland',
    'pallet delivery portland',
    'ISPM-15 pallets oregon',
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Portland's Pallet Experts Since 2003`,
    description: 'New and used pallets for Portland-area businesses. Same-week delivery. Get a free quote today.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — Portland's Pallet Experts`,
    description: 'New and used pallets. Same-week delivery across the PDX metro.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <Developer />
      </body>
    </html>
  );
}
