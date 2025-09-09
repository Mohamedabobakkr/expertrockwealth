import { Metadata } from 'next';

import { Hero } from '@/components/sections/hero';
import { ValueProps } from '@/components/sections/value-props';
import { Metrics } from '@/components/sections/metrics';
import { FeaturedServices } from '@/components/sections/featured-services';
import { CalculatorTeaser } from '@/components/sections/calculator-teaser';
import { CaseStudiesCarousel } from '@/components/sections/case-studies-carousel';
import { Testimonials } from '@/components/sections/testimonials';
import { FAQ } from '@/components/sections/faq';
import { CTABand } from '@/components/sections/cta-band';

export const metadata: Metadata = {
  title: 'Expert Rock Wealth - UAE Business Formation & Residency Services',
  description: 'Professional UAE company formation, residency visas, banking, and wealth management services. Trusted by 1000+ clients. Get started today.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProps />
      <Metrics />
      <FeaturedServices />
      <CalculatorTeaser />
      <CaseStudiesCarousel />
      <Testimonials />
      <FAQ />
      <CTABand />
    </>
  );
}