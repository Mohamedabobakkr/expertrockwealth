'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTABand() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary to-primary/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(210,180,140,0.2),transparent_60%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Start Your UAE Business Journey?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join 1000+ successful entrepreneurs who chose Expert Rock Wealth for their UAE business setup. 
            Get started with a free consultation today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              className="px-8 py-6 text-lg font-semibold bg-white text-primary hover:bg-white/90 transform hover:scale-105 transition-all duration-200"
            >
              <Phone className="mr-2 w-5 h-5" />
              Book Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg font-semibold border-white text-white hover:bg-white hover:text-primary transform hover:scale-105 transition-all duration-200"
            >
              Calculate Costs
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-8 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>No Hidden Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>Expert Guidance</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}