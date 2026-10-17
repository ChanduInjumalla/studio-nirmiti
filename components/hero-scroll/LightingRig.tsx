'use client';

import { useMemo } from 'react';
import * as THREE from 'three';
import { mapRange } from './types';

interface LightingRigProps {
  progress: number;
}

export default function LightingRig({ progress }: LightingRigProps) {
  // Exterior sun warmth increases subtly as exterior finishes complete
  const sunWarmth = mapRange(progress, 0.1, 0.25, 0, 1);
  const sunColor = useMemo(() => {
    return new THREE.Color().lerpColors(
      new THREE.Color('#fcfbfa'), // Crisp, clear natural daylight
      new THREE.Color('#faf2de'), // Warm architectural golden light
      sunWarmth * 0.4
    );
  }, [sunWarmth]);

  // Interior ambient illumination grows as camera enters the home (progress > 0.30)
  const interiorAmbient = mapRange(progress, 0.3, 0.45, 0.35, 1.3);

  return (
    <group>
      {/* ========================================================================= */}
      {/* 1. ARCHITECTURAL SUN (Directional Light covering entire estate) */}
      {/* ========================================================================= */}
      <directionalLight
        position={[25, 35, 28]}
        intensity={2.6}
        color={sunColor}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={1}
        shadow-camera-far={75}
        shadow-camera-left={-28}
        shadow-camera-right={28}
        shadow-camera-top={28}
        shadow-camera-bottom={-28}
        shadow-bias={-0.0004}
      />

      {/* ========================================================================= */}
      {/* 2. SKY HEMISPHERE AMBIENT */}
      {/* ========================================================================= */}
      <hemisphereLight
        color="#e4edf5" // Crisp sky daylight
        groundColor="#3d372e" // Warm ground bounce
        intensity={0.9}
      />

      {/* ========================================================================= */}
      {/* 3. INTERIOR VOLUMETRIC FILL (Fills shadows when inside rooms) */}
      {/* ========================================================================= */}
      {progress > 0.28 && (
        <group>
          {/* Living Room Area Fill */}
          <pointLight
            position={[-0.75, 2.5, -1.5]}
            color="#fff3df"
            intensity={interiorAmbient * 1.6}
            distance={11}
            decay={2}
          />

          {/* Kitchen Area Fill */}
          <pointLight
            position={[6.25, 2.4, -4.75]}
            color="#fff0d6"
            intensity={interiorAmbient * 1.5}
            distance={10}
            decay={2}
          />

          {/* Bedroom Area Fill */}
          <pointLight
            position={[-7.5, 2.4, -8.75]}
            color="#ffeed1"
            intensity={interiorAmbient * 1.6}
            distance={10}
            decay={2}
          />
        </group>
      )}
    </group>
  );
}
