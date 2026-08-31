import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { profile } from '../data/content';
import { Scene } from '../components/Scene';
import { TextReveal } from '../components/TextReveal';
import { CopyButton } from '../components/CopyButton';
import { IconGitHub, IconLinkedIn, IconMail, IconPin } from '../components/Icons';
import styles from './Contact.module.css';

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <Scene id="contact" className={styles.ravenry}>
      <motion.div
        ref={ref}
        className={`container ${styles.stage}`}
        variants={stagger}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.header className={styles.header} variants={fadeUp}>
          <p className={styles.eyebrow}>Contact</p>
          <h2 className={styles.title}>Send a Raven</h2>
          <TextReveal
            text="Send a raven. Email or LinkedIn is the surest way to reach me — I read both. You can open a link or copy the details."
            className={styles.intro}
          />
        </motion.header>

        <motion.div className={styles.panel} variants={fadeUp}>
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
              <a href={profile.phoneHref}>{profile.phone}</a>
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
        </motion.div>
      </motion.div>
    </Scene>
  );
}
