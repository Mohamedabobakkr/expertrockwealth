'use client';

import { motion } from 'framer-motion';
import {
  Building,
  Users,
  CreditCard,
  Home,
  TrendingUp,
  Shield,
  Briefcase,
  Search,
  Package,
} from 'lucide-react';

export function FeaturedServices() {
  const services = [
    {
      icon: Users,
      title: 'UAE Residency',
      description:
        'Visa processing and Emirates ID setup for individuals and families',
      image:
        'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?q=80&w=2070&auto=format&fit=crop',
    },
    {
      icon: Building,
      title: 'Business Startup',
      description:
        'Complete company formation and business registration services',
      image:
        'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2096&auto=format&fit=crop',
    },
    {
      icon: Shield,
      title: 'Freezone vs Mainland',
      description:
        'Expert guidance on choosing the right jurisdiction for your business',
      image:
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070&auto=format&fit=crop',
    },
    {
      icon: CreditCard,
      title: 'Banking',
      description: 'Corporate and personal banking account setup assistance',
      image:
        'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?q=80&w=2187&auto=format&fit=crop',
    },
    {
      icon: TrendingUp,
      title: 'Tax Efficiency',
      description: 'Tax registration and compliance planning services',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    },
    {
      icon: Briefcase,
      title: 'Wealth Management',
      description: 'Investment advisory and wealth management solutions',
      image:
        'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2071&auto=format&fit=crop',
    },
    {
      icon: Package,
      title: 'Business Development',
      description: 'Strategic consulting and business growth services',
      image:
        'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074&auto=format&fit=crop',
    },
    {
      icon: Search,
      title: 'Property Search',
      description: 'Residential and commercial property search and advisory',
      image:
        'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop',
    },
    {
      icon: Home,
      title: 'Turn-key Setup',
      description: 'Complete end-to-end business setup and support services',
      image:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    },
  ];

  return (
    <section className="pinterest-section relative overflow-hidden py-16 md:py-24 lg:py-32">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.04]">
        <div className="absolute right-0 top-0 h-[800px] w-[800px]">
          <img
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12">
        <div className="mb-12 text-center md:mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg ultra-premium-text mb-6">
              Tailored Wealth Solutions
            </h2>
            <p className="elegant-subtext mx-auto">
              Bespoke services designed for sophisticated entrepreneurs and
              family offices seeking to establish their UAE presence
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: index * 0.08,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
              className="pinterest-card magnetic-hover group cursor-pointer p-6 md:p-8 lg:p-10"
            >
              <div className="elegant-icon-wrapper mb-6">
                <service.icon className="duration-400 h-6 w-6 text-primary transition-colors" />
              </div>
              <h3 className="heading-sm duration-400 mb-5 text-foreground transition-colors group-hover:text-heritage-gold">
                {service.title}
              </h3>
              <p className="body-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
