import { useEffect, useRef } from 'react';
import styles from './InfinityRocket.module.css';

function lemniscate(t: number, scale: number) {
  const sin = Math.sin(t);
  const cos = Math.cos(t);
  const den = 1 + sin * sin;
  return {
    x: (scale * Math.SQRT2 * cos) / den,
    y: (scale * Math.SQRT2 * cos * sin) / den,
  };
}

function buildInfinityPath(cx: number, cy: number, scale: number) {
  const parts: string[] = [];
  const steps = 220;
  for (let i = 0; i <= steps; i += 1) {
    const t = (i / steps) * Math.PI * 2;
    const p = lemniscate(t, scale);
    parts.push(`${i === 0 ? 'M' : 'L'}${(cx + p.x).toFixed(2)} ${(cy + p.y).toFixed(2)}`);
  }
  return parts.join(' ');
}

const LOOP_MS = 22000;

export function InfinityRocket() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const trailRef = useRef<SVGPathElement>(null);
  const craftRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const svg = svgRef.current;
    const trail = trailRef.current;
    const craft = craftRef.current;
    if (!wrap || !svg || !trail || !craft) return;

    const path = { cx: 0, cy: 0, scale: 120 };
    let frame = 0;
    let alive = true;

    const layout = () => {
      const { width, height } = wrap.getBoundingClientRect();
      if (width < 8 || height < 8) return;
      svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
      svg.setAttribute('width', String(width));
      svg.setAttribute('height', String(height));
      path.cx = width * 0.5;
      path.cy = height * 0.5;
      path.scale = Math.min(width * 0.32, height * 0.7);
      trail.setAttribute('d', buildInfinityPath(path.cx, path.cy, path.scale));
    };

    const tick = (now: number) => {
      if (!alive) return;
      const t = ((now % LOOP_MS) / LOOP_MS) * Math.PI * 2;
      const current = lemniscate(t, path.scale);
      const ahead = lemniscate(t + 0.035, path.scale);
      const x = path.cx + current.x;
      const y = path.cy + current.y;
      const angle = Math.atan2(ahead.y - current.y, ahead.x - current.x);
      craft.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) rotate(${angle}rad)`;
      frame = window.requestAnimationFrame(tick);
    };

    layout();
    frame = window.requestAnimationFrame(tick);

    const resize = new ResizeObserver(() => layout());
    resize.observe(wrap);

    return () => {
      alive = false;
      window.cancelAnimationFrame(frame);
      resize.disconnect();
    };
  }, []);

  return (
    <div ref={wrapRef} className={styles.wrap} aria-hidden="true">
      <svg ref={svgRef} className={styles.scene}>
        <path ref={trailRef} className={styles.trail} fill="none" />
      </svg>
      <img ref={craftRef} className={styles.raven} src="/got/raven.png" alt="" />
    </div>
  );
}
