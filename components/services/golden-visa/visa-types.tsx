'use client';

import { motion } from 'framer-motion';
import {
  Briefcase,
  GraduationCap,
  Home,
  TrendingUp,
  Users,
  Stethoscope,
} from 'lucide-react';

export function VisaTypes() {
  const visaTypes = [
    {
      icon: Briefcase,
      title: 'Investors',
      duration: '10 Years',
      description: 'For property investors and business owners',
      requirements: [
        'Property investment min. AED 2M',
        'Or business investment min. AED 2M',
        'Or AED 10M+ in public investments',
        'Retain investment throughout visa validity',
      ],
      highlight: 'Most Popular',
    },
    {
      icon: TrendingUp,
      title: 'Entrepreneurs',
      duration: '10 Years',
      description: 'For innovative business founders',
      requirements: [
        'Own a startup with min. AED 500K capital',
        'Approved by accredited UAE incubator',
        'Innovative business model',
        'Active business operations required',
      ],
      highlight: 'High Success',
    },
    {
      icon: GraduationCap,
      title: 'Specialized Talents',
      duration: '10 Years',
      description: 'For exceptional professionals',
      requirements: [
        'Doctors, scientists, researchers',
        'Engineers, IT specialists',
        'Cultural & creative professionals',
        'Professional certification required',
      ],
      highlight: null,
    },
    {
      icon: Users,
      title: 'Outstanding Students',
      duration: '5-10 Years',
      description: 'For high-achieving students and graduates',
      requirements: [
        'Top university students (GPA 3.75+)',
        'Graduates from top 100 universities',
        'Creative talents in arts & culture',
        'Academic excellence verification',
      ],
      highlight: null,
    },
    {
      icon: Stethoscope,
      title: 'Frontline Heroes',
      duration: '10 Years',
      description: 'For essential workers & healthcare',
      requirements: [
        'Healthcare professionals',
        'Essential service workers',
        'Outstanding contributions to UAE',
        'Government nomination required',
      ],
      highlight: null,
    },
    {
      icon: Home,
      title: 'Retirees',
      duration: '5 Years',
      description: 'For retirees seeking UAE residency',
      requirements: [
        'Property worth min. AED 2M',
        'Or savings of min. AED 1M',
        'Or income of AED 20K+ per month',
        'Age 55+ requirement',
      ],
      highlight: null,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24 lg:py-32">
      {/* Subtle Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <img
          src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2096&auto=format&fit=crop"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12">
        <div className="mb-12 text-center md:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg ultra-premium-text mb-4 md:mb-6">
              Golden Visa Categories
            </h2>
            <p className="body-lg mx-auto max-w-3xl px-4 text-muted-foreground">
              Multiple pathways to UAE long-term residency. Our experts will
              identify the perfect category for your profile and maximize your
              approval chances.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {visaTypes.map((visa, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="pinterest-card magnetic-hover group relative cursor-pointer p-6 md:p-8"
            >
              {visa.highlight && (
                <div className="absolute -top-3 right-6 rounded-full bg-heritage-gold px-3 py-1">
                  <span className="text-xs font-semibold text-white">
                    {visa.highlight}
                  </span>
                </div>
              )}

              <div className="elegant-icon-wrapper mb-6">
                <visa.icon className="h-6 w-6 text-primary" />
              </div>

              <div className="mb-2 flex items-baseline gap-2">
                <h3 className="heading-sm duration-400 text-foreground transition-colors group-hover:text-heritage-gold">
                  {visa.title}
                </h3>
              </div>

              <div className="mb-4 inline-block rounded-full border border-heritage-gold/30 bg-heritage-gold/10 px-3 py-1">
                <span className="caption text-heritage-gold">
                  {visa.duration}
                </span>
              </div>

              <p className="body-md mb-6 text-muted-foreground">
                {visa.description}
              </p>

              <div className="space-y-3">
                <p className="body-sm mb-3 font-semibold text-foreground/90">
                  Key Requirements:
                </p>
                <ul className="space-y-2.5">
                  {visa.requirements.map((req, idx) => (
                    <li
                      key={idx}
                      className="body-sm flex items-start gap-2 text-muted-foreground"
                    >
                      <span className="mt-1 flex-shrink-0 text-heritage-gold">
                        ✓
                      </span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="body-md mb-4 text-muted-foreground">
            Not sure which category suits you best? Our consultants provide
            complimentary eligibility assessments.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
