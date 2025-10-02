'use client';

import { motion } from 'framer-motion';
import { Building2, CheckCircle, Globe, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function BusinessSetupHero() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2096&auto=format&fit=crop"
          alt="Dubai Business Setup"
          className="h-full w-full object-cover"
        />
        {/* Sophisticated Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-heritage-gold/30 bg-heritage-gold/5 px-4 py-2">
              <Building2 className="h-4 w-4 text-heritage-gold" />
              <span className="caption text-heritage-gold">
                UAE Business Formation
              </span>
            </div>

            {/* Headline */}
            <h1 className="heading-xl text-foreground">
              Establish Your Business in Dubai
              <span className="ultra-premium-text mt-2 block">
                With Complete Peace of Mind
              </span>
            </h1>

            {/* Subheadline */}
            <p className="body-lg mx-auto max-w-3xl text-muted-foreground">
              Expert guidance for Mainland, Freezone, and Offshore company
              formation. 100% foreign ownership, streamlined processes, and
              comprehensive support from licensing to banking.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-6 md:gap-12">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-heritage-gold" />
                <span className="body-sm font-medium">
                  100% Foreign Ownership
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-heritage-gold" />
                <span className="body-sm font-medium">All Business Types</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-heritage-gold" />
                <span className="body-sm font-medium">Licensed Experts</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
              <Button
                size="lg"
                className="elegant-button body-lg px-10 py-5 font-medium text-primary-foreground"
                asChild
              >
                <a href="/contact">Start Your Business</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="pinterest-card body-lg border-border/60 px-10 py-5 font-medium hover:border-heritage-gold/40"
                asChild
              >
                <a href="/calculator">Calculate Costs</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
