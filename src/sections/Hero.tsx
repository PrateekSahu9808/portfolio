import { useEffect, useRef } from 'react';
import { profile } from '../data/content';
import { ButtonLink } from '../components/ButtonLink';
import { SocialLinks } from '../components/SocialLinks';
import { IconArrowRight, IconDownload } from '../components/Icons';
import { InfinityRocket } from '../components/InfinityRocket';
import styles from './Hero.module.css';

const stack = ['React.js', 'TypeScript', 'Next.js', 'Redux Toolkit'] as const;

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

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
    <section id="top" ref={heroRef} className={styles.hero} aria-labelledby="hero-name">
      <div className={styles.atmosphere} aria-hidden="true" />
      <InfinityRocket />
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <div className={styles.headline}>
            <p className={styles.kicker}>
              {profile.title} · {profile.location}
            </p>
            <h1 id="hero-name" className={styles.name}>
              <span className={styles.first}>{profile.firstName}</span>
              <span className={styles.last}>{profile.lastName}</span>
            </h1>
          </div>
          <p className={styles.intro}>{profile.heroIntro}</p>
          <ul className={styles.stack} aria-label="Core stack">
            {stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className={styles.actions}>
            <ButtonLink href="#projects">
              View My Work
              <IconArrowRight />
            </ButtonLink>
            <ButtonLink href={profile.resumeUrl} variant="secondary" download={profile.resumeFileName}>
              Download Resume
              <IconDownload />
            </ButtonLink>
          </div>
          <SocialLinks />
        </div>

        <aside className={styles.editor} aria-label="Profile snapshot">
          <div className={styles.chrome}>
            <span className={styles.dots} aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className={styles.tab}>profile.ts</span>
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
        </aside>
      </div>
    </section>
  );
}
