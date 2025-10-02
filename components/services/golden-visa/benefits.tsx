'use client';

import { motion } from 'framer-motion';
import {
  Plane,
  GraduationCap,
  Building2,
  Users,
  TrendingUp,
  Shield,
  Heart,
  Globe,
  Briefcase,
  Home,
  Banknote,
  Award,
} from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: Shield,
      title: 'Long-Term Residency',
      description:
        '5 or 10-year renewable residency without the need for a sponsor, providing stability and peace of mind for you and your family.',
    },
    {
      icon: Users,
      title: 'Family Sponsorship',
      description:
        'Sponsor your spouse, children of any age, and up to one domestic helper. Keep your family together in the UAE.',
    },
    {
      icon: GraduationCap,
      title: 'World-Class Education',
      description:
        "Access to UAE's premier international schools and universities. Long-term student visas for children throughout their studies.",
    },
    {
      icon: Heart,
      title: 'Healthcare Excellence',
      description:
        'Premium healthcare system access with world-renowned hospitals and medical facilities at your fingertips.',
    },
    {
      icon: Plane,
      title: 'Unlimited Travel',
      description:
        'Enter and exit the UAE without restrictions. No minimum stay requirements to maintain your residency status.',
    },
    {
      icon: Building2,
      title: 'Business Freedom',
      description:
        '100% business ownership across most sectors. Start, operate, and scale your business with complete autonomy.',
    },
    {
      icon: TrendingUp,
      title: 'Zero Tax Benefits',
      description:
        '0% personal income tax, capital gains tax, and inheritance tax. Maximize your wealth accumulation potential.',
    },
    {
      icon: Home,
      title: 'Property Ownership',
      description:
        "Full freehold property ownership rights in designated areas. Invest in one of the world's fastest-growing real estate markets.",
    },
    {
      icon: Globe,
      title: 'Strategic Location',
      description:
        'Live in a global business hub connecting East and West. Direct flights to over 240 destinations worldwide.',
    },
    {
      icon: Briefcase,
      title: 'Career Opportunities',
      description:
        'Access to diverse employment opportunities across all sectors without requiring employer sponsorship.',
    },
    {
      icon: Banknote,
      title: 'Banking Advantages',
      description:
        'Premium banking services, favorable mortgage rates, and access to exclusive wealth management solutions.',
    },
    {
      icon: Award,
      title: 'Lifestyle & Safety',
      description:
        'World-class infrastructure, exceptional safety rankings, and a luxurious cosmopolitan lifestyle.',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-surface py-16 md:py-24 lg:py-32">
      {/* Subtle Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <img
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12">
        <div className="mb-12 text-center md:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg ultra-premium-text mb-6">
              Exclusive Golden Visa Benefits
            </h2>
            <p className="body-lg mx-auto max-w-3xl text-muted-foreground">
              The UAE Golden Visa unlocks unparalleled opportunities for you and
              your family. Experience true freedom, security, and prosperity in
              one of the world's most dynamic nations.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              viewport={{ once: true }}
              className="pinterest-card magnetic-hover group cursor-pointer p-6 md:p-8"
            >
              <div className="elegant-icon-wrapper mb-6">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>

              <h3 className="heading-sm duration-400 mb-4 text-foreground transition-colors group-hover:text-heritage-gold">
                {benefit.title}
              </h3>

              <p className="body-sm leading-relaxed text-muted-foreground">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-4xl text-center"
        >
          <div className="pinterest-card p-10">
            <h3 className="heading-sm mb-4 text-foreground">
              Expert Rock Wealth Advantage
            </h3>
            <p className="body-md leading-relaxed text-muted-foreground">
              Our Golden Visa service goes beyond application processing. We
              provide comprehensive support including document preparation,
              government liaison, fast-track processing, family sponsorship
              assistance, and post-approval settlement services. With our 100%
              approval track record, your success is guaranteed.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
