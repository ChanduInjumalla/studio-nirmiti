import type { Metadata } from 'next';
import ScrollScrubHeroVideo from '@/components/hero/ScrollScrubHeroVideo';
import CapabilitiesOrbit from '@/components/sections/CapabilitiesOrbit';
import ProjectTypeSwitcher from '@/components/sections/ProjectTypeSwitcher';
import BeforeAfterSlider from '@/components/sections/BeforeAfterSlider';
import SelectedWorkGallery from '@/components/sections/SelectedWorkGallery';
import ProcessRibbon from '@/components/sections/ProcessRibbon';
import WhyStudioNirmiti from '@/components/sections/WhyStudioNirmiti';
import ClientTestimonials from '@/components/sections/ClientTestimonials';
import CtaBanner from '@/components/sections/CtaBanner';

export const metadata: Metadata = {
  title: 'Studio Nirmiti | Architecture, Interiors & 3D Design',
  description:
    'Studio Nirmiti translates discerning visions into enduring built environments. Luxury residential, commercial, and hospitality architecture, interior craft, 3D visualization, and turnkey execution.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Studio Nirmiti | Architecture, Interiors & 3D Design',
    description:
      'Designing spaces with clarity, purpose and detail. Architecture, interior craft, and turnkey delivery.',
    url: 'https://studionirmiti.com',
    siteName: 'Studio Nirmiti',
    images: [
      {
        url: '/images/hero_architectural_living.jpg',
        width: 1200,
        height: 675,
        alt: 'Studio Nirmiti Luxury Architectural Living Room',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <>
      {/* Structured Data: LocalBusiness & Architecture Practice */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'ArchitectureFirm',
                '@id': 'https://studionirmiti.com/#organization',
                name: 'Studio Nirmiti',
                url: 'https://studionirmiti.com',
                telephone: '+919573023509',
                founder: {
                  '@type': 'Person',
                  name: 'Kushal Kumar Pendekatla',
                },
                description:
                  'Architecture and interior design studio specializing in luxury residential, commercial, and hospitality spaces with turnkey execution and photorealistic 3D visualization.',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Hyderabad',
                  addressRegion: 'Telangana',
                  addressCountry: 'IN',
                },
                areaServed: ['Hyderabad', 'Bengaluru', 'Pan-India'],
                sameAs: [
                  'https://instagram.com/studionirmiti',
                  'https://linkedin.com/company/studionirmiti',
                ],
              },
              {
                '@type': 'WebSite',
                '@id': 'https://studionirmiti.com/#website',
                url: 'https://studionirmiti.com',
                name: 'Studio Nirmiti',
                publisher: {
                  '@id': 'https://studionirmiti.com/#organization',
                },
              },
            ],
          }),
        }}
      />

      {/* 1. Hero — Scroll-Scrubbed Cinematic Video Walkthrough */}
      <ScrollScrubHeroVideo />

      {/* 2. Project Type Switcher — Residential / Commercial / Hospitality tabs */}
      <ProjectTypeSwitcher />

      {/* 3. Capabilities Orbit — One-stop shop cards carousel */}
      <CapabilitiesOrbit />

      {/* 4. Before / After Design Layer — Interactive draggable reveal slider */}
      <BeforeAfterSlider />

      {/* 5. Selected Work Gallery — Editorial case study grid */}
      <SelectedWorkGallery limit={4} />

      {/* 6. Process Ribbon — 7-step connected flow with scroll progress */}
      <ProcessRibbon />

      {/* 7. Why Studio Nirmiti — 4 architectural trust pillars */}
      <WhyStudioNirmiti />

      {/* 8. Client Testimonials — Editorial client endorsements */}
      <ClientTestimonials />

      {/* 9. High-Conversion Closing CTA Banner */}
      <CtaBanner />
    </>
  );
}
