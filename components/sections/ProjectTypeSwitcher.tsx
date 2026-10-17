'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { ProjectType } from '@/types';
import styles from './ProjectTypeSwitcher.module.css';

interface TypologyData {
  type: ProjectType;
  label: string;
  title: string;
  location: string;
  scope: string;
  delivery: string;
  summary: string;
  tags: string[];
  imageSrc: string;
  imageAlt: string;
  slug: string;
}

const typologies: Record<ProjectType, TypologyData> = {
  residential: {
    type: 'residential',
    label: 'Residential',
    title: 'The Glass Pavilion Villa',
    location: 'Jubilee Hills, Hyderabad',
    scope: '7,800 sq.ft Architectural & Turnkey Build',
    delivery: 'Turnkey Handover in 14 Months',
    summary:
      'Cantilevered concrete architecture framing an internal private bamboo courtyard, floor-to-ceiling glass, and bespoke smoked oak interior joinery.',
    tags: ['Architecture', 'Interior Craft', 'Turnkey Execution'],
    imageSrc: '/images/project_residential_villa.jpg',
    imageAlt: 'Luxury residential villa architecture by Studio Nirmiti',
    slug: 'the-glass-pavilion-villa',
  },
  commercial: {
    type: 'commercial',
    label: 'Commercial',
    title: 'Aura Executive Corporate Suite',
    location: 'HITEC City, Hyderabad',
    scope: '14,500 sq.ft Corporate Headquarters',
    delivery: 'Fast-Track 75-Day Execution',
    summary:
      'Executive boardroom authority meets agile biophilic work lounges with STC 52 acoustic separation and linear architectural lighting.',
    tags: ['Corporate Office', 'Space Planning', 'Acoustic Millwork'],
    imageSrc: '/images/project_commercial_office.jpg',
    imageAlt: 'High-end commercial office space designed by Studio Nirmiti',
    slug: 'aura-corporate-suite',
  },
  hospitality: {
    type: 'hospitality',
    label: 'Hospitality',
    title: 'Sereno Boutique Resort Lounge',
    location: 'Coorg, Karnataka',
    scope: '12,000 sq.ft Resort Central Pavilion',
    delivery: 'Vernacular Stone & Timber Build',
    summary:
      'Hillside retreat woven into ancient cardamom plantations with reclaimed local granite walls, open-air fire pits, and ambient twilight lighting.',
    tags: ['Resort Architecture', 'Vernacular Craft', 'Lighting Design'],
    imageSrc: '/images/project_hospitality_resort.jpg',
    imageAlt: 'Boutique resort hospitality architecture by Studio Nirmiti',
    slug: 'sereno-boutique-resort',
  },
};

export default function ProjectTypeSwitcher() {
  const [activeTab, setActiveTab] = useState<ProjectType>('residential');
  const current = typologies[activeTab];

  return (
    <section className={styles.sectionWrapper} aria-labelledby="project-types-title">
      <div className="container">
        <div className={styles.headerArea}>
          <span className={styles.eyebrow}>Portfolio Typologies</span>
          <h2 id="project-types-title" className={styles.title}>
            Tailored solutions across distinct sectors.
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className={styles.tabsBar} role="tablist">
          {(['residential', 'commercial', 'hospitality'] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={activeTab === tab}
              className={`${styles.tabButton} ${activeTab === tab ? styles.tabButtonActive : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {typologies[tab].label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className={styles.contentContainer}>
          <div className={styles.imageFrame}>
            <Image
              src={current.imageSrc}
              alt={current.imageAlt}
              width={900}
              height={560}
              className={styles.image}
              priority={false}
            />
          </div>

          <div className={styles.infoArea}>
            <div className={styles.tagRow}>
              {current.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>

            <h3 className={styles.projectTitle}>{current.title}</h3>
            <p className={styles.location}>{current.location}</p>
            <p className={styles.summary}>{current.summary}</p>

            <div className={styles.proofPoints}>
              <div>
                <p className={styles.proofItemTitle}>Scope</p>
                <p className={styles.proofItemValue}>{current.scope}</p>
              </div>
              <div>
                <p className={styles.proofItemTitle}>Delivery</p>
                <p className={styles.proofItemValue}>{current.delivery}</p>
              </div>
            </div>

            <Link href={`/projects/${current.slug}`} className={styles.ctaLink}>
              View Case Study Details →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
