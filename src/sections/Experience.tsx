import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { experience } from '../data/content';
import { Scene } from '../components/Scene';
import { IconSword } from '../components/GotIcons';
import styles from './Experience.module.css';

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <Scene id="experience">
      <motion.div
        ref={ref}
        className={`container ${styles.stage}`}
        variants={stagger}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.header className={styles.header} variants={fadeUp}>
          <p className={styles.eyebrow}>
            <IconSword size={32} className={styles.swordLeft} />
            Experience
            <IconSword size={32} className={styles.swordRight} />
          </p>
          <h2 className={styles.title}>Battle Record</h2>
        </motion.header>

        <div className={styles.timeline}>
          {experience.map((job) => (
            <motion.article key={job.id} className={styles.card} variants={fadeUp}>
              <div className={styles.cardHeader}>
                <span className={styles.dates}>{job.start} — {job.end}</span>
                <h3 className={styles.company}>
                  {job.company}
                </h3>
                <p className={styles.role}>
                  {job.role}
                  {job.badge ? <span className={styles.badge}> · {job.badge}</span> : null}
                </p>
                <p className={styles.location}>{job.location}</p>
              </div>
              <p className={styles.summary}>{job.summary}</p>
              {job.technologies.length > 0 && (
                <ul className={styles.tech}>
                  {job.technologies.map((t) => (
                    <li key={t} className="tag">{t}</li>
                  ))}
                </ul>
              )}
            </motion.article>
          ))}
        </div>
      </motion.div>
    </Scene>
  );
}
