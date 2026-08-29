import { useEffect, useState } from 'react';

export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState('');

  useEffect(() => {
    const update = () => {
      const header = document.querySelector('header');
      const offset = (header?.getBoundingClientRect().height ?? 72) + 16;
      const nearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 24;

      if (nearBottom) {
        setActive(ids[ids.length - 1] ?? '');
        return;
      }

      let current = '';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= offset) {
          current = id;
        }
      }

      setActive(current);
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
