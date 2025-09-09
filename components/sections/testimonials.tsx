'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: "Ahmed Al-Mansouri",
      role: "CEO, Al-Mansouri Trading",
      content: "Expert Rock Wealth made our Dubai mainland setup seamless. Their team handled everything from licensing to banking, and we were operational in just 3 weeks.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Founder, Digital Ventures",
      content: "The DIFC setup process was complex, but their expertise made it straightforward. Excellent communication and results that exceeded our expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Investment Director",
      content: "Professional service from start to finish. They understood our wealth management needs and delivered a comprehensive solution.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4 gradient-text">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by entrepreneurs and investors worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="p-6 rounded-lg bg-background border border-border relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-current" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.content}"
              </p>
              
              <div>
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}