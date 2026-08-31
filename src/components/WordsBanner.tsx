import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Parallax } from './Parallax';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import styles from './WordsBanner.module.css';

export function WordsBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);

  return (
    <div ref={ref} className={styles.banner}>
      <motion.img
        className={styles.image}
        src="/got/godswood.jpg"
        alt=""
        style={reduced ? undefined : { scale: imgScale }}
      />
      <div className={styles.veil} />
      <Parallax speed={0.25} className={styles.copy}>
        <p className={styles.house}>House words</p>
        <p className={styles.words}>Winter is coming</p>
        <p className={styles.sub}>So is the next production release</p>
      </Parallax>
    </div>
  );
}
