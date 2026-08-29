import { useEffect, useRef, useState } from 'react';
import { navLinks, profile } from '../data/content';
import { useActiveSection } from '../hooks/useActiveSection';
import styles from './Navbar.module.css';

const sectionIds = navLinks.map((link) => link.href.slice(1));

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia('(min-width: 860px)').matches) {
        setOpen(false);
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a className={styles.brand} href="#top">
          <span className={styles.mark} aria-hidden="true">
            PS
          </span>
          <span className={styles.brandText}>
            <span className={styles.brandName}>{profile.name}</span>
            <span className={styles.brandRole}>{profile.title}</span>
          </span>
        </a>

        <nav className={styles.desktop} aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${active === link.href.slice(1) ? styles.active : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a className={`btn btn--primary ${styles.cta}`} href={profile.resumeUrl} download={profile.resumeFileName}>
          Resume
        </a>

        <button
          ref={buttonRef}
          className={styles.menuBtn}
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="visually-hidden">{open ? 'Close menu' : 'Open menu'}</span>
          <span className={`${styles.burger} ${open ? styles.burgerOpen : ''}`} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        ref={menuRef}
        className={`${styles.mobile} ${open ? styles.mobileOpen : ''}`}
        hidden={!open}
      >
        <nav className={styles.mobileNav} aria-label="Mobile">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.mobileLink} onClick={close}>
              {link.label}
            </a>
          ))}
          <a
            className={`btn btn--primary ${styles.mobileCta}`}
            href={profile.resumeUrl}
            download={profile.resumeFileName}
            onClick={close}
          >
            Download resume
          </a>
        </nav>
      </div>
    </header>
  );
}
