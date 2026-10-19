'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Monitor, ArrowLeft, ShieldAlert } from 'lucide-react';

interface AdminDesktopGatekeeperProps {
  children: React.ReactNode;
}

export default function AdminDesktopGatekeeper({ children }: AdminDesktopGatekeeperProps) {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setDimensions({ width, height });

      // Check viewport width: Admin requires at least 1024px desktop workspace
      const isNarrow = width < 1024;

      // Check touch / pointer capability
      const hasCoarsePointer = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 1;

      // Desktop rule: >= 1024px and not a touch-only mobile/tablet viewport
      if (isNarrow || (hasCoarsePointer && width < 1180)) {
        setIsDesktop(false);
      } else {
        setIsDesktop(true);
      }
    };

    checkDevice();
    window.addEventListener('resize', checkDevice, { passive: true });
    window.addEventListener('orientationchange', checkDevice, { passive: true });

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('orientationchange', checkDevice);
    };
  }, []);

  // During initial mount / SSR, render a clean dark placeholder to prevent layout flash
  if (isDesktop === null) {
    return (
      <div
        style={{
          minHeight: '100vh',
          backgroundColor: '#111312',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#b08d57',
          fontFamily: 'var(--font-heading, Syne, sans-serif)',
          fontSize: '14px',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}
      >
        Verifying Workspace Environment...
      </div>
    );
  }

  // If mobile or tablet: render clean, high-end blocking screen
  if (!isDesktop) {
    return (
      <div
        style={{
          minHeight: '100vh',
          backgroundColor: '#111312',
          color: '#f6f3ed',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem 1.5rem',
          boxSizing: 'border-box',
          textAlign: 'center',
          fontFamily: 'var(--font-body, system-ui, sans-serif)',
        }}
      >
        <div
          style={{
            maxWidth: '460px',
            width: '100%',
            background: 'linear-gradient(135deg, #1a1e1c 0%, #141716 100%)',
            border: '1px solid rgba(176, 141, 87, 0.35)',
            borderRadius: '16px',
            padding: '2.5rem 1.75rem',
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.6)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Icon Badge */}
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: 'rgba(176, 141, 87, 0.12)',
              border: '1px solid rgba(176, 141, 87, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#b08d57',
              marginBottom: '1.5rem',
            }}
          >
            <Monitor size={30} />
          </div>

          <span
            style={{
              fontFamily: 'var(--font-heading, Syne, sans-serif)',
              fontSize: '11px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.16em',
              color: '#b08d57',
              marginBottom: '0.75rem',
            }}
          >
            Studio Nirmiti · Admin Console
          </span>

          <h1
            style={{
              fontFamily: 'var(--font-heading, Syne, sans-serif)',
              fontSize: '1.5rem',
              fontWeight: 600,
              color: '#ffffff',
              lineHeight: 1.25,
              margin: '0 0 1rem 0',
            }}
          >
            Admin Dashboard is available on desktop/laptop only.
          </h1>

          <p
            style={{
              fontSize: '0.9rem',
              color: '#a09889',
              lineHeight: 1.6,
              margin: '0 0 1.75rem 0',
            }}
          >
            For precision drafting, visual live editing, and content management, please access the Studio Nirmiti Admin Portal from a laptop or desktop computer with a keyboard and mouse.
          </p>

          <div
            style={{
              fontSize: '11px',
              color: '#7a7e7b',
              backgroundColor: 'rgba(0, 0, 0, 0.25)',
              padding: '6px 14px',
              borderRadius: '99px',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              marginBottom: '2rem',
              fontFamily: 'monospace',
            }}
          >
            Viewport: {dimensions.width} × {dimensions.height} · Mobile/Tablet Device
          </div>

          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              width: '100%',
              padding: '14px 20px',
              backgroundColor: '#b08d57',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '0.85rem',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              borderRadius: '6px',
              textDecoration: 'none',
              transition: 'background 0.2s ease',
              boxSizing: 'border-box',
            }}
          >
            <ArrowLeft size={16} />
            <span>Return to Website</span>
          </Link>
        </div>
      </div>
    );
  }

  // On Desktop / Laptop: render children normally
  return <>{children}</>;
}
