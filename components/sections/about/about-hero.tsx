'use client';

import { motion } from 'framer-motion';
import { Award, Users, TrendingUp, CheckCircle } from 'lucide-react';

export function AboutHero() {
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
              <Award className="w-10 h-10 text-primary" />
            </div>

            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
              <span className="gradient-text">Leading UAE Business</span>
              <br />
              Formation Excellence
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              For over a decade, Expert Rock Wealth has been the trusted partner for entrepreneurs, 
              investors, and businesses looking to establish their presence in the UAE.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Founded 2012</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span>1000+ Clients Served</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span>98% Success Rate</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-primary mb-2">12+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Expert Consultants</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-primary mb-2">9</div>
                <div className="text-sm text-muted-foreground">Core Services</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}