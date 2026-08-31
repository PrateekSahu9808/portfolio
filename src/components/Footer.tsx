import { profile } from '../data/content';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.bg} />
      <div className={styles.overlay} />
      <div className={`container ${styles.inner}`}>
        <img
          src="/got/throne.jpg"
          alt="Iron Throne"
          className={styles.throneImg}
        />
        <div className={styles.text}>
          <p className={styles.tagline}>The code is written. The deploy is made.</p>
          <p>
            © {new Date().getFullYear()} {profile.name}. Built with React — Valar Dohaeris.
          </p>
          <p className={styles.meta}>
            {profile.title} · {profile.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
