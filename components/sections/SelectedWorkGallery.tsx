import Link from 'next/link';
import Image from 'next/image';
import { projectsData } from '@/data/projects';
import styles from './SelectedWorkGallery.module.css';

interface SelectedWorkGalleryProps {
  limit?: number;
}

export default function SelectedWorkGallery({ limit = 4 }: SelectedWorkGalleryProps) {
  const featured = projectsData.slice(0, limit);

  return (
    <section className={styles.sectionWrapper} aria-labelledby="selected-work-title">
      <div className="container">
        <div className={styles.headerArea}>
          <div className={styles.introText}>
            <span className={styles.eyebrow}>Featured Case Studies</span>
            <h2 id="selected-work-title" className={styles.title}>
              Curated architectural portfolio.
            </h2>
          </div>

          <Link href="/projects" className={styles.viewAllLink}>
            View All Projects →
          </Link>
        </div>

        <div className={styles.grid}>
          {featured.map((project) => {
            const coverImage = project.gallery?.[0]?.src || '/images/hero_architectural_living.jpg';
            const coverAlt = project.gallery?.[0]?.alt || project.title;

            return (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className={styles.projectCard}
              >
                <div className={styles.imageFrame}>
                  <Image
                    src={coverImage}
                    alt={coverAlt}
                    width={800}
                    height={500}
                    className={styles.projectImage}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <span className={styles.floatingBadge}>
                    {project.projectType}
                  </span>
                </div>

                <div className={styles.metaRow}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <span className={styles.location}>{project.location}</span>
                </div>

                <p className={styles.scope}>{project.scope}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
