'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Clock, DollarSign } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: 'Tech Startup Scales Globally from Dubai',
    company: 'TechFlow Solutions',
    industry: 'Technology',
    challenge: 'A European AI startup needed to establish a Middle East presence to access regional markets and talent.',
    solution: 'Set up DMCC freezone company with 3 investor visas, corporate banking, and office space in Dubai.',
    results: [
      '200% revenue growth in first year',
      'Hired 15 local employees',
      'Secured $2M regional funding'
    ],
    timeline: '3 weeks',
    investment: 'AED 45,000',
    featured: true
  },
  {
    id: 2,
    title: 'Family Office Wealth Management Setup',
    company: 'Al-Mansouri Family Office',
    industry: 'Wealth Management',
    challenge: 'High net worth family needed structured wealth management and tax optimization in UAE.',
    solution: 'Established family office structure with investment company, banking relationships, and residency visas.',
    results: [
      'AED 50M assets under management',
      'Zero personal tax liability',
      'Multi-generational visa solution'
    ],
    timeline: '4 weeks',
    investment: 'AED 85,000',
    featured: false
  },
  {
    id: 3,
    title: 'E-commerce Empire Expansion',
    company: 'Desert Commerce Ltd',
    industry: 'E-commerce',
    challenge: 'Growing e-commerce business needed UAE base for GCC market expansion and logistics optimization.',
    solution: 'Dubai mainland company with VAT registration, multiple bank accounts, and import/export licenses.',
    results: [
      '400% increase in GCC sales',
      'Reduced logistics costs by 35%',
      'Established regional warehouse'
    ],
    timeline: '2.5 weeks',
    investment: 'AED 32,000',
    featured: true
  },
  {
    id: 4,
    title: 'Manufacturing Joint Venture',
    company: 'Emirates Manufacturing Co',
    industry: 'Manufacturing',
    challenge: 'German manufacturer needed local partner and facility to serve Middle East markets.',
    solution: 'Sharjah freezone setup with local partnerships, industrial licenses, and workforce recruitment.',
    results: [
      'First production line operational',
      '25 skilled workers hired',
      '$5M in regional contracts'
    ],
    timeline: '6 weeks',
    investment: 'AED 120,000',
    featured: false
  },
  {
    id: 5,
    title: 'Consulting Firm Digital Transformation',
    company: 'Strategic Advisory Group',
    industry: 'Consulting',
    challenge: 'International consulting firm needed UAE presence for government and corporate clients.',
    solution: 'DIFC company formation with professional services license and premium office space.',
    results: [
      '10 major government contracts',
      'Team of 12 consultants',
      'Regional hub established'
    ],
    timeline: '3 weeks',
    investment: 'AED 55,000',
    featured: false
  },
  {
    id: 6,
    title: 'Real Estate Investment Platform',
    company: 'Oasis Property Investments',
    industry: 'Real Estate',
    challenge: 'Property investment firm needed regulatory compliance and investor structure in UAE.',
    solution: 'ADGM financial services entity with fund management license and investor protection protocols.',
    results: [
      'AED 100M fund launched',
      '50+ international investors',
      'Regulatory compliance achieved'
    ],
    timeline: '8 weeks',
    investment: 'AED 150,000',
    featured: true
  }
];

export function CaseStudiesGrid() {
  const featuredStudies = caseStudies.filter(study => study.featured);
  const otherStudies = caseStudies.filter(study => !study.featured);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Featured Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4">
            <span className="gradient-text">Featured Success Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Discover how we've helped businesses achieve remarkable growth and success in the UAE
          </p>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {featuredStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="secondary">{study.industry}</Badge>
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Featured</Badge>
                    </div>
                    <CardTitle className="text-xl">{study.title}</CardTitle>
                    <CardDescription className="text-base">{study.company}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-orange-600">Challenge</h4>
                      <p className="text-sm text-muted-foreground">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2 text-blue-600">Solution</h4>
                      <p className="text-sm text-muted-foreground">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3 text-green-600">Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <TrendingUp className="w-4 h-4 text-green-600 shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm pt-4 border-t">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span>{study.timeline}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4 text-muted-foreground" />
                        <span>{study.investment}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-12">More Success Stories</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-md transition-all duration-300">
                  <CardHeader>
                    <Badge variant="outline" className="w-fit mb-2">{study.industry}</Badge>
                    <CardTitle className="text-lg">{study.title}</CardTitle>
                    <CardDescription>{study.company}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {study.challenge}
                    </p>
                    
                    <div className="space-y-2">
                      <h5 className="font-semibold text-sm text-green-600">Key Results:</h5>
                      <div className="text-sm">
                        {study.results[0]}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t">
                      <span>Timeline: {study.timeline}</span>
                      <span>Investment: {study.investment}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12">
            <h3 className="text-2xl font-bold mb-4">Ready to Write Your Success Story?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join over 1,000 successful businesses that have chosen Expert Rock Wealth for their 
              UAE business formation. Your success story could be next.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="px-8" asChild>
                <a href="/contact">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="px-8" asChild>
                <a href="/calculator">Calculate Your Costs</a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}