'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Heart, Zap, Users, Target, Globe } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Trust & Transparency',
    description: 'We believe in complete transparency in all our dealings, providing clear pricing and honest advice.',
    color: 'text-blue-600'
  },
  {
    icon: Heart,
    title: 'Client-Centric Approach',
    description: 'Every client is unique, and we tailor our services to meet individual business needs and goals.',
    color: 'text-red-600'
  },
  {
    icon: Zap,
    title: 'Speed & Efficiency',
    description: 'We understand time is money. Our streamlined processes ensure faster setup times without compromising quality.',
    color: 'text-yellow-600'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Our team consists of licensed professionals with deep knowledge of UAE business regulations.',
    color: 'text-green-600'
  },
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'We measure our success by your success. Our 98% success rate speaks to our commitment.',
    color: 'text-purple-600'
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    description: 'We serve clients from around the world, bringing international best practices to UAE business formation.',
    color: 'text-indigo-600'
  }
];

export function AboutValues() {
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Our <span className="gradient-text">Values</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The principles that guide everything we do and define who we are as a company
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto bg-background rounded-full flex items-center justify-center mb-4 ${value.color}`}>
                    <value.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}