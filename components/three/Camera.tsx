'use client';

import { useRef } from 'react';
import { PerspectiveCamera } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface CameraProps {
  position?: [number, number, number];
  fov?: number;
  enableParallax?: boolean;
}

/**
 * Camera with subtle mouse-parallax — very restrained movement.
 * Max ~0.45 units X, ~0.3 units Y. Damped lerp at 0.05.
 */
export default function Camera({
  position = [0, 1.2, 5.2],
  fov = 42,
  enableParallax = true,
}: CameraProps) {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  useFrame((state) => {
    if (!enableParallax || !cameraRef.current) return;
    const x = position[0] + state.pointer.x * 0.45;
    const y = position[1] + state.pointer.y * 0.3;
    const z = position[2];

    cameraRef.current.position.x = THREE.MathUtils.lerp(
      cameraRef.current.position.x,
      x,
      0.05
    );
    cameraRef.current.position.y = THREE.MathUtils.lerp(
      cameraRef.current.position.y,
      y,
      0.05
    );
    cameraRef.current.position.z = THREE.MathUtils.lerp(
      cameraRef.current.position.z,
      z,
      0.05
    );
    cameraRef.current.lookAt(0, 0.4, 0);
  });

  return (
    <PerspectiveCamera
      ref={cameraRef}
      makeDefault
      position={position}
      fov={fov}
      near={0.1}
      far={100}
    />
  );
}
