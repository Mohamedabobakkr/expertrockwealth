'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, X, AlertCircle } from 'lucide-react';

const comparisonData = {
  categories: [
    'Ownership',
    'Visa Allowance',
    'Office Requirements',
    'Business Activities',
    'Import/Export',
    'Banking',
    'Tax Benefits',
    'Setup Cost',
    'Timeline'
  ],
  freezone: {
    title: 'UAE Free Zone',
    subtitle: 'Best for international business',
    badge: 'Popular',
    features: [
      '100% foreign ownership',
      '1-6 visas per license',
      'Flexi-desk options available',
      'Limited to approved activities',
      'Restricted to freezone',
      'Easy account opening',
      '0% corporate tax (most cases)',
      'AED 15,000 - 35,000',
      '3-5 business days'
    ],
    pros: [
      '100% ownership',
      'Tax benefits',
      'Fast setup',
      'Easy banking'
    ],
    cons: [
      'Limited activities',
      'Trading restrictions',
      'Renewal requirements'
    ]
  },
  mainland: {
    title: 'UAE Mainland',
    subtitle: 'Best for local market access',
    badge: 'Recommended',
    features: [
      '100% ownership (most sectors)',
      '1-6 visas per license',
      'Physical office required',
      'Wide range of activities',
      'Full UAE market access',
      'More documentation needed',
      '5% corporate tax (profit > 375k)',
      'AED 20,000 - 50,000',
      '5-10 business days'
    ],
    pros: [
      'Market access',
      'Activity flexibility',
      'Government contracts',
      'Local partnerships'
    ],
    cons: [
      'Higher costs',
      'Office requirements',
      'Complex procedures'
    ]
  }
};

export function ServiceComparison() {
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
            <span className="gradient-text">Freezone vs Mainland</span> Comparison
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the right business structure for your specific needs and goals
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {Object.entries(comparisonData).filter(([key]) => key !== 'categories').map(([key, data], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <CardTitle className="text-2xl">{data.title}</CardTitle>
                    <Badge variant={key === 'freezone' ? 'secondary' : 'default'}>
                      {data.badge}
                    </Badge>
                  </div>
                  <CardDescription className="text-base">{data.subtitle}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-600">✓ Advantages</h4>
                    <ul className="space-y-2">
                      {data.pros.map((pro, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-green-600 shrink-0" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-orange-600">⚠ Considerations</h4>
                    <ul className="space-y-2">
                      {data.cons.map((con, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <AlertCircle className="w-4 h-4 text-orange-600 shrink-0" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
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
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-xl">Detailed Feature Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Feature</th>
                      <th className="text-center py-3 px-4">Free Zone</th>
                      <th className="text-center py-3 px-4">Mainland</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.categories.map((category, index) => (
                      <tr key={category} className="border-b">
                        <td className="py-3 px-4 font-medium">{category}</td>
                        <td className="py-3 px-4 text-center text-sm">
                          {comparisonData.freezone.features[index]}
                        </td>
                        <td className="py-3 px-4 text-center text-sm">
                          {comparisonData.mainland.features[index]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}