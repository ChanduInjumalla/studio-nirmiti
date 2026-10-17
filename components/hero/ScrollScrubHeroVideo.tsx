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
export default function ScrollScrubHeroVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [progress, setProgress] = useState(0);
  const [videoSrc, setVideoSrc] = useState('/videos/hero_scrub_video.mp4');
  const [videoReady, setVideoReady] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const targetTimeRef = useRef(0);
  const durationRef = useRef(48.0);
  const rafIdRef = useRef<number>(0);

  // ───── Responsive video source selection ─────
  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      setVideoSrc('/videos/hero_scrub_video_mobile.mp4');
    } else {
      setVideoSrc('/videos/hero_scrub_video.mp4');
    }
  }, []);

  // ───── Continuous frame synchronization loop ─────
  // Uses interpolated seeking for buttery smooth scrubbing
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let lastSeekTimestamp = 0;
    // Smoothed current time for interpolation
    let smoothedTime = 0;

    const renderLoop = (now: number) => {
      if (video.readyState >= 1) {
        const target = targetTimeRef.current;
        const diff = target - smoothedTime;

        // Interpolate smoothly toward target (lerp factor)
        // Higher factor = more responsive but potentially choppier
        const lerpFactor = 0.15;
        smoothedTime += diff * lerpFactor;

        // Only issue seek if meaningful difference from current video position
        const seekDiff = Math.abs(smoothedTime - video.currentTime);
        if (seekDiff > 0.005) {
          // Rate-limit seeks: at most every ~16ms (60fps budget)
          if (!video.seeking || now - lastSeekTimestamp > 16) {
            try {
              video.currentTime = smoothedTime;
              lastSeekTimestamp = now;
            } catch {
              // Ignore seek aborts during fast scrolling
            }
          }
        }
      }

      rafIdRef.current = requestAnimationFrame(renderLoop);
    };

    rafIdRef.current = requestAnimationFrame(renderLoop);

    return () => {
      cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  // ───── Scroll calculation: SCROLL POSITION = VIDEO POSITION ─────
  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const totalScrollable = container.offsetHeight - window.innerHeight;
    if (totalScrollable <= 0) return;

    // Scrolled distance within this container (0 at top, totalScrollable at bottom)
    const scrolled = -rect.top;
    const normalized = Math.min(1, Math.max(0, scrolled / totalScrollable));

    // Mark first scroll event for image→video transition
    if (!hasScrolled && normalized > 0.001) {
      setHasScrolled(true);
    }

    setProgress(normalized);

    const dur = video?.duration && !isNaN(video.duration) ? video.duration : durationRef.current;
    // Map 0..1 to 0..duration (clamped precisely)
    const target = Math.min(dur - 0.001, Math.max(0, normalized * dur));
    targetTimeRef.current = target;
  }, [hasScrolled]);

  // ───── Video initialization and metadata listeners ─────
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure video is properly configured for background scrubbing
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.pause();

    const onLoadedMetadata = () => {
      if (video.duration && !isNaN(video.duration)) {
        durationRef.current = video.duration;
      }
      video.pause();
      // Seek to frame 0 so the video canvas matches the static image
      try {
        video.currentTime = 0;
      } catch {
        // Ignore
      }
    };

    const onCanPlay = () => {
      setVideoReady(true);
      video.pause();
      handleScroll();
    };

    const onPlay = () => {
      // Prevent unauthorized autoplay — user scroll is the only playback engine
      video.pause();
    };

    video.addEventListener('loadedmetadata', onLoadedMetadata);
    video.addEventListener('loadeddata', onLoadedMetadata);
    video.addEventListener('canplay', onCanPlay);
    video.addEventListener('play', onPlay);

    // Prompt the browser to load video metadata
    video.load();

    if (video.readyState >= 1) {
      onLoadedMetadata();
    }
    if (video.readyState >= 4) {
      onCanPlay();
    }

    return () => {
      video.removeEventListener('loadedmetadata', onLoadedMetadata);
      video.removeEventListener('loadeddata', onLoadedMetadata);
      video.removeEventListener('canplay', onCanPlay);
      video.removeEventListener('play', onPlay);
    };
  }, [handleScroll, videoSrc]);

  // ───── Global scroll, resize and orientation listeners ─────
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
  // The reference image stays at full opacity until the user scrolls.
  // Once scrolling begins AND the video is ready, crossfade over 3% of scroll progress.
  // If video isn't ready yet, keep the image visible as a fallback.
  const computeImageOpacity = (): number => {
    // If user hasn't scrolled at all, always show the image at full opacity
    if (!hasScrolled) return 1;

    // If video isn't ready yet, keep image fully visible (prevents flash)
    if (!videoReady) return 1;

    // Smooth crossfade: full opacity at progress=0, fully transparent by progress=0.03
    // This maps to ~18vh of scroll distance — enough to feel seamless
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
        {/* Scroll-Scrubbed Video Element (always paused, scrubbed via currentTime) */}
        <video
          ref={videoRef}
          src={videoSrc}
          poster="/images/hero_reference.webp"
          playsInline
          muted
          preload="auto"
          controls={false}
          disablePictureInPicture
          disableRemotePlayback
          className={styles.videoElement}
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
