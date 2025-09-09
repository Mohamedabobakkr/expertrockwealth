'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Metrics() {
  const [inView, setInView] = useState(false);

  const metrics = [
    { value: 1000, suffix: '+', label: 'Companies Formed' },
    { value: 2500, suffix: '+', label: 'Visas Processed' },
    { value: 98, suffix: '%', label: 'Success Rate' },
    { value: 8, suffix: '+', label: 'Years Experience' }
  ];

  return (
    <section className="pinterest-section bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          onViewportEnter={() => setInView(true)}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {metrics.map((metric, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="pinterest-metric"
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold elegant-gradient-text mb-2"
              >
                {metric.value}{metric.suffix}
              </motion.div>
              <p className="text-muted-foreground font-medium">{metric.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}