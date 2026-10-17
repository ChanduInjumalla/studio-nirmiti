'use client';

import { useMemo } from 'react';
import * as THREE from 'three';
import { mapRange } from './types';

interface LivingStageProps {
  progress: number;
}

export default function LivingStage({ progress }: LivingStageProps) {
  // Sub-ranges for deterministic construction
  const ceilingP = mapRange(progress, 0.37, 0.41);
  const mediaWallP = mapRange(progress, 0.39, 0.44);
  const consoleP = mapRange(progress, 0.41, 0.45);
  const rugP = mapRange(progress, 0.42, 0.46);
  const sofaP = mapRange(progress, 0.44, 0.48);
  const tablesP = mapRange(progress, 0.46, 0.5);
  const decorLightsP = mapRange(progress, 0.48, 0.52);

  const materials = useMemo(() => {
    return {
      coveCeilingPlaster: new THREE.MeshStandardMaterial({
        color: '#f6f4ed',
        roughness: 0.9,
      }),
      calacattaMarble: new THREE.MeshStandardMaterial({
        color: '#eceae3',
        roughness: 0.22,
        metalness: 0.08,
      }),
      darkWoodSlat: new THREE.MeshStandardMaterial({
        color: '#382c23',
        roughness: 0.6,
        metalness: 0.05,
      }),
      floatingConsoleDark: new THREE.MeshStandardMaterial({
        color: '#211e1c',
        roughness: 0.4,
        metalness: 0.15,
      }),
      tvGlass: new THREE.MeshStandardMaterial({
        color: '#0c0e0f',
        roughness: 0.08,
        metalness: 0.85,
      }),
      woolRugFabric: new THREE.MeshStandardMaterial({
        color: '#bfb5a3',
        roughness: 0.95,
      }),
      boucleSofaFabric: new THREE.MeshStandardMaterial({
        color: '#ded7ca',
        roughness: 0.82,
        metalness: 0.02,
      }),
      sofaCushionDark: new THREE.MeshStandardMaterial({
        color: '#52473e',
        roughness: 0.8,
      }),
      coffeeTableMarble: new THREE.MeshStandardMaterial({
        color: '#dad6cb',
        roughness: 0.2,
        metalness: 0.1,
      }),
      brassMetal: new THREE.MeshStandardMaterial({
        color: '#c49e5c',
        roughness: 0.28,
        metalness: 0.85,
      }),
      plantFoliage: new THREE.MeshStandardMaterial({
        color: '#24452c',
        roughness: 0.75,
      }),
      ceramicPlanter: new THREE.MeshStandardMaterial({
        color: '#d6d2c4',
        roughness: 0.5,
      }),
    };
  }, []);

  if (progress < 0.32) return null;

  return (
    <group position={[-0.75, 0, -1.3]}>
      {/* ========================================================================= */}
      {/* 1. RECESSED CEILING COVE & ARCHITECTURAL TROUGH */}
      {/* ========================================================================= */}
      {ceilingP > 0 && (
        <group position={[0, 3.85 - (1 - ceilingP) * 0.4, 0]}>
          <mesh receiveShadow>
            <boxGeometry args={[6.8, 0.16, 8.2]} />
            <primitive object={materials.coveCeilingPlaster} attach="material" />
          </mesh>
          {decorLightsP > 0 && (
            <pointLight
              position={[0, -0.15, 0]}
              color="#ffeed1"
              intensity={decorLightsP * 4.2}
              distance={8}
              decay={2}
            />
          )}
        </group>
      )}

      {/* ========================================================================= */}
      {/* 2. BOOKMATCHED MARBLE & SLATTED MEDIA FEATURE WALL */}
      {/* ========================================================================= */}
      {mediaWallP > 0 && (
        <group position={[0, 1.9, -4.3]} scale={[1, mediaWallP, 1]}>
          {/* Central Calacatta marble slab */}
          <mesh position={[-0.3, 0, 0]} castShadow receiveShadow>
            <boxGeometry args={[3.4, 3.6, 0.08]} />
            <primitive object={materials.calacattaMarble} attach="material" />
          </mesh>

          {/* Fluted walnut slats flanking left & right */}
          <mesh position={[-2.4, 0, 0]} castShadow receiveShadow>
            <boxGeometry args={[1.3, 3.6, 0.06]} />
            <primitive object={materials.darkWoodSlat} attach="material" />
          </mesh>
          <mesh position={[1.8, 0, 0]} castShadow receiveShadow>
            <boxGeometry args={[1.3, 3.6, 0.06]} />
            <primitive object={materials.darkWoodSlat} attach="material" />
          </mesh>
        </group>
      )}

      {/* ========================================================================= */}
      {/* 3. FLOATING TV CONSOLE & SLEEK DISPLAY */}
      {/* ========================================================================= */}
      {consoleP > 0 && (
        <group position={[-0.3, 0.6, -4.0 + (1 - consoleP) * 0.3]}>
          {/* Floating dark timber console */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[3.8, 0.35, 0.45]} />
            <primitive object={materials.floatingConsoleDark} attach="material" />
          </mesh>

          {/* Ultra-thin OLED panel display mounted on marble wall */}
          <mesh position={[0, 1.15, -0.15]} castShadow>
            <boxGeometry args={[2.6, 1.45, 0.04]} />
            <primitive object={materials.tvGlass} attach="material" />
          </mesh>
        </group>
      )}

      {/* ========================================================================= */}
      {/* 4. DESIGNER WOOL AREA RUG */}
      {/* ========================================================================= */}
      {rugP > 0 && (
        <mesh
          position={[0, 0.22, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[rugP, rugP, 1]}
          receiveShadow
        >
          <planeGeometry args={[5.2, 4.4]} />
          <primitive object={materials.woolRugFabric} attach="material" />
        </mesh>
      )}

      {/* ========================================================================= */}
      {/* 5. ITALIAN BOUCLÉ SECTIONAL SOFA & CUSHIONS */}
      {/* ========================================================================= */}
      {sofaP > 0 && (
        <group
          position={[0, 0.22, 1.2 - (1 - sofaP) * 0.6]}
          scale={[1, 1, sofaP]}
        >
          {/* Main seating base */}
          <mesh position={[0, 0.32, 0]} castShadow receiveShadow>
            <boxGeometry args={[3.6, 0.38, 1.2]} />
            <primitive object={materials.boucleSofaFabric} attach="material" />
          </mesh>
          {/* Backrest */}
          <mesh position={[0, 0.7, 0.45]} castShadow receiveShadow>
            <boxGeometry args={[3.6, 0.48, 0.32]} />
            <primitive object={materials.boucleSofaFabric} attach="material" />
          </mesh>
          {/* Left Armrest */}
          <mesh position={[-1.85, 0.54, 0]} castShadow receiveShadow>
            <boxGeometry args={[0.26, 0.44, 1.2]} />
            <primitive object={materials.boucleSofaFabric} attach="material" />
          </mesh>
          {/* Right Armrest */}
          <mesh position={[1.85, 0.54, 0]} castShadow receiveShadow>
            <boxGeometry args={[0.26, 0.44, 1.2]} />
            <primitive object={materials.boucleSofaFabric} attach="material" />
          </mesh>
          {/* Accent throw pillows */}
          <mesh position={[-1.1, 0.62, 0.3]} castShadow>
            <boxGeometry args={[0.45, 0.42, 0.16]} />
            <primitive object={materials.sofaCushionDark} attach="material" />
          </mesh>
          <mesh position={[1.1, 0.62, 0.3]} castShadow>
            <boxGeometry args={[0.45, 0.42, 0.16]} />
            <primitive object={materials.sofaCushionDark} attach="material" />
          </mesh>
        </group>
      )}

      {/* ========================================================================= */}
      {/* 6. COFFEE TABLE & SIDE TABLE */}
      {/* ========================================================================= */}
      {tablesP > 0 && (
        <group scale={[tablesP, tablesP, tablesP]}>
          <mesh position={[-0.2, 0.35, -0.6]} castShadow receiveShadow>
            <cylinderGeometry args={[0.8, 0.8, 0.26, 24]} />
            <primitive object={materials.coffeeTableMarble} attach="material" />
          </mesh>

          <mesh position={[0.85, 0.44, -0.4]} castShadow receiveShadow>
            <cylinderGeometry args={[0.38, 0.38, 0.44, 20]} />
            <primitive object={materials.brassMetal} attach="material" />
          </mesh>
        </group>
      )}

      {/* ========================================================================= */}
      {/* 7. INDOOR BOTANICALS & ARCHITECTURAL ACCENT LIGHTS */}
      {/* ========================================================================= */}
      {decorLightsP > 0 && (
        <group>
          {/* Fiddle-leaf fig plant in ceramic planter */}
          <group position={[-2.6, 0.22, -3.4]}>
            <mesh position={[0, 0.45, 0]} castShadow receiveShadow>
              <cylinderGeometry args={[0.34, 0.26, 0.65, 16]} />
              <primitive object={materials.ceramicPlanter} attach="material" />
            </mesh>
            <mesh position={[0, 1.2, 0]} castShadow>
              <sphereGeometry args={[0.62, 14, 12]} />
              <primitive object={materials.plantFoliage} attach="material" />
            </mesh>
          </group>

          {/* Sculptural brass floor lamp */}
          <group position={[2.2, 0.22, 0.8]}>
            <mesh position={[0, 0.95, 0]} castShadow>
              <cylinderGeometry args={[0.02, 0.02, 1.8, 12]} />
              <primitive object={materials.brassMetal} attach="material" />
            </mesh>
            <mesh position={[0, 1.85, 0]}>
              <sphereGeometry args={[0.16, 16, 12]} />
              <meshStandardMaterial
                color="#fff6e0"
                emissive="#ffdca3"
                emissiveIntensity={decorLightsP * 2}
              />
            </mesh>
            <pointLight
              position={[0, 1.85, 0]}
              color="#ffe3ba"
              intensity={decorLightsP * 3.0}
              distance={4.5}
              decay={2}
            />
          </group>
        </group>
      )}
    </group>
  );
}
