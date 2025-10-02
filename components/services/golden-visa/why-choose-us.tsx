'use client';

import { motion } from 'framer-motion';
import {
  Award,
  HeartHandshake,
  Shield,
  Clock,
  Users,
  Trophy,
  Target,
  Sparkles,
  BadgeCheck,
  Headset,
} from 'lucide-react';

export function WhyChooseUs() {
  const advantages = [
    {
      icon: BadgeCheck,
      title: '100% Approval Guarantee',
      description:
        "Our expert assessment ensures your application meets all requirements. We've maintained a perfect approval rate across all Golden Visa categories through meticulous preparation and government relationships.",
    },
    {
      icon: Shield,
      title: 'Licensed & Regulated',
      description:
        'Fully licensed consultancy approved by UAE authorities. Our compliance with all regulations and ethical standards protects your interests throughout the application process.',
    },
    {
      icon: Users,
      title: '500+ Golden Visas Processed',
      description:
        'Successfully guided hundreds of investors, entrepreneurs, and professionals through the Golden Visa journey. Our track record speaks for itself.',
    },
    {
      icon: Clock,
      title: 'Fast-Track Processing',
      description:
        'Exclusive access to expedited government channels. Our VIP service can reduce processing time by up to 50% compared to standard applications.',
    },
    {
      icon: HeartHandshake,
      title: 'End-to-End Support',
      description:
        "From initial consultation to post-approval settlement, we're with you every step. Family sponsorship, banking, and housing assistance included.",
    },
    {
      icon: Trophy,
      title: 'Government Relationships',
      description:
        'Established connections with GDRFA, immigration authorities, and key government departments ensure smooth processing and priority handling of your application.',
    },
    {
      icon: Headset,
      title: 'Dedicated Account Manager',
      description:
        'A single point of contact who knows your case inside out. Direct WhatsApp access, same-day responses, and proactive updates throughout the process.',
    },
    {
      icon: Target,
      title: 'Tailored Strategy',
      description:
        'Every client is unique. We analyze your specific situation and create a customized application strategy that maximizes approval probability and minimizes processing time.',
    },
    {
      icon: Sparkles,
      title: 'Premium Service Standards',
      description:
        'White-glove treatment befitting your status. VIP government visits, concierge services, and luxury touches throughout your Golden Visa journey.',
    },
    {
      icon: Award,
      title: 'Post-Approval Excellence',
      description:
        "Our relationship doesn't end at approval. Ongoing support for renewals, family additions, business setup, and investment opportunities in the UAE.",
    },
  ];

  const stats = [
    { number: '500+', label: 'Golden Visas Approved' },
    { number: '100%', label: 'Success Rate' },
    { number: '20', label: 'Average Days Processing' },
    { number: '50+', label: 'Nationalities Served' },
  ];

  return (
    <section className="relative overflow-hidden bg-surface py-16 md:py-24 lg:py-32">
      {/* Subtle Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <img
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop"
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
              Why Expert Rock Wealth for Your Golden Visa
            </h2>
            <p className="body-lg mx-auto max-w-3xl text-muted-foreground">
              Choosing the right partner for your Golden Visa application is
              crucial. Here's why discerning clients trust Expert Rock Wealth
              with their UAE residency journey.
            </p>
          </motion.div>
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 grid grid-cols-2 gap-6 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="pinterest-card magnetic-hover group cursor-pointer p-8 text-center"
            >
              <div className="duration-400 mb-3 font-garamond text-5xl font-semibold text-heritage-gold transition-transform group-hover:scale-110">
                {stat.number}
              </div>
              <div className="body-sm font-medium text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Advantages Grid */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              viewport={{ once: true }}
              className="pinterest-card magnetic-hover group cursor-pointer p-6 md:p-10"
            >
              <div className="elegant-icon-wrapper mb-6">
                <advantage.icon className="h-6 w-6 text-primary" />
              </div>

              <h3 className="heading-sm duration-400 mb-4 text-foreground transition-colors group-hover:text-heritage-gold">
                {advantage.title}
              </h3>

              <p className="body-sm leading-relaxed text-muted-foreground">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial/Trust Element */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mt-20 max-w-4xl"
        >
          <div className="pinterest-card border-2 border-heritage-gold/30 p-12 text-center">
            <div className="elegant-icon-wrapper mx-auto mb-6">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="heading-sm mb-4 text-foreground">
              The Expert Rock Wealth Commitment
            </h3>
            <p className="body-lg mx-auto max-w-2xl italic leading-relaxed text-muted-foreground">
              "We don't just process applications—we build lasting
              relationships. Your success in the UAE is our mission, and your
              Golden Visa is just the beginning of a partnership that will
              support your family's prosperity for generations to come."
            </p>
            <div className="mt-8 border-t border-border/50 pt-6">
              <p className="body-sm font-semibold text-heritage-gold">
                Every client receives our personal guarantee of excellence
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
