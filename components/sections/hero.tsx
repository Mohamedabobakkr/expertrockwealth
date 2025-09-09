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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pinterest-hero">
      {/* Floating Orbs */}
      <div className="floating-orb"></div>
      <div className="floating-orb"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,77,64,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(210,180,140,0.05),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
              <span className="elegant-gradient-text">Your Gateway to UAE Business Success</span>
            </h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Expert guidance for company formation, residency, banking, and wealth management in the UAE. Trusted by 1000+ entrepreneurs and investors.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex items-center justify-center gap-8 md:gap-12 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>Licensed & Regulated</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span>1000+ Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-primary" />
                <span>98% Success Rate</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                size="lg"
                className="elegant-button px-8 py-6 text-lg font-semibold"
                asChild
              >
                <a href="/contact">Book Free Consultation</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="pinterest-card px-8 py-6 text-lg font-semibold bg-transparent hover:bg-accent/10"
                asChild
              >
                <a href="/calculator">Calculate Costs</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={scrollToNext}
            className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-sm">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ChevronDown className="w-6 h-6 group-hover:text-primary transition-colors" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}