'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, Clock } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '1,000+',
    label: 'Clients Served',
    description: 'Successful business formations across all emirates'
  },
  {
    icon: Award,
    value: '98%',
    label: 'Success Rate',
    description: 'Industry-leading success rate in business setup'
  },
  {
    icon: Clock,
    value: '12+',
    label: 'Years Experience',
    description: 'Proven track record in UAE business formation'
  },
  {
    icon: TrendingUp,
    value: '24h',
    label: 'Response Time',
    description: 'Maximum response time for all client inquiries'
  }
];

export function AboutStats() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Our <span className="gradient-text">Track Record</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Numbers that demonstrate our commitment to excellence and client success
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <stat.icon className="w-10 h-10 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-xl font-semibold mb-3">{stat.label}</div>
              <p className="text-muted-foreground text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Trusted by Leading Companies</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            From startups to multinational corporations, we've helped businesses of all sizes 
            establish and grow their presence in the UAE
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="text-lg font-semibold">Startups</div>
              <div className="text-2xl font-bold text-primary">650+</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold">SMEs</div>
              <div className="text-2xl font-bold text-primary">280+</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold">Corporations</div>
              <div className="text-2xl font-bold text-primary">50+</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold">Investors</div>
              <div className="text-2xl font-bold text-primary">120+</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}