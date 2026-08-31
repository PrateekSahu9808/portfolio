import { useEffect, useRef } from 'react';
export { DragonScene as FlyingDragons } from './DragonScene';

export function FrostOverlay({ active }: { active: boolean }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 41,
        pointerEvents: 'none',
        opacity: active ? 1 : 0,
        background:
          'radial-gradient(ellipse at center, transparent 30%, rgba(100, 180, 255, 0.1) 100%)',
        boxShadow:
          'inset 0 0 120px 40px rgba(100, 180, 255, 0.25), inset 0 0 300px 60px rgba(100, 180, 255, 0.1)',
        transition: 'opacity 0.35s ease',
      }}
    />
  );
}

export function TransitionRaven({ trigger }: { trigger: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const prevTrigger = useRef(trigger);

  useEffect(() => {
    if (trigger === prevTrigger.current) return;
    prevTrigger.current = trigger;

    const el = ref.current;
    if (!el) return;

    el.style.animation = 'none';
    void el.offsetWidth;
    el.style.animation = 'gotRavenFly 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards';
  }, [trigger]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: '45%',
        left: '-60px',
        zIndex: 45,
        pointerEvents: 'none',
        color: 'rgba(201, 162, 39, 0.85)',
        filter: 'drop-shadow(0 4px 16px rgba(201, 162, 39, 0.5))',
        opacity: 0,
      }}
    >
      <svg width="40" height="40" viewBox="0 0 32 32" fill="currentColor">
        <path d="M26 6c-1.5 0-3 .8-4 2l-2 3c-2-1-4.5-1-6.5.3L10 14l-4-1c-1 .2-2 .7-2.5 1.5L2 17c-.5.8-.5 1.8 0 2.5.5.8 1.3 1.2 2.2 1.3l3 .2 1.5 3 2.3 1.5-.8 4c-.2 1 .1 2 .8 2.6.7.7 1.7 1 2.6.8l4-1 3 1.5c1.5.6 3.2.2 4.3-1l2.5-3c.8-1 1.2-2.2 1-3.5l-.3-2 2 .5c.7.2 1.5 0 2-.4l2.5-1.5c1-.6 1.5-1.7 1.5-2.8v-3c0-1.5-.7-2.8-1.8-3.7L28 10V6h-2z" />
      </svg>
    </div>
  );
}
