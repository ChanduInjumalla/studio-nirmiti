'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { animate } from 'animejs';
import styles from './HeroSection.module.css';

// Dynamic import for 3D Canvas — no SSR, clean hydration
const HeroScene = dynamic(() => import('@/components/three/HeroScene'), {
  ssr: false,
  loading: () => null,
});

export default function HeroSection() {
  const [lightingMood, setLightingMood] = useState<'daylight' | 'golden' | 'evening'>('golden');
  const [reducedMotion, setReducedMotion] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);

    // Anime.js v4 entrance animation
    if (!mediaQuery.matches) {
      if (eyebrowRef.current) {
        animate(eyebrowRef.current, {
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 700,
          delay: 200,
          ease: 'out(3)',
        });
      }

      if (titleRef.current) {
        animate(titleRef.current, {
          opacity: [0, 1],
          translateY: [35, 0],
          duration: 900,
          delay: 350,
          ease: 'out(3)',
        });
      }

      if (descRef.current) {
        animate(descRef.current, {
          opacity: [0, 1],
          translateY: [25, 0],
          duration: 800,
          delay: 550,
          ease: 'out(3)',
        });
      }

      if (ctaRef.current) {
        animate(ctaRef.current, {
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 750,
          delay: 750,
          ease: 'out(3)',
        });
      }
    }

    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  return (
    <section ref={heroRef} className={styles.heroWrapper} aria-label="Introduction">
      {/* 3D WebGL Canvas or Static Fallback */}
      <div className={styles.canvasContainer}>
        {!reducedMotion ? (
          <HeroScene lightingMood={lightingMood} />
        ) : (
          <div
            className={styles.staticFallback}
            style={{ backgroundImage: `url('/images/hero_architectural_living.jpg')` }}
          />
        )}
      </div>

      {/* Atmospheric Vignette & Contrast Overlay */}
      <div className={styles.overlay} />

      {/* Semantic HTML Copy */}
      <div className={styles.contentWrapper}>
        <div className="container">
          <div className={styles.heroContent}>
            <span ref={eyebrowRef} className={styles.eyebrow}>
              Architecture · Interiors · Turnkey Execution
            </span>

            <h1 ref={titleRef} className={styles.title}>
              Designing spaces with clarity, purpose and detail.
            </h1>

            <p ref={descRef} className={styles.description}>
              Studio Nirmiti translates discerning visions into enduring built environments.
              From architectural concept and photorealistic 3D visualization through interior craft
              to meticulous turnkey handover.
            </p>

            <div ref={ctaRef} className={styles.ctaGroup}>
              <Link href="/book-consultation" className={styles.primaryCta}>
                Start a Project →
              </Link>
              <Link href="/projects" className={styles.secondaryCta}>
                Explore Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Lighting Mood Switcher (Blueprint Page 54) */}
      {!reducedMotion && (
        <div className={styles.controlsBar}>
          <span className={styles.moodLabel}>Mood:</span>
          {(['daylight', 'golden', 'evening'] as const).map((mood) => (
            <button
              key={mood}
              type="button"
              className={`${styles.moodButton} ${
                lightingMood === mood ? styles.moodButtonActive : ''
              }`}
              onClick={() => setLightingMood(mood)}
              aria-label={`Switch 3D lighting mood to ${mood}`}
            >
              {mood}
            </button>
          ))}
        </div>
      )}

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
