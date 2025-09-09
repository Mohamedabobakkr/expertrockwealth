'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Phone, Clock, CheckCircle } from 'lucide-react';

export function ContactHero() {
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
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="elegant-icon-wrapper w-20 h-20 mx-auto mb-8"
            >
              <MessageSquare className="w-10 h-10 text-primary" />
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
              <span className="elegant-gradient-text">Let's Start Your</span>
              <br />
              <span className="elegant-text">UAE Business Journey</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get expert guidance from our UAE business formation specialists. Free consultation, personalized advice, and transparent pricing.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                <span>Same Day Response</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>Available 24/7</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}