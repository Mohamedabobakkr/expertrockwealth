'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative py-24 overflow-hidden pinterest-hero">
      {/* Floating Orbs */}
      <div className="floating-orb"></div>
      <div className="floating-orb"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
              <span className="elegant-gradient-text">Complete UAE Business Solutions</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From company formation to banking and residency visas, we provide end-to-end services to establish and grow your business in the UAE.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>9 Core Services</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Licensed Consultants</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>End-to-End Support</span>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button size="lg" className="elegant-button px-8 py-6 text-lg font-semibold" asChild>
                <a href="/contact">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="pinterest-card px-8 py-6 text-lg font-semibold bg-transparent hover:bg-accent/10" asChild>
                <a href="/calculator">Compare Costs</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}