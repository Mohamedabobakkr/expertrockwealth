'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, MessageSquare, Calendar, Calculator } from 'lucide-react';

const contactMethods = [
  {
    icon: Phone,
    title: 'Phone',
    value: '+971 4 123 4567',
    description: 'Direct line to our consultants',
    action: 'Call Now',
    href: 'tel:+971-4-123-4567'
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'info@expertrockwealth.com',
    description: 'Get detailed responses within 24 hours',
    action: 'Send Email',
    href: 'mailto:info@expertrockwealth.com'
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp',
    value: '+971 50 123 4567',
    description: 'Quick questions and instant responses',
    action: 'Chat Now',
    href: 'https://wa.me/971501234567'
  }
];

const officeHours = [
  { day: 'Monday - Friday', hours: '8:00 AM - 8:00 PM GST' },
  { day: 'Saturday', hours: '9:00 AM - 5:00 PM GST' },
  { day: 'Sunday', hours: 'Emergency consultations only' }
];

export function ContactInfo() {
  return (
    <section className="bg-muted/30 py-24">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Contact Methods */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Get in Touch</h2>
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <method.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{method.title}</h3>
                        <p className="text-lg font-medium text-primary">{method.value}</p>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <a href={method.href} target="_blank" rel="noopener noreferrer">
                          {method.action}
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Office Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Office Hours</h3>
                </div>
                <div className="space-y-3">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm">{schedule.day}</span>
                      <span className="text-sm font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-primary/5 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Emergency Support:</strong> For urgent matters outside office hours, 
                    contact us via WhatsApp for immediate assistance.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="/calculator">
                      <Calculator className="mr-3 w-4 h-4" />
                      Calculate Setup Costs
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="https://calendly.com/expertrockwealth" target="_blank" rel="noopener noreferrer">
                      <Calendar className="mr-3 w-4 h-4" />
                      Book Free Consultation
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="/services">
                      <MapPin className="mr-3 w-4 h-4" />
                      Explore Our Services
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Response Time */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6">
              <h4 className="font-semibold mb-2">Our Commitment</h4>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="text-2xl font-bold text-primary">24h</div>
                  <div className="text-muted-foreground">Response Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-muted-foreground">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-muted-foreground">Support Available</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}