'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import styles from './ScrollScrubHeroVideo.module.css';

/**
 * ScrollScrubHeroVideo
 * ────────────────────
 * Pure architectural video scrubbed directly to scroll position.
 * Features:
 *  • Real HTML5 <video> element with GOP-2 ultra-low-latency keyframes
 *  • Zero trailing lag: stops the exact millisecond the user stops scrolling
 *  • Continuous rAF seeking gate: prevents decoder aborts and black frames
 *  • Minimalist architectural room labels synchronized to walkthrough
 */
export default function ScrollScrubHeroVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [progress, setProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  const targetTimeRef = useRef(0);
  const rafIdRef = useRef<number>(0);

  // ───── Detect prefers-reduced-motion ─────
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // ───── Continuous rAF Loop for Zero-Lag, Decoder-Safe Video Scrubbing ─────
  useEffect(() => {
    if (reducedMotion) return;
    if (typeof window !== 'undefined' && window.innerWidth < 1024) return;

    let active = true;

    const renderLoop = () => {
      if (!active) return;

      const video = videoRef.current;
      if (video && !video.seeking) {
        const target = targetTimeRef.current;
        // Only seek if the difference is more than ~1 frame (0.03s at 29fps)
        if (Math.abs(video.currentTime - target) > 0.03) {
          video.currentTime = target;
        }
      }

      rafIdRef.current = requestAnimationFrame(renderLoop);
    };

    rafIdRef.current = requestAnimationFrame(renderLoop);

    return () => {
      active = false;
      cancelAnimationFrame(rafIdRef.current);
    };
  }, [reducedMotion]);

  // ───── Direct Scroll to Video Progress Mapping ─────
  const handleScroll = useCallback(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) return;

    const container = containerRef.current;
    const video = videoRef.current;
    if (!container) return;

    const totalScrollable = container.offsetHeight - window.innerHeight;
    if (totalScrollable <= 0) return;

    // Direct scrollY without layout reflow
    const scrolled = Math.max(0, window.scrollY);
    const normalized = Math.min(1, Math.max(0, scrolled / totalScrollable));

    setProgress(normalized);

    const dur = video?.duration && !isNaN(video.duration) && video.duration > 0 ? video.duration : 48;
    targetTimeRef.current = Math.max(0, Math.min(dur - 0.05, normalized * dur));
  }, []);

  // ───── Immediate Seek on 'seeked' for Maximum Responsiveness ─────
  const handleSeeked = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    const target = targetTimeRef.current;
    if (Math.abs(video.currentTime - target) > 0.03) {
      video.currentTime = target;
    }
  }, []);

  // ───── Initialize Video Priming (Immediate First Frame on Laptop/Desktop) ─────
  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) return;

    const video = videoRef.current;
    if (!video) return;

    const primeVideo = () => {
      video.muted = true;
      video.playsInline = true;
      if (video.currentTime === 0) {
        try {
          video.currentTime = 0.01;
        } catch {
          // Ignore initial restriction
        }
      }
      handleScroll();
    };

    if (video.readyState >= 1) {
      primeVideo();
    } else {
      video.addEventListener('loadedmetadata', primeVideo, { once: true });
    }

    video.addEventListener('seeked', handleSeeked);

    return () => {
      video.removeEventListener('loadedmetadata', primeVideo);
      video.removeEventListener('seeked', handleSeeked);
    };
  }, [handleSeeked, handleScroll]);

  // ───── Scroll and Resize Listeners ─────
  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) return;

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    window.addEventListener('orientationchange', handleScroll, { passive: true });

    // Initial run
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      window.removeEventListener('orientationchange', handleScroll);
    };
  }, [handleScroll]);

  return (
    <section
      ref={containerRef}
      className={styles.heroScrollStory}
      aria-label="Studio Nirmiti Cinematic Architectural Walkthrough"
    >
      {/* Pinned Sticky Viewport on Desktop (100vh) / Direct 60svh Hero on Mobile */}
      <div className={styles.heroSticky}>
        {/* Hardware-Accelerated Scrubbed Video Element (Desktop only) */}
        <video
          ref={videoRef}
          className={styles.videoElement}
          src="/videos/hero_scrub_video.mp4"
          poster="/images/hero_poster.webp"
          muted
          playsInline
          preload="metadata"
          disablePictureInPicture
          disableRemotePlayback
          aria-hidden="true"
        />

        {/* Mobile & Tablet Static Architectural Villa Hero (Zero video load on mobile/tablet) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/mobile_hero_villa.jpg"
          alt="Studio Nirmiti Luxury Architectural Villa Interior"
          className={styles.mobileHeroImage}
          loading="eager"
          fetchPriority="high"
        />

        {/* Subtle Architectural Scrim Overlay for Readability */}
        <div className={styles.scrimOverlay} aria-hidden="true" />

        {/* Semantic HTML Editorial Content Layer */}
        <div className={styles.heroContent} aria-live="polite">
          {/* Mobile & Tablet Direct Architectural Hero Editorial */}
          <div className={styles.mobileEditorial}>
            <span className={styles.accentLine} />
            <span className={styles.roomLabel}>ARCHITECTURAL EXCELLENCE</span>
            <h1 className={styles.headline}>Monumental Living, Sculpted in Light.</h1>
            <p className={styles.subheadline}>
              Bespoke residences and ultra-luxury interiors conceived with uncompromising materiality, balance, and precision.
            </p>
            <div className={styles.ctas}>
              <Link href="/book-consultation" className={styles.primaryCta}>
                Start a Project →
              </Link>
              <Link href="/projects" className={styles.secondaryCta}>
                Explore Portfolio
              </Link>
            </div>
          </div>

          {/* Desktop Scrub-Synchronized Editorial Rooms */}
          <div className={styles.desktopEditorial}>
            {/* Room-specific labels that change as video scrolls through spaces */}
            {(() => {
              const rooms = [
                {
                  start: 0,
                  end: 0.22,
                  index: '01',
                  label: 'GRAND FOYER',
                  headline: 'Monumental Rotunda & Crystal Cascade',
                  subheadline: 'Dual curved staircases framing a soaring atrium, sculpted to celebrate light, volume, and arrival.',
                },
                {
                  start: 0.22,
                  end: 0.48,
                  index: '02',
                  label: 'PRINCIPAL LIVING',
                  headline: 'Marble Hearth & Horizon Glass',
                  subheadline: 'Full-height architectural glazing framing natural horizons, anchored by bookmatched marble and tailored lounge craft.',
                },
                {
                  start: 0.48,
                  end: 0.70,
                  index: '03',
                  label: 'DINING ROTUNDA',
                  headline: 'Curated Panoramic Entertaining',
                  subheadline: 'Curved bay window geometry offering sweeping exterior views under a bespoke crystal chandelier canopy.',
                },
                {
                  start: 0.70,
                  end: 0.92,
                  index: '04',
                  label: 'CULINARY ATELIER',
                  headline: 'Monolithic Stone & European Joinery',
                  subheadline: 'Seamlessly integrated quartz island, illuminated vitrines, and uncompromising architectural cabinetry.',
                },
              ];

              const currentRoom = rooms.find(r => progress >= r.start && progress < r.end);

              if (progress >= 0.92) {
                // Final Stage: Minimalist Architectural Call to Action
                return (
                  <div className={styles.roomSection} key="cta">
                    <span className={styles.accentLine} />
                    <h1 className={styles.headline}>
                      Vision, Built into Permanence.
                    </h1>
                    <p className={styles.subheadline}>
                      We conceive, detail, and engineer bespoke residences that transcend the ordinary. Every threshold calibrated for light, every texture curated for timeless distinction.
                    </p>
                    <div className={styles.ctas}>
                      <Link href="/book-consultation" className={styles.primaryCta}>
                        Start a Project →
                      </Link>
                      <Link href="/projects" className={styles.secondaryCta}>
                        Explore Portfolio
                      </Link>
                    </div>
                  </div>
                );
              }

              if (currentRoom) {
                return (
                  <div className={styles.roomSection} key={currentRoom.label}>
                    <span className={styles.accentLine} />
                    <span className={styles.roomLabel}>{currentRoom.label}</span>
                    <h1 className={styles.headline}>
                      {currentRoom.headline}
                    </h1>
                    <p className={styles.subheadline}>
                      {currentRoom.subheadline}
                    </p>
                  </div>
                );
              }

              return null;
            })()}
          </div>

          {/* Minimalist scroll cue (visible only on desktop at the very beginning) */}
          {progress < 0.08 && (
            <div className={styles.minimalScrollHint}>
              <span className={styles.hintLine} />
              <span className={styles.hintText}>SCROLL TO EXPLORE</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
