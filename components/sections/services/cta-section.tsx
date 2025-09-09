'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Calendar, Calculator, MessageSquare, Phone } from 'lucide-react';

const ctaOptions = [
  {
    icon: Calendar,
    title: 'Book Free Consultation',
    description: 'Get expert advice tailored to your specific needs',
    action: 'Schedule Call',
    href: '/contact',
    variant: 'default' as const
  },
  {
    icon: Calculator,
    title: 'Calculate Your Costs',
    description: 'Get instant pricing for your business setup',
    action: 'Use Calculator',
    href: '/calculator',
    variant: 'outline' as const
  },
  {
    icon: MessageSquare,
    title: 'Chat with Expert',
    description: 'Quick questions? Chat with our consultants',
    action: 'Start Chat',
    href: '/contact',
    variant: 'outline' as const
  }
];

export function CTASection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Ready to <span className="gradient-text">Start Your Journey?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose how you'd like to get started with your UAE business formation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {ctaOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <option.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{option.title}</h3>
                  <p className="text-muted-foreground mb-6">{option.description}</p>
                  <Button
                    variant={option.variant}
                    size="lg"
                    className="w-full"
                    asChild
                  >
                    <a href={option.href}>
                      {option.action}
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
          className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 text-center"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">
              Need Immediate Assistance?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our UAE business formation experts are available to help you make the right decisions for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="px-8" asChild>
                <a href="tel:+971-4-123-4567">
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now: +971 4 123 4567
                </a>
              </Button>
              <Button size="lg" variant="outline" className="px-8" asChild>
                <a href="mailto:info@expertrockwealth.com">
                  <MessageSquare className="mr-2 w-5 h-5" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}