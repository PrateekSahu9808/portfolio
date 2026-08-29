import { experience } from '../data/content';
import { Reveal } from '../components/Reveal';
import { Section } from '../components/Section';
import styles from './Experience.module.css';

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="02 / Experience"
      title="Where I have shipped frontend"
      intro="FireFlink and Test Yantra in Bengaluru, including a training period at Test Yantra."
    >
      <ol className={styles.timeline}>
        {experience.map((job, index) => (
          <li key={job.id} className={styles.item}>
            <Reveal delay={index * 80}>
              <article className={styles.card}>
              <header className={styles.head}>
                <p className={styles.role}>
                  {job.role}
                  {job.badge ? <span className={styles.badge}> ({job.badge})</span> : null}
                </p>
                <h3 className={styles.company}>
                  {job.company}
                  {job.parent ? <span className={styles.parent}> · {job.parent}</span> : null}
                </h3>
                <p className={styles.meta}>
                  {job.start} — {job.end}
                  <span aria-hidden="true"> · </span>
                  {job.location}
                </p>
              </header>
              <p className={styles.summary}>{job.summary}</p>
              <ul className={styles.bullets}>
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              {job.technologies.length > 0 ? (
              <ul className={styles.tech} aria-label={`Technologies at ${job.company}`}>
                {job.technologies.map((tech) => (
                  <li key={tech} className="tag">
                    {tech}
                  </li>
                ))}
              </ul>
              ) : null}
            </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
