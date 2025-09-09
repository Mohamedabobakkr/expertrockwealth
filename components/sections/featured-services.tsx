'use client';

import { motion } from 'framer-motion';
import { Building, Users, CreditCard, Home, TrendingUp, Shield, Briefcase, Search, Package } from 'lucide-react';

export function FeaturedServices() {
  const services = [
    {
      icon: Users,
      title: "UAE Residency",
      description: "Visa processing and Emirates ID setup for individuals and families"
    },
    {
      icon: Building,
      title: "Business Startup",
      description: "Complete company formation and business registration services"
    },
    {
      icon: Shield,
      title: "Freezone vs Mainland",
      description: "Expert guidance on choosing the right jurisdiction for your business"
    },
    {
      icon: CreditCard,
      title: "Banking",
      description: "Corporate and personal banking account setup assistance"
    },
    {
      icon: TrendingUp,
      title: "Tax Efficiency",
      description: "Tax registration and compliance planning services"
    },
    {
      icon: Briefcase,
      title: "Wealth Management",
      description: "Investment advisory and wealth management solutions"
    },
    {
      icon: Package,
      title: "Business Development",
      description: "Strategic consulting and business growth services"
    },
    {
      icon: Search,
      title: "Property Search",
      description: "Residential and commercial property search and advisory"
    },
    {
      icon: Home,
      title: "Turn-key Setup",
      description: "Complete end-to-end business setup and support services"
    }
  ];

  return (
    <section className="pinterest-section bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4 elegant-gradient-text">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for your UAE business journey
          </p>
        </div>
        
        <div className="pinterest-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="pinterest-card p-6 group cursor-pointer"
            >
              <div className="elegant-icon-wrapper">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}