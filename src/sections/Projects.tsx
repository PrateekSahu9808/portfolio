import { projects } from '../data/content';
import { Reveal } from '../components/Reveal';
import { Section } from '../components/Section';
import { IconExternal } from '../components/Icons';
import styles from './Projects.module.css';

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="03 / Selected work"
      title="Product work that shows frontend depth"
      intro="The four production projects from my resume, with live links to the product or package."
    >
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <Reveal
            key={project.id}
            className={`${styles.card} ${project.featured ? styles.featured : ''}`}
            delay={index * 90}
          >
            <article>
              <div className={styles.top}>
                <p className={styles.type}>{project.type}</p>
                <a
                  className={styles.link}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.linkLabel}
                  <IconExternal />
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              </div>
              <h3 className={styles.name}>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  {project.name}
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              </h3>
              <p className={styles.description}>{project.description}</p>
              <p className={styles.role}>
                <span>Role.</span> {project.role}
              </p>
              <ul className={styles.features}>
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <ul className={styles.tech} aria-label={`Technologies for ${project.name}`}>
                {project.technologies.map((tech) => (
                  <li key={tech} className="tag">
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
