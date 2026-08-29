import { profile } from '../data/content';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React.
        </p>
        <p className={styles.meta}>
          {profile.title} · {profile.location}
        </p>
      </div>
    </footer>
  );
}
