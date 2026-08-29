import { profile } from '../data/content';
import { Reveal } from '../components/Reveal';
import { Section } from '../components/Section';
import styles from './About.module.css';

export function About() {
  return (
    <Section
      id="about"
      eyebrow="01 / About"
      title="Frontend engineering at production scale"
    >
      <div className={styles.layout}>
        <Reveal className={styles.copy}>
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>
        <Reveal className={styles.aside} delay={120}>
          <h3 className={styles.asideTitle}>What I bring</h3>
          <ul className={styles.points}>
            <li>Micro frontend architecture with Module Federation</li>
            <li>Reusable React systems in TypeScript, Storybook, and Next.js</li>
            <li>State management with Redux Toolkit, RTK Query, and Context API</li>
            <li>Core Web Vitals, WCAG accessibility, and React Testing Library</li>
            <li>Mentoring, Figma collaboration, and Agile delivery</li>
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
