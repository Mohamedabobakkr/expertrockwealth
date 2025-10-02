'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTABand() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary to-primary/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(210,180,140,0.2),transparent_60%)]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-4xl text-center text-white"
        >
          <h2 className="mb-6 font-serif text-4xl font-bold md:text-5xl">
            Ready to Start Your UAE Business Journey?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">
            Join 1000+ successful entrepreneurs who chose Expert Rock Wealth for
            their UAE business setup. Get started with a free consultation
            today.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              variant="secondary"
              className="transform bg-white px-8 py-6 text-lg font-semibold text-primary transition-all duration-200 hover:scale-105 hover:bg-white/90"
            >
              <Phone className="mr-2 h-5 w-5" />
              Book Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="transform border-white px-8 py-6 text-lg font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-white hover:text-primary"
            >
              Calculate Costs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-8 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent" />
              <span>No Hidden Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent" />
              <span>Expert Guidance</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
