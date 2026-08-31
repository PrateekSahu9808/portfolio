import type { ReactNode } from 'react';
import styles from './Scene.module.css';

type SceneProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export function Scene({ id, children, className }: SceneProps) {
  return (
    <section id={id} className={`${styles.scene} ${className ?? ''}`}>
      {children}
    </section>
  );
}
