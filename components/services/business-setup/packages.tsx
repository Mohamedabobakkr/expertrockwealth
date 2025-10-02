'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Packages() {
  const packages = [
    {
      name: 'Freezone Starter',
      description: 'Perfect for startups and small businesses',
      popular: false,
      features: [
        'Freezone license (1 activity)',
        '1 visa allocation',
        'Virtual office address',
        'Company registration',
        'Initial approval',
        'Government fee assistance',
        'Basic compliance support',
        '1 year validity',
      ],
    },
    {
      name: 'Mainland Professional',
      description: 'Best for UAE market-focused businesses',
      popular: true,
      features: [
        'Mainland license (up to 5 activities)',
        '2-3 visa allocations',
        'Business center office',
        'Trade name registration',
        'Chamber of Commerce membership',
        'Sponsor arrangements',
        'Banking introduction',
        'Full compliance package',
        'Priority processing',
      ],
    },
    {
      name: 'Premium Package',
      description: 'Complete business setup with premium support',
      popular: false,
      features: [
        'Choice of Mainland or Freezone',
        'Up to 6 visa allocations',
        'Physical office setup assistance',
        'Multiple business activities',
        'Corporate bank account opening',
        'PRO services for 1 year',
        'Accounting setup',
        'Golden Visa consultation',
        'Dedicated account manager',
        '24/7 priority support',
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-surface py-16 md:py-24 lg:py-32">
      {/* Subtle Background */}
      <div className="absolute inset-0 z-0 opacity-[0.04]">
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
              Transparent Pricing Packages
            </h2>
            <p className="body-lg mx-auto max-w-3xl text-muted-foreground">
              Choose the package that fits your business needs. All prices
              exclude government fees. Custom packages available.
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
              className={`pinterest-card relative p-6 md:p-10 ${pkg.popular ? 'border-2 border-heritage-gold' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-heritage-gold px-4 py-1.5">
                  <span className="caption font-semibold text-white">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8 text-center">
                <h3 className="heading-sm mb-3 text-foreground">{pkg.name}</h3>
                <p className="body-sm text-muted-foreground">
                  {pkg.description}
                </p>
              </div>

              <ul className="mb-8 space-y-4">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-heritage-gold" />
                    <span className="body-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                className={`w-full ${pkg.popular ? 'elegant-button text-primary-foreground' : 'pinterest-card border-border/60 hover:border-heritage-gold/40'}`}
                variant={pkg.popular ? 'default' : 'outline'}
                asChild
              >
                <a href="/contact">Get Started</a>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="body-md mb-4 text-muted-foreground">
            Need a custom solution? Our team can create a tailored package for
            your specific requirements.
          </p>
          <Button
            variant="link"
            className="text-heritage-gold hover:text-heritage-bronze"
            asChild
          >
            <a href="/contact">Request Consultation →</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
