import { Children, useRef, useEffect, useCallback, type ReactNode } from 'react';
import { DragonScene } from './DragonScene';
import styles from './StageShow.module.css';

const TRANSITION_MS = 600;
const COOLDOWN_MS = 900;

export function StageShow({ children }: { children: ReactNode }) {
  const slides = Children.toArray(children);
  const count = slides.length;
  const viewportRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef(0);
  const lockRef = useRef(false);
  const lastTransition = useRef(0);
  const touchStartY = useRef(0);
  const wheelAccum = useRef(0);
  const rafId = useRef(0);

  const applySlide = useCallback(
    (next: number) => {
      const viewport = viewportRef.current;
      if (!viewport) return;

      const slideEls = viewport.querySelectorAll<HTMLElement>('[data-slide]');
      slideEls.forEach((el, i) => {
        el.classList.remove(styles.active, styles.exiting, styles.hidden);
        el.classList.add(i === next ? styles.active : styles.hidden);
      });

      viewport.querySelectorAll<HTMLElement>('[data-dot]').forEach((dot, i) => {
        dot.classList.toggle(styles.dotActive, i === next);
      });

      const counter = viewport.querySelector<HTMLElement>('[data-counter]');
      if (counter)
        counter.textContent = `${String(next + 1).padStart(2, '0')} / ${String(count).padStart(2, '0')}`;
    },
    [count],
  );

  const goTo = useCallback(
    (next: number, force = false) => {
      const now = Date.now();
      if (!force && lockRef.current) return;
      if (!force && now - lastTransition.current < COOLDOWN_MS) return;
      if (next < 0 || next >= count || next === activeRef.current) return;

      lockRef.current = true;
      lastTransition.current = now;

      const viewport = viewportRef.current;
      if (!viewport) return;

      const slideEls = viewport.querySelectorAll<HTMLElement>('[data-slide]');
      const currentEl = slideEls[activeRef.current];
      if (currentEl) {
        currentEl.classList.remove(styles.active, styles.hidden);
        currentEl.classList.add(styles.exiting);
      }

      setTimeout(() => {
        activeRef.current = next;
        applySlide(next);

        setTimeout(() => {
          lockRef.current = false;
          wheelAccum.current = 0;
        }, COOLDOWN_MS - TRANSITION_MS);
      }, TRANSITION_MS);
    },
    [count, applySlide],
  );

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';

    function processWheel() {
      rafId.current = 0;
      const delta = wheelAccum.current;
      wheelAccum.current = 0;
      if (Math.abs(delta) < 30) return;
      if (delta > 0) goTo(activeRef.current + 1);
      else goTo(activeRef.current - 1);
    }

    function onWheel(e: WheelEvent) {
      e.preventDefault();
      e.stopPropagation();
      if (lockRef.current) {
        wheelAccum.current = 0;
        return;
      }
      wheelAccum.current += e.deltaY;
      if (!rafId.current) {
        rafId.current = requestAnimationFrame(processWheel);
      }
    }

    function onKeyDown(e: KeyboardEvent) {
      if (lockRef.current) return;
      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        goTo(activeRef.current + 1);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        goTo(activeRef.current - 1);
      }
    }

    function onTouchStart(e: TouchEvent) {
      touchStartY.current = e.touches[0].clientY;
    }

    function onTouchEnd(e: TouchEvent) {
      if (lockRef.current) return;
      const diff = touchStartY.current - e.changedTouches[0].clientY;
      if (diff > 40) goTo(activeRef.current + 1);
      else if (diff < -40) goTo(activeRef.current - 1);
    }

    function onClick(e: MouseEvent) {
      const link = (e.target as HTMLElement | null)?.closest?.('a[href^="#"]');
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href || href.length < 2) return;

      const id = href.slice(1);
      const slideEls = el.querySelectorAll<HTMLElement>('[data-slide]');
      let index = -1;
      slideEls.forEach((slide, i) => {
        if (slide.querySelector(`#${CSS.escape(id)}`)) index = i;
      });

      if (index < 0) return;
      e.preventDefault();
      goTo(index, true);
    }

    el.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });
    el.addEventListener('click', onClick);

    return () => {
      el.removeEventListener('wheel', onWheel);
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
      el.removeEventListener('click', onClick);
      if (rafId.current) cancelAnimationFrame(rafId.current);
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.height = '';
    };
  }, [goTo]);

  return (
    <div ref={viewportRef} className={styles.viewport}>
      {slides.map((child, i) => (
        <div
          key={i}
          data-slide={i}
          className={`${styles.slide} ${i === 0 ? styles.active : styles.hidden}`}
        >
          {child}
        </div>
      ))}

      <div className={styles.dots}>
        {slides.map((_, i) => (
          <button
            key={i}
            data-dot={i}
            className={`${styles.dot} ${i === 0 ? styles.dotActive : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to section ${i + 1}`}
          />
        ))}
      </div>

      <div data-counter className={styles.counter}>
        01 / {String(count).padStart(2, '0')}
      </div>

      <DragonScene />
    </div>
  );
}
