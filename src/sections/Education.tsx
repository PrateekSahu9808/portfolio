import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { achievements, certifications, education } from '../data/content';
import { Scene } from '../components/Scene';
import { Parallax } from '../components/Parallax';
import styles from './Education.module.css';

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

export function Education() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <Scene id="education">
      <motion.div
        ref={ref}
        className={`container ${styles.stage}`}
        variants={stagger}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.header className={styles.header} variants={fadeUp}>
          <p className={styles.eyebrow}>Education</p>
          <Parallax speed={0.1}>
            <h2 className={styles.title}>The Citadel</h2>
          </Parallax>
        </motion.header>

        <div className={styles.layout}>
          <motion.div className={styles.block} variants={fadeUp}>
            <h3 className={styles.label}>The Scrolls</h3>
            <article className={styles.card}>
              <p className={styles.degree}>{education.degree}</p>
              <p className={styles.school}>{education.school}</p>
              <p className={styles.meta}>
                {education.start} — {education.end}
                <span aria-hidden="true"> · </span>
                {education.location}
              </p>
            </article>
          </motion.div>

          {certifications.length > 0 ? (
            <motion.div className={styles.block} variants={fadeUp}>
              <h3 className={styles.label}>The Chain</h3>
              <ul className={styles.certs}>
                {certifications.map((cert) => (
                  <li key={cert.name} className={styles.card}>
                    <p className={styles.degree}>{cert.name}</p>
                    <p className={styles.meta}>{cert.issuer}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ) : null}

          <motion.div className={styles.achievements} variants={fadeUp}>
            <h3 className={styles.label}>Named Honors</h3>
            <ul className={styles.achieveList}>
              {achievements.map((item) => (
                <li key={item.title} className={styles.card}>
                  <p className={styles.degree}>{item.title}</p>
                  <p className={styles.meta}>{item.detail}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </Scene>
  );
}
