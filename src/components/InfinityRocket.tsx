import { useEffect, useId, useRef } from 'react';
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

const LOOP_MS = 20000;
const BODY_X = 61.44;
const BODY_Y = 49.74;

function RocketFire({ uid }: { uid: string }) {
  const filter = `${uid}-distort`;
  const glow = `${uid}-glow`;
  const outer = `${uid}-outer`;
  const inner = `${uid}-inner`;

  return (
    <svg className={styles.fire} viewBox="0 0 90 54" aria-hidden="true">
      <defs>
        <linearGradient id={outer} x1="1" y1="0.5" x2="0" y2="0.5">
          <stop offset="0%" stopColor="#ffcf6a" />
          <stop offset="28%" stopColor="#ff8a1c" />
          <stop offset="62%" stopColor="#ff3d12" />
          <stop offset="100%" stopColor="#ff3d12" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={inner} x1="1" y1="0.5" x2="0" y2="0.5">
          <stop offset="0%" stopColor="#fff7c2" />
          <stop offset="35%" stopColor="#ffe566" />
          <stop offset="70%" stopColor="#ff9a1f" />
          <stop offset="100%" stopColor="#ff9a1f" stopOpacity="0" />
        </linearGradient>
        <filter id={glow} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="1.6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id={filter} x="-30%" y="-50%" width="160%" height="200%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.055 0.14"
            numOctaves="3"
            seed="4"
            result="noise"
          >
            <animate
              attributeName="baseFrequency"
              dur="0.28s"
              values="0.05 0.12;0.1 0.2;0.045 0.16;0.05 0.12"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="11" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
      <g filter={`url(#${glow})`}>
        <path
          className={styles.plume}
          fill={`url(#${outer})`}
          filter={`url(#${filter})`}
          d="M78 27C76 11 46 6 10 27c36 20 66 16 68 0Z"
        />
        <path
          className={styles.core}
          fill={`url(#${inner})`}
          filter={`url(#${filter})`}
          d="M76 27C74 17 52 14 24 27c28 12 50 10 52 0Z"
        />
      </g>
    </svg>
  );
}

export function InfinityRocket() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const trailRef = useRef<SVGPathElement>(null);
  const craftRef = useRef<HTMLDivElement>(null);
  const uid = useId().replace(/:/g, '');

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
      craft.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-${BODY_X}%, -${BODY_Y}%) rotate(${angle}rad)`;
      frame = window.requestAnimationFrame(tick);
    };

    craft.style.transformOrigin = `${BODY_X}% ${BODY_Y}%`;
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
      <div ref={craftRef} className={styles.craft}>
        <RocketFire uid={uid} />
        <span className={styles.spark} />
        <span className={`${styles.spark} ${styles.sparkTwo}`} />
        <span className={`${styles.spark} ${styles.sparkThree}`} />
        <img className={styles.rocket} src="/rocket.png" alt="" />
      </div>
    </div>
  );
}
