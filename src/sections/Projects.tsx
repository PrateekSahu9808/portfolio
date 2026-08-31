import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { projects } from '../data/content';
import { Scene } from '../components/Scene';
import { Parallax } from '../components/Parallax';
import { IconExternal } from '../components/Icons';
import styles from './Projects.module.css';

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

const cardReveal = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.2 + i * 0.12,
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  }),
};

export function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <Scene id="projects">
      <motion.div
        ref={ref}
        className={`container ${styles.stage}`}
        variants={stagger}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.header className={styles.header} variants={fadeUp}>
          <p className={styles.eyebrow}>Projects</p>
          <Parallax speed={0.12}>
            <h2 className={styles.title}>Conquests</h2>
          </Parallax>
          <p className={styles.intro}>
            Four campaigns fought in production — each with a live banner to the realm.
          </p>
        </motion.header>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className={`${styles.card} ${project.featured ? styles.featured : ''}`}
              variants={cardReveal}
              custom={index}
            >
              <div className={styles.top}>
                <p className={styles.type}>{project.type}</p>
                <a
                  className={styles.link}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.linkLabel}
                  <IconExternal />
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              </div>
              <h3 className={styles.name}>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  {project.name}
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              </h3>
              <p className={styles.description}>{project.description}</p>
              <p className={styles.role}>
                <span>Role.</span> {project.role}
              </p>
              <ul className={styles.features}>
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <ul className={styles.tech} aria-label={`Technologies for ${project.name}`}>
                {project.technologies.map((tech) => (
                  <li key={tech} className="tag">
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </Scene>
  );
}
