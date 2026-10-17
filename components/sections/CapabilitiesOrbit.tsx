'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './CapabilitiesOrbit.module.css';

interface CapabilityItem {
  id: string;
  index: string;
  badge: string;
  title: string;
  description: string;
  href: string;
}

const capabilities: CapabilityItem[] = [
  {
    id: 'arch',
    index: '01',
    badge: 'Structure',
    title: 'Architectural Design',
    description:
      'Massing, spatial zoning, climate-responsive building envelopes, and full municipal working drawings.',
    href: '/services/architectural-design',
  },
  {
    id: 'interior',
    index: '02',
    badge: 'Craft',
    title: 'Interior Architecture',
    description:
      'Bespoke spatial design, custom millwork, textured stone feature walls, and tailored lighting plans.',
    href: '/services/interior-design',
  },
  {
    id: 'turnkey',
    index: '03',
    badge: 'Execution',
    title: 'Turnkey Execution',
    description:
      'End-to-end civil contracting, carpentry, electrical, MEP, and direct on-site architect supervision.',
    href: '/services/execution-works',
  },
  {
    id: 'space',
    index: '04',
    badge: 'Flow',
    title: 'Space Planning',
    description:
      'Rational circulation layout, daylight harvesting, and ergonomic floor plan optimization.',
    href: '/services/space-planning',
  },
  {
    id: 'cadviz',
    index: '05',
    badge: 'Precision',
    title: '3D Visualization & CGI',
    description:
      'Hyper-realistic pre-construction rendering, physical material simulation, and sun study models.',
    href: '/services/3d-visualization',
  },
  {
    id: 'walkthrough',
    index: '06',
    badge: 'Cinematic',
    title: '3D Walkthroughs',
    description:
      'Cinematic 4K architectural flythroughs and virtual tours exploring spatial depth before construction.',
    href: '/services/3d-walkthroughs',
  },
];

export default function CapabilitiesOrbit() {
  return (
    <section className={styles.sectionWrapper} aria-labelledby="capabilities-title">
      <div className="container">
        <div className={styles.headerArea}>
          <div className={styles.introText}>
            <span className={styles.eyebrow}>Capabilities Matrix</span>
            <h2 id="capabilities-title" className={styles.title}>
              End-to-end design & build capabilities.
            </h2>
            <p className={styles.subtitle}>
              From raw topography and architectural structural blueprints through interior artisan millwork
              to final turnkey handover.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {capabilities.map((item) => (
            <TiltCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TiltCard({ item }: { item: CapabilityItem }) {
  const [transform, setTransform] = useState('');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle 3D tilt max 4 degrees
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;

    setTransform(`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`);
  };

  const handleMouseLeave = () => {
    setTransform('perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)');
  };

  return (
    <div
      className={styles.cardWrapper}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform }}
    >
      <div className={styles.card}>
        <div>
          <div className={styles.cardIndex}>
            <span>{item.index}</span>
            <span className={styles.cardBadge}>{item.badge}</span>
          </div>
          <h3 className={styles.cardTitle}>{item.title}</h3>
          <p className={styles.cardDescription}>{item.description}</p>
        </div>

        <Link href={item.href} className={styles.cardLink}>
          Explore Service →
        </Link>
      </div>
    </div>
  );
}
