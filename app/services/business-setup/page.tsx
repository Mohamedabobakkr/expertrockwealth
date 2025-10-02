import { Metadata } from 'next';
import { BusinessSetupHero } from '@/components/services/business-setup/hero';
import { SetupTypes } from '@/components/services/business-setup/setup-types';
import { ProcessSteps } from '@/components/services/business-setup/process-steps';
import { Benefits } from '@/components/services/business-setup/benefits';
import { Packages } from '@/components/services/business-setup/packages';
import { CTABand } from '@/components/sections/cta-band';
import { ImageDivider } from '@/components/sections/image-divider';

export const metadata: Metadata = {
  title: 'Business Setup in UAE | Expert Rock Wealth',
  description:
    'Professional UAE business formation services. Mainland, Freezone & Offshore company setup with 100% foreign ownership. Fast approvals, expert guidance.',
};

export default function BusinessSetupPage() {
  return (
    <>
      <BusinessSetupHero />
      <SetupTypes />
      <ImageDivider
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
        height="h-[120px]"
      />
      <ProcessSteps />
      <Benefits />
      <ImageDivider
        image="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
        height="h-[120px]"
      />
      <Packages />
      <CTABand />
    </>
  );
}
