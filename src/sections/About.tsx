import { profile } from '../data/content';
import { Section } from '../components/Section';
import { Parallax } from '../components/Parallax';
import { TextReveal } from '../components/TextReveal';
import styles from './About.module.css';

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="The North"
    >
      <div className={styles.layout}>
        <div className={styles.copy}>
          {profile.about.map((paragraph) => (
            <TextReveal key={paragraph} text={paragraph} className={styles.paragraph} />
          ))}
        </div>
        <Parallax speed={-0.2} className={styles.aside}>
          <img className={styles.portrait} src="/got/north.jpg" alt="" />
          <h3 className={styles.asideTitle}>The Banners I Carry</h3>
          <ul className={styles.points}>
            <li>Micro frontend architecture with Module Federation</li>
            <li>Reusable React systems in TypeScript, Storybook, and Next.js</li>
            <li>State management with Redux Toolkit, RTK Query, and Context API</li>
            <li>Core Web Vitals, WCAG accessibility, and React Testing Library</li>
            <li>Mentoring, Figma collaboration, and Agile delivery</li>
          </ul>
        </Parallax>
      </div>
    </Section>
  );
}
