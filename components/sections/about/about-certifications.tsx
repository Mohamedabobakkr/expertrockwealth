'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Shield, CheckCircle, Globe } from 'lucide-react';

const certifications = [
  {
    icon: Award,
    title: 'ISO 9001:2015 Certified',
    description: 'Quality management systems certification',
    issuer: 'International Organization for Standardization'
  },
  {
    icon: Shield,
    title: 'UAE Chamber of Commerce Member',
    description: 'Registered member in good standing',
    issuer: 'UAE Chamber of Commerce & Industry'
  },
  {
    icon: CheckCircle,
    title: 'Licensed Business Consultancy',
    description: 'Authorized to provide business formation services',
    issuer: 'Department of Economic Development'
  },
  {
    icon: Globe,
    title: 'International Trade Council Member',
    description: 'Global network of trade professionals',
    issuer: 'International Trade Council'
  }
];

const partnerships = [
  { name: 'DMCC', description: 'Authorized Service Provider' },
  { name: 'DIFC', description: 'Registered Consultant' },
  { name: 'ADGM', description: 'Licensed Representative' },
  { name: 'Emirates NBD', description: 'Corporate Banking Partner' },
  { name: 'HSBC UAE', description: 'Preferred Consultant' },
  { name: 'Mashreq Bank', description: 'Business Partner' }
];

export function AboutCertifications() {
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            <span className="gradient-text">Certifications</span> & Partnerships
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our credentials and strategic partnerships ensure the highest standards of service and compliance
          </p>
        </motion.div>

        {/* Certifications */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center mb-12"
          >
            Professional Certifications
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <cert.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-bold mb-2">{cert.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{cert.description}</p>
                    <Badge variant="outline" className="text-xs">
                      {cert.issuer}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partnerships */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-12">
            Strategic Partnerships
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {partnerships.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-between p-4 bg-muted/50 rounded-lg"
              >
                <div>
                  <div className="font-semibold">{partner.name}</div>
                  <div className="text-sm text-muted-foreground">{partner.description}</div>
                </div>
                <CheckCircle className="w-5 h-5 text-green-600" />
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 text-center">
            <h4 className="text-xl font-bold mb-4">Why Our Certifications Matter</h4>
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div>
                <div className="text-2xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Compliance Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">Licensed</div>
                <div className="text-sm text-muted-foreground">All Consultants</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">Insured</div>
                <div className="text-sm text-muted-foreground">Professional Liability</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}