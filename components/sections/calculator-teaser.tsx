'use client';

import { motion } from 'framer-motion';
import { Calculator, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CalculatorTeaser() {
  return (
    <section className="relative overflow-hidden bg-surface py-16 md:py-20 lg:py-24">
      {/* Subtle Background Image */}
      <div className="absolute inset-0 z-0 opacity-[0.04]">
        <img
          src="https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=2187&auto=format&fit=crop"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="gradient-text mb-4 font-serif text-4xl font-bold">
              Calculate Your Setup Costs
            </h2>
            <p className="text-xl text-muted-foreground">
              Get an instant estimate for your UAE business formation
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="rounded-lg border border-border bg-background p-6 text-center md:p-8"
          >
            <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
              <Calculator className="h-10 w-10 text-primary" />
            </div>

            <h3 className="mb-4 text-2xl font-semibold">
              Interactive Cost Calculator
            </h3>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
              Our smart calculator considers your specific requirements
              including jurisdiction, company type, visa needs, banking
              requirements, and additional services to provide accurate cost
              estimates.
            </p>

            <div className="mb-8 grid grid-cols-2 gap-4 text-sm md:grid-cols-4">
              <div className="rounded-lg bg-surface p-4">
                <div className="font-semibold text-primary">Freezone</div>
                <div className="text-muted-foreground">Fast Setup</div>
              </div>
              <div className="rounded-lg bg-surface p-4">
                <div className="font-semibold text-primary">Mainland</div>
                <div className="text-muted-foreground">Full Access</div>
              </div>
              <div className="rounded-lg bg-surface p-4">
                <div className="font-semibold text-primary">Offshore</div>
                <div className="text-muted-foreground">Asset Protection</div>
              </div>
              <div className="rounded-lg bg-surface p-4">
                <div className="font-semibold text-primary">Custom</div>
                <div className="text-muted-foreground">Tailored Solutions</div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90"
              asChild
            >
              <a href="/calculator">
                Try Calculator
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
