'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Ahmed Al-Mansouri',
      role: 'CEO, Al-Mansouri Trading',
      content:
        'Expert Rock Wealth made our Dubai mainland setup seamless. Their team handled everything from licensing to banking, and we were operational in just 3 weeks.',
      rating: 5,
    },
    {
      name: 'Sarah Johnson',
      role: 'Founder, Digital Ventures',
      content:
        'The DIFC setup process was complex, but their expertise made it straightforward. Excellent communication and results that exceeded our expectations.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Investment Director',
      content:
        'Professional service from start to finish. They understood our wealth management needs and delivered a comprehensive solution.',
      rating: 5,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-surface py-16 md:py-20 lg:py-24">
      {/* Subtle Background Image */}
      <div className="absolute inset-0 z-0 opacity-[0.04]">
        <img
          src="https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?q=80&w=2187&auto=format&fit=crop"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12">
        <div className="mb-12 text-center md:mb-14 lg:mb-16">
          <h2 className="gradient-text mb-4 font-serif text-4xl font-bold">
            What Our Clients Say
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Trusted by entrepreneurs and investors worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative rounded-lg border border-border bg-background p-6"
            >
              <Quote className="absolute right-4 top-4 h-8 w-8 text-primary/20" />

              <div className="mb-4 flex items-center gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current text-accent" />
                ))}
              </div>

              <p className="mb-6 italic text-muted-foreground">
                "{testimonial.content}"
              </p>

              <div>
                <div className="font-semibold text-foreground">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
