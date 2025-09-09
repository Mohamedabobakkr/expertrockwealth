'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '1,000+', label: 'Success Stories', description: 'Businesses successfully launched' },
  { value: '95%', label: 'Client Retention', description: 'Clients who return for additional services' },
  { value: '15', label: 'Industries', description: 'Different sectors we serve' },
  { value: '2-4 weeks', label: 'Average Setup', description: 'Time to complete business formation' }
];

export function CaseStudiesStats() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
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
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-lg font-semibold mb-1">{stat.label}</div>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}