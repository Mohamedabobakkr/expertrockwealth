'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, X, AlertCircle } from 'lucide-react';

const pricingTiers = [
  {
    name: 'Starter Package',
    price: 'AED 12,000',
    description: 'Perfect for solo entrepreneurs and small consultancies',
    badge: 'Most Popular',
    features: [
      'Free Zone License',
      '1 Investor Visa',
      'Office Address (Flexi-desk)',
      'Initial Approvals',
      'Basic Banking Support',
      'License Certificate'
    ],
    notIncluded: [
      'Bank Account Opening',
      'Office Space',
      'Accounting Services'
    ],
    timeline: '5-7 business days',
    popular: true
  },
  {
    name: 'Professional Package',
    price: 'AED 25,000',
    description: 'Comprehensive setup for growing businesses',
    badge: 'Best Value',
    features: [
      'Free Zone or Mainland License',
      '2 Investor Visas',
      'Office Address + Meeting Room',
      'Bank Account Opening (1 bank)',
      'VAT Registration',
      'Labor Card Processing',
      'Emirates ID Processing',
      'License Certificate'
    ],
    notIncluded: [
      'Accounting Services',
      'Multiple Bank Accounts'
    ],
    timeline: '10-14 business days',
    popular: false
  },
  {
    name: 'Premium Package',
    price: 'AED 45,000',
    description: 'Complete turn-key solution with ongoing support',
    badge: 'All-Inclusive',
    features: [
      'Free Zone or Mainland License',
      '3-6 Investor Visas',
      'Dedicated Office Space',
      'Multi-bank Account Opening',
      'Accounting Setup (3 months)',
      'Tax Advisory Consultation',
      'Legal Documentation',
      'Ongoing Compliance Support',
      'Priority Processing'
    ],
    notIncluded: [],
    timeline: '7-10 business days',
    popular: false
  }
];

const governmentFees = [
  { item: 'Trade License Fee', price: 'AED 1,070 - 15,000', note: 'Varies by jurisdiction' },
  { item: 'Visa Processing', price: 'AED 3,000 per visa', note: 'Per person' },
  { item: 'Emirates ID', price: 'AED 270 per person', note: 'Valid for 2-3 years' },
  { item: 'Labor Card', price: 'AED 600 per person', note: 'Annual renewal' },
  { item: 'Medical Test', price: 'AED 320 per person', note: 'Mandatory for visas' },
  { item: 'Establishment Card', price: 'AED 1,020', note: 'One-time fee' }
];

export function PricingBreakdown() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Package Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            <span className="gradient-text">Popular Packages</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our pre-configured packages or use the calculator for custom pricing
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full ${tier.popular ? 'ring-2 ring-primary/20 relative' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      {tier.badge}
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{tier.price}</div>
                  <CardDescription className="text-base">{tier.description}</CardDescription>
                  <div className="text-sm text-muted-foreground">
                    Setup time: {tier.timeline}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-600">✓ Included</h4>
                    <ul className="space-y-2">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {tier.notIncluded.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-3 text-orange-600">⚠ Not Included</h4>
                      <ul className="space-y-2">
                        {tier.notIncluded.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <X className="w-4 h-4 text-orange-600 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Government Fees Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Government Fee Breakdown</CardTitle>
              <CardDescription className="text-center">
                Mandatory government charges included in all packages
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3">Fee Type</th>
                      <th className="text-center py-3">Cost</th>
                      <th className="text-center py-3">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {governmentFees.map((fee, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-3 font-medium">{fee.item}</td>
                        <td className="py-3 text-center">{fee.price}</td>
                        <td className="py-3 text-center text-sm text-muted-foreground">
                          {fee.note}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Important Notes</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• All government fees are subject to change without notice</li>
                      <li>• Visa processing times may vary based on nationality and documentation</li>
                      <li>• Additional fees may apply for specific business activities or amendments</li>
                      <li>• Our service fees are separate from government charges</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}