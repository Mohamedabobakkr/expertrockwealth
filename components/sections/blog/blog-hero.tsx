'use client';

import { motion } from 'framer-motion';
import { BookOpen, TrendingUp, Users, Clock } from 'lucide-react';

export function BlogHero() {
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
              <BookOpen className="w-10 h-10 text-primary" />
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
              <span className="elegant-gradient-text">UAE Business</span>
              <br />
              <span className="elegant-text">Insights & Guides</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay ahead with expert insights on UAE business formation, regulatory updates, 
              market trends, and practical guides for entrepreneurs.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span>Weekly Updates</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span>Expert Authors</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>5-Min Reads</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}