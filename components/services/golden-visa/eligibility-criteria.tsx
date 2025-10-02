'use client';

import { motion } from 'framer-motion';
import {
  CheckCircle,
  FileText,
  DollarSign,
  TrendingUp,
  GraduationCap,
  Award,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export function EligibilityCriteria() {
  const criteria = [
    {
      icon: DollarSign,
      category: 'Investment-Based',
      color: 'heritage-gold',
      requirements: [
        {
          title: 'Real Estate Investment',
          details: 'Purchase property worth minimum AED 2 million',
          note: 'Must be retained for at least 3 years',
        },
        {
          title: 'Business Investment',
          details: 'Capital investment of AED 2 million minimum in UAE company',
          note: 'Partnership or sole ownership accepted',
        },
        {
          title: 'Public Investment',
          details: 'Deposit of AED 10 million in investment fund or company',
          note: 'Must not be financed by loans',
        },
      ],
    },
    {
      icon: TrendingUp,
      category: 'Entrepreneur Track',
      color: 'heritage-bronze',
      requirements: [
        {
          title: 'Startup Founder',
          details: 'Own project with minimum AED 500,000 capital',
          note: 'Must be approved by accredited incubator',
        },
        {
          title: 'Business Owner',
          details: 'Ownership of commercial/industrial license',
          note: 'Annual revenue requirements apply',
        },
        {
          title: 'Partnership',
          details: 'Partner in existing UAE business',
          note: 'Minimum ownership stake required',
        },
      ],
    },
    {
      icon: GraduationCap,
      category: 'Talent & Education',
      color: 'heritage-sage',
      requirements: [
        {
          title: 'Specialized Talents',
          details:
            'Exceptional professionals in medicine, engineering, science, arts',
          note: 'Proven track record and certifications required',
        },
        {
          title: 'Outstanding Students',
          details:
            'GPA 3.75+ in UAE universities or top 100 global universities',
          note: 'Recommendation letter from institution',
        },
        {
          title: 'Researchers & Scientists',
          details: 'Active research in accredited institution or university',
          note: 'Published work and contributions required',
        },
      ],
    },
  ];

  const documentChecklist = [
    'Valid passport (6+ months validity)',
    'Current UAE residency visa (if applicable)',
    'Recent passport-sized photographs',
    'Proof of investment/qualification',
    'Bank statements (last 6 months)',
    'Educational certificates & attestations',
    'Professional licenses/certifications',
    'Medical fitness certificate',
    'Emirates ID application',
    'No objection certificate (if employed)',
  ];

  return (
    <section
      id="eligibility"
      className="relative overflow-hidden bg-background py-16 md:py-24 lg:py-32"
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 z-0 opacity-[0.02]">
        <img
          src="https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?q=80&w=2187&auto=format&fit=crop"
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
              Eligibility Criteria & Requirements
            </h2>
            <p className="body-lg mx-auto max-w-3xl text-muted-foreground">
              Multiple pathways to qualify for the UAE Golden Visa. Our experts
              will assess your profile and recommend the optimal route for
              approval.
            </p>
          </motion.div>
        </div>

        {/* Criteria Cards */}
        <div className="mb-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {criteria.map((criterion, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="pinterest-card group p-10"
            >
              <div className="elegant-icon-wrapper mb-6">
                <criterion.icon className="h-6 w-6 text-primary" />
              </div>

              <h3 className="heading-sm duration-400 mb-6 text-foreground transition-colors group-hover:text-heritage-gold">
                {criterion.category}
              </h3>

              <div className="space-y-6">
                {criterion.requirements.map((req, idx) => (
                  <div
                    key={idx}
                    className="border-l-2 border-heritage-gold/30 py-2 pl-4"
                  >
                    <h4 className="body-md mb-2 font-semibold text-foreground">
                      {req.title}
                    </h4>
                    <p className="body-sm mb-1 text-muted-foreground">
                      {req.details}
                    </p>
                    <p className="text-xs italic text-heritage-gold/80">
                      {req.note}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Document Checklist */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl"
        >
          <div className="pinterest-card p-10 md:p-12">
            <div className="mb-8 flex items-center gap-3">
              <div className="elegant-icon-wrapper">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="heading-sm text-foreground">
                Required Documentation
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {documentChecklist.map((doc, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 rounded-lg p-4 transition-colors duration-300 hover:bg-heritage-gold/5"
                >
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-heritage-gold" />
                  <span className="body-sm text-muted-foreground">{doc}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 border-t border-border/50 pt-8">
              <p className="body-md mb-6 text-center text-muted-foreground">
                Don't worry about the complexity. Expert Rock Wealth handles all
                documentation, attestation, and submission processes on your
                behalf.
              </p>
              <div className="flex justify-center">
                <Button
                  size="lg"
                  className="elegant-button body-lg px-10 py-5 font-medium text-primary-foreground"
                  asChild
                >
                  <a href="/contact">Get Free Eligibility Assessment</a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
