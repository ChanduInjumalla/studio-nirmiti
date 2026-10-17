'use client';

import { useMemo } from 'react';
import * as THREE from 'three';

interface EstateEnvironmentProps {
  progress: number;
}

/**
 * High-End Real Estate Environment:
 * - Sweeping paved driveway
 * - Detailed modern executive car (metallic paint, alloy wheels, glass canopy, LED lights)
 * - Reflecting water feature pool
 * - Architectural Mediterranean cypress trees & manicured box hedges
 * - Boundary wall & gate pillars
 */
export default function EstateEnvironment({ progress }: EstateEnvironmentProps) {
  const materials = useMemo(() => {
    return {
      drivewayPaver: new THREE.MeshStandardMaterial({
        color: '#282a29', // Dark basalt stone pavers
        roughness: 0.7,
        metalness: 0.15,
      }),
      drivewayCurb: new THREE.MeshStandardMaterial({
        color: '#8c877d',
        roughness: 0.6,
      }),
      // Executive Car Materials
      carPaintMetallic: new THREE.MeshStandardMaterial({
        color: '#3b434c', // Metallic slate platinum
        roughness: 0.22,
        metalness: 0.85,
      }),
      carGlassTint: new THREE.MeshPhysicalMaterial({
        color: '#12161a',
        roughness: 0.08,
        transmission: 0.65,
        thickness: 0.04,
        transparent: true,
        opacity: 0.8,
      }),
      carChrome: new THREE.MeshStandardMaterial({
        color: '#e4e7eb',
        roughness: 0.15,
        metalness: 0.95,
      }),
      carTireRubber: new THREE.MeshStandardMaterial({
        color: '#171717',
        roughness: 0.85,
      }),
      carAlloyRim: new THREE.MeshStandardMaterial({
        color: '#c2c5c9',
        roughness: 0.25,
        metalness: 0.9,
      }),
      carHeadlightLed: new THREE.MeshStandardMaterial({
        color: '#eaf4fc',
        emissive: '#d6ecff',
        emissiveIntensity: 1.8,
      }),
      carTaillightLed: new THREE.MeshStandardMaterial({
        color: '#9e1111',
        emissive: '#e01616',
        emissiveIntensity: 1.5,
      }),
      // Water Feature
      poolWater: new THREE.MeshPhysicalMaterial({
        color: '#1a3338',
        roughness: 0.05,
        transmission: 0.8,
        thickness: 0.2,
        transparent: true,
        opacity: 0.85,
      }),
      poolCopingStone: new THREE.MeshStandardMaterial({
        color: '#d4cec5',
        roughness: 0.65,
      }),
      // Landscape Materials
      hedgeGreen: new THREE.MeshStandardMaterial({
        color: '#233824',
        roughness: 0.88,
      }),
      cypressGreen: new THREE.MeshStandardMaterial({
        color: '#1e301f',
        roughness: 0.85,
      }),
      treeTrunk: new THREE.MeshStandardMaterial({
        color: '#3d3025',
        roughness: 0.9,
      }),
      boundaryWallStone: new THREE.MeshStandardMaterial({
        color: '#c7c2b7',
        roughness: 0.85,
      }),
      darkWallTrim: new THREE.MeshStandardMaterial({
        color: '#242625',
        roughness: 0.4,
        metalness: 0.5,
      }),
      pathwayStone: new THREE.MeshStandardMaterial({
        color: '#bab2a4',
        roughness: 0.75,
      }),
    };
  }, []);

  return (
    <group>
      {/* ========================================================================= */}
      {/* 1. PAVED DRIVEWAY */}
      {/* ========================================================================= */}
      <mesh
        position={[11.5, 0.02, 16.0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <planeGeometry args={[7.2, 26]} />
        <primitive object={materials.drivewayPaver} attach="material" />
      </mesh>

      {/* Driveway Curb Edging */}
      <mesh position={[7.8, 0.06, 16.0]} receiveShadow>
        <boxGeometry args={[0.2, 0.12, 26]} />
        <primitive object={materials.drivewayCurb} attach="material" />
      </mesh>
      <mesh position={[15.2, 0.06, 16.0]} receiveShadow>
        <boxGeometry args={[0.2, 0.12, 26]} />
        <primitive object={materials.drivewayCurb} attach="material" />
      </mesh>

      {/* ========================================================================= */}
      {/* 2. DETAILED MODERN EXECUTIVE VEHICLE */}
      {/* ========================================================================= */}
      <group position={[11.2, 0, 15.0]} rotation={[0, -0.25, 0]}>
        {/* Main Aerodynamic Lower Body */}
        <mesh position={[0, 0.52, 0]} castShadow receiveShadow>
          <boxGeometry args={[2.08, 0.52, 4.7]} />
          <primitive object={materials.carPaintMetallic} attach="material" />
        </mesh>

        {/* Sculpted Hood with subtle slope */}
        <mesh position={[0, 0.68, 1.2]} castShadow>
          <boxGeometry args={[2.02, 0.22, 1.7]} />
          <primitive object={materials.carPaintMetallic} attach="material" />
        </mesh>

        {/* Sculpted Rear Trunk Deck */}
        <mesh position={[0, 0.72, -1.6]} castShadow>
          <boxGeometry args={[2.02, 0.26, 1.1]} />
          <primitive object={materials.carPaintMetallic} attach="material" />
        </mesh>

        {/* Aerodynamic Glass Cabin Greenhouse */}
        <mesh position={[0, 1.12, -0.2]} castShadow>
          <boxGeometry args={[1.76, 0.62, 2.3]} />
          <primitive object={materials.carGlassTint} attach="material" />
        </mesh>

        {/* Panoramic Roof Cap */}
        <mesh position={[0, 1.44, -0.2]} castShadow>
          <boxGeometry args={[1.7, 0.04, 2.1]} />
          <primitive object={materials.carPaintMetallic} attach="material" />
        </mesh>

        {/* Chrome Window Beltline Trim */}
        <mesh position={[0, 0.81, -0.2]}>
          <boxGeometry args={[1.82, 0.02, 2.4]} />
          <primitive object={materials.carChrome} attach="material" />
        </mesh>

        {/* Front LED Matrix Headlight Strip (Facing +Z) */}
        <mesh position={[0, 0.58, 2.36]}>
          <boxGeometry args={[1.92, 0.08, 0.04]} />
          <primitive object={materials.carHeadlightLed} attach="material" />
        </mesh>
        <pointLight
          position={[0, 0.6, 2.6]}
          color="#d6ecff"
          intensity={0.8}
          distance={3}
        />

        {/* Rear Horizon LED Taillight Bar (Facing -Z) */}
        <mesh position={[0, 0.66, -2.36]}>
          <boxGeometry args={[1.92, 0.06, 0.04]} />
          <primitive object={materials.carTaillightLed} attach="material" />
        </mesh>

        {/* Side Mirrors */}
        <mesh position={[-1.12, 0.95, 0.7]} castShadow>
          <boxGeometry args={[0.22, 0.12, 0.16]} />
          <primitive object={materials.carPaintMetallic} attach="material" />
        </mesh>
        <mesh position={[1.12, 0.95, 0.7]} castShadow>
          <boxGeometry args={[0.22, 0.12, 0.16]} />
          <primitive object={materials.carPaintMetallic} attach="material" />
        </mesh>

        {/* Detailed Wheels (4 Units with multi-spoke alloy rims) */}
        {/* Front Left */}
        <group position={[-1.05, 0.35, 1.4]}>
          <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.35, 0.35, 0.26, 24]} />
            <primitive object={materials.carTireRubber} attach="material" />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 2]} position={[-0.02, 0, 0]}>
            <cylinderGeometry args={[0.25, 0.25, 0.27, 16]} />
            <primitive object={materials.carAlloyRim} attach="material" />
          </mesh>
        </group>

        {/* Front Right */}
        <group position={[1.05, 0.35, 1.4]}>
          <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.35, 0.35, 0.26, 24]} />
            <primitive object={materials.carTireRubber} attach="material" />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 2]} position={[0.02, 0, 0]}>
            <cylinderGeometry args={[0.25, 0.25, 0.27, 16]} />
            <primitive object={materials.carAlloyRim} attach="material" />
          </mesh>
        </group>

        {/* Rear Left */}
        <group position={[-1.05, 0.35, -1.4]}>
          <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.35, 0.35, 0.26, 24]} />
            <primitive object={materials.carTireRubber} attach="material" />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 2]} position={[-0.02, 0, 0]}>
            <cylinderGeometry args={[0.25, 0.25, 0.27, 16]} />
            <primitive object={materials.carAlloyRim} attach="material" />
          </mesh>
        </group>

        {/* Rear Right */}
        <group position={[1.05, 0.35, -1.4]}>
          <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.35, 0.35, 0.26, 24]} />
            <primitive object={materials.carTireRubber} attach="material" />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 2]} position={[0.02, 0, 0]}>
            <cylinderGeometry args={[0.25, 0.25, 0.27, 16]} />
            <primitive object={materials.carAlloyRim} attach="material" />
          </mesh>
        </group>
      </group>

      {/* ========================================================================= */}
      {/* 3. ARCHITECTURAL REFLECTING POOL (Front Courtyard Water Feature) */}
      {/* ========================================================================= */}
      <group position={[-9.5, 0.08, 9.0]}>
        {/* Pool Water Surface */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <planeGeometry args={[7.0, 4.5]} />
          <primitive object={materials.poolWater} attach="material" />
        </mesh>
        {/* Pool Coping Stone Border */}
        <mesh position={[0, 0.04, 0]} receiveShadow>
          <boxGeometry args={[7.4, 0.1, 4.9]} />
          <primitive object={materials.poolCopingStone} attach="material" />
        </mesh>
        <mesh position={[0, 0.05, 0]}>
          <boxGeometry args={[7.0, 0.12, 4.5]} />
          <primitive object={materials.poolWater} attach="material" />
        </mesh>
      </group>

      {/* ========================================================================= */}
      {/* 4. MANICURED BOX HEDGES & CYPRESS CLUSTERS */}
      {/* ========================================================================= */}
      {/* Low Linear Box Hedges along front boundary */}
      <mesh position={[-9.5, 0.32, 12.5]} castShadow receiveShadow>
        <boxGeometry args={[7.5, 0.55, 0.8]} />
        <primitive object={materials.hedgeGreen} attach="material" />
      </mesh>

      {/* Slender Mediterranean Cypress Trees (Columnar Architectural Form) */}
      {[
        [-15.0, 16.0, 5.5],
        [-13.5, 18.0, 4.8],
        [-16.5, 14.0, 6.0],
        [17.5, 12.0, 5.2],
        [19.0, 15.0, 4.5],
      ].map(([x, z, h], idx) => (
        <group key={`cypress-${idx}`} position={[x, 0, z]}>
          {/* Slender trunk */}
          <mesh position={[0, h * 0.25, 0]} castShadow>
            <cylinderGeometry args={[0.08, 0.14, h * 0.5, 8]} />
            <primitive object={materials.treeTrunk} attach="material" />
          </mesh>
          {/* Dense conical foliage */}
          <mesh position={[0, h * 0.6, 0]} castShadow>
            <coneGeometry args={[0.75, h * 0.75, 12]} />
            <primitive object={materials.cypressGreen} attach="material" />
          </mesh>
        </group>
      ))}

      {/* ========================================================================= */}
      {/* 5. ESTATE BOUNDARY WALLS & ENTRANCE GATE */}
      {/* ========================================================================= */}
      {/* Front Left Boundary Wall */}
      <mesh position={[-14.0, 0.65, 26.0]} receiveShadow castShadow>
        <boxGeometry args={[18.0, 1.3, 0.35]} />
        <primitive object={materials.boundaryWallStone} attach="material" />
      </mesh>
      <mesh position={[-14.0, 1.35, 26.0]} receiveShadow>
        <boxGeometry args={[18.2, 0.08, 0.42]} />
        <primitive object={materials.darkWallTrim} attach="material" />
      </mesh>

      {/* Entrance Pillars */}
      <mesh position={[-4.5, 1.1, 26.0]} castShadow receiveShadow>
        <boxGeometry args={[0.9, 2.2, 0.7]} />
        <primitive object={materials.boundaryWallStone} attach="material" />
      </mesh>
      <mesh position={[6.5, 1.1, 26.0]} castShadow receiveShadow>
        <boxGeometry args={[0.9, 2.2, 0.7]} />
        <primitive object={materials.boundaryWallStone} attach="material" />
      </mesh>

      {/* Stepping stone walkway leading to main entry */}
      <group position={[2.5, 0.04, 7.5]}>
        {[
          [0, 0],
          [-1.2, -0.6],
          [-2.4, -1.3],
          [-3.6, -2.1],
        ].map(([px, pz], idx) => (
          <mesh key={`paver-${idx}`} position={[px, 0, pz]} receiveShadow>
            <boxGeometry args={[1.3, 0.06, 1.0]} />
            <primitive object={materials.pathwayStone} attach="material" />
          </mesh>
        ))}
      </group>
    </group>
  );
}
