import type { Metadata, Viewport } from 'next';
import { Suspense } from 'react';
import { Syne, Plus_Jakarta_Sans, Cinzel } from 'next/font/google';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/navigation/Footer';
import LiveVisualEditsApplier from '@/components/admin/LiveVisualEditsApplier';
import AdminQuickAccess from '@/components/admin/AdminQuickAccess';
import { siteNavigation, footerNavigation, globalSettings } from '@/data/navigation';
import './globals.css';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['400', '600'],
});

export const metadata: Metadata = {
  title: {
    default: 'Studio Nirmiti | Architecture & Interior Design',
    template: '%s | Studio Nirmiti',
  },
  description:
    'Studio Nirmiti is an architecture and interior design studio offering architectural design, interiors, execution, 3D visualization and turnkey solutions.',
  metadataBase: new URL('https://studionirmiti.com'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Studio Nirmiti',
    title: 'Studio Nirmiti — Architecture & Interior Design',
    description:
      'Architecture, interior design, 3D visualization and turnkey execution for residential, commercial and hospitality projects.',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${jakarta.variable} ${cinzel.variable}`}
      data-scroll-behavior="smooth"
    >
      <body suppressHydrationWarning>
        <LiveVisualEditsApplier />
        <Suspense>
          <Navbar
            navigation={siteNavigation}
            phone={globalSettings.phone}
            businessName={globalSettings.businessName}
          />
        </Suspense>
        <main id="main-content">{children}</main>
        <Footer
          navigation={footerNavigation}
          businessName={globalSettings.businessName}
          phone={globalSettings.phone}
        />
        <AdminQuickAccess />
      </body>
    </html>
  );
}
