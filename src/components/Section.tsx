import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Scene } from './Scene';
import { Parallax } from './Parallax';
import { TextReveal } from './TextReveal';
import { IconSword } from './GotIcons';
import styles from './Section.module.css';

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  intro?: string;
  className?: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' as const },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export function Section({ id, eyebrow, title, children, intro, className }: SectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <Scene id={id} className={className}>
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
            {eyebrow}
            <IconSword size={32} className={styles.swordRight} />
          </p>
          <Parallax speed={0.15}>
            <h2 id={`${id}-title`} className={styles.title}>
              {title}
            </h2>
          </Parallax>
          {intro ? <TextReveal text={intro} className={styles.intro} /> : null}
        </motion.header>
        <motion.div variants={fadeUp}>{children}</motion.div>
      </motion.div>
    </Scene>
  );
}
