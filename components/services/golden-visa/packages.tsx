'use client';

import { motion } from 'framer-motion';
import { Check, Crown, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Packages() {
  const packages = [
    {
      name: 'Essential',
      icon: Zap,
      description: 'Perfect for straightforward applications',
      popular: false,
      features: [
        'Eligibility assessment & consultation',
        'Document preparation assistance',
        'Application form completion',
        'Government submission',
        'Basic processing support',
        'Email updates on application status',
        'Emirates ID application support',
        '30-day processing timeline',
        'One applicant only',
      ],
    },
    {
      name: 'Premium',
      icon: Sparkles,
      description: 'Comprehensive service with priority support',
      popular: true,
      features: [
        'Everything in Essential, plus:',
        'Priority processing (20-day timeline)',
        'Dedicated account manager',
        'Document attestation & translation',
        'Medical examination coordination',
        'WhatsApp & phone support',
        'Family visa consultation',
        'Bank account opening assistance',
        '2 family members included',
        'One-year PRO services',
        'Post-approval settlement support',
      ],
    },
    {
      name: 'VIP Concierge',
      icon: Crown,
      description: 'White-glove service with guaranteed approval',
      popular: false,
      features: [
        'Everything in Premium, plus:',
        'Fast-track processing (10-14 days)',
        'VIP government liaison',
        'Personal concierge service',
        'Complete documentation handling',
        'Home visit for biometrics',
        'Premium banking introductions',
        'Property search assistance (if applicable)',
        'Up to 4 family members included',
        '3-year PRO services included',
        'Dedicated WhatsApp hotline 24/7',
        'Airport VIP meet & assist',
        'Renewal management & reminders',
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24 lg:py-32">
      {/* Subtle Background */}
      <div className="absolute inset-0 z-0 opacity-[0.02]">
        <img
          src="https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?q=80&w=2187&auto=format&fit=crop"
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
              Golden Visa Service Packages
            </h2>
            <p className="body-lg mx-auto max-w-3xl text-muted-foreground">
              Transparent pricing with no hidden fees. All packages include
              government fee guidance and comprehensive support. Custom packages
              available for corporate clients.
            </p>
          </motion.div>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className={`pinterest-card relative p-6 md:p-10 ${
                pkg.popular ? 'border-2 border-heritage-gold shadow-large' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-heritage-gold px-5 py-2">
                  <span className="caption font-semibold text-white">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8 text-center">
                <div className="elegant-icon-wrapper mx-auto mb-6">
                  <pkg.icon className="h-6 w-6 text-primary" />
                </div>

                <h3 className="heading-sm mb-3 text-foreground">{pkg.name}</h3>
                <p className="body-sm text-muted-foreground">
                  {pkg.description}
                </p>
              </div>

              <ul className="mb-10 space-y-4">
                {pkg.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className={`flex items-start gap-3 ${
                      feature.endsWith(':')
                        ? 'mt-3 font-semibold text-foreground'
                        : ''
                    }`}
                  >
                    {!feature.endsWith(':') && (
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-heritage-gold" />
                    )}
                    <span
                      className={`body-sm ${feature.endsWith(':') ? 'text-foreground' : 'text-muted-foreground'}`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                className={`w-full ${
                  pkg.popular
                    ? 'elegant-button text-primary-foreground'
                    : 'pinterest-card border-border/60 hover:border-heritage-gold/40'
                }`}
                variant={pkg.popular ? 'default' : 'outline'}
                asChild
              >
                <a href="/contact">Select Package</a>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-4xl text-center"
        >
          <p className="body-md mb-4 text-muted-foreground">
            Need a custom solution or have specific requirements? We create
            tailored packages for unique situations.
          </p>
          <Button
            variant="link"
            className="body-md text-heritage-gold hover:text-heritage-bronze"
            asChild
          >
            <a href="/contact">Request Consultation →</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
