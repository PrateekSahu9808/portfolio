import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skillGroups } from '../data/content';
import { Scene } from '../components/Scene';
import { IconSword } from '../components/GotIcons';
import styles from './Skills.module.css';

const chapters = [
  {
    id: 'frontend',
    label: '01',
    title: 'Frontend',
    role: 'Interface Engineering',
    groups: skillGroups.filter((g) => g.title === 'Languages' || g.title === 'Frontend'),
  },
  {
    id: 'architecture',
    label: '02',
    title: 'Architecture',
    role: 'Systems & Tooling',
    groups: skillGroups.filter(
      (g) => g.title === 'Architecture & tools' || g.title === 'Working knowledge',
    ),
  },
  {
    id: 'craft',
    label: '03',
    title: 'Craft',
    role: 'Quality & Delivery',
    groups: skillGroups.filter((g) => g.title === 'Testing & design' || g.title === 'Practices'),
  },
] as const;

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

export function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <Scene id="skills">
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
            Skills
            <IconSword size={32} className={styles.swordRight} />
          </p>
          <h2 className={styles.title}>Arsenal</h2>
        </motion.header>

        <div className={styles.columns}>
          {chapters.map((ch) => (
            <motion.div key={ch.id} className={styles.column} variants={fadeUp}>
              <div className={styles.columnHeader}>
                <span className={styles.label}>{ch.label}</span>
                <h3 className={styles.columnTitle}>{ch.title}</h3>
                <p className={styles.role}>{ch.role}</p>
              </div>
              {ch.groups.map((group) => (
                <div key={group.title} className={styles.group}>
                  <h4 className={styles.groupTitle}>{group.title}</h4>
                  <ul className={styles.list}>
                    {group.items.map((item) => (
                      <li key={item} className="tag">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Scene>
  );
}
