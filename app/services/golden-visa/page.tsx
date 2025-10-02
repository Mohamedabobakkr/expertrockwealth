import { Metadata } from 'next';
import { GoldenVisaHero } from '@/components/services/golden-visa/hero';
import { VisaTypes } from '@/components/services/golden-visa/visa-types';
import { Benefits } from '@/components/services/golden-visa/benefits';
import { EligibilityCriteria } from '@/components/services/golden-visa/eligibility-criteria';
import { ProcessTimeline } from '@/components/services/golden-visa/process-timeline';
import { Packages } from '@/components/services/golden-visa/packages';
import { WhyChooseUs } from '@/components/services/golden-visa/why-choose-us';
import { CTABand } from '@/components/sections/cta-band';
import { ImageDivider } from '@/components/sections/image-divider';

export const metadata: Metadata = {
  title: 'UAE Golden Visa Services | Expert Rock Wealth',
  description:
    'Secure your UAE Golden Visa with Expert Rock Wealth. 5-10 year residency for investors, entrepreneurs, and skilled professionals. Premium application support and guaranteed approval.',
};

export default function GoldenVisaPage() {
  return (
    <>
      <GoldenVisaHero />
      <VisaTypes />
      <ImageDivider
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
        height="h-[120px]"
      />
      <Benefits />
      <EligibilityCriteria />
      <ImageDivider
        image="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop"
        height="h-[120px]"
      />
      <ProcessTimeline />
      <Packages />
      <WhyChooseUs />
      <CTABand />
    </>
  );
}
