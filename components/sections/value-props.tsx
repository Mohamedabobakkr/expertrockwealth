'use client';

import { motion } from 'framer-motion';
import { Shield, Users, Trophy } from 'lucide-react';

export function ValueProps() {
  const valueProps = [
    {
      icon: Shield,
      title: 'Licensed & Regulated',
      description: 'Fully licensed and regulated business formation services',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Professional consultants with UAE business expertise',
    },
    {
      icon: Trophy,
      title: 'Proven Success',
      description: '98% success rate with 1000+ satisfied clients',
    },
  ];

  return (
    <section
      id="value-props"
      className="relative overflow-hidden bg-surface py-16 md:py-20 lg:py-24"
    >
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.04]">
        <img
          src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070&auto=format&fit=crop"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12">
        <div className="mb-12 text-center md:mb-14 lg:mb-16">
          <h2 className="gradient-text mb-4 font-serif text-4xl font-bold">
            Why Choose Expert Rock Wealth
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Comprehensive solutions for your UAE business journey
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {valueProps.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-lg border border-border bg-background p-6 text-center transition-colors hover:border-primary/50"
            >
              <div className="elegant-icon-wrapper mx-auto mb-6">
                <prop.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-4 text-xl font-semibold">{prop.title}</h3>
              <p className="text-muted-foreground">{prop.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
