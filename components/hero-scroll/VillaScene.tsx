'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { SoftShadows } from '@react-three/drei';
import * as THREE from 'three';

import CameraRig from './CameraRig';
import LightingRig from './LightingRig';
import EstateEnvironment from './EstateEnvironment';
import VillaArchitecture from './VillaArchitecture';
import ExteriorStage from './ExteriorStage';
import LivingStage from './LivingStage';
import KitchenStage from './KitchenStage';
import BedroomStage from './BedroomStage';

interface VillaSceneProps {
  progress: number;
}

export default function VillaScene({ progress }: VillaSceneProps) {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      <Canvas
        shadows
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.1,
        }}
        camera={{ position: [18.0, 14.0, 38.0], fov: 38, near: 0.1, far: 120 }}
      >
        {/* Realistic Architectural Atmosphere & Sky Tone */}
        <color attach="background" args={['#8eaec4']} />
        <fog attach="fog" args={['#8eaec4', 45, 95]} />

        <Suspense fallback={null}>
          <SoftShadows size={20} samples={10} focus={0.5} />

          {/* Unified Architectural Camera Spline */}
          <CameraRig progress={progress} />

          {/* Dynamic Architectural Lighting */}
          <LightingRig progress={progress} />

          {/* Estate Grounds, Paved Driveway, Parked Executive Car, Boundary Walls, Trees */}
          <EstateEnvironment progress={progress} />

          {/* Continuous Architectural Shell across all rooms & exterior */}
          <VillaArchitecture progress={progress} />

          {/* 1. Exterior Finishes (0.10 - 0.25) */}
          <ExteriorStage progress={progress} />

          {/* 2. Living Room Construction (0.37 - 0.52) */}
          <LivingStage progress={progress} />

          {/* 3. Modular Kitchen Construction (0.58 - 0.73) */}
          <KitchenStage progress={progress} />

          {/* 4. Master Bedroom Construction (0.79 - 0.94) */}
          <BedroomStage progress={progress} />
        </Suspense>
      </Canvas>
    </div>
  );
}
