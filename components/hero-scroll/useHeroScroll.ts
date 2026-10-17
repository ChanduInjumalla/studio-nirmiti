'use client';

import { useState, useEffect, useRef, RefObject } from 'react';
import { HeroStage, HERO_STAGES, mapRange } from './types';

export interface UseHeroScrollReturn {
  progress: number; // 0.0 to 1.0 (smooth, scrubbed)
  rawProgress: number; // exact instant scroll progress
  activeStage: HeroStage;
  stageProgress: number; // 0.0 to 1.0 within the current stage
  scrollToProgress: (target: number) => void;
}

export function useHeroScroll(
  containerRef: RefObject<HTMLDivElement | null>
): UseHeroScrollReturn {
  const [progress, setProgress] = useState(0);
  const [rawProgress, setRawProgress] = useState(0);
  const [activeStage, setActiveStage] = useState<HeroStage>('exterior_plain');
  const [stageProgress, setStageProgress] = useState(0);

  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const totalScrollable = container.offsetHeight - window.innerHeight;

      if (totalScrollable <= 0) return;

      // Scrolled distance within the container
      const scrolled = -rect.top;
      const normalized = Math.min(1, Math.max(0, scrolled / totalScrollable));

      targetProgressRef.current = normalized;
      setRawProgress(normalized);
    };

    // Responsive RAF loop with rapid damping (stops almost immediately when user stops scrolling)
    const updateLoop = () => {
      const target = targetProgressRef.current;
      const current = currentProgressRef.current;

      // Snappy lerp (0.28) — gives silky trackpad response without lingering lag
      const diff = target - current;
      if (Math.abs(diff) < 0.0005) {
        currentProgressRef.current = target;
      } else {
        currentProgressRef.current = current + diff * 0.28;
      }

      const p = currentProgressRef.current;
      setProgress(p);

      // Determine active stage
      let foundStage = HERO_STAGES[0];
      for (const stage of HERO_STAGES) {
        if (p >= stage.startProgress && p <= stage.endProgress) {
          foundStage = stage;
          break;
        }
      }
      if (p >= 1) {
        foundStage = HERO_STAGES[HERO_STAGES.length - 1];
      }

      setActiveStage(foundStage.id);
      const stageP = mapRange(
        p,
        foundStage.startProgress,
        foundStage.endProgress,
        0,
        1
      );
      setStageProgress(stageP);

      rafIdRef.current = requestAnimationFrame(updateLoop);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();
    rafIdRef.current = requestAnimationFrame(updateLoop);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [containerRef]);

  const scrollToProgress = (target: number) => {
    const container = containerRef.current;
    if (!container) return;
    const totalScrollable = container.offsetHeight - window.innerHeight;
    const top = container.offsetTop + target * totalScrollable;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return {
    progress,
    rawProgress,
    activeStage,
    stageProgress,
    scrollToProgress,
  };
}
