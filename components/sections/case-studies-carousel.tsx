'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Clock, TrendingUp } from 'lucide-react';

export function CaseStudiesCarousel() {
  const caseStudies = [
    {
      title: 'Dubai Mainland LLC Setup',
      client: 'Tech Startup',
      timeline: '21 days',
      savings: 'AED 15,000',
      description:
        'Complete setup for international tech company including 2 shareholders, banking, and visa processing.',
    },
    {
      title: 'DIFC Holding Company',
      client: 'Investment Firm',
      timeline: '28 days',
      savings: 'AED 25,000',
      description:
        'Established holding structure with wealth management services and premium banking solutions.',
    },
    {
      title: 'Freezone Trading License',
      client: 'E-commerce Business',
      timeline: '14 days',
      savings: 'AED 12,000',
      description:
        'Fast-track setup for online retail business with streamlined banking and logistics support.',
    },
  ];

  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center md:mb-14 lg:mb-16">
          <h2 className="gradient-text mb-4 font-serif text-4xl font-bold">
            Success Stories
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Real results from entrepreneurs who trusted us with their UAE
            business setup
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group rounded-lg border border-border bg-surface p-6 transition-colors hover:border-primary/50"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {study.timeline}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-accent">
                    <TrendingUp className="h-4 w-4" />
                    Saved {study.savings}
                  </div>
                </div>
              </div>

              <h3 className="mb-2 text-xl font-semibold">{study.title}</h3>
              <div className="mb-3 font-medium text-primary">
                {study.client}
              </div>
              <p className="mb-4 text-muted-foreground">{study.description}</p>

              <div className="flex cursor-pointer items-center text-primary transition-colors group-hover:text-accent">
                <span className="text-sm font-medium">View Case Study</span>
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
