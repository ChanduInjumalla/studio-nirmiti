'use client';

import { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import styles from './BeforeAfterSlider.module.css';

interface BeforeAfterSliderProps {
  beforeSrc?: string;
  afterSrc?: string;
  beforeAlt?: string;
  afterAlt?: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({
  beforeSrc = '/images/before_empty_shell.jpg',
  afterSrc = '/images/after_completed_living.jpg',
  beforeAlt = 'Bare empty architectural room before interior design fit-out',
  afterAlt = 'Completed luxury living pavilion handover with turnkey furnishings',
  beforeLabel = 'Empty Shell / Raw Space',
  afterLabel = 'Completed Turnkey Reality',
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section className={styles.sectionWrapper} aria-labelledby="before-after-title">
      <div className="container">
        <div className={styles.headerArea}>
          <span className={styles.eyebrow}>Precision Verification</span>
          <h2 id="before-after-title" className={styles.title}>
            From empty space to completed reality.
          </h2>
          <p className={styles.subtitle}>
            Drag the divider to compare the raw empty architectural room against the finalized
            turnkey interior. Flawless transformation from shell to bespoke luxury living.
          </p>
        </div>

        <div
          ref={containerRef}
          className={styles.sliderContainer}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          onTouchMove={handleTouchMove}
          role="slider"
          aria-valuenow={Math.round(sliderPosition)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Before and after reveal slider"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') setSliderPosition((p) => Math.max(0, p - 5));
            if (e.key === 'ArrowRight') setSliderPosition((p) => Math.min(100, p + 5));
          }}
        >
          {/* After Layer (Base, full width) */}
          <div className={styles.afterLayer}>
            <Image
              src={afterSrc}
              alt={afterAlt}
              fill
              className={styles.sliderImage}
              priority={false}
              sizes="(max-width: 1200px) 100vw, 1040px"
            />
          </div>

          {/* Before Layer (Clipped to sliderPosition %) */}
          <div className={styles.beforeLayer} style={{ width: `${sliderPosition}%` }}>
            <div style={{ position: 'relative', width: containerRef.current?.offsetWidth || 1040, height: '100%' }}>
              <Image
                src={beforeSrc}
                alt={beforeAlt}
                fill
                className={styles.sliderImage}
                priority={false}
                sizes="(max-width: 1200px) 100vw, 1040px"
              />
            </div>
          </div>

          {/* Divider Line & Handle */}
          <div className={styles.divider} style={{ left: `${sliderPosition}%` }}>
            <div className={styles.handle} aria-hidden="true">
              ⇄
            </div>
          </div>

          {/* Labels */}
          <span className={`${styles.badge} ${styles.badgeBefore}`}>
            {beforeLabel}
          </span>
          <span className={`${styles.badge} ${styles.badgeAfter}`}>
            {afterLabel}
          </span>
        </div>

        <p className={styles.captionArea}>
          ← Drag or swipe horizontally to reveal →
        </p>
      </div>
    </section>
  );
}
