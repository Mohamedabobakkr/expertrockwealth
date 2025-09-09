'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Clock, TrendingUp } from 'lucide-react';

export function CaseStudiesCarousel() {
  const caseStudies = [
    {
      title: "Dubai Mainland LLC Setup",
      client: "Tech Startup",
      timeline: "21 days",
      savings: "AED 15,000",
      description: "Complete setup for international tech company including 2 shareholders, banking, and visa processing."
    },
    {
      title: "DIFC Holding Company",
      client: "Investment Firm", 
      timeline: "28 days",
      savings: "AED 25,000",
      description: "Established holding structure with wealth management services and premium banking solutions."
    },
    {
      title: "Freezone Trading License",
      client: "E-commerce Business",
      timeline: "14 days", 
      savings: "AED 12,000",
      description: "Fast-track setup for online retail business with streamlined banking and logistics support."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4 gradient-text">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results from entrepreneurs who trusted us with their UAE business setup
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="p-6 rounded-lg bg-surface border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {study.timeline}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-accent">
                    <TrendingUp className="w-4 h-4" />
                    Saved {study.savings}
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
              <div className="text-primary font-medium mb-3">{study.client}</div>
              <p className="text-muted-foreground mb-4">{study.description}</p>
              
              <div className="flex items-center text-primary group-hover:text-accent transition-colors cursor-pointer">
                <span className="text-sm font-medium">View Case Study</span>
                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}