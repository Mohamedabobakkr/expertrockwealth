import { Metadata } from 'next';
import { CaseStudiesHero } from '@/components/sections/case-studies/case-studies-hero';
import { CaseStudiesGrid } from '@/components/sections/case-studies/case-studies-grid';
import { CaseStudiesStats } from '@/components/sections/case-studies/case-studies-stats';

export const metadata: Metadata = {
  title: 'Case Studies - Expert Rock Wealth Success Stories',
  description: 'Discover how Expert Rock Wealth has helped 1000+ clients successfully establish their businesses in the UAE. Real stories, real results.',
};

export default function CaseStudiesPage() {
  return (
    <>
      <CaseStudiesHero />
      <CaseStudiesStats />
      <CaseStudiesGrid />
    </>
  );
}