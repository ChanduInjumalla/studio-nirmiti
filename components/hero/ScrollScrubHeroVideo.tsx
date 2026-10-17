'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import styles from './ScrollScrubHeroVideo.module.css';

/**
 * ScrollScrubHeroVideo
 * ────────────────────
 * Premium cinematic hero section with:
 *  • Crystal-clear static reference image shown on load (no blurry video frame)
 *  • Invisible crossfade from image → video when user begins scrolling
 *  • Fully scroll-linked video scrubbing (forward + reverse)
 *  • GPU-composited layers for zero layout shift
 */
const TOTAL_FRAMES = 96;

export default function ScrollScrubHeroVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  const [progress, setProgress] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [canvasReady, setCanvasReady] = useState(false);

  const targetFrameRef = useRef(0);
  const currentFrameRef = useRef(0);
  const rafIdRef = useRef<number>(0);

  // ───── Preload 96 optimized WebP frames ─────
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];

    // Prioritize frame 1 for instant first paint
    const firstImg = new Image();
    firstImg.src = '/images/hero-frames/frame_0001.webp';
    firstImg.onload = () => {
      loadedImages[0] = firstImg;
      setCanvasReady(true);
    };
    loadedImages[0] = firstImg;

    // Asynchronously preload all remaining frames into memory
    for (let i = 2; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const pad = String(i).padStart(4, '0');
      img.src = `/images/hero-frames/frame_${pad}.webp`;
      img.decoding = 'async';
      loadedImages[i - 1] = img;
    }

    imagesRef.current = loadedImages;
  }, []);

  // ───── Draw frame to canvas with object-fit: cover ─────
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const img = imagesRef.current[frameIndex] || imagesRef.current[0];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    if (canvas.width !== Math.round(width * dpr) || canvas.height !== Math.round(height * dpr)) {
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
    }

    ctx.save();
    ctx.scale(dpr, dpr);

    const imgAspect = img.naturalWidth / img.naturalHeight;
    const screenAspect = width / height;

    let drawW: number;
    let drawH: number;
    let drawX: number;
    let drawY: number;

    if (screenAspect > imgAspect) {
      drawW = width;
      drawH = width / imgAspect;
      drawX = 0;
      drawY = (height - drawH) / 2;
    } else {
      drawH = height;
      drawW = height * imgAspect;
      drawX = (width - drawW) / 2;
      drawY = 0;
    }

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'medium';
    ctx.drawImage(img, drawX, drawY, drawW, drawH);
    ctx.restore();
  }, []);

  // ───── Continuous 60/120fps render loop with smooth interpolation ─────
  useEffect(() => {
    let lastRenderedIndex = -1;

    const renderLoop = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;

      // Snappy lerp: 0.35 factor ensures instant response without lag or stutter
      if (Math.abs(diff) > 0.05) {
        currentFrameRef.current += diff * 0.35;
      } else {
        currentFrameRef.current = targetFrameRef.current;
      }

      const frameIdx = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.round(currentFrameRef.current))
      );

      if (frameIdx !== lastRenderedIndex || !canvasReady) {
        drawFrame(frameIdx);
        lastRenderedIndex = frameIdx;
      }

      rafIdRef.current = requestAnimationFrame(renderLoop);
    };

    rafIdRef.current = requestAnimationFrame(renderLoop);

    return () => {
      cancelAnimationFrame(rafIdRef.current);
    };
  }, [drawFrame, canvasReady]);

  // ───── Scroll calculation: SCROLL POSITION = FRAME INDEX ─────
  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const totalScrollable = container.offsetHeight - window.innerHeight;
    if (totalScrollable <= 0) return;

    // Scrolled distance within this container (0 at top, totalScrollable at bottom)
    const scrolled = -rect.top;
    const normalized = Math.min(1, Math.max(0, scrolled / totalScrollable));

    // Mark first scroll event for image transition
    if (!hasScrolled && normalized > 0.001) {
      setHasScrolled(true);
    }

    setProgress(normalized);

    // Map 0..1 to 0..(TOTAL_FRAMES - 1)
    targetFrameRef.current = normalized * (TOTAL_FRAMES - 1);
  }, [hasScrolled]);

  // ───── Global scroll and resize listeners ─────
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    window.addEventListener('orientationchange', handleScroll, { passive: true });

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      window.removeEventListener('orientationchange', handleScroll);
    };
  }, [handleScroll]);

  // ───── Image opacity calculation ─────
  const computeImageOpacity = (): number => {
    if (!hasScrolled) return 1;
    if (!canvasReady) return 1;
    return Math.max(0, Math.min(1, 1 - progress / 0.03));
  };

  const imageOpacity = computeImageOpacity();

  return (
    <section
      ref={containerRef}
      className={styles.heroScrollStory}
      aria-label="Studio Nirmiti Cinematic Architectural Walkthrough"
    >
      {/* Pinned Sticky Viewport (100vh) */}
      <div className={styles.heroSticky}>
        {/* Hardware-Accelerated 60fps Scroll Canvas (instantaneous frame drawing, zero decoder stalls) */}
        <canvas
          ref={canvasRef}
          className={styles.canvasElement}
          aria-hidden="true"
        />

        {/* Crystal-Clear Reference Photo Layer — shown on load, fades into video on scroll */}
        <picture
          className={styles.initialImageLayer}
          style={{ opacity: imageOpacity }}
          aria-hidden="true"
        >
          {/* Desktop high-quality WebP */}
          <source
            media="(min-width: 1440px)"
            srcSet="/images/hero_reference_hq.webp"
            type="image/webp"
          />
          {/* Standard desktop WebP */}
          <source
            media="(min-width: 768px)"
            srcSet="/images/hero_reference_hq.webp 2x, /images/hero_reference.webp 1x"
            type="image/webp"
          />
          {/* Mobile WebP */}
          <source
            srcSet="/images/hero_reference_mobile.webp"
            type="image/webp"
          />
          {/* Fallback PNG */}
          <img
            src="/images/hero_reference.png"
            alt="Studio Nirmiti Luxury Estate Interior & Grand Foyer"
            className={styles.initialImage}
            fetchPriority="high"
            decoding="sync"
            loading="eager"
          />
        </picture>

        {/* Subtle Architectural Scrim Overlay for Readability */}
        <div className={styles.scrimOverlay} aria-hidden="true" />

        {/* Semantic HTML Editorial Content Layer */}
        <div className={styles.heroContent} aria-live="polite">
          <div className={styles.editorialText}>
            {/* Room-specific labels that change as video scrolls through spaces */}
            {(() => {
              // Define room sections with their scroll ranges, index, and immense architectural content
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

          {/* Minimalist scroll cue (visible only at the very beginning) */}
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
