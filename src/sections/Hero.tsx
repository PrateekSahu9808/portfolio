import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/content';
import { ButtonLink } from '../components/ButtonLink';
import { SocialLinks } from '../components/SocialLinks';
import { Parallax } from '../components/Parallax';
import { IconArrowRight, IconDownload } from '../components/Icons';
import styles from './Hero.module.css';

const stack = ['React.js', 'TypeScript', 'Next.js', 'Redux Toolkit'] as const;

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: 'easeOut' as const, delay: 0.4 },
  },
};

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || window.matchMedia('(hover: none)').matches) return;

    const onMove = (event: PointerEvent) => {
      const box = hero.getBoundingClientRect();
      hero.style.setProperty('--spot-x', `${event.clientX - box.left}px`);
      hero.style.setProperty('--spot-y', `${event.clientY - box.top}px`);
    };

    hero.addEventListener('pointermove', onMove, { passive: true });
    return () => hero.removeEventListener('pointermove', onMove);
  }, []);

  return (
    <div ref={heroRef} className={styles.hero}>
      <div className={styles.map} aria-hidden="true" />
      <div className={styles.vignette} aria-hidden="true" />
      <div className={styles.atmosphere} aria-hidden="true" />
      <div className={styles.snow} aria-hidden="true">
        {Array.from({ length: 28 }, (_, index) => (
          <span key={index} />
        ))}
      </div>
      <motion.div
        className={`container ${styles.grid}`}
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <div className={styles.copy}>
          <Parallax speed={0.2}>
            <div className={styles.headline}>
              <motion.p className={styles.kicker} variants={fadeUp}>
                House Sahu · {profile.location}
              </motion.p>
              <motion.h1 id="hero-name" className={styles.name} variants={fadeUp}>
                <span className={styles.first}>{profile.firstName}</span>
                <span className={styles.last}>{profile.lastName}</span>
              </motion.h1>
            </div>
          </Parallax>
          <motion.p className={styles.motto} variants={fadeUp}>
            Hear me code
          </motion.p>
          <motion.p className={styles.intro} variants={fadeUp}>
            {profile.heroIntro}
          </motion.p>
          <motion.ul className={styles.stack} aria-label="Core stack" variants={fadeUp}>
            {stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </motion.ul>
          <motion.div className={styles.actions} variants={fadeUp}>
            <ButtonLink href="#projects">
              View My Work
              <IconArrowRight />
            </ButtonLink>
            <ButtonLink href={profile.resumeUrl} variant="secondary" download={profile.resumeFileName}>
              Download Resume
              <IconDownload />
            </ButtonLink>
          </motion.div>
          <motion.div variants={fadeUp}>
            <SocialLinks />
          </motion.div>
        </div>

        <Parallax speed={-0.15}>
          <motion.aside
            className={styles.editor}
            aria-label="Profile snapshot"
            variants={scaleIn}
          >
            <figure className={styles.realm}>
              <img src="/got/north.jpg" alt="" />
              <figcaption>The North — where the work is forged</figcaption>
            </figure>
            <div className={styles.chrome}>
              <span className={styles.dots} aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <span className={styles.tab}>citadel.ts</span>
            </div>
            <pre className={styles.code}>
              <span className={styles.kw}>const</span> <span className={styles.id}>engineer</span> = {'{'}
              {'\n'}
              {'  '}
              <span className={styles.key}>role</span>: <span className={styles.str}>'{profile.currentRole}'</span>,
              {'\n'}
              {'  '}
              <span className={styles.key}>company</span>: <span className={styles.str}>'{profile.currentCompany}'</span>,
              {'\n'}
              {'  '}
              <span className={styles.key}>focus</span>: [<span className={styles.str}>'React'</span>, <span className={styles.str}>'TypeScript'</span>],
              {'\n'}
              {'  '}
              <span className={styles.key}>shipping</span>: <span className={styles.str}>'{profile.experienceYears}'</span>,
              {'\n'}
              {'}'}
              <span className={styles.caret} aria-hidden="true" />
            </pre>
            <dl className={styles.stats}>
              {profile.highlights.map((item) => (
                <div key={item.label} className={styles.stat}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </motion.aside>
        </Parallax>
      </motion.div>
    </div>
  );
}
