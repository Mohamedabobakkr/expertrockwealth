'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Building2,
  MapPin,
  CreditCard,
  PiggyBank,
  TrendingUp,
  Shield,
  Briefcase,
  Home,
  Settings,
  ArrowRight,
  Clock,
  Users,
  Star
} from 'lucide-react';

const services = [
  {
    icon: MapPin,
    title: 'UAE Residency',
    description: 'Golden Visa, investor visa, and family residency permits',
    features: ['2-10 year visas', 'Family inclusion', 'Fast processing'],
    pricing: 'From AED 15,000',
    timeline: '2-4 weeks',
    popular: true,
    link: '/services/residency'
  },
  {
    icon: Building2,
    title: 'Business Startup',
    description: 'Complete company formation and licensing services',
    features: ['LLC & Freezone setup', 'Trade license', 'Local sponsorship'],
    pricing: 'From AED 12,000',
    timeline: '1-2 weeks',
    popular: true,
    link: '/services/business-startup'
  },
  {
    icon: CreditCard,
    title: 'Banking Solutions',
    description: 'Corporate and personal banking account opening',
    features: ['Multi-currency accounts', 'Online banking', 'Debit cards'],
    pricing: 'From AED 5,000',
    timeline: '1-3 weeks',
    popular: false,
    link: '/services/banking'
  },
  {
    icon: PiggyBank,
    title: 'Tax Efficiency',
    description: 'Optimize your tax structure legally and effectively',
    features: ['0% personal tax', 'Corporate structuring', 'Double taxation treaties'],
    pricing: 'From AED 8,000',
    timeline: '2-3 weeks',
    popular: false,
    link: '/services/tax-efficiency'
  },
  {
    icon: TrendingUp,
    title: 'Wealth Management',
    description: 'Investment and wealth preservation strategies',
    features: ['Portfolio management', 'Investment advisory', 'Estate planning'],
    pricing: 'From AED 25,000',
    timeline: '1-2 weeks',
    popular: false,
    link: '/services/wealth-management'
  },
  {
    icon: Briefcase,
    title: 'Business Development',
    description: 'Scale and grow your UAE business operations',
    features: ['Market entry', 'Partnership facilitation', 'Growth strategies'],
    pricing: 'Custom pricing',
    timeline: '2-8 weeks',
    popular: false,
    link: '/services/business-development'
  },
  {
    icon: Home,
    title: 'Property Search',
    description: 'Find and secure prime real estate investments',
    features: ['Investment properties', 'Commercial spaces', 'Rental management'],
    pricing: 'Commission based',
    timeline: '2-12 weeks',
    popular: false,
    link: '/services/property'
  },
  {
    icon: Settings,
    title: 'Turn-key Setup',
    description: 'Complete business setup with all services included',
    features: ['All-in-one package', 'Dedicated manager', 'Ongoing support'],
    pricing: 'From AED 45,000',
    timeline: '4-6 weeks',
    popular: true,
    link: '/services/turnkey'
  },
  {
    icon: Shield,
    title: 'Freezone vs Mainland',
    description: 'Expert guidance on the best business structure',
    features: ['Structure comparison', 'Jurisdiction selection', 'Cost analysis'],
    pricing: 'Free consultation',
    timeline: '1-2 days',
    popular: false,
    link: '/services/comparison'
  }
];

export function ServiceGrid() {
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
            Our <span className="gradient-text">Complete Service Suite</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to establish, operate, and grow your business in the UAE
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full hover:shadow-lg transition-all duration-300 ${service.popular ? 'ring-2 ring-primary/20' : ''}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        {service.popular && (
                          <Badge variant="secondary" className="mt-1">
                            <Star className="w-3 h-3 mr-1" />
                            Popular
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base mt-3">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {service.timeline}
                    </div>
                    <div className="font-semibold text-foreground">
                      {service.pricing}
                    </div>
                  </div>

                  <Button asChild className="w-full">
                    <a href={service.link}>
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full text-sm">
            <Users className="w-4 h-4 text-primary" />
            <span>Need a custom package? <a href="/contact" className="text-primary hover:underline">Contact our experts</a></span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}