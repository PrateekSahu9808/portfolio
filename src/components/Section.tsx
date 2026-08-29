import type { ReactNode } from 'react';
import styles from './Section.module.css';

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  intro?: string;
};

export function Section({ id, eyebrow, title, children, intro }: SectionProps) {
  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-title`}>
      <div className="container">
        <header className={styles.header}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h2 id={`${id}-title`} className={styles.title}>
            {title}
          </h2>
          {intro ? <p className={styles.intro}>{intro}</p> : null}
        </header>
        {children}
      </div>
    </section>
  );
}
