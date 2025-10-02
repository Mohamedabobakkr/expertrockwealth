'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Metrics() {
  const [inView, setInView] = useState(false);

  const metrics = [
    { value: 1000, suffix: '+', label: 'Companies Formed' },
    { value: 2500, suffix: '+', label: 'Visas Processed' },
    { value: 98, suffix: '%', label: 'Success Rate' },
    { value: 8, suffix: '+', label: 'Years Experience' },
  ];

  return (
    <section className="pinterest-section relative overflow-hidden bg-background py-16 md:py-20 lg:py-24">
      {/* Subtle Background Image */}
      <div className="absolute inset-0 z-0 opacity-[0.04]">
        <img
          src="https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?q=80&w=2187&auto=format&fit=crop"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          onViewportEnter={() => setInView(true)}
          className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8"
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
                className="elegant-gradient-text mb-2 text-4xl font-bold md:text-5xl"
              >
                {metric.value}
                {metric.suffix}
              </motion.div>
              <p className="font-medium text-muted-foreground">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
