'use client';

import { useEffect, useRef } from 'react';
import { animate } from 'animejs';
import styles from './ProcessRibbon.module.css';

const steps = [
  { num: '01', title: 'Brief', desc: 'Aspirations, programmatic needs, site orientation' },
  { num: '02', title: 'Planning', desc: 'Zoning, functional flow, structural grid' },
  { num: '03', title: '3D CGI', desc: 'Photorealistic light, volumetric rendering' },
  { num: '04', title: 'Materials', desc: 'Stone, timber, metals, physical swatch boards' },
  { num: '05', title: 'Execution', desc: 'Precision civil build, MEP, custom joinery' },
  { num: '06', title: 'Supervision', desc: 'Daily architect inspection, zero drift' },
  { num: '07', title: 'Handover', desc: 'Deep clean, snag clearance, keys & warranty' },
];

export default function ProcessRibbon() {
  const lineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && lineRef.current) {
          animate(lineRef.current, {
            scaleX: [0, 1],
            duration: 1200,
            ease: 'out(3)',
          });
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className={styles.sectionWrapper} aria-labelledby="process-title">
      <div className="container">
        <div className={styles.headerArea}>
          <span className={styles.eyebrow}>The Workflow</span>
          <h2 id="process-title" className={styles.title}>
            A rigorous seven-stage delivery process.
          </h2>
          <p className={styles.subtitle}>
            From the initial conversation to turnkey handover, every detail follows a transparent,
            coordinated sequence ensuring uncompromised architectural fidelity.
          </p>
        </div>

        <div className={styles.timelineContainer}>
          <div className={styles.connectingLine}>
            <div ref={lineRef} className={styles.progressLine} style={{ transform: 'scaleX(0)' }} />
          </div>

          {steps.map((step) => (
            <div key={step.num} className={styles.stepNode}>
              <div className={styles.nodeDot}>{step.num}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
