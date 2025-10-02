'use client';

import { motion } from 'framer-motion';
import { Award, CheckCircle, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function GoldenVisaHero() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=2187&auto=format&fit=crop"
          alt="Dubai Golden Visa"
          className="h-full w-full object-cover opacity-30"
        />
        {/* Sophisticated Overlay */}
        <div className="from-background/96 via-background/92 to-background/96 absolute inset-0 bg-gradient-to-b"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 py-16 sm:px-6 md:py-20 lg:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 md:space-y-8"
          >
            {/* Premium Badge */}
            <div className="bg-heritage-gold/8 inline-flex items-center gap-2 rounded-full border border-heritage-gold/40 px-5 py-2.5">
              <Award className="h-4 w-4 text-heritage-gold" />
              <span className="caption text-heritage-gold">
                UAE Golden Visa Program
              </span>
            </div>

            {/* Headline */}
            <h1 className="heading-xl text-foreground">
              Secure Your Legacy in the UAE
              <span className="ultra-premium-text mt-3 block">
                With the Golden Visa
              </span>
            </h1>

            {/* Subheadline */}
            <p className="body-lg mx-auto max-w-3xl leading-relaxed text-muted-foreground">
              Obtain long-term residency in one of the world's most dynamic
              economies. Expert Rock Wealth provides comprehensive Golden Visa
              services with guaranteed approval, premium support, and a seamless
              application process tailored to your success.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4 sm:gap-6 md:gap-12 md:pt-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-heritage-gold" />
                <span className="body-sm font-medium">5-10 Year Residency</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-heritage-gold" />
                <span className="body-sm font-medium">100% Approval Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-heritage-gold" />
                <span className="body-sm font-medium">Fast Processing</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center justify-center gap-3 pt-4 sm:flex-row sm:gap-4 md:pt-6">
              <Button
                size="lg"
                className="elegant-button body-lg px-10 py-5 font-medium text-primary-foreground"
                asChild
              >
                <a href="/contact">Apply for Golden Visa</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="pinterest-card body-lg border-border/60 px-10 py-5 font-medium hover:border-heritage-gold/40"
                asChild
              >
                <a href="#eligibility">Check Eligibility</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
