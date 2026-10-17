'use client';

import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface CameraRigProps {
  progress: number;
}

interface CameraWaypoint {
  p: number;
  pos: [number, number, number];
  target: [number, number, number];
  fov: number;
}

/**
 * Distant Cinematic Drone Camera Path:
 * - Begins FAR AWAY showing entire estate, landscape, driveway, cars, and house
 * - Glides smoothly closer as user scrolls
 * - Approaches main pivot entrance at human eye level
 * - Passes through door into Living Room
 * - Travels to Modular Kitchen
 * - Travels to Master Bedroom Suite
 * - 100% frozen when scroll stops, reversible on reverse scroll.
 */
const WAYPOINTS: CameraWaypoint[] = [
  // 1. Distant Drone Opening (Wide panoramic estate shot)
  { p: 0.0, pos: [18.0, 14.0, 38.0], target: [-1.0, 2.5, 2.0], fov: 38 },
  // 2. Drone glide / mid-distance sweep
  { p: 0.1, pos: [12.0, 10.0, 28.0], target: [0.0, 2.2, 2.0], fov: 40 },
  // 3. Exterior transformation complete (Close architectural view)
  { p: 0.25, pos: [4.0, 4.5, 17.0], target: [0.0, 2.0, 3.2], fov: 42 },
  // 4. Approach Entrance (Human eye level arrival)
  { p: 0.29, pos: [0.3, 1.68, 6.8], target: [0.0, 1.6, 2.8], fov: 45 },
  // 5. Passing through front pivot doorway
  { p: 0.32, pos: [0.0, 1.6, 2.8], target: [0.0, 1.5, -2.5], fov: 46 },
  // 6. Inside Living Room initial reveal
  { p: 0.37, pos: [-0.75, 1.5, 1.2], target: [-0.75, 1.4, -3.5], fov: 46 },
  // 7. Living Room construction completed
  { p: 0.52, pos: [-1.4, 1.45, 0.4], target: [-0.5, 1.35, -3.5], fov: 46 },
  // 8. Traveling through opening to Kitchen
  { p: 0.58, pos: [3.6, 1.5, -2.4], target: [6.0, 1.3, -4.8], fov: 46 },
  // 9. Modular Kitchen construction completed
  { p: 0.73, pos: [5.0, 1.45, -2.8], target: [6.4, 1.25, -5.5], fov: 46 },
  // 10. Traveling through corridor to Bedroom
  { p: 0.79, pos: [-3.8, 1.5, -6.2], target: [-7.0, 1.3, -9.0], fov: 46 },
  // 11. Master Bedroom construction completed
  { p: 0.94, pos: [-5.8, 1.42, -6.6], target: [-7.5, 1.3, -9.8], fov: 45 },
  // 12. Final hero composition & release
  { p: 1.0, pos: [-6.0, 1.4, -6.4], target: [-7.5, 1.3, -10.0], fov: 45 },
];

export default function CameraRig({ progress }: CameraRigProps) {
  const { camera } = useThree();
  const currentTarget = useRef(new THREE.Vector3(-1.0, 2.5, 2.0));
  const tempTarget = useMemo(() => new THREE.Vector3(), []);
  const tempPos = useMemo(() => new THREE.Vector3(), []);

  useFrame(() => {
    const clampedP = Math.min(1, Math.max(0, progress));

    // Find surrounding waypoints
    let i0 = 0;
    for (let i = 0; i < WAYPOINTS.length - 1; i++) {
      if (clampedP >= WAYPOINTS[i].p && clampedP <= WAYPOINTS[i + 1].p) {
        i0 = i;
        break;
      }
    }
    const wpA = WAYPOINTS[i0];
    const wpB = WAYPOINTS[i0 + 1];

    // Local segment interpolation factor
    const segmentRange = wpB.p - wpA.p;
    const t = segmentRange > 0 ? (clampedP - wpA.p) / segmentRange : 0;
    // Smooth cubic ease for cinematic smoothness
    const smoothT = t * t * (3 - 2 * t);

    // Interpolate camera position
    tempPos.set(
      wpA.pos[0] + (wpB.pos[0] - wpA.pos[0]) * smoothT,
      wpA.pos[1] + (wpB.pos[1] - wpA.pos[1]) * smoothT,
      wpA.pos[2] + (wpB.pos[2] - wpA.pos[2]) * smoothT
    );
    camera.position.copy(tempPos);

    // Interpolate lookAt target
    tempTarget.set(
      wpA.target[0] + (wpB.target[0] - wpA.target[0]) * smoothT,
      wpA.target[1] + (wpB.target[1] - wpA.target[1]) * smoothT,
      wpA.target[2] + (wpB.target[2] - wpA.target[2]) * smoothT
    );
    currentTarget.current.copy(tempTarget);
    camera.lookAt(currentTarget.current);

    // Interpolate FOV if perspective camera
    if ('fov' in camera && typeof camera.fov === 'number') {
      const targetFov = wpA.fov + (wpB.fov - wpA.fov) * smoothT;
      if (Math.abs(camera.fov - targetFov) > 0.05) {
        (camera as THREE.PerspectiveCamera).fov = targetFov;
        camera.updateProjectionMatrix();
      }
    }
  });

  return null;
}
