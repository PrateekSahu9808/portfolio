import { achievements, certifications, education } from '../data/content';
import { Reveal } from '../components/Reveal';
import { Section } from '../components/Section';
import styles from './Education.module.css';

export function Education() {
  return (
    <Section id="education" eyebrow="05 / Background" title="Education and selected results">
      <div className={styles.layout}>
        <Reveal className={styles.block}>
          <h3 className={styles.label}>Education</h3>
          <article className={styles.card}>
            <p className={styles.degree}>{education.degree}</p>
            <p className={styles.school}>{education.school}</p>
            <p className={styles.meta}>
              {education.start} — {education.end}
              <span aria-hidden="true"> · </span>
              {education.location}
            </p>
          </article>
        </Reveal>

        {certifications.length > 0 ? (
          <Reveal className={styles.block} delay={80}>
            <h3 className={styles.label}>Certifications</h3>
            <ul className={styles.certs}>
              {certifications.map((cert) => (
                <li key={cert.name} className={styles.card}>
                  <p className={styles.degree}>{cert.name}</p>
                  <p className={styles.meta}>{cert.issuer}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        ) : null}

        <Reveal className={styles.achievements} delay={120}>
          <h3 className={styles.label}>Selected results</h3>
          <ul className={styles.achieveList}>
            {achievements.map((item) => (
              <li key={item.title} className={styles.card}>
                <p className={styles.degree}>{item.title}</p>
                <p className={styles.meta}>{item.detail}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
