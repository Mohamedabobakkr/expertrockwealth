'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, CheckCircle, TrendingUp } from 'lucide-react';

export function BlogNewsletter() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  Stay Updated with <span className="gradient-text">UAE Business Insights</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Get weekly insights, regulatory updates, and exclusive guides delivered to your inbox. 
                  Join 5,000+ entrepreneurs who trust our expertise.
                </p>
              </div>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-lg mx-auto mb-8">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1"
                />
                <Button size="lg" className="w-full md:w-auto px-8">
                  Subscribe Now
                </Button>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="flex items-center justify-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Weekly Newsletter</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Exclusive Guides</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>No Spam, Unsubscribe Anytime</span>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <TrendingUp className="w-4 h-4" />
                  <span>Join 5,000+ successful entrepreneurs</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}