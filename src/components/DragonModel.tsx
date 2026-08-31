import { useRef, useEffect, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations, Clone } from '@react-three/drei';
import * as THREE from 'three';

const FLIGHT_PATH_POINTS = [
  new THREE.Vector3(-15, 5, 2),
  new THREE.Vector3(-7, 3, 3),
  new THREE.Vector3(0, -2, 2),
  new THREE.Vector3(7, -5, 1),
  new THREE.Vector3(14, -2, 0),
  new THREE.Vector3(7, 3, -1),
  new THREE.Vector3(0, 5, 0),
  new THREE.Vector3(-7, 2, 1),
];

const LOOP_DURATION = 22;
const SCALE = 2.2;

export function DragonModel() {
  const groupRef = useRef<THREE.Group>(null!);
  const clock = useRef(new THREE.Clock(true));

  const gltf = useGLTF('/european_dragon/scene.gltf');
  const { actions, names } = useAnimations(gltf.animations, groupRef);

  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(FLIGHT_PATH_POINTS, true, 'centripetal', 0.5);
  }, []);

  useEffect(() => {
    clock.current.start();

    const flyAction =
      actions['Fly'] ??
      actions['fly'] ??
      actions['Flying'] ??
      actions['flying'] ??
      actions[names.find((n) => /fly/i.test(n)) ?? ''] ??
      actions[names[0]];

    if (flyAction) {
      flyAction.reset().fadeIn(0.5).play();
      flyAction.setLoop(THREE.LoopRepeat, Infinity);
      flyAction.timeScale = 1.2;
    }
  }, [actions, names]);

  useFrame(() => {
    if (!groupRef.current) return;

    const elapsed = clock.current.getElapsedTime();
    const t = (elapsed / LOOP_DURATION) % 1;

    const position = curve.getPointAt(t);
    groupRef.current.position.copy(position);

    const lookAheadT = (t + 0.01) % 1;
    const tangentPoint = curve.getPointAt(lookAheadT);

    const targetQuat = new THREE.Quaternion();
    const rotMatrix = new THREE.Matrix4();
    rotMatrix.lookAt(position, tangentPoint, new THREE.Vector3(0, 1, 0));
    targetQuat.setFromRotationMatrix(rotMatrix);

    const direction = tangentPoint.clone().sub(position).normalize();
    const bankAngle = -direction.x * 0.3;
    const bankQuat = new THREE.Quaternion().setFromAxisAngle(
      new THREE.Vector3(0, 0, 1),
      bankAngle,
    );
    targetQuat.multiply(bankQuat);

    groupRef.current.quaternion.slerp(targetQuat, 0.04);

    const bob = Math.sin(elapsed * 1.2) * 0.08;
    groupRef.current.position.y += bob;
  });

  return (
    <group ref={groupRef} scale={[SCALE, SCALE, SCALE]}>
      <Clone object={gltf.scene} />
    </group>
  );
}

useGLTF.preload('/european_dragon/scene.gltf');
