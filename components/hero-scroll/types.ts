export interface HeroScrollState {
  progress: number; // 0.0 to 1.0
  activeStage: HeroStage;
  stageProgress: number; // 0.0 to 1.0 within current stage
}

export type HeroStage =
  | 'exterior_plain'
  | 'exterior_transform'
  | 'exterior_complete'
  | 'approach_entrance'
  | 'foyer_entry'
  | 'living_hall'
  | 'kitchen'
  | 'bedroom'
  | 'bathroom'
  | 'final_hero';

export interface StageConfig {
  id: HeroStage;
  headline: string;
  subheadline: string;
  startProgress: number;
  endProgress: number;
}

export const HERO_STAGES: StageConfig[] = [
  {
    id: 'exterior_plain',
    headline: 'Form begins with clarity.',
    subheadline: 'Architecture · Interior Craft · Turnkey Delivery',
    startProgress: 0.0,
    endProgress: 0.08,
  },
  {
    id: 'exterior_transform',
    headline: 'Crafted from the outside in.',
    subheadline: 'Travertine stone cladding, teak louvers, and tailored landscaping.',
    startProgress: 0.08,
    endProgress: 0.17,
  },
  {
    id: 'exterior_complete',
    headline: 'The architectural facade.',
    subheadline: 'Warm golden light, cantilevered canopy, and layered greenery.',
    startProgress: 0.17,
    endProgress: 0.25,
  },
  {
    id: 'approach_entrance',
    headline: 'Entering the sanctuary.',
    subheadline: 'A grand pivot teak door opening into quiet luxury.',
    startProgress: 0.25,
    endProgress: 0.35,
  },
  {
    id: 'foyer_entry',
    headline: 'Double-height arrival.',
    subheadline: 'Italian marble foyer revealing the inner living space.',
    startProgress: 0.35,
    endProgress: 0.44,
  },
  {
    id: 'living_hall',
    headline: 'The living hall.',
    subheadline: 'Bookmatched Calacatta marble wall, Italian bouclé seating, and oak herringbone floors.',
    startProgress: 0.44,
    endProgress: 0.56,
  },
  {
    id: 'kitchen',
    headline: 'Modular culinary precision.',
    subheadline: 'Calacatta quartz waterfall island, charcoal cabinetry, and brass illumination.',
    startProgress: 0.56,
    endProgress: 0.68,
  },
  {
    id: 'bedroom',
    headline: 'The private master retreat.',
    subheadline: 'Acoustic walnut slats, low platform bed, and bronze illuminated wardrobe.',
    startProgress: 0.68,
    endProgress: 0.80,
  },
  {
    id: 'bathroom',
    headline: 'The ensuite sanctuary.',
    subheadline: 'Freestanding stone soaking tub, tropical garden views, and fluted marble shower.',
    startProgress: 0.80,
    endProgress: 0.92,
  },
  {
    id: 'final_hero',
    headline: 'From vision to reality.',
    subheadline: 'Architecture, interior craft, and turnkey delivery by Studio Nirmiti.',
    startProgress: 0.92,
    endProgress: 1.0,
  },
];

export function mapRange(
  val: number,
  inMin: number,
  inMax: number,
  outMin = 0,
  outMax = 1,
  clamp = true
): number {
  if (inMax === inMin) return outMin;
  const result = outMin + ((val - inMin) / (inMax - inMin)) * (outMax - outMin);
  if (!clamp) return result;
  const min = Math.min(outMin, outMax);
  const max = Math.max(outMin, outMax);
  return Math.min(Math.max(result, min), max);
}
