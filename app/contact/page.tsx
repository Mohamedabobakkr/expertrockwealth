import { Metadata } from 'next';
import { ContactHero } from '@/components/sections/contact/contact-hero';
import { ContactForm } from '@/components/sections/contact/contact-form';
import { ContactInfo } from '@/components/sections/contact/contact-info';
import { OfficeLocations } from '@/components/sections/contact/office-locations';

export const metadata: Metadata = {
  title: 'Contact Us - Expert Rock Wealth',
  description: 'Get in touch with our UAE business formation experts. Free consultation, instant responses, and personalized guidance for your business setup.',
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="grid lg:grid-cols-2 gap-0">
        <ContactForm />
        <ContactInfo />
      </div>
      <OfficeLocations />
    </>
  );
}