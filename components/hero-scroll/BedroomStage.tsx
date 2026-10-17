'use client';

import { useMemo } from 'react';
import * as THREE from 'three';
import { mapRange } from './types';

interface BedroomStageProps {
  progress: number;
}

export default function BedroomStage({ progress }: BedroomStageProps) {
  // Sub-ranges for deterministic construction
  const slatWallP = mapRange(progress, 0.79, 0.83);
  const bedPlatformP = mapRange(progress, 0.81, 0.85);
  const beddingP = mapRange(progress, 0.83, 0.87);
  const nightstandsP = mapRange(progress, 0.85, 0.89);
  const wardrobeP = mapRange(progress, 0.87, 0.91);
  const curtainsP = mapRange(progress, 0.89, 0.93);
  const lightingP = mapRange(progress, 0.91, 0.94);

  const materials = useMemo(() => {
    return {
      acousticWoodSlat: new THREE.MeshStandardMaterial({
        color: '#4d392b',
        roughness: 0.6,
        metalness: 0.05,
      }),
      headboardUpholstery: new THREE.MeshStandardMaterial({
        color: '#383633',
        roughness: 0.85,
      }),
      bedPlatformOak: new THREE.MeshStandardMaterial({
        color: '#805938',
        roughness: 0.45,
        metalness: 0.05,
      }),
      linenDuvetWhite: new THREE.MeshStandardMaterial({
        color: '#eeebe3',
        roughness: 0.9,
      }),
      linenPillowsWarm: new THREE.MeshStandardMaterial({
        color: '#d4cbbe',
        roughness: 0.85,
      }),
      throwBlanketOlive: new THREE.MeshStandardMaterial({
        color: '#5e5a48',
        roughness: 0.92,
      }),
      floatingNightstand: new THREE.MeshStandardMaterial({
        color: '#2d2722',
        roughness: 0.4,
        metalness: 0.1,
      }),
      bronzeGlassWardrobe: new THREE.MeshPhysicalMaterial({
        color: '#917961',
        roughness: 0.15,
        transmission: 0.75,
        thickness: 0.05,
        transparent: true,
        opacity: 0.65,
      }),
      darkWardrobeFrame: new THREE.MeshStandardMaterial({
        color: '#1a1917',
        roughness: 0.3,
        metalness: 0.8,
      }),
      sheerCurtains: new THREE.MeshStandardMaterial({
        color: '#f0ece1',
        roughness: 0.95,
        transparent: true,
        opacity: 0.7,
      }),
      brassPendant: new THREE.MeshStandardMaterial({
        color: '#c49e5c',
        roughness: 0.25,
        metalness: 0.85,
      }),
    };
  }, []);

  // Hide before camera approaches bedroom
  if (progress < 0.73) return null;

  return (
    <group position={[-7.5, 0, -8.75]}>
      {/* ========================================================================= */}
      {/* 1. ACOUSTIC VERTICAL WOOD SLAT HEADBOARD WALL (Z = -3.5 relative to center) */}
      {/* ========================================================================= */}
      {slatWallP > 0 && (
        <group
          position={[0, 1.9, -3.5]}
          scale={[1, slatWallP, 1]}
        >
          {/* Slat panel backing */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[4.8, 3.6, 0.08]} />
            <primitive object={materials.acousticWoodSlat} attach="material" />
          </mesh>

          {/* Center upholstered headboard cushion */}
          <mesh position={[0, -0.3, 0.08]} castShadow receiveShadow>
            <boxGeometry args={[2.8, 1.4, 0.12]} />
            <primitive object={materials.headboardUpholstery} attach="material" />
          </mesh>
        </group>
      )}

      {/* ========================================================================= */}
      {/* 2. FLOATING LOW-PROFILE PLATFORM BED BASE */}
      {/* ========================================================================= */}
      {bedPlatformP > 0 && (
        <group
          position={[
            0,
            0.22,
            -1.8 + (1 - bedPlatformP) * 0.4,
          ]}
          scale={[1, 1, bedPlatformP]}
        >
          {/* Low platform base */}
          <mesh position={[0, 0.15, 0]} castShadow receiveShadow>
            <boxGeometry args={[2.6, 0.26, 2.5]} />
            <primitive object={materials.bedPlatformOak} attach="material" />
          </mesh>
        </group>
      )}

      {/* ========================================================================= */}
      {/* 3. MATTRESS, CRISP LINEN DUVET & PILLOWS */}
      {/* ========================================================================= */}
      {beddingP > 0 && (
        <group
          position={[0, 0.5, -1.8]}
          scale={[beddingP, beddingP, beddingP]}
        >
          {/* Mattress & main duvet volume */}
          <mesh position={[0, 0.16, 0]} castShadow receiveShadow>
            <boxGeometry args={[2.3, 0.32, 2.3]} />
            <primitive object={materials.linenDuvetWhite} attach="material" />
          </mesh>

          {/* Folded throw blanket at foot of bed */}
          <mesh position={[0, 0.34, 0.7]} castShadow>
            <boxGeometry args={[2.32, 0.06, 0.7]} />
            <primitive object={materials.throwBlanketOlive} attach="material" />
          </mesh>

          {/* Sleeping Pillows (Pair 1) */}
          <mesh position={[-0.6, 0.4, -0.75]} castShadow>
            <boxGeometry args={[0.7, 0.18, 0.45]} />
            <primitive object={materials.linenPillowsWarm} attach="material" />
          </mesh>
          <mesh position={[0.6, 0.4, -0.75]} castShadow>
            <boxGeometry args={[0.7, 0.18, 0.45]} />
            <primitive object={materials.linenPillowsWarm} attach="material" />
          </mesh>

          {/* Accent Sham Pillows (Pair 2) */}
          <mesh position={[-0.5, 0.46, -0.6]} castShadow>
            <boxGeometry args={[0.55, 0.2, 0.3]} />
            <primitive object={materials.throwBlanketOlive} attach="material" />
          </mesh>
          <mesh position={[0.5, 0.46, -0.6]} castShadow>
            <boxGeometry args={[0.55, 0.2, 0.3]} />
            <primitive object={materials.throwBlanketOlive} attach="material" />
          </mesh>
        </group>
      )}

      {/* ========================================================================= */}
      {/* 4. CANTILEVERED FLOATING NIGHTSTANDS */}
      {/* ========================================================================= */}
      {nightstandsP > 0 && (
        <group>
          {/* Left Floating Nightstand */}
          <mesh
            position={[-1.75, 0.42, -3.1 + (1 - nightstandsP) * 0.3]}
            castShadow
            receiveShadow
          >
            <boxGeometry args={[0.65, 0.18, 0.42]} />
            <primitive object={materials.floatingNightstand} attach="material" />
          </mesh>

          {/* Right Floating Nightstand */}
          <mesh
            position={[1.75, 0.42, -3.1 + (1 - nightstandsP) * 0.3]}
            castShadow
            receiveShadow
          >
            <boxGeometry args={[0.65, 0.18, 0.42]} />
            <primitive object={materials.floatingNightstand} attach="material" />
          </mesh>
        </group>
      )}

      {/* ========================================================================= */}
      {/* 5. TINTED BRONZE GLASS WALK-IN WARDROBE PARTITION */}
      {/* (Along right edge of bedroom at X = 2.4) */}
      {/* ========================================================================= */}
      {wardrobeP > 0 && (
        <group
          position={[2.3, 1.8, -1.0]}
          scale={[1, wardrobeP, 1]}
        >
          {/* Dark slim bronze frame border */}
          <mesh castShadow>
            <boxGeometry args={[0.08, 3.4, 3.6]} />
            <primitive object={materials.darkWardrobeFrame} attach="material" />
          </mesh>
          {/* Tinted glass infill panel */}
          <mesh castShadow>
            <boxGeometry args={[0.04, 3.32, 3.52]} />
            <primitive object={materials.bronzeGlassWardrobe} attach="material" />
          </mesh>
          {/* Wardrobe interior lit rail glow */}
          {lightingP > 0 && (
            <pointLight
              position={[0.3, 0, 0]}
              color="#ffdfa8"
              intensity={lightingP * 2.5}
              distance={4}
              decay={2}
            />
          )}
        </group>
      )}

      {/* ========================================================================= */}
      {/* 6. FLOOR-TO-CEILING SHEER LINEN CURTAINS */}
      {/* (Along exterior glazing wall at Z = 3.2 relative to bedroom center) */}
      {/* ========================================================================= */}
      {curtainsP > 0 && (
        <group
          position={[-1.2, 1.9, 3.2]}
          scale={[1, curtainsP, 1]}
        >
          <mesh castShadow receiveShadow>
            <boxGeometry args={[3.2, 3.6, 0.08]} />
            <primitive object={materials.sheerCurtains} attach="material" />
          </mesh>
        </group>
      )}

      {/* ========================================================================= */}
      {/* 7. AMBIENT CEILING COVE & BEDSIDE SCONCE LIGHTS */}
      {/* ========================================================================= */}
      {lightingP > 0 && (
        <group>
          {/* Left Bedside Brass Drop Pendant Sconce */}
          <group position={[-1.75, 1.8, -3.1]}>
            <mesh castShadow>
              <cylinderGeometry args={[0.01, 0.01, 1.5, 8]} />
              <primitive object={materials.brassPendant} attach="material" />
            </mesh>
            <mesh position={[0, -0.75, 0]}>
              <sphereGeometry args={[0.1, 16, 12]} />
              <meshStandardMaterial
                color="#fff5db"
                emissive="#ffdca8"
                emissiveIntensity={lightingP * 2.5}
              />
            </mesh>
            <pointLight
              position={[0, -0.75, 0]}
              color="#ffdca8"
              intensity={lightingP * 2.8}
              distance={3.5}
              decay={2}
            />
          </group>

          {/* Right Bedside Brass Drop Pendant Sconce */}
          <group position={[1.75, 1.8, -3.1]}>
            <mesh castShadow>
              <cylinderGeometry args={[0.01, 0.01, 1.5, 8]} />
              <primitive object={materials.brassPendant} attach="material" />
            </mesh>
            <mesh position={[0, -0.75, 0]}>
              <sphereGeometry args={[0.1, 16, 12]} />
              <meshStandardMaterial
                color="#fff5db"
                emissive="#ffdca8"
                emissiveIntensity={lightingP * 2.5}
              />
            </mesh>
            <pointLight
              position={[0, -0.75, 0]}
              color="#ffdca8"
              intensity={lightingP * 2.8}
              distance={3.5}
              decay={2}
            />
          </group>

          {/* Soft Master Suite ambient cove ceiling glow */}
          <pointLight
            position={[0, 3.4, -1.8]}
            color="#ffe2ba"
            intensity={lightingP * 3.8}
            distance={7}
            decay={2}
          />
        </group>
      )}
    </group>
  );
}
