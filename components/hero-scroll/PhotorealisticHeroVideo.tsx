'use client';

import { useEffect, useRef, useState } from 'react';

interface PhotorealisticHeroVideoProps {
  progress: number; // 0.0 to 1.0 (smooth scrubbed progress)
}

export default function PhotorealisticHeroVideo({
  progress,
}: PhotorealisticHeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [videoSrc, setVideoSrc] = useState('/videos/hero_walkthrough_fast.mp4');

  const targetTimeRef = useRef(0);
  const isSeekingRef = useRef(false);
  const rafIdRef = useRef<number | null>(null);

  // Responsive video selection
  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      setVideoSrc('/videos/hero_walkthrough_720p.mp4');
    } else {
      setVideoSrc('/videos/hero_walkthrough_fast.mp4');
    }
  }, []);

  // Initialize and handle video readiness
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();

    const handleLoadedMetadata = () => {
      setIsVideoReady(true);
      if (video.duration) {
        video.currentTime = Math.min(video.duration, Math.max(0, progress * video.duration));
      }
    };

    const handleCanPlay = () => {
      setIsVideoReady(true);
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('canplay', handleCanPlay);

    if (video.readyState >= 2) {
      setIsVideoReady(true);
    }

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, [progress, videoSrc]);

  // Helper for fast-seeking across browsers
  const seekVideo = (vid: HTMLVideoElement, time: number) => {
    const vidAny = vid as unknown as { fastSeek?: (t: number) => void };
    if (typeof vidAny.fastSeek === 'function') {
      vidAny.fastSeek(time);
    } else {
      vid.currentTime = time;
    }
  };

  // Scrub video accurately based on scroll progress
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !video.duration) return;

    const duration = video.duration;
    const clampedProgress = Math.max(0, Math.min(1, progress));
    const targetTime = clampedProgress * duration;
    targetTimeRef.current = targetTime;

    // Direct seeking with All-Intra frames (every frame is a keyframe, so seek is instantaneous)
    if (!isSeekingRef.current) {
      const diff = Math.abs(video.currentTime - targetTime);
      if (diff > 0.02) {
        seekVideo(video, targetTime);
      }
    }
  }, [progress]);

  // High-frequency RAF loop to ensure instantaneous scrubbing without drift
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const scrubLoop = () => {
      if (video.duration && !video.seeking) {
        const target = targetTimeRef.current;
        const current = video.currentTime;
        const diff = Math.abs(target - current);

        if (diff > 0.015) {
          try {
            seekVideo(video, target);
          } catch {
            // Browser seek throttle safeguard
          }
        }
      }
      rafIdRef.current = requestAnimationFrame(scrubLoop);
    };

    rafIdRef.current = requestAnimationFrame(scrubLoop);
    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
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
      {/* Seamless fallback poster while video metadata initializes */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url('/images/hero-scroll/01_distant_plain.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: isVideoReady ? 0 : 1,
          transition: 'opacity 0.5s ease',
          zIndex: 1,
        }}
      />

      {/* Real continuous scrubbed video */}
      <video
        ref={videoRef}
        src={videoSrc}
        playsInline
        muted
        preload="auto"
        controls={false}
        disablePictureInPicture
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          display: 'block',
          zIndex: 2,
        }}
      />
    </div>
  );
}
