import { profile } from '../data/content';
import { ButtonLink } from '../components/ButtonLink';
import { SocialLinks } from '../components/SocialLinks';
import { IconArrowRight, IconDownload } from '../components/Icons';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-name">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={styles.kicker}>
            {profile.title} · {profile.location}
          </p>
          <h1 id="hero-name" className={styles.name}>
            {profile.firstName}{' '}
            <span className={styles.last}>{profile.lastName}</span>
          </h1>
          <p className={styles.intro}>{profile.heroIntro}</p>
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

        <aside className={styles.panel} aria-label="Profile snapshot">
          <p className={styles.panelLabel}>Most recent</p>
          <p className={styles.panelRole}>{profile.currentRole}</p>
          <p className={styles.panelCompany}>{profile.currentCompany}</p>
          <p className={styles.panelMeta}>{profile.currentDates}</p>
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
