'use client';

import { useMemo } from 'react';
import * as THREE from 'three';
import { mapRange } from './types';

interface VillaArchitectureProps {
  progress: number;
}

/**
 * Coherent Single Villa Architectural Shell:
 * Connects Exterior Facade, Entrance Foyer, Living Room, Modular Kitchen, and Master Bedroom.
 * In a unified coordinate space:
 * - Facade & Front Entrance: Z = 3.2, X = 0
 * - Living Room: X = 0, Z = -1.5 (span: X [-4.5, 3.0], Z [3.0, -6.0])
 * - Kitchen Suite: X = 6.0, Z = -5.0 (span: X [3.0, 9.0], Z [-2.0, -8.0])
 * - Bedroom Suite: X = -6.5, Z = -8.5 (span: X [-4.5, -9.5], Z [-5.5, -12.0])
 */
export default function VillaArchitecture({ progress }: VillaArchitectureProps) {
  // Door pivot angle based on approach progress (0.265 to 0.315)
  const doorPivot = mapRange(progress, 0.265, 0.315, 0, -Math.PI / 2);

  // Materials
  const materials = useMemo(() => {
    return {
      exteriorPlainWall: new THREE.MeshStandardMaterial({
        color: '#e6e4dc', // Crisp, warm off-white architectural plaster
        roughness: 0.88,
        metalness: 0.04,
      }),
      darkRoofTrim: new THREE.MeshStandardMaterial({
        color: '#242725', // Anodized architectural charcoal metal
        roughness: 0.45,
        metalness: 0.6,
      }),
      groundGrass: new THREE.MeshStandardMaterial({
        color: '#344534', // Rich estate lawn
        roughness: 0.95,
        metalness: 0.02,
      }),
      livingFloorWood: new THREE.MeshStandardMaterial({
        color: '#c29d72', // Warm oak herringbone
        roughness: 0.45,
        metalness: 0.08,
      }),
      kitchenFloorTile: new THREE.MeshStandardMaterial({
        color: '#d4cfc5',
        roughness: 0.35,
        metalness: 0.1,
      }),
      bedroomFloorWood: new THREE.MeshStandardMaterial({
        color: '#b38f65',
        roughness: 0.5,
        metalness: 0.05,
      }),
      interiorWallPlaster: new THREE.MeshStandardMaterial({
        color: '#f0ece3',
        roughness: 0.9,
        metalness: 0.02,
      }),
      interiorCeilingPlaster: new THREE.MeshStandardMaterial({
        color: '#f8f6f0',
        roughness: 0.95,
        metalness: 0.01,
      }),
      glassGlazing: new THREE.MeshPhysicalMaterial({
        color: '#95b0b3',
        roughness: 0.08,
        transmission: 0.8,
        thickness: 0.06,
        transparent: true,
        opacity: 0.6,
      }),
      darkMetalFrame: new THREE.MeshStandardMaterial({
        color: '#1a1d1b',
        roughness: 0.3,
        metalness: 0.75,
      }),
      teakPivotDoor: new THREE.MeshStandardMaterial({
        color: '#704627',
        roughness: 0.42,
        metalness: 0.08,
      }),
    };
  }, []);

  return (
    <group>
      {/* ========================================================================= */}
      {/* 1. EXTENSIVE ESTATE GROUND & FOUNDATION PLINTH */}
      {/* ========================================================================= */}
      {/* Wide surrounding landscape lawn */}
      <mesh position={[0, -0.05, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[120, 120]} />
        <primitive object={materials.groundGrass} attach="material" />
      </mesh>

      {/* Villa Foundation Plinth (Elevated architectural podium) */}
      <mesh position={[0, 0.1, -2.5]} receiveShadow>
        <boxGeometry args={[25, 0.2, 22]} />
        <primitive object={materials.exteriorPlainWall} attach="material" />
      </mesh>

      {/* ========================================================================= */}
      {/* 2. EXTERIOR FACADE ARCHITECTURE (Z = 3.2) */}
      {/* ========================================================================= */}
      <group position={[0, 0, 3.2]}>
        {/* Ground Floor Left Facade Wall */}
        <mesh position={[-6.2, 2.0, 0]} receiveShadow castShadow>
          <boxGeometry args={[9.4, 4.0, 0.4]} />
          <primitive object={materials.exteriorPlainWall} attach="material" />
        </mesh>

        {/* Ground Floor Right Facade Wall */}
        <mesh position={[6.2, 2.0, 0]} receiveShadow castShadow>
          <boxGeometry args={[9.4, 4.0, 0.4]} />
          <primitive object={materials.exteriorPlainWall} attach="material" />
        </mesh>

        {/* Entrance Portal Header Beam */}
        <mesh position={[0, 3.65, 0]} receiveShadow castShadow>
          <boxGeometry args={[3.2, 0.9, 0.4]} />
          <primitive object={materials.exteriorPlainWall} attach="material" />
        </mesh>

        {/* Second Floor Cantilever Box (Long clean horizontal massing) */}
        <mesh position={[0, 5.35, -0.6]} receiveShadow castShadow>
          <boxGeometry args={[23.6, 2.7, 6.8]} />
          <primitive object={materials.exteriorPlainWall} attach="material" />
        </mesh>

        {/* Architectural Roof Overhang / Parapet Band with Deep Shadow reveal */}
        <mesh position={[0, 6.75, -0.6]} receiveShadow castShadow>
          <boxGeometry args={[24.4, 0.22, 7.2]} />
          <primitive object={materials.darkRoofTrim} attach="material" />
        </mesh>

        {/* Second Floor Recessed Balcony Glazing */}
        <group position={[0, 5.2, 2.82]}>
          <mesh castShadow receiveShadow>
            <boxGeometry args={[8.4, 1.8, 0.05]} />
            <primitive object={materials.glassGlazing} attach="material" />
          </mesh>
          <mesh position={[0, -0.9, 0]}>
            <boxGeometry args={[8.6, 0.08, 0.08]} />
            <primitive object={materials.darkMetalFrame} attach="material" />
          </mesh>
        </group>

        {/* Large Architectural Facade Window Glazing (Ground Floor Left) */}
        <group position={[-6.2, 1.8, 0.22]}>
          <mesh castShadow receiveShadow>
            <boxGeometry args={[6.0, 2.4, 0.06]} />
            <primitive object={materials.glassGlazing} attach="material" />
          </mesh>
          <mesh>
            <boxGeometry args={[6.1, 2.5, 0.08]} />
            <primitive object={materials.darkMetalFrame} attach="material" />
          </mesh>
        </group>

        {/* Large Architectural Facade Window Glazing (Ground Floor Right) */}
        <group position={[6.2, 1.8, 0.22]}>
          <mesh castShadow receiveShadow>
            <boxGeometry args={[6.0, 2.4, 0.06]} />
            <primitive object={materials.glassGlazing} attach="material" />
          </mesh>
          <mesh>
            <boxGeometry args={[6.1, 2.5, 0.08]} />
            <primitive object={materials.darkMetalFrame} attach="material" />
          </mesh>
        </group>

        {/* ========================================================================= */}
        {/* 3. ENTRANCE GRAND PIVOT DOORWAY */}
        {/* ========================================================================= */}
        <group position={[0, 0, 0]}>
          {/* Door Frame Surround */}
          <mesh position={[-1.25, 1.6, 0]}>
            <boxGeometry args={[0.1, 3.2, 0.45]} />
            <primitive object={materials.darkMetalFrame} attach="material" />
          </mesh>
          <mesh position={[1.25, 1.6, 0]}>
            <boxGeometry args={[0.1, 3.2, 0.45]} />
            <primitive object={materials.darkMetalFrame} attach="material" />
          </mesh>
          <mesh position={[0, 3.2, 0]}>
            <boxGeometry args={[2.6, 0.1, 0.45]} />
            <primitive object={materials.darkMetalFrame} attach="material" />
          </mesh>

          {/* Pivoting Teak Entrance Door */}
          <group position={[-0.95, 0, 0]} rotation={[0, doorPivot, 0]}>
            <mesh position={[1.05, 1.58, 0]} castShadow receiveShadow>
              <boxGeometry args={[2.1, 3.08, 0.08]} />
              <primitive object={materials.teakPivotDoor} attach="material" />
            </mesh>
            {/* Long Vertical Architectural Bronze Handle */}
            <mesh position={[1.95, 1.5, 0.08]} castShadow>
              <boxGeometry args={[0.04, 1.5, 0.04]} />
              <primitive object={materials.darkMetalFrame} attach="material" />
            </mesh>
          </group>
        </group>
      </group>

      {/* ========================================================================= */}
      {/* 4. INTERIOR ARCHITECTURAL SHELL & ROOM FLOORING */}
      {/* ========================================================================= */}
      {/* Living Room Finished Wood Floor (X: [-4.5, 3.0], Z: [3.2, -5.8]) */}
      <mesh position={[-0.75, 0.21, -1.3]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[7.5, 9.0]} />
        <primitive object={materials.livingFloorWood} attach="material" />
      </mesh>

      {/* Kitchen Floor Porcelain Tile (X: [3.0, 9.5], Z: [-1.0, -8.5]) */}
      <mesh position={[6.25, 0.21, -4.75]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[6.5, 7.5]} />
        <primitive object={materials.kitchenFloorTile} attach="material" />
      </mesh>

      {/* Bedroom Suite Wood Floor (X: [-4.5, -10.5], Z: [-5.0, -12.5]) */}
      <mesh position={[-7.5, 0.21, -8.75]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[6.0, 7.5]} />
        <primitive object={materials.bedroomFloorWood} attach="material" />
      </mesh>

      {/* ========================================================================= */}
      {/* 5. INTERIOR WALLS & ARCHITECTURAL DIVIDERS */}
      {/* ========================================================================= */}
      {/* Living Room Left Outer Wall */}
      <mesh position={[-4.5, 2.0, -1.3]} receiveShadow castShadow>
        <boxGeometry args={[0.3, 3.8, 9.0]} />
        <primitive object={materials.interiorWallPlaster} attach="material" />
      </mesh>

      {/* Living Room Back Media Partition Wall */}
      <mesh position={[-0.5, 2.0, -5.8]} receiveShadow castShadow>
        <boxGeometry args={[5.5, 3.8, 0.3]} />
        <primitive object={materials.interiorWallPlaster} attach="material" />
      </mesh>

      {/* Opening Portal between Living & Kitchen */}
      <mesh position={[3.0, 2.0, 1.2]} receiveShadow castShadow>
        <boxGeometry args={[0.3, 3.8, 3.8]} />
        <primitive object={materials.interiorWallPlaster} attach="material" />
      </mesh>
      <mesh position={[3.0, 3.4, -2.5]} receiveShadow castShadow>
        <boxGeometry args={[0.3, 1.0, 3.6]} />
        <primitive object={materials.interiorWallPlaster} attach="material" />
      </mesh>

      {/* Kitchen Right Exterior Wall */}
      <mesh position={[9.5, 2.0, -4.75]} receiveShadow castShadow>
        <boxGeometry args={[0.3, 3.8, 7.5]} />
        <primitive object={materials.interiorWallPlaster} attach="material" />
      </mesh>

      {/* Kitchen Rear Wall */}
      <mesh position={[6.25, 2.0, -8.5]} receiveShadow castShadow>
        <boxGeometry args={[6.5, 3.8, 0.3]} />
        <primitive object={materials.interiorWallPlaster} attach="material" />
      </mesh>

      {/* Bedroom Suite Rear Wall */}
      <mesh position={[-7.5, 2.0, -12.5]} receiveShadow castShadow>
        <boxGeometry args={[6.0, 3.8, 0.3]} />
        <primitive object={materials.interiorWallPlaster} attach="material" />
      </mesh>

      {/* Bedroom Suite Left Wall */}
      <mesh position={[-10.5, 2.0, -8.75]} receiveShadow castShadow>
        <boxGeometry args={[0.3, 3.8, 7.5]} />
        <primitive object={materials.interiorWallPlaster} attach="material" />
      </mesh>

      {/* Bedroom Suite Window Wall facing Garden */}
      <mesh position={[-8.5, 2.0, -5.0]} receiveShadow castShadow>
        <boxGeometry args={[4.0, 3.8, 0.3]} />
        <primitive object={materials.interiorWallPlaster} attach="material" />
      </mesh>

      {/* High Interior Ceiling Plaster Plane */}
      <mesh position={[0, 4.0, -4.5]} rotation={[Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[26, 20]} />
        <primitive object={materials.interiorCeilingPlaster} attach="material" />
      </mesh>
    </group>
  );
}
