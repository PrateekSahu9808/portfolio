import { useEffect, useState } from 'react';
import { IconArrowUp } from './Icons';
import styles from './BackToTop.module.css';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      className={`${styles.button} ${visible ? styles.visible : ''}`}
      href="#top"
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
    >
      <span className={styles.icon}>
        <IconArrowUp size={18} />
      </span>
    </a>
  );
}
