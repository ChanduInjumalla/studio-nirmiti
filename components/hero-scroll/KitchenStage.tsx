'use client';

import { useMemo } from 'react';
import * as THREE from 'three';
import { mapRange } from './types';

interface KitchenStageProps {
  progress: number;
}

export default function KitchenStage({ progress }: KitchenStageProps) {
  // Sub-ranges for deterministic construction
  const baseCabinetsP = mapRange(progress, 0.58, 0.62);
  const upperCabinetsP = mapRange(progress, 0.6, 0.65);
  const tallTowerP = mapRange(progress, 0.62, 0.66);
  const islandP = mapRange(progress, 0.64, 0.68);
  const appliancesP = mapRange(progress, 0.66, 0.7);
  const ledRibbonP = mapRange(progress, 0.68, 0.72);
  const pendantsStoolsP = mapRange(progress, 0.7, 0.73);

  const materials = useMemo(() => {
    return {
      matteLaminateCabinet: new THREE.MeshStandardMaterial({
        color: '#282b2a',
        roughness: 0.6,
        metalness: 0.1,
      }),
      quartzCountertop: new THREE.MeshStandardMaterial({
        color: '#ebe7de',
        roughness: 0.2,
        metalness: 0.08,
      }),
      flutedGlassUpper: new THREE.MeshPhysicalMaterial({
        color: '#cad7d9',
        roughness: 0.25,
        transmission: 0.8,
        thickness: 0.04,
        transparent: true,
        opacity: 0.7,
      }),
      woodAccentVeneer: new THREE.MeshStandardMaterial({
        color: '#8c5936',
        roughness: 0.45,
        metalness: 0.05,
      }),
      matteBlackFixture: new THREE.MeshStandardMaterial({
        color: '#151717',
        roughness: 0.3,
        metalness: 0.6,
      }),
      brushedBrass: new THREE.MeshStandardMaterial({
        color: '#c49e5c',
        roughness: 0.28,
        metalness: 0.85,
      }),
      barstoolLeather: new THREE.MeshStandardMaterial({
        color: '#473a30',
        roughness: 0.75,
      }),
    };
  }, []);

  // Hide before camera begins moving toward kitchen
  if (progress < 0.52) return null;

  return (
    <group position={[6.25, 0, -4.75]}>
      {/* ========================================================================= */}
      {/* 1. LOWER BASE CABINETS & BACKSPLASH */}
      {/* (Along rear wall at Z = -3.4 relative to kitchen center) */}
      {/* ========================================================================= */}
      {baseCabinetsP > 0 && (
        <group
          position={[0, (baseCabinetsP - 1) * 0.4, -3.2]}
          scale={[1, baseCabinetsP, 1]}
        >
          {/* Base cabinet carcasses */}
          <mesh position={[-0.4, 0.55, 0]} castShadow receiveShadow>
            <boxGeometry args={[4.2, 0.85, 0.68]} />
            <primitive object={materials.matteLaminateCabinet} attach="material" />
          </mesh>

          {/* Quartz Countertop run */}
          <mesh position={[-0.4, 0.99, 0]} castShadow receiveShadow>
            <boxGeometry args={[4.25, 0.06, 0.72]} />
            <primitive object={materials.quartzCountertop} attach="material" />
          </mesh>

          {/* Calacatta Quartz Backsplash wall slab */}
          <mesh position={[-0.4, 1.45, -0.32]} receiveShadow>
            <boxGeometry args={[4.2, 0.88, 0.04]} />
            <primitive object={materials.quartzCountertop} attach="material" />
          </mesh>
        </group>
      )}

      {/* ========================================================================= */}
      {/* 2. UPPER FLUTED GLASS WALL CABINETRY */}
      {/* ========================================================================= */}
      {upperCabinetsP > 0 && (
        <group
          position={[-0.4, 2.35 + (1 - upperCabinetsP) * 0.3, -3.2]}
          scale={[1, upperCabinetsP, 1]}
        >
          {/* Upper cabinet box */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[3.2, 0.9, 0.38]} />
            <primitive object={materials.woodAccentVeneer} attach="material" />
          </mesh>
          {/* Fluted glass door front */}
          <mesh position={[0, 0, 0.2]} castShadow>
            <boxGeometry args={[3.15, 0.86, 0.04]} />
            <primitive object={materials.flutedGlassUpper} attach="material" />
          </mesh>
        </group>
      )}

      {/* ========================================================================= */}
      {/* 3. TALL APPLIANCE TOWER & PANTRY */}
      {/* ========================================================================= */}
      {tallTowerP > 0 && (
        <group
          position={[
            2.2,
            1.6,
            -3.1 + (1 - tallTowerP) * 0.4,
          ]}
          scale={[tallTowerP, 1, 1]}
        >
          <mesh castShadow receiveShadow>
            <boxGeometry args={[1.1, 2.9, 0.7]} />
            <primitive object={materials.matteLaminateCabinet} attach="material" />
          </mesh>
          {/* Integrated Black Glass Oven facade */}
          <mesh position={[0, 0, 0.36]} castShadow>
            <boxGeometry args={[0.85, 0.65, 0.04]} />
            <primitive object={materials.matteBlackFixture} attach="material" />
          </mesh>
        </group>
      )}

      {/* ========================================================================= */}
      {/* 4. SEAMLESS QUARTZ WATERFALL KITCHEN ISLAND */}
      {/* ========================================================================= */}
      {islandP > 0 && (
        <group
          position={[0, 0.21, -0.6]}
          scale={[1, islandP, 1]}
        >
          {/* Central island cabinet block */}
          <mesh position={[0, 0.45, 0]} castShadow receiveShadow>
            <boxGeometry args={[2.8, 0.88, 1.2]} />
            <primitive object={materials.woodAccentVeneer} attach="material" />
          </mesh>

          {/* Top quartz surface */}
          <mesh position={[0, 0.91, 0]} castShadow receiveShadow>
            <boxGeometry args={[2.86, 0.06, 1.26]} />
            <primitive object={materials.quartzCountertop} attach="material" />
          </mesh>

          {/* Left Waterfall end slab */}
          <mesh position={[-1.41, 0.45, 0]} castShadow receiveShadow>
            <boxGeometry args={[0.06, 0.88, 1.26]} />
            <primitive object={materials.quartzCountertop} attach="material" />
          </mesh>

          {/* Right Waterfall end slab */}
          <mesh position={[1.41, 0.45, 0]} castShadow receiveShadow>
            <boxGeometry args={[0.06, 0.88, 1.26]} />
            <primitive object={materials.quartzCountertop} attach="material" />
          </mesh>
        </group>
      )}

      {/* ========================================================================= */}
      {/* 5. INDUCTION HOB, MINIMALIST CHIMNEY HOOD & FAUCET */}
      {/* ========================================================================= */}
      {appliancesP > 0 && (
        <group>
          {/* Induction cooktop flush on rear counter */}
          <mesh position={[-0.8, 1.18, -3.2]}>
            <boxGeometry args={[0.8, 0.02, 0.52]} />
            <primitive object={materials.matteBlackFixture} attach="material" />
          </mesh>

          {/* Minimalist matte black cylindrical chimney hood */}
          <mesh position={[-0.8, 2.5, -3.2]} castShadow>
            <cylinderGeometry args={[0.22, 0.22, 1.2, 20]} />
            <primitive object={materials.matteBlackFixture} attach="material" />
          </mesh>

          {/* Island undermount sink & gooseneck faucet */}
          <mesh position={[0.6, 1.09, -0.6]} castShadow>
            <boxGeometry args={[0.7, 0.02, 0.45]} />
            <primitive object={materials.matteBlackFixture} attach="material" />
          </mesh>
        </group>
      )}

      {/* ========================================================================= */}
      {/* 6. UNDER-CABINET WARM LED RIBBON LIGHTING */}
      {/* ========================================================================= */}
      {ledRibbonP > 0 && (
        <group>
          {/* Under upper cabinets warm strip */}
          <pointLight
            position={[-0.4, 1.85, -3.0]}
            color="#ffe0ab"
            intensity={ledRibbonP * 3.5}
            distance={5}
            decay={2}
          />
          {/* Island counter accent light */}
          <pointLight
            position={[0, 1.8, -0.6]}
            color="#fff0cc"
            intensity={ledRibbonP * 3.0}
            distance={5}
            decay={2}
          />
        </group>
      )}

      {/* ========================================================================= */}
      {/* 7. TWIN BRASS PENDANT LIGHTS & COUNTER BARSTOOLS */}
      {/* ========================================================================= */}
      {pendantsStoolsP > 0 && (
        <group>
          {/* Left Brass Island Pendant */}
          <group position={[-0.7, 2.3 + (1 - pendantsStoolsP) * 0.4, -0.6]}>
            <mesh castShadow>
              <cylinderGeometry args={[0.01, 0.01, 1.2, 8]} />
              <primitive object={materials.brushedBrass} attach="material" />
            </mesh>
            <mesh position={[0, -0.6, 0]} castShadow>
              <coneGeometry args={[0.18, 0.25, 16]} />
              <primitive object={materials.brushedBrass} attach="material" />
            </mesh>
          </group>

          {/* Right Brass Island Pendant */}
          <group position={[0.7, 2.3 + (1 - pendantsStoolsP) * 0.4, -0.6]}>
            <mesh castShadow>
              <cylinderGeometry args={[0.01, 0.01, 1.2, 8]} />
              <primitive object={materials.brushedBrass} attach="material" />
            </mesh>
            <mesh position={[0, -0.6, 0]} castShadow>
              <coneGeometry args={[0.18, 0.25, 16]} />
              <primitive object={materials.brushedBrass} attach="material" />
            </mesh>
          </group>

          {/* Counter Barstools (2 units along island front) */}
          {[-0.6, 0.6].map((x) => (
            <group
              key={`stool-${x}`}
              position={[x, 0.21, 0.35 + (1 - pendantsStoolsP) * 0.3]}
            >
              {/* Legs */}
              <mesh position={[0, 0.35, 0]} castShadow>
                <cylinderGeometry args={[0.18, 0.24, 0.68, 12]} />
                <primitive object={materials.matteBlackFixture} attach="material" />
              </mesh>
              {/* Seat Cushion */}
              <mesh position={[0, 0.72, 0]} castShadow>
                <cylinderGeometry args={[0.22, 0.22, 0.08, 16]} />
                <primitive object={materials.barstoolLeather} attach="material" />
              </mesh>
            </group>
          ))}
        </group>
      )}
    </group>
  );
}
