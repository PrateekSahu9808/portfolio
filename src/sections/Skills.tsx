import { skillGroups } from '../data/content';
import { Reveal } from '../components/Reveal';
import { Section } from '../components/Section';
import styles from './Skills.module.css';

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="04 / Skills"
      title="Tools I actually use at work"
      intro="Grouped from my resume — no ratings, no filler frameworks."
    >
      <div className={styles.grid}>
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} className={styles.group} delay={index * 60}>
            <h3 className={styles.title}>{group.title}</h3>
            <ul className={styles.list}>
              {group.items.map((item) => (
                <li key={item} className="tag">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
