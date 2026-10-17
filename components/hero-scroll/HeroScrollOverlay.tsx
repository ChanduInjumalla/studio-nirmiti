'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { HeroStage, HERO_STAGES } from './types';
import styles from './HeroScrollStory.module.css';

interface HeroScrollOverlayProps {
  progress: number;
  activeStageId: HeroStage;
  scrollToProgress: (p: number) => void;
}

export default function HeroScrollOverlay({
  progress,
  activeStageId,
}: HeroScrollOverlayProps) {
  const currentStage = useMemo(() => {
    return HERO_STAGES.find((s) => s.id === activeStageId) || HERO_STAGES[0];
  }, [activeStageId]);

  return (
    <div className={styles.overlayContainer} aria-live="polite">
      {/* Pure Editorial Typography — NO Card, NO Box, NO Progress Labels, NO Slider */}
      <div className={styles.editorialTextWrapper}>
        <div key={currentStage.id} className={styles.stageTextMotion}>
          <h1 className={styles.headline}>{currentStage.headline}</h1>

          {currentStage.subheadline && (
            <p className={styles.subheadline}>{currentStage.subheadline}</p>
          )}
        </div>

        {/* Final Stage Subtle CTAs (Only at end of hero experience: progress >= 0.92) */}
        {progress >= 0.92 && (
          <div className={styles.finalCtas}>
            <Link href="/book-consultation" className={styles.primaryCta}>
              Start a Project →
            </Link>
            <Link href="/projects" className={styles.secondaryCta}>
              Explore Portfolio
            </Link>
          </div>
        )}
      </div>

      {/* Very subtle architectural scroll cue at the beginning only */}
      {progress < 0.08 && (
        <div className={styles.minimalScrollHint}>
          <span className={styles.hintLine} />
          <span className={styles.hintText}>SCROLL TO EXPLORE</span>
        </div>
      )}
    </div>
  );
}
