'use client';

import { motion } from 'framer-motion';
import {
  FileText,
  CheckSquare,
  Building2,
  CreditCard,
  Users,
  Key,
} from 'lucide-react';

export function ProcessSteps() {
  const steps = [
    {
      icon: FileText,
      step: '1',
      title: 'Free Consultation',
      description:
        "Discuss your business goals and requirements with our experts. We'll recommend the best structure for your needs.",
      duration: '30-60 minutes',
    },
    {
      icon: CheckSquare,
      step: '2',
      title: 'Choose Your Structure',
      description:
        'Select between Mainland, Freezone, or Offshore setup based on your business activities and objectives.',
      duration: '1-2 days',
    },
    {
      icon: Building2,
      step: '3',
      title: 'Company Registration',
      description:
        'We handle all documentation, approvals, and licensing requirements with the relevant authorities.',
      duration: '5-10 days',
    },
    {
      icon: CreditCard,
      step: '4',
      title: 'Banking Setup',
      description:
        'Assistance with opening corporate bank accounts and setting up payment solutions.',
      duration: '2-4 weeks',
    },
    {
      icon: Users,
      step: '5',
      title: 'Visa Processing',
      description:
        'Process residence visas for owners, partners, and employees including Emirates ID.',
      duration: '2-3 weeks',
    },
    {
      icon: Key,
      step: '6',
      title: 'Business Launch',
      description:
        'Complete handover with all documents, licenses, and ongoing support for your operations.',
      duration: 'Ready to operate',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-surface py-16 md:py-24 lg:py-32">
      {/* Subtle Background */}
      <div className="absolute inset-0 z-0 opacity-[0.04]">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12">
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg ultra-premium-text mb-6">
              Your Journey to Business Success
            </h2>
            <p className="body-lg mx-auto max-w-3xl text-muted-foreground">
              A streamlined, transparent process designed for your success. From
              consultation to launch in 6-8 weeks.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="pinterest-card group relative overflow-hidden p-6 md:p-8"
            >
              {/* Step Number Badge */}
              <div className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-heritage-gold/10">
                <span className="font-garamond text-2xl font-semibold text-heritage-gold">
                  {step.step}
                </span>
              </div>

              <div className="elegant-icon-wrapper mb-6">
                <step.icon className="h-6 w-6 text-primary" />
              </div>

              <h3 className="heading-sm duration-400 mb-4 text-foreground transition-colors group-hover:text-heritage-gold">
                {step.title}
              </h3>

              <p className="body-sm mb-4 leading-relaxed text-muted-foreground">
                {step.description}
              </p>

              <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-surface px-3 py-1.5">
                <span className="caption text-heritage-bronze">
                  {step.duration}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
