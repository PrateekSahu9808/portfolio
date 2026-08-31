import { useEffect, useState } from 'react';

export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState('');

  useEffect(() => {
    const update = () => {
      const x = Math.min(window.innerWidth / 2, window.innerWidth - 12);
      const y = window.innerHeight * 0.42;
      const hit = document.elementFromPoint(x, y);
      const scene = hit?.closest('[data-nav], section[id]');
      const id = scene instanceof HTMLElement ? (scene.dataset.nav || scene.id) : '';
      if (ids.includes(id)) {
        setActive(id);
        return;
      }

      const nearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 24;
      if (nearBottom) {
        setActive(ids[ids.length - 1] ?? '');
      }
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [ids]);

  return active;
}
