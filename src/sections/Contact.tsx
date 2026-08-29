import { profile } from '../data/content';
import { Reveal } from '../components/Reveal';
import { Section } from '../components/Section';
import { CopyButton } from '../components/CopyButton';
import { IconGitHub, IconLinkedIn, IconMail, IconPin } from '../components/Icons';
import styles from './Contact.module.css';

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="06 / Contact"
      title="Let’s talk about a frontend role"
      intro="There is no contact form here on purpose. Email or LinkedIn is the most reliable way to reach me — I read both. You can open a link or copy the details."
    >
      <Reveal>
        <div className={styles.panel}>
          <div className={styles.emailRow}>
            <a className={styles.email} href={`mailto:${profile.email}`}>
              <IconMail size={22} />
              {profile.email}
            </a>
            <CopyButton value={profile.email} label="Copy email" />
          </div>
          <p className={styles.hint}>Prefer email for recruiting and interview loops.</p>
          <ul className={styles.channels}>
            <li className={styles.channel}>
              <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer">
                <IconLinkedIn />
                LinkedIn
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
              <CopyButton value={profile.social.linkedin} label="Copy LinkedIn URL" />
            </li>
            <li className={styles.channel}>
              <a href={profile.social.github} target="_blank" rel="noopener noreferrer">
                <IconGitHub />
                GitHub
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
              <CopyButton value={profile.social.github} label="Copy GitHub URL" />
            </li>
            <li className={styles.channel}>
              <a href={profile.phoneHref}>
                {profile.phone}
              </a>
              <CopyButton value={profile.phone} label="Copy phone number" />
            </li>
            <li className={styles.channel}>
              <span className={styles.location}>
                <IconPin />
                {profile.location}
              </span>
              <CopyButton value={profile.location} label="Copy location" />
            </li>
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
