'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './CapabilitiesOrbit.module.css';

export interface CapabilityOffering {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  href: string;
}

const offerings: CapabilityOffering[] = [
  {
    id: 'modular',
    index: '01',
    title: 'Modular Interiors',
    subtitle: 'Functional kitchen, wardrobe & storage',
    description: 'Precision-engineered modular kitchen islands, custom walk-in wardrobes & bespoke storage systems.',
    image: '/images/service_modular_kitchen.jpg',
    href: '/services/modular-kitchens',
  },
  {
    id: 'full-home',
    index: '02',
    title: 'Full Home Interiors',
    subtitle: 'Turnkey interior solutions for your home',
    description: 'Bespoke spatial design, custom millwork, curated furnishings & comprehensive turnkey handover.',
    image: '/images/service_full_home.jpg',
    href: '/services/turnkey-interiors',
  },
  {
    id: 'luxury',
    index: '03',
    title: 'Luxury Residences',
    subtitle: 'Tailored interiors that redefine elegance',
    description: 'Bespoke master suites, textured travertine walls, artisan joinery & architectural mood lighting.',
    image: '/images/service_luxury_bedroom.jpg',
    href: '/services/interior-design',
  },
  {
    id: 'arch',
    index: '04',
    title: 'Architectural Design',
    subtitle: 'Form, climate & structural excellence',
    description: 'Massing, spatial zoning, climate-responsive building envelopes & full municipal working drawings.',
    image: '/images/service_architectural_villa.jpg',
    href: '/services/architectural-design',
  },
  {
    id: 'renovation',
    index: '05',
    title: 'Renovations & Remodeling',
    subtitle: 'Expert solutions to upgrade your home',
    description: 'Complete structural transformation, space restructuring, wall modifications & modern finish renewal.',
    image: '/images/service_renovation.jpg',
    href: '/services/renovation-remodeling',
  },
  {
    id: 'turnkey',
    index: '06',
    title: 'Turnkey Execution',
    subtitle: 'End-to-end contracting & supervision',
    description: 'Civil contracting, artisan carpentry, electrical, MEP, and direct on-site architect supervision.',
    image: '/images/after_completed_living.jpg',
    href: '/services/execution-works',
  },
  {
    id: 'cadviz',
    index: '07',
    title: '3D Visualization & CGI',
    subtitle: 'Hyper-realistic pre-construction rendering',
    description: 'Photorealistic CGI visual simulations, physical material studies & cinematic 4K flythroughs.',
    image: '/images/service_3d_visualization.jpg',
    href: '/services/3d-visualization',
  },
  {
    id: 'commercial',
    index: '08',
    title: 'Commercial & Hospitality',
    subtitle: 'Experiential spaces for modern brands',
    description: 'High-impact boutique offices, executive suites, retail flagship environments & luxury hospitality.',
    image: '/images/service_hospitality.jpg',
    href: '/services/commercial',
  },
];

export default function CapabilitiesOrbit() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    const currentScroll = el.scrollLeft;

    setCanScrollLeft(currentScroll > 8);
    setCanScrollRight(maxScroll - currentScroll > 8);

    if (maxScroll > 0) {
      setScrollProgress(Math.min(1, Math.max(0, currentScroll / maxScroll)));
    }
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);

    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState]);

  const handleScroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;

    // Scroll by 1 card width + gap
    const scrollAmount = Math.max(280, el.clientWidth * 0.45);
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className={styles.sectionWrapper} aria-labelledby="capabilities-title">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.headerArea}>
          <span className={styles.eyebrow}>Capabilities & Services</span>
          <h2 id="capabilities-title" className={styles.title}>
            One-stop shop for all things interiors & architecture
          </h2>
          <p className={styles.subtitle}>
            Be it end-to-end interiors, luxury renovation or modular architectural solutions, we craft
            enduring spaces tailored from concept through final turnkey handover.
          </p>
        </div>

        {/* Carousel Viewport */}
        <div className={styles.carouselContainer}>
          {/* Left Arrow Button */}
          {canScrollLeft && (
            <button
              type="button"
              className={`${styles.navButton} ${styles.navButtonLeft}`}
              onClick={() => handleScroll('left')}
              aria-label="Scroll services left"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
          )}

          {/* Right Arrow Button */}
          {canScrollRight && (
            <button
              type="button"
              className={`${styles.navButton} ${styles.navButtonRight}`}
              onClick={() => handleScroll('right')}
              aria-label="Scroll services right"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          )}

          {/* Scrollable Track */}
          <div ref={scrollRef} className={styles.scrollTrack}>
            {offerings.map((item) => (
              <ServiceCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Bottom Progress Bar Indicator */}
        <div className={styles.progressWrapper} aria-hidden="true">
          <div className={styles.progressTrack}>
            <div
              className={styles.progressBar}
              style={{
                transform: `translateX(${scrollProgress * 92}px)`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ item }: { item: CapabilityOffering }) {
  return (
    <Link href={item.href} className={styles.card} title={`Explore ${item.title}`}>
      {/* Top Part: Full-Bleed Edge-to-Edge Image */}
      <div className={styles.imageContainer}>
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 320px"
          className={styles.image}
        />
      </div>

      {/* Bottom Part: Padded Content Container */}
      <div className={styles.content}>
        <h3 className={styles.cardTitle}>{item.title}</h3>
        <p className={styles.cardSubtitle}>{item.subtitle}</p>

        {/* Bottom CTA Arrow Button */}
        <div className={styles.ctaButtonWrapper}>
          <div className={styles.ctaCircle} aria-hidden="true">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
