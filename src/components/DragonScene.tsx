import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { DragonModel } from './DragonModel';
import styles from './DragonScene.module.css';

export function DragonScene() {
  return (
    <div aria-hidden="true" className={styles.wrap}>
      <Canvas
        frameloop="always"
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        camera={{ position: [0, 0, 20], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={2.0} />
        <directionalLight position={[10, 10, 5]} intensity={3.0} color="#ffffff" />
        <directionalLight position={[-5, 8, -5]} intensity={1.5} color="#ffd700" />
        <directionalLight position={[0, -5, 10]} intensity={1.0} color="#ffffff" />
        <pointLight position={[0, 2, 8]} intensity={2.0} color="#ff8c00" distance={40} />
        <Suspense fallback={null}>
          <DragonModel />
        </Suspense>
      </Canvas>
    </div>
  );
}
