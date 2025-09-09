import { Metadata } from 'next';
import { Hero } from '@/components/sections/services/hero';
import { ServiceGrid } from '@/components/sections/services/service-grid';
import { ServiceComparison } from '@/components/sections/services/service-comparison';
import { ProcessOverview } from '@/components/sections/services/process-overview';
import { CTASection } from '@/components/sections/services/cta-section';

export const metadata: Metadata = {
  title: 'UAE Business Services - Expert Rock Wealth',
  description: 'Comprehensive UAE business formation, residency visas, banking, and wealth management services. From company setup to banking solutions.',
};

export default function ServicesPage() {
  return (
    <>
      <Hero />
      <ServiceGrid />
      <ServiceComparison />
      <ProcessOverview />
      <CTASection />
    </>
  );
}