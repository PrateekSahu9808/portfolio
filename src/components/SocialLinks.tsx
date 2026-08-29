import { profile } from '../data/content';
import { IconGitHub, IconLinkedIn } from './Icons';
import styles from './SocialLinks.module.css';

type SocialLinksProps = {
  compact?: boolean;
};

export function SocialLinks({ compact = false }: SocialLinksProps) {
  return (
    <ul className={`${styles.list} ${compact ? styles.compact : ''}`}>
      <li>
        <a
          className={compact ? 'icon-btn' : styles.link}
          href={profile.social.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconGitHub />
          {compact ? (
            <span className="visually-hidden">GitHub (opens in a new tab)</span>
          ) : (
            <>
              GitHub
              <span className="visually-hidden"> (opens in a new tab)</span>
            </>
          )}
        </a>
      </li>
      <li>
        <a
          className={compact ? 'icon-btn' : styles.link}
          href={profile.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconLinkedIn />
          {compact ? (
            <span className="visually-hidden">LinkedIn (opens in a new tab)</span>
          ) : (
            <>
              LinkedIn
              <span className="visually-hidden"> (opens in a new tab)</span>
            </>
          )}
        </a>
      </li>
    </ul>
  );
}
