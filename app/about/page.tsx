import { Metadata } from 'next';
import { AboutHero } from '@/components/sections/about/about-hero';
import { AboutStory } from '@/components/sections/about/about-story';
import { AboutValues } from '@/components/sections/about/about-values';
import { AboutStats } from '@/components/sections/about/about-stats';
import { TeamSection } from '@/components/sections/about/team-section';
import { AboutCertifications } from '@/components/sections/about/about-certifications';

export const metadata: Metadata = {
  title: 'About Expert Rock Wealth - UAE Business Formation Leaders',
  description: 'Learn about Expert Rock Wealth, the leading UAE business formation consultancy. Our story, values, team, and commitment to your success.',
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutStats />
      <TeamSection />
      <AboutCertifications />
    </>
  );
}