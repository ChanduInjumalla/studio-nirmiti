'use client';

type Mood = 'daylight' | 'golden' | 'evening';

interface LightConfig {
  color: string;
  intensity: number;
  position: [number, number, number];
}

interface MoodConfig {
  ambient: { color: string; intensity: number };
  directional: LightConfig;
  fill: LightConfig;
  accent: LightConfig;
}

const LIGHTING_CONFIGS: Record<Mood, MoodConfig> = {
  daylight: {
    ambient: { color: '#f5f7fa', intensity: 0.8 },
    directional: { color: '#ffffff', intensity: 2.2, position: [6, 8, 5] },
    fill: { color: '#a0c4ff', intensity: 0.6, position: [-6, 3, -4] },
    accent: { color: '#ffea79', intensity: 1.0, position: [0, 4, 2] },
  },
  golden: {
    ambient: { color: '#ffeedd', intensity: 0.9 },
    directional: { color: '#ffb366', intensity: 2.6, position: [7, 7, 6] },
    fill: { color: '#e0c29f', intensity: 0.7, position: [-5, 2, -3] },
    accent: { color: '#d4af37', intensity: 1.4, position: [2, 5, 3] },
  },
  evening: {
    ambient: { color: '#1a2228', intensity: 0.6 },
    directional: { color: '#ff944d', intensity: 1.2, position: [5, 6, 4] },
    fill: { color: '#4d698e', intensity: 0.5, position: [-4, 2, -4] },
    accent: { color: '#ffae42', intensity: 2.2, position: [0, 2.5, 1.5] },
  },
};

interface LightingProps {
  mood?: Mood;
}

/**
 * Architectural lighting rig with mood presets.
 */
export default function Lighting({ mood = 'golden' }: LightingProps) {
  const config = LIGHTING_CONFIGS[mood];

  return (
    <group name="studio-lighting-rig">
      <ambientLight color={config.ambient.color} intensity={config.ambient.intensity} />
      <directionalLight
        position={config.directional.position}
        color={config.directional.color}
        intensity={config.directional.intensity}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={0.5}
        shadow-camera-far={20}
        shadow-bias={-0.0001}
      />
      <directionalLight
        position={config.fill.position}
        color={config.fill.color}
        intensity={config.fill.intensity}
      />
      <pointLight
        position={config.accent.position}
        color={config.accent.color}
        intensity={config.accent.intensity}
        distance={12}
        decay={2}
      />
    </group>
  );
}
