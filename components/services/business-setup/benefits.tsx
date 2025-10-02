'use client';

import { motion } from 'framer-motion';
import {
  Globe,
  TrendingUp,
  Shield,
  Zap,
  Users,
  Award,
  Clock,
  HeadphonesIcon,
} from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: Globe,
      title: '100% Foreign Ownership',
      description:
        'Full control of your business without local sponsor requirements across all structures.',
    },
    {
      icon: TrendingUp,
      title: 'Tax Advantages',
      description:
        '0% corporate and personal income tax in Freezones. Mainland businesses benefit from favorable tax treaties.',
    },
    {
      icon: Shield,
      title: 'Asset Protection',
      description:
        'Secure your wealth with strong UAE legal framework and banking confidentiality.',
    },
    {
      icon: Zap,
      title: 'Fast Setup Process',
      description:
        'Company formation in 5-10 days for Freezone, 10-15 days for Mainland with our expedited service.',
    },
    {
      icon: Users,
      title: 'Visa Sponsorship',
      description:
        'Sponsor unlimited employees and family members. Golden Visa options for long-term residency.',
    },
    {
      icon: Award,
      title: 'Premium Banking',
      description:
        'Access to top UAE banks and international banking facilities. Multi-currency accounts available.',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description:
        'Dedicated account manager and round-the-clock support for all your business needs.',
    },
    {
      icon: HeadphonesIcon,
      title: 'Multilingual Service',
      description:
        'Expert consultants fluent in English, Arabic, French, Chinese, and more.',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24 lg:py-32">
      {/* Subtle Background */}
      <div className="absolute inset-0 z-0 opacity-[0.04]">
        <img
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12">
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg ultra-premium-text mb-6">
              Why Choose Expert Rock Wealth
            </h2>
            <p className="body-lg mx-auto max-w-3xl text-muted-foreground">
              Unmatched expertise and comprehensive support that sets us apart
              from competitors.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
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
      </div>
    </section>
  );
}
