'use client';

import { animate, stagger } from 'animejs';

/**
 * Anime.js v4 reveal animation — gentle opacity + translateY entrance.
 * @param selector CSS selector or element
 * @param opts Override defaults
 */
export function reveal(
  selector: string | Element,
  opts: { distance?: number; duration?: number; delay?: number } = {}
) {
  const { distance = 30, duration = 800, delay = 0 } = opts;
  animate(selector, {
    opacity: [0, 1],
    translateY: [distance, 0],
    duration,
    delay,
    ease: 'out(3)',
  });
}

/**
 * Stagger reveal — animates multiple elements sequentially.
 */
export function staggerReveal(
  selector: string,
  opts: { distance?: number; duration?: number; staggerDelay?: number; startDelay?: number } = {}
) {
  const { distance = 24, duration = 750, staggerDelay = 80, startDelay = 100 } = opts;
  animate(selector, {
    opacity: [0, 1],
    translateY: [distance, 0],
    duration,
    delay: stagger(staggerDelay, { start: startDelay }),
    ease: 'out(3)',
  });
}

/**
 * Depth entrance — small scale + translateY for spatial feel.
 */
export function depthEntrance(
  selector: string | Element,
  opts: { duration?: number; delay?: number } = {}
) {
  const { duration = 850, delay = 0 } = opts;
  animate(selector, {
    opacity: [0, 1],
    translateY: [20, 0],
    scale: [0.97, 1],
    duration,
    delay,
    ease: 'out(3)',
  });
}
