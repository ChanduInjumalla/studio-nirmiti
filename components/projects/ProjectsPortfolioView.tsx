'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import type { Project } from '@/types';
import Breadcrumb from '@/components/seo/Breadcrumb';
import type { BreadcrumbItem } from '@/components/seo/Breadcrumb';
import CtaBanner from '@/components/sections/CtaBanner';
import styles from './ProjectsPortfolioView.module.css';

interface ProjectsPortfolioViewProps {
  projects: Project[];
  initialCategory?: 'all' | 'residential' | 'commercial' | 'hospitality';
  breadcrumbs?: BreadcrumbItem[];
  pageTitle?: string;
  pageEyebrow?: string;
  tagline?: string;
}

export default function ProjectsPortfolioView({
  projects,
  initialCategory = 'all',
  breadcrumbs = [{ label: 'Home', href: '/' }, { label: 'Projects' }],
  pageTitle = 'Curated Architectural Portfolio',
  pageEyebrow = 'Built Work & Case Studies',
  tagline = 'A selective collection of bespoke residences, high-performance corporate environments, and immersive hospitality destinations executed with architectural precision.',
}: ProjectsPortfolioViewProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'residential' | 'commercial' | 'hospitality'>(
    initialCategory
  );

  const categories = [
    { key: 'all', label: 'All Projects', count: projects.length },
    { key: 'residential', label: 'Residential', count: projects.filter((p) => p.projectType === 'residential').length },
    { key: 'commercial', label: 'Commercial', count: projects.filter((p) => p.projectType === 'commercial').length },
    { key: 'hospitality', label: 'Hospitality', count: projects.filter((p) => p.projectType === 'hospitality').length },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.projectType === activeFilter);

  return (
    <div className={styles.portfolioWrapper}>
      <div className={styles.wideContainer}>
        {/* Editorial Header */}
        <section className={styles.headerSection}>
          <div className={styles.breadcrumbBar}>
            <Breadcrumb items={breadcrumbs} />
          </div>

          <span className={styles.eyebrow}>{pageEyebrow}</span>

          <div className={styles.titleRow}>
            <div className={styles.accentBar} />
            <h1 className={styles.mainTitle}>{pageTitle}</h1>
          </div>

          <p className={styles.tagline}>{tagline}</p>

          {/* Interactive Category Filter Pills */}
          <div className={styles.filterBar} role="tablist" aria-label="Project Typology Filters">
            {categories.map((cat) => {
              const isActive = activeFilter === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`${styles.filterBtn} ${isActive ? styles.filterBtnActive : ''}`}
                  onClick={() => setActiveFilter(cat.key as any)}
                >
                  <span>{cat.label}</span>
                  <span className={styles.countBadge}>{cat.count}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Spacious Architectural Grid — Low Text, Maximum Visual Impact */}
        <div className={styles.projectsGrid}>
          {filteredProjects.map((project) => {
            const cover = project.gallery?.[0]?.src || '/images/hero_architectural_living.jpg';
            const coverAlt = project.gallery?.[0]?.alt || project.title;

            // Extract area or scale tag if present in scope
            const scaleMatch = project.scope?.match(/[\d,]+\s*sq\.ft/i);
            const scaleTag = scaleMatch ? scaleMatch[0].toUpperCase() : 'BESPOKE BUILD';

            return (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className={styles.projectCard}
                aria-label={`Explore case study for ${project.title}`}
              >
                {/* Media Surface */}
                <div className={styles.mediaFrame}>
                  <Image
                    src={cover}
                    alt={coverAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.projectImg}
                  />

                  <div className={styles.floatingTopRow}>
                    <span className={styles.typologyBadge}>{project.projectType}</span>
                    <span className={styles.scopeBadge}>{scaleTag}</span>
                  </div>

                  <div className={styles.gradientOverlay} />
                </div>

                {/* Minimalist Caption Strip */}
                <div className={styles.captionStrip}>
                  <span className={styles.locationScope}>{project.location}</span>
                  <h2 className={styles.cardTitle}>{project.title}</h2>

                  {/* Clean Service Tags */}
                  <div className={styles.tagPillsRow}>
                    {project.serviceTags.slice(0, 3).map((tag) => (
                      <span key={tag} className={styles.servicePill}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className={styles.cardFooter}>
                    <span className={styles.exploreText}>
                      Explore Case Study
                      <ArrowRight size={13} className={styles.arrowIcon} />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Closing CTA */}
      <CtaBanner
        eyebrow="Commission Architecture"
        title="Ready to begin your architectural journey?"
        description="Book a consultation with our studio to review your site, design requirements, and budget parameters."
      />
    </div>
  );
}
