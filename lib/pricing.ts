import type { CalculatorData } from './validations';

export interface PricingConfig {
  basePrice: number;
  coefficients: {
    jurisdiction: Record<string, number>;
    companyType: Record<string, number>;
    shareholders: number;
    residencyVisas: number;
    bankingComplexity: Record<string, number>;
    taxPackage: number;
    wealthTier: Record<string, number>;
    bizDevHours: number;
    propertySearch: Record<string, number>;
    turnKeyBundle: number;
    rushMultiplier: number;
    weekendMultiplier: number;
  };
}

export const defaultPricingConfig: PricingConfig = {
  basePrice: 5000,
  coefficients: {
    jurisdiction: {
      'abu-dhabi-mainland': 1.2,
      'dubai-mainland': 1.0,
      'sharjah-mainland': 0.8,
      'adgm': 1.8,
      'difc': 2.0,
      'dubai-south': 1.1,
      'ajman-freezone': 0.9,
      'rak-freezone': 0.85,
      'fujairah-freezone': 0.8,
    },
    companyType: {
      llc: 1.0,
      'sole-establishment': 0.6,
      holding: 1.5,
      professional: 1.3,
      'branch-office': 1.4,
    },
    shareholders: 500,
    residencyVisas: 3500,
    bankingComplexity: {
      basic: 2500,
      standard: 4500,
      complex: 8500,
    },
    taxPackage: 2500,
    wealthTier: {
      none: 0,
      basic: 5000,
      premium: 15000,
      private: 35000,
    },
    bizDevHours: 150,
    propertySearch: {
      residential: 3500,
      commercial: 7500,
    },
    turnKeyBundle: 8500,
    rushMultiplier: 1.5,
    weekendMultiplier: 1.3,
  },
};

export function calculatePrice(
  data: CalculatorData,
  config: PricingConfig = defaultPricingConfig
): {
  basePrice: number;
  breakdown: Record<string, number>;
  subtotal: number;
  multipliers: Record<string, number>;
  total: number;
} {
  const { basePrice, coefficients } = config;

  const breakdown: Record<string, number> = {
    base: basePrice,
    jurisdiction: 0,
    companyType: 0,
    shareholders: 0,
    residencyVisas: 0,
    banking: 0,
    taxPackage: 0,
    wealthManagement: 0,
    businessDevelopment: 0,
    propertySearch: 0,
    turnKeyBundle: 0,
  };

  breakdown.jurisdiction =
    basePrice * (coefficients.jurisdiction[data.jurisdiction] || 1.0) -
    basePrice;

  breakdown.companyType =
    basePrice * (coefficients.companyType[data.companyType] || 1.0) - basePrice;

  breakdown.shareholders = data.shareholders * coefficients.shareholders;

  breakdown.residencyVisas = data.residencyVisas * coefficients.residencyVisas;

  breakdown.banking = coefficients.bankingComplexity[data.bankingComplexity];

  breakdown.taxPackage = data.taxPackage ? coefficients.taxPackage : 0;

  breakdown.wealthManagement = coefficients.wealthTier[data.wealthTier];

  breakdown.businessDevelopment = data.bizDevHours * coefficients.bizDevHours;

  if (data.propertySearch && data.propertyType) {
    breakdown.propertySearch = coefficients.propertySearch[data.propertyType];
  }

  breakdown.turnKeyBundle = data.turnKeyBundle
    ? coefficients.turnKeyBundle
    : 0;

  const subtotal = Object.values(breakdown).reduce((sum, value) => sum + value, 0);

  const multipliers: Record<string, number> = {};
  let total = subtotal;

  if (data.rushService) {
    multipliers.rush = coefficients.rushMultiplier;
    total *= coefficients.rushMultiplier;
  }

  if (data.weekendWork) {
    multipliers.weekend = coefficients.weekendMultiplier;
    total *= coefficients.weekendMultiplier;
  }

  return {
    basePrice,
    breakdown,
    subtotal,
    multipliers,
    total: Math.round(total),
  };
}

export function getPriceRange(
  data: Partial<CalculatorData>,
  config: PricingConfig = defaultPricingConfig
): { min: number; max: number } {
  const minData: CalculatorData = {
    jurisdiction: 'rak-freezone',
    companyType: 'sole-establishment',
    shareholders: 1,
    residencyVisas: 0,
    bankingComplexity: 'basic',
    taxPackage: false,
    wealthTier: 'none',
    bizDevHours: 0,
    propertySearch: false,
    turnKeyBundle: false,
    rushService: false,
    weekendWork: false,
    ...data,
  };

  const maxData: CalculatorData = {
    jurisdiction: 'difc',
    companyType: 'holding',
    shareholders: 5,
    residencyVisas: 3,
    bankingComplexity: 'complex',
    taxPackage: true,
    wealthTier: 'private',
    bizDevHours: 50,
    propertySearch: true,
    propertyType: 'commercial',
    turnKeyBundle: true,
    rushService: true,
    weekendWork: true,
    ...data,
  };

  const minPrice = calculatePrice(minData, config);
  const maxPrice = calculatePrice(maxData, config);

  return {
    min: minPrice.total,
    max: maxPrice.total,
  };
}

export function getServiceDescription(service: keyof PricingConfig['coefficients']): string {
  const descriptions = {
    jurisdiction: 'Company formation jurisdiction and authority',
    companyType: 'Type of business entity',
    shareholders: 'Additional shareholders beyond the first',
    residencyVisas: 'UAE residency visas and Emirates ID',
    bankingComplexity: 'Corporate banking setup complexity',
    taxPackage: 'Tax registration and compliance setup',
    wealthTier: 'Wealth management and advisory services',
    bizDevHours: 'Business development consulting hours',
    propertySearch: 'Property search and advisory services',
    turnKeyBundle: 'Complete turn-key business setup',
    rushMultiplier: 'Express service delivery',
    weekendMultiplier: 'Weekend and holiday work',
  };

  return descriptions[service] || service;
}