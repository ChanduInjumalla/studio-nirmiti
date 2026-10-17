'use client';

import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows } from '@react-three/drei';
import Lighting from './Lighting';
import Camera from './Camera';

interface HeroSceneProps {
  lightingMood?: 'daylight' | 'golden' | 'evening';
}

/**
 * Lightweight hero 3D scene — architectural composition.
 * Dynamically loaded. Does NOT contain essential content.
 * Presentation-only behind the semantic HTML hero.
 */
export default function HeroScene({ lightingMood = 'golden' }: HeroSceneProps) {
  return (
    <div
      className="canvas-wrapper"
      style={{ width: '100%', height: '100%', minHeight: '380px' }}
    >
      <Canvas
        shadows
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <Suspense fallback={null}>
          <Camera
            position={[0, 0.8, 5]}
            fov={44}
            enableParallax={true}
          />

          <Lighting mood={lightingMood} />

          {/* Abstract architectural planes — visual depth composition */}
          <ArchitecturalComposition />

          <ContactShadows
            position={[0, -1.5, 0]}
            opacity={0.5}
            scale={10}
            blur={2.4}
            far={4.5}
          />

          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}

/**
 * Simple abstract architectural planes — NOT a detailed model.
 * Creates depth and materiality without competing with project imagery.
 */
function ArchitecturalComposition() {
  return (
    <group>
      {/* Back wall */}
      <mesh position={[0, 0.5, -3]} receiveShadow>
        <planeGeometry args={[8, 5]} />
        <meshStandardMaterial color="#2a302d" roughness={0.95} metalness={0.05} />
      </mesh>

      {/* Floor */}
      <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[8, 6]} />
        <meshStandardMaterial color="#c5bfb3" roughness={0.85} metalness={0.02} />
      </mesh>

      {/* Architectural frame — left vertical */}
      <mesh position={[-2.5, 0.5, -1]} castShadow>
        <boxGeometry args={[0.08, 4, 0.08]} />
        <meshStandardMaterial color="#b08d57" roughness={0.4} metalness={0.6} />
      </mesh>

      {/* Architectural frame — right vertical */}
      <mesh position={[2.5, 0.5, -1]} castShadow>
        <boxGeometry args={[0.08, 4, 0.08]} />
        <meshStandardMaterial color="#b08d57" roughness={0.4} metalness={0.6} />
      </mesh>

      {/* Architectural frame — horizontal */}
      <mesh position={[0, 2.5, -1]} castShadow>
        <boxGeometry args={[5.08, 0.08, 0.08]} />
        <meshStandardMaterial color="#b08d57" roughness={0.4} metalness={0.6} />
      </mesh>

      {/* Material sample — stone block */}
      <mesh position={[-1.2, -0.9, 1.2]} castShadow>
        <boxGeometry args={[0.8, 0.6, 0.6]} />
        <meshStandardMaterial color="#a09889" roughness={0.9} metalness={0.02} />
      </mesh>

      {/* Material sample — wood block */}
      <mesh position={[1.0, -1.0, 1.5]} castShadow>
        <boxGeometry args={[0.6, 0.5, 0.5]} />
        <meshStandardMaterial color="#8B6914" roughness={0.75} metalness={0.05} />
      </mesh>
    </group>
  );
}
