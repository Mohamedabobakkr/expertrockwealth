'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Shield, Users, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const scrollToNext = () => {
    const nextSection = document.querySelector('#value-props');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Hero Background Image - Dubai Skyline */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop"
          alt="Dubai Skyline"
          className="h-full w-full object-cover"
        />
        {/* Sophisticated Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40"></div>
      </div>

      {/* Refined Floating Orbs - Subtle Wealth Aesthetic */}
      <div
        className="floating-orb"
        style={{ animation: 'refinedFloat 15s ease-in-out infinite' }}
      ></div>
      <div
        className="floating-orb"
        style={{
          animation: 'refinedFloat 18s ease-in-out infinite',
          animationDelay: '5s',
        }}
      ></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10 md:space-y-16"
          >
            {/* Timeless Wealth-Focused Headline */}
            <div className="relative">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  duration: 1,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="from-heritage-gold/6 via-heritage-bronze/4 absolute -inset-6 animate-pulse rounded-3xl bg-gradient-to-r to-heritage-sage/5 opacity-0 blur-3xl"
                style={{ animationDelay: '1s' }}
              />
              <h1 className="luxury-display relative leading-[1] tracking-tight">
                Establishing Legacy
                <br />
                <span className="ultra-premium-text">
                  Through Strategic Wealth
                </span>
              </h1>
            </div>

            {/* Refined Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.6,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="elegant-subtext mx-auto max-w-4xl"
            >
              Curated UAE business formation, residency solutions, and wealth
              management services for discerning entrepreneurs and family
              offices. Building generational prosperity since inception.
            </motion.p>

            {/* Ultra-Sophisticated Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.8,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="magnetic-hover flex flex-col items-center gap-2 sm:gap-3"
              >
                <div className="elegant-icon-wrapper">
                  <Shield className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                </div>
                <span className="sm:body-sm text-xs font-medium">
                  Licensed & Regulated
                </span>
              </motion.div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="magnetic-hover flex flex-col items-center gap-2 sm:gap-3"
              >
                <div className="elegant-icon-wrapper">
                  <Users className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                </div>
                <span className="sm:body-sm text-xs font-medium">
                  1000+ Clients
                </span>
              </motion.div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="magnetic-hover flex flex-col items-center gap-2 sm:gap-3"
              >
                <div className="elegant-icon-wrapper">
                  <Trophy className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                </div>
                <span className="sm:body-sm text-xs font-medium">
                  98% Success Rate
                </span>
              </motion.div>
            </motion.div>

            {/* Refined CTA Buttons - Old Money Elegance */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.6,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col items-center justify-center gap-3 pb-24 sm:flex-row sm:gap-4 sm:pb-32 md:gap-6 md:pb-40"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="elegant-button md:body-lg w-full px-6 py-3 text-sm font-medium text-primary-foreground sm:w-auto sm:px-8 sm:py-4 sm:text-base md:px-10 md:py-5"
                  asChild
                >
                  <a href="/contact">Schedule Consultation</a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="pinterest-card md:body-lg magnetic-hover w-full border-border/60 px-6 py-3 text-sm font-medium hover:border-heritage-gold/40 sm:w-auto sm:px-8 sm:py-4 sm:text-base md:px-10 md:py-5"
                  asChild
                >
                  <a href="/calculator">Explore Services</a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Ultra-Premium Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 sm:bottom-8 md:bottom-10"
        >
          <button
            onClick={scrollToNext}
            className="group flex flex-col items-center gap-2 px-4 py-2 transition-all duration-500 hover:text-foreground sm:gap-3 md:gap-4"
          >
            <span className="caption text-xs tracking-widest text-foreground/80 sm:text-sm">
              Discover More
            </span>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="scroll-indicator"
            >
              <ChevronDown className="h-4 w-4 text-primary transition-transform duration-500 group-hover:scale-110 sm:h-5 sm:w-5" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
