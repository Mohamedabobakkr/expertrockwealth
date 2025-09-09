'use client';

import { motion } from 'framer-motion';
import { Calculator, CheckCircle, Clock } from 'lucide-react';

export function CalculatorHero() {
  return (
    <section className="relative py-24 overflow-hidden gradient-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-8">
              <Calculator className="w-10 h-10 text-primary" />
            </div>

            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
              <span className="gradient-text">UAE Business Setup</span>
              <br />
              Cost Calculator
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get instant, accurate pricing for your UAE business formation, visa processing, and banking setup. No hidden fees, completely transparent pricing.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Instant Results</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>All Government Fees Included</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>Updated Daily</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}