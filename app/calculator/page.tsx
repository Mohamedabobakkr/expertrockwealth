import { Metadata } from 'next';
import { CalculatorForm } from '@/components/sections/calculator/calculator-form';
import { CalculatorHero } from '@/components/sections/calculator/calculator-hero';
import { PricingBreakdown } from '@/components/sections/calculator/pricing-breakdown';

export const metadata: Metadata = {
  title: 'UAE Business Setup Cost Calculator - Expert Rock Wealth',
  description: 'Calculate the exact costs for your UAE business formation, visa processing, and banking setup. Get instant pricing with our interactive calculator.',
};

export default function CalculatorPage() {
  return (
    <>
      <CalculatorHero />
      <CalculatorForm />
      <PricingBreakdown />
    </>
  );
}