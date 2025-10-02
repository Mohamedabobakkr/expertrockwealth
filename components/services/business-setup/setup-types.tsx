'use client';

import { motion } from 'framer-motion';
import { Building, Landmark, Globe2 } from 'lucide-react';

export function SetupTypes() {
  const types = [
    {
      icon: Building,
      title: 'Dubai Mainland',
      description: 'Operate anywhere in the UAE with full flexibility',
      features: [
        '100% Foreign Ownership',
        'Trade with UAE market directly',
        'Unlimited business activities',
        'Flexible office requirements',
        'Access to government tenders',
      ],
      ideal: 'Best for: Trading, retail, services requiring UAE market access',
    },
    {
      icon: Landmark,
      title: 'Freezone Company',
      description: 'Tax-free operations with 100% repatriation',
      features: [
        '0% Corporate & Personal Tax',
        '100% Foreign Ownership',
        'Full profit repatriation',
        'No currency restrictions',
        'Streamlined setup process',
      ],
      ideal: 'Best for: International trade, consulting, IT services',
    },
    {
      icon: Globe2,
      title: 'Offshore Company',
      description: 'Asset protection and international business',
      features: [
        'Maximum privacy protection',
        'Ideal for holding companies',
        'International operations',
        'Simplified compliance',
        'Cost-effective solution',
      ],
      ideal: 'Best for: Holding assets, international operations',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24 lg:py-32">
      {/* Subtle Background */}
      <div className="absolute inset-0 z-0 opacity-[0.04]">
        <img
          src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070&auto=format&fit=crop"
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
              Choose Your Business Structure
            </h2>
            <p className="body-lg mx-auto max-w-3xl text-muted-foreground">
              Each structure offers unique advantages. Our experts will help you
              choose the perfect fit for your business goals.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          {types.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="pinterest-card magnetic-hover group cursor-pointer p-6 md:p-10"
            >
              <div className="elegant-icon-wrapper mb-6">
                <type.icon className="h-6 w-6 text-primary" />
              </div>

              <h3 className="heading-sm duration-400 mb-4 text-foreground transition-colors group-hover:text-heritage-gold">
                {type.title}
              </h3>

              <p className="body-md mb-6 text-muted-foreground">
                {type.description}
              </p>

              <ul className="mb-6 space-y-3">
                {type.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="body-sm flex items-start gap-2 text-muted-foreground"
                  >
                    <span className="mt-1 text-heritage-gold">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-border/50 pt-4">
                <p className="body-sm font-medium text-foreground/80">
                  {type.ideal}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
