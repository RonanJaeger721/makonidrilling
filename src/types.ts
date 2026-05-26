export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  location: string;
  type: 'residential' | 'agricultural' | 'commercial';
  depth: number;
  yield: string; // e.g., "3200 Litres/hour"
  powerSource: string; // e.g., "Solar Powered"
  description: string;
  date: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  text: string;
  rating: number;
  verified: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'drilling' | 'pricing' | 'maintenance';
}

// Pricing Estimate Models
export interface EstimateState {
  location: string;
  soilType: string;
  targetDepth: number; // 40, 60, 80, 100 meters
  casingType: 'class9' | 'class12' | 'steel';
  powerSetup: 'solar' | 'electric' | 'hand' | 'none';
  tankSize: 'none' | '2500' | '5000';
  tankStand: 'none' | '3m' | '4.5m' | '6m';
  filtration: 'none' | 'basic' | 'complete';
}

export interface PricingFactor {
  baseDrillingCost: number; // standard 40m
  costPerMeterExtra: number;
  casingPricing: Record<string, number>;
  pumpPricing: Record<string, number>;
  tankPricing: Record<string, number>;
  standPricing: Record<string, number>;
  filtrationPricing: Record<string, number>;
}
