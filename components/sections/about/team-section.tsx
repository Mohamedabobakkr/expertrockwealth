'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'Ahmed Al-Rashid',
    role: 'Founder & CEO',
    experience: '15+ years',
    specialization: 'Business Strategy & Formation',
    image: '/images/team/ahmed.jpg',
    bio: 'Former investment banker turned entrepreneur, Ahmed founded Expert Rock Wealth to simplify UAE business formation.',
    credentials: ['MBA Finance', 'CFA Charter', 'UAE Business License']
  },
  {
    name: 'Sarah Mitchell',
    role: 'Head of Client Services',
    experience: '12+ years',
    specialization: 'Visa & Immigration Services',
    image: '/images/team/sarah.jpg',
    bio: 'Immigration law expert with extensive experience in UAE visa processing and residency solutions.',
    credentials: ['LLM Immigration Law', 'Licensed Consultant', 'Multilingual']
  },
  {
    name: 'Rajesh Patel',
    role: 'Banking & Finance Director',
    experience: '18+ years',
    specialization: 'Corporate Banking Solutions',
    image: '/images/team/rajesh.jpg',
    bio: 'Former senior banker with deep relationships across UAE financial institutions.',
    credentials: ['MBA Banking', 'Chartered Accountant', 'Former VP at Emirates NBD']
  },
  {
    name: 'Fatima Al-Zahra',
    role: 'Legal Counsel',
    experience: '10+ years',
    specialization: 'Corporate Law & Compliance',
    image: '/images/team/fatima.jpg',
    bio: 'Corporate lawyer specializing in UAE commercial law and regulatory compliance.',
    credentials: ['LLB Corporate Law', 'UAE Bar Member', 'Compliance Certified']
  }
];

export function TeamSection() {
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
            Meet Our <span className="gradient-text">Expert Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our diverse team of experts brings together decades of experience in UAE business formation, 
            legal compliance, and financial services
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-primary">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <div className="text-primary font-semibold">{member.role}</div>
                    <Badge variant="secondary" className="mt-2">
                      {member.experience}
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Specialization</h4>
                      <p className="text-sm text-muted-foreground">{member.specialization}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm mb-2">About</h4>
                      <p className="text-sm text-muted-foreground">{member.bio}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm mb-2">Credentials</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.credentials.map((credential, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {credential}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-3 pt-4 border-t">
                      <button className="p-2 rounded-full hover:bg-primary/10 transition-colors">
                        <Linkedin className="w-4 h-4 text-primary" />
                      </button>
                      <button className="p-2 rounded-full hover:bg-primary/10 transition-colors">
                        <Mail className="w-4 h-4 text-primary" />
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Want to Meet Our Team?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Schedule a consultation to meet with our experts and discuss your UAE business formation needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-8 py-2"
              >
                Schedule Consultation
              </a>
              <a 
                href="tel:+971-4-123-4567" 
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-8 py-2"
              >
                Call Direct: +971 4 123 4567
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}