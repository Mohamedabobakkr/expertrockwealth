'use client';

import { motion } from 'framer-motion';
import { Calculator, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CalculatorTeaser() {
  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4 gradient-text">
              Calculate Your Setup Costs
            </h2>
            <p className="text-xl text-muted-foreground">
              Get an instant estimate for your UAE business formation
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-background border border-border rounded-lg p-8 text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
              <Calculator className="w-10 h-10 text-primary" />
            </div>
            
            <h3 className="text-2xl font-semibold mb-4">Interactive Cost Calculator</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our smart calculator considers your specific requirements including jurisdiction, 
              company type, visa needs, banking requirements, and additional services to provide 
              accurate cost estimates.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-sm">
              <div className="p-4 bg-surface rounded-lg">
                <div className="text-primary font-semibold">From AED 15,000</div>
                <div className="text-muted-foreground">Basic Setup</div>
              </div>
              <div className="p-4 bg-surface rounded-lg">
                <div className="text-primary font-semibold">From AED 35,000</div>
                <div className="text-muted-foreground">Standard Package</div>
              </div>
              <div className="p-4 bg-surface rounded-lg">
                <div className="text-primary font-semibold">From AED 75,000</div>
                <div className="text-muted-foreground">Premium Setup</div>
              </div>
              <div className="p-4 bg-surface rounded-lg">
                <div className="text-primary font-semibold">Custom Quote</div>
                <div className="text-muted-foreground">Enterprise</div>
              </div>
            </div>
            
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Try Calculator
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}