'use client';

import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
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
    'Timeline',
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
      '3-5 business days',
    ],
    pros: ['100% ownership', 'Tax benefits', 'Fast setup', 'Easy banking'],
    cons: [
      'Limited activities',
      'Trading restrictions',
      'Renewal requirements',
    ],
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
      '5-10 business days',
    ],
    pros: [
      'Market access',
      'Activity flexibility',
      'Government contracts',
      'Local partnerships',
    ],
    cons: ['Higher costs', 'Office requirements', 'Complex procedures'],
  },
};

export function ServiceComparison() {
  return (
    <section className="bg-muted/30 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
            <span className="gradient-text">Freezone vs Mainland</span>{' '}
            Comparison
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Choose the right business structure for your specific needs and
            goals
          </p>
        </motion.div>

        <div className="mb-16 grid gap-8 lg:grid-cols-2">
          {Object.entries(comparisonData)
            .filter(([key]) => key !== 'categories')
            .map(([key, data], index) => {
              if (Array.isArray(data)) return null;
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardHeader className="text-center">
                      <div className="mb-2 flex items-center justify-center gap-2">
                        <CardTitle className="text-2xl">{data.title}</CardTitle>
                        <Badge
                          variant={key === 'freezone' ? 'secondary' : 'default'}
                        >
                          {data.badge}
                        </Badge>
                      </div>
                      <CardDescription className="text-base">
                        {data.subtitle}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="mb-3 font-semibold text-green-600">
                          ✓ Advantages
                        </h4>
                        <ul className="space-y-2">
                          {data.pros.map((pro, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-2 text-sm"
                            >
                              <Check className="h-4 w-4 shrink-0 text-green-600" />
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="mb-3 font-semibold text-orange-600">
                          ⚠ Considerations
                        </h4>
                        <ul className="space-y-2">
                          {data.cons.map((con, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-2 text-sm"
                            >
                              <AlertCircle className="h-4 w-4 shrink-0 text-orange-600" />
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-xl">
                Detailed Feature Comparison
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="px-4 py-3 text-left">Feature</th>
                      <th className="px-4 py-3 text-center">Free Zone</th>
                      <th className="px-4 py-3 text-center">Mainland</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.categories.map((category, index) => (
                      <tr key={category} className="border-b">
                        <td className="px-4 py-3 font-medium">{category}</td>
                        <td className="px-4 py-3 text-center text-sm">
                          {comparisonData.freezone.features[index]}
                        </td>
                        <td className="px-4 py-3 text-center text-sm">
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
