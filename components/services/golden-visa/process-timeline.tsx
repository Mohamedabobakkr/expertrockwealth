'use client';

import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Clock,
  FileCheck,
  Home,
  IdCard,
  Shield,
  UserCheck,
} from 'lucide-react';

export function ProcessTimeline() {
  const steps = [
    {
      icon: UserCheck,
      number: '01',
      title: 'Initial Consultation',
      duration: 'Day 1',
      description:
        'Complimentary eligibility assessment and pathway recommendation',
      details: [
        'Profile evaluation by licensed consultant',
        'Golden Visa category identification',
        'Document checklist preparation',
        'Timeline and cost breakdown',
      ],
    },
    {
      icon: FileCheck,
      number: '02',
      title: 'Documentation & Preparation',
      duration: 'Days 2-5',
      description:
        'Complete document collection, attestation, and verification',
      details: [
        'Document gathering assistance',
        'Attestation and translation services',
        'Application form completion',
        'Quality assurance review',
      ],
    },
    {
      icon: Shield,
      number: '03',
      title: 'Application Submission',
      duration: 'Days 6-7',
      description: 'Official submission to immigration authorities',
      details: [
        'GDRFA submission',
        'Biometric data collection',
        'Medical fitness examination',
        'Application tracking setup',
      ],
    },
    {
      icon: Clock,
      number: '04',
      title: 'Processing & Approval',
      duration: 'Days 8-20',
      description: 'Government review and approval process',
      details: [
        'Application under review',
        'Regular status updates',
        'Liaison with authorities',
        'Approval notification',
      ],
    },
    {
      icon: IdCard,
      number: '05',
      title: 'Emirates ID & Stamping',
      duration: 'Days 21-25',
      description: 'Final documentation and visa stamping',
      details: [
        'Emirates ID application',
        'Passport visa stamping',
        'Biometric enrollment',
        'Entry permit issuance',
      ],
    },
    {
      icon: Home,
      number: '06',
      title: 'Settlement Support',
      duration: 'Ongoing',
      description: 'Post-approval assistance and family sponsorship',
      details: [
        'Family visa processing',
        'Bank account opening assistance',
        'Utility setup support',
        'Renewal reminders',
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-surface py-16 md:py-24 lg:py-32">
      {/* Subtle Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <img
          src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2096&auto=format&fit=crop"
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
              Streamlined Application Process
            </h2>
            <p className="body-lg mx-auto max-w-3xl text-muted-foreground">
              From initial consultation to final approval, we guide you through
              every step with precision and care. Typical timeline: 20-30 days
              for complete processing.
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="mx-auto max-w-5xl">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-[60px] top-[80px] hidden h-full w-0.5 bg-gradient-to-b from-heritage-gold/40 to-heritage-gold/10 md:block" />
                )}

                <div className="pinterest-card magnetic-hover group cursor-pointer p-8 md:p-10">
                  <div className="flex flex-col gap-6 md:flex-row md:gap-8">
                    {/* Icon & Number */}
                    <div className="flex items-start gap-4">
                      <div className="elegant-icon-wrapper">
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="hidden md:block">
                        <span className="duration-400 font-garamond text-6xl font-light text-heritage-gold/20 transition-colors group-hover:text-heritage-gold/40">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                        <h3 className="heading-sm duration-400 text-foreground transition-colors group-hover:text-heritage-gold">
                          {step.title}
                        </h3>
                        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-heritage-gold/30 bg-heritage-gold/10 px-3 py-1.5">
                          <Clock className="h-3.5 w-3.5 text-heritage-gold" />
                          <span className="text-xs font-semibold text-heritage-gold">
                            {step.duration}
                          </span>
                        </div>
                      </div>

                      <p className="body-md mb-5 text-muted-foreground">
                        {step.description}
                      </p>

                      <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
                        {step.details.map((detail, idx) => (
                          <li
                            key={idx}
                            className="body-sm flex items-start gap-2 text-muted-foreground"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-heritage-gold" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Fast Track Option */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-4xl"
        >
          <div className="pinterest-card border-2 border-heritage-gold/30 p-10 text-center">
            <h3 className="heading-sm mb-4 text-foreground">
              Fast-Track Processing Available
            </h3>
            <p className="body-md mx-auto mb-6 max-w-2xl text-muted-foreground">
              Need urgent processing? Our VIP fast-track service can reduce the
              timeline to as little as 10-14 days. Includes priority government
              processing, dedicated case manager, and 24/7 support.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full bg-heritage-gold/10 px-4 py-2">
              <Shield className="h-4 w-4 text-heritage-gold" />
              <span className="body-sm font-semibold text-heritage-gold">
                Enquire About Fast-Track Options
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
