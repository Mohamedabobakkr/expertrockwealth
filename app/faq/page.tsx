import { Metadata } from 'next';
import { FAQHero } from '@/components/faq/faq-hero';
import { FAQSections } from '@/components/faq/faq-sections';
import { CTABand } from '@/components/sections/cta-band';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Expert Rock Wealth',
  description:
    'Get answers to common questions about UAE business setup, Golden Visa, residency, and our services. Expert guidance for your UAE journey.',
};

export default function FAQPage() {
  return (
    <>
      <FAQHero />
      <FAQSections />
      <CTABand />
    </>
  );
}
