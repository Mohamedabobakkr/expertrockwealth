'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowRight, Clock, Users, FileText, CreditCard } from 'lucide-react';

const steps = [
  {
    step: 1,
    title: 'Initial Consultation',
    description: 'Free 30-minute consultation to understand your business needs and goals',
    icon: Users,
    duration: '30 mins',
    details: [
      'Business requirements analysis',
      'Structure recommendation',
      'Cost estimation',
      'Timeline planning'
    ]
  },
  {
    step: 2,
    title: 'Documentation & Planning',
    description: 'Prepare all required documents and create your business formation strategy',
    icon: FileText,
    duration: '2-3 days',
    details: [
      'Document preparation',
      'Name reservation',
      'License selection',
      'Visa planning'
    ]
  },
  {
    step: 3,
    title: 'Official Registration',
    description: 'Submit applications and handle all government procedures',
    icon: CheckCircle,
    duration: '1-2 weeks',
    details: [
      'Government submissions',
      'License approval',
      'Trade license issuance',
      'Initial approvals'
    ]
  },
  {
    step: 4,
    title: 'Banking & Final Setup',
    description: 'Open bank accounts, complete visa processing, and finalize all services',
    icon: CreditCard,
    duration: '1-2 weeks',
    details: [
      'Bank account opening',
      'Visa processing',
      'Emirates ID',
      'Final deliverables'
    ]
  }
];

export function ProcessOverview() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Our <span className="gradient-text">Proven Process</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A streamlined 4-step process to get your UAE business up and running efficiently
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="h-full">
                <CardContent className="p-6 text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-2">
                      Step {step.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {step.description}
                    </p>
                    <div className="flex items-center justify-center gap-1 text-sm text-primary">
                      <Clock className="w-4 h-4" />
                      {step.duration}
                    </div>
                  </div>

                  <ul className="space-y-2 text-sm text-left">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 z-10">
                  <ArrowRight className="w-8 h-8 text-primary/50" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-primary/5 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-semibold mb-4">Why Our Process Works</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">2-6</div>
              <div className="text-sm text-muted-foreground">Weeks Average</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}