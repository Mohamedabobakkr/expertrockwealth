'use client';

import { motion } from 'framer-motion';
import { MessageCircleQuestion } from 'lucide-react';

export function FAQHero() {
  return (
    <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden py-20">
      {/* Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <img
          src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="bg-heritage-gold/8 inline-flex items-center gap-2 rounded-full border border-heritage-gold/40 px-5 py-2.5">
              <MessageCircleQuestion className="h-4 w-4 text-heritage-gold" />
              <span className="caption text-heritage-gold">
                Frequently Asked Questions
              </span>
            </div>

            <h1 className="heading-xl text-foreground">
              Your Questions,
              <span className="ultra-premium-text mt-2 block">
                Answered with Expertise
              </span>
            </h1>

            <p className="body-lg mx-auto max-w-2xl text-muted-foreground">
              Find comprehensive answers to common questions about UAE business
              setup, Golden Visa, residency, and our premium services.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
