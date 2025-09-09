'use client';

import { motion } from 'framer-motion';
import { Shield, Users, Trophy } from 'lucide-react';

export function ValueProps() {
  const valueProps = [
    {
      icon: Shield,
      title: "Licensed & Regulated",
      description: "Fully licensed and regulated business formation services"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Professional consultants with UAE business expertise"
    },
    {
      icon: Trophy,
      title: "Proven Success",
      description: "98% success rate with 1000+ satisfied clients"
    }
  ];

  return (
    <section id="value-props" className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4 gradient-text">
            Why Choose Expert Rock Wealth
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for your UAE business journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="text-center p-6 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <prop.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{prop.title}</h3>
              <p className="text-muted-foreground">{prop.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}