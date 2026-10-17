'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

interface PhotorealisticHeroCanvasProps {
  progress: number; // 0.0 to 1.0 (smooth scrubbed progress)
}

interface FrameDef {
  webp: string;
  jpg: string;
  label: string;
  zoomScale: number; // Subtle Ken Burns scale delta for camera glide
}

const HERO_FRAMES: FrameDef[] = [
  {
    webp: '/images/hero-scroll/01_distant_plain.webp',
    jpg: '/images/hero-scroll/01_distant_plain.jpg',
    label: 'Plain Estate',
    zoomScale: 0.06,
  },
  {
    webp: '/images/hero-scroll/02_exterior_midtransform.webp',
    jpg: '/images/hero-scroll/02_exterior_midtransform.jpg',
    label: 'Exterior Craft',
    zoomScale: 0.05,
  },
  {
    webp: '/images/hero-scroll/03_exterior_complete.webp',
    jpg: '/images/hero-scroll/03_exterior_complete.jpg',
    label: 'Completed Facade',
    zoomScale: 0.06,
  },
  {
    webp: '/images/hero-scroll/04_entrance_approach.webp',
    jpg: '/images/hero-scroll/04_entrance_approach.jpg',
    label: 'Entrance Portal',
    zoomScale: 0.07,
  },
  {
    webp: '/images/hero-scroll/05_foyer_entry.webp',
    jpg: '/images/hero-scroll/05_foyer_entry.jpg',
    label: 'Double-Height Foyer',
    zoomScale: 0.06,
  },
  {
    webp: '/images/hero-scroll/06_living_shell.webp',
    jpg: '/images/hero-scroll/06_living_shell.jpg',
    label: 'Living Room Shell',
    zoomScale: 0.05,
  },
  {
    webp: '/images/hero-scroll/07_living_complete.webp',
    jpg: '/images/hero-scroll/07_living_complete.jpg',
    label: 'Living Room Styled',
    zoomScale: 0.04,
  },
  {
    webp: '/images/hero-scroll/08_kitchen_shell.webp',
    jpg: '/images/hero-scroll/08_kitchen_shell.jpg',
    label: 'Kitchen Shell',
    zoomScale: 0.05,
  },
  {
    webp: '/images/hero-scroll/09_kitchen_complete.webp',
    jpg: '/images/hero-scroll/09_kitchen_complete.jpg',
    label: 'Kitchen Crafted',
    zoomScale: 0.04,
  },
  {
    webp: '/images/hero-scroll/10_bedroom_shell.webp',
    jpg: '/images/hero-scroll/10_bedroom_shell.jpg',
    label: 'Master Suite Shell',
    zoomScale: 0.05,
  },
  {
    webp: '/images/hero-scroll/11_bedroom_complete.webp',
    jpg: '/images/hero-scroll/11_bedroom_complete.jpg',
    label: 'Master Suite Styled',
    zoomScale: 0.04,
  },
  {
    webp: '/images/hero-scroll/12_final_twilight.webp',
    jpg: '/images/hero-scroll/12_final_twilight.jpg',
    label: 'Twilight Estate',
    zoomScale: -0.04, // Gentle pull back for the grand final reveal
  },
];

// S-curve smoothstep for organic cinematic crossfade
function smoothstep(min: number, max: number, value: number): number {
  const x = Math.max(0, Math.min(1, (value - min) / (max - min)));
  return x * x * (3 - 2 * x);
}

export default function PhotorealisticHeroCanvas({
  progress,
}: PhotorealisticHeroCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const totalFrames = HERO_FRAMES.length;
  const totalSegments = totalFrames - 1;

  // Preload all frames
  useEffect(() => {
    let isCancelled = false;
    const loadedImages: HTMLImageElement[] = [];

    HERO_FRAMES.forEach((frame, index) => {
      const img = new Image();

      img.onload = () => {
        if (!isCancelled) {
          loadedImages[index] = img;
          setLoadedCount((prev) => prev + 1);
        }
      };

      // Fallback to jpg if webp fails
      img.onerror = () => {
        if (!isCancelled) {
          const fallbackImg = new Image();
          fallbackImg.onload = () => {
            if (!isCancelled) {
              loadedImages[index] = fallbackImg;
              setLoadedCount((prev) => prev + 1);
            }
          };
          fallbackImg.src = frame.jpg;
        }
      };

      img.src = frame.webp;
    });

    imagesRef.current = loadedImages;

    return () => {
      isCancelled = true;
    };
  }, []);

  // Draw single image with cover aspect ratio and subtle Ken Burns camera scale
  const drawCoverImage = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      img: HTMLImageElement,
      width: number,
      height: number,
      scale: number,
      opacity: number
    ) => {
      if (!img || !img.complete || img.naturalWidth === 0) return;

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

      ctx.save();
      ctx.globalAlpha = Math.max(0, Math.min(1, opacity));

      // Ken Burns focal zoom pivot (centered)
      ctx.translate(width / 2, height / 2);
      ctx.scale(scale, scale);
      ctx.translate(-width / 2, -height / 2);

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, drawX, drawY, drawW, drawH);

      ctx.restore();
    },
    []
  );

  // Render loop reacting to progress
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    if (canvas.width !== Math.round(width * dpr) || canvas.height !== Math.round(height * dpr)) {
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
    }

    ctx.save();
    ctx.scale(dpr, dpr);

    // Deep architectural background tone
    ctx.fillStyle = '#0c0f0d';
    ctx.fillRect(0, 0, width, height);

    const clampedP = Math.max(0, Math.min(1, progress));
    const rawPos = clampedP * totalSegments;
    const segmentIndex = Math.min(totalSegments - 1, Math.floor(rawPos));
    const localT = rawPos - segmentIndex;

    const frameA = imagesRef.current[segmentIndex];
    const frameB = imagesRef.current[segmentIndex + 1];

    const defA = HERO_FRAMES[segmentIndex];
    const defB = HERO_FRAMES[segmentIndex + 1] || defA;

    // Calculate camera scale
    const scaleA = 1 + (defA?.zoomScale || 0.05) * localT;
    const scaleB = 1 + (defB?.zoomScale || 0.05) * (localT - 1);

    // Smoothstep transition curve
    const alphaB = smoothstep(0, 1, localT);

    // 1. Draw base frame A
    if (frameA) {
      drawCoverImage(ctx, frameA, width, height, scaleA, 1.0);
    }

    // 2. Crossfade frame B on top
    if (frameB && alphaB > 0.001) {
      drawCoverImage(ctx, frameB, width, height, scaleB, alphaB);
    }

    ctx.restore();
  }, [progress, loadedCount, drawCoverImage, totalSegments]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        backgroundColor: '#0c0f0d',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      />
    </div>
  );
}
