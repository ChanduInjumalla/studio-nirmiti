'use client';

import { useMemo } from 'react';
import * as THREE from 'three';
import { mapRange } from './types';

interface ExteriorStageProps {
  progress: number;
}

export default function ExteriorStage({ progress }: ExteriorStageProps) {
  // Deterministic sub-ranges for scrubbed construction
  const travertineP = mapRange(progress, 0.1, 0.16);
  const teakSoffitP = mapRange(progress, 0.12, 0.18);
  const bronzeFinsP = mapRange(progress, 0.14, 0.2);
  const canopyP = mapRange(progress, 0.16, 0.22);
  const plantersP = mapRange(progress, 0.18, 0.24);
  const lightsP = mapRange(progress, 0.2, 0.25);

  const materials = useMemo(() => {
    return {
      travertineStone: new THREE.MeshStandardMaterial({
        color: '#d1c4b2', // Roman Travertine
        roughness: 0.82,
        metalness: 0.05,
      }),
      teakWood: new THREE.MeshStandardMaterial({
        color: '#824e2b', // Warm Teak architectural louvers
        roughness: 0.48,
        metalness: 0.05,
      }),
      bronzeFin: new THREE.MeshStandardMaterial({
        color: '#2b2319', // Dark Anodized Bronze
        roughness: 0.32,
        metalness: 0.82,
      }),
      canopyFinish: new THREE.MeshStandardMaterial({
        color: '#1a1c1a',
        roughness: 0.35,
        metalness: 0.8,
      }),
      foliageGreen: new THREE.MeshStandardMaterial({
        color: '#253d26',
        roughness: 0.9,
      }),
      planterStone: new THREE.MeshStandardMaterial({
        color: '#423f3c',
        roughness: 0.85,
      }),
      bollardLight: new THREE.MeshStandardMaterial({
        color: '#ffe5b4',
        emissive: '#ffd98c',
        emissiveIntensity: 1.5,
      }),
    };
  }, []);

  if (progress < 0.09) return null;

  return (
    <group position={[0, 0, 3.2]}>
      {/* ========================================================================= */}
      {/* 1. TRAVERTINE STONE ACCENT CLADDING (Rises smoothly along facade) */}
      {/* ========================================================================= */}
      {travertineP > 0 && (
        <group
          position={[0, (travertineP - 1) * 0.4, 0.22]}
          scale={[1, travertineP, 1]}
        >
          {/* Left facade travertine stone panels */}
          <mesh position={[-8.4, 2.0, 0]} castShadow receiveShadow>
            <boxGeometry args={[4.8, 3.9, 0.08]} />
            <primitive object={materials.travertineStone} attach="material" />
          </mesh>
          {/* Right facade travertine stone panels */}
          <mesh position={[8.4, 2.0, 0]} castShadow receiveShadow>
            <boxGeometry args={[4.8, 3.9, 0.08]} />
            <primitive object={materials.travertineStone} attach="material" />
          </mesh>
        </group>
      )}

      {/* ========================================================================= */}
      {/* 2. TEAK WOOD SOFFIT & WALL SLATS */}
      {/* ========================================================================= */}
      {teakSoffitP > 0 && (
        <group scale={[teakSoffitP, 1, 1]}>
          {/* Underside teak ceiling of cantilevered second floor */}
          <mesh position={[0, 4.02, 0.8]} receiveShadow>
            <boxGeometry args={[23.2, 0.06, 2.0]} />
            <primitive object={materials.teakWood} attach="material" />
          </mesh>
          {/* Vertical teak slat accent feature next to main entrance */}
          <mesh position={[-2.1, 1.8, 0.22]} castShadow receiveShadow>
            <boxGeometry args={[1.4, 3.6, 0.06]} />
            <primitive object={materials.teakWood} attach="material" />
          </mesh>
        </group>
      )}

      {/* ========================================================================= */}
      {/* 3. VERTICAL DARK BRONZE ARCHITECTURAL FINS (Upper floor louver system) */}
      {/* ========================================================================= */}
      {bronzeFinsP > 0 && (
        <group position={[0, 5.35, 0.7]} scale={[1, bronzeFinsP, 1]}>
          {[-9, -8, -7, -6, -5, -4, 4, 5, 6, 7, 8, 9].map((x) => (
            <mesh key={`fin-${x}`} position={[x, 0, 0]} castShadow>
              <boxGeometry args={[0.09, 2.5, 0.55]} />
              <primitive object={materials.bronzeFin} attach="material" />
            </mesh>
          ))}
        </group>
      )}

      {/* ========================================================================= */}
      {/* 4. ENTRANCE CANTILEVERED CANOPY */}
      {/* ========================================================================= */}
      {canopyP > 0 && (
        <group position={[0, 3.6, 0.2 + canopyP * 1.5]}>
          <mesh castShadow receiveShadow>
            <boxGeometry args={[4.6, 0.14, 3.0]} />
            <primitive object={materials.canopyFinish} attach="material" />
          </mesh>
          {/* Teak undersoffit of canopy with recessed downlights */}
          <mesh position={[0, -0.08, 0]} receiveShadow>
            <boxGeometry args={[4.4, 0.02, 2.8]} />
            <primitive object={materials.teakWood} attach="material" />
          </mesh>
        </group>
      )}

      {/* ========================================================================= */}
      {/* 5. ARCHITECTURAL PLANTERS & LUSH PALMS */}
      {/* ========================================================================= */}
      {plantersP > 0 && (
        <group position={[0, 0, 1.8]} scale={[1, plantersP, 1]}>
          {/* Left Fluted Planter Box */}
          <mesh position={[-5.5, 0.5, 0]} castShadow receiveShadow>
            <boxGeometry args={[3.8, 0.8, 1.3]} />
            <primitive object={materials.planterStone} attach="material" />
          </mesh>
          <mesh position={[-5.5, 1.3, 0]} castShadow>
            <sphereGeometry args={[1.05, 14, 12]} />
            <primitive object={materials.foliageGreen} attach="material" />
          </mesh>

          {/* Right Fluted Planter Box */}
          <mesh position={[5.5, 0.5, 0]} castShadow receiveShadow>
            <boxGeometry args={[3.8, 0.8, 1.3]} />
            <primitive object={materials.planterStone} attach="material" />
          </mesh>
          <mesh position={[5.5, 1.3, 0]} castShadow>
            <sphereGeometry args={[1.05, 14, 12]} />
            <primitive object={materials.foliageGreen} attach="material" />
          </mesh>
        </group>
      )}

      {/* ========================================================================= */}
      {/* 6. ARCHITECTURAL EXTERIOR ILLUMINATION */}
      {/* ========================================================================= */}
      {lightsP > 0 && (
        <group>
          {/* Warm canopy entry downlight */}
          <pointLight
            position={[0, 3.4, 1.4]}
            color="#ffd99e"
            intensity={lightsP * 4.2}
            distance={6}
            decay={2}
          />

          {/* Left facade warm wall-washer */}
          <pointLight
            position={[-6.2, 0.6, 0.7]}
            color="#ffcf87"
            intensity={lightsP * 3.0}
            distance={5}
            decay={2}
          />

          {/* Right facade warm wall-washer */}
          <pointLight
            position={[6.2, 0.6, 0.7]}
            color="#ffcf87"
            intensity={lightsP * 3.0}
            distance={5}
            decay={2}
          />

          {/* Warm interior glow visible through large windows */}
          <pointLight
            position={[0, 2.0, -1.0]}
            color="#ffe2ba"
            intensity={lightsP * 3.5}
            distance={10}
            decay={2}
          />
        </group>
      )}
    </group>
  );
}
