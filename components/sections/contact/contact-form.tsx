'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Send, Loader2 } from 'lucide-react';

const services = [
  'UAE Residency Visa',
  'Business Formation',
  'Banking Setup',
  'Tax Planning',
  'Wealth Management',
  'Property Investment',
  'Turn-key Package',
  'Other'
];

const budgets = [
  'Under AED 25,000',
  'AED 25,000 - 50,000',
  'AED 50,000 - 100,000',
  'AED 100,000 - 250,000',
  'Above AED 250,000'
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
    newsletter: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <section className="bg-background py-24">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="pinterest-card text-center">
              <CardContent className="p-12">
                <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Send className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Message Sent Successfully!</h2>
                <p className="text-muted-foreground mb-6">
                  Thank you for reaching out. Our experts will review your inquiry and get back to you within 24 hours.
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Next Steps:</strong></p>
                  <p>1. Check your email for a confirmation message</p>
                  <p>2. Our consultant will contact you within 24 hours</p>
                  <p>3. We'll schedule your free consultation</p>
                </div>
                <Button 
                  className="elegant-button mt-6 font-semibold" 
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      firstName: '',
                      lastName: '',
                      email: '',
                      phone: '',
                      company: '',
                      service: '',
                      budget: '',
                      message: '',
                      newsletter: false
                    });
                  }}
                >
                  Send Another Message
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="pinterest-card">
            <CardHeader>
              <CardTitle>Get Your Free Consultation</CardTitle>
              <CardDescription>
                Fill out the form below and our experts will contact you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      className="elegant-input"
                      value={formData.firstName}
                      onChange={(e) => handleChange('firstName', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      className="elegant-input"
                      value={formData.lastName}
                      onChange={(e) => handleChange('lastName', e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      className="elegant-input"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      className="elegant-input"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="+971 50 123 4567"
                    />
                  </div>
                </div>

                {/* Company */}
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name (Optional)</Label>
                  <Input
                    id="company"
                    className="elegant-input"
                    value={formData.company}
                    onChange={(e) => handleChange('company', e.target.value)}
                    placeholder="Current or planned company name"
                  />
                </div>

                {/* Service Interest */}
                <div className="space-y-2">
                  <Label>Service Interest *</Label>
                  <Select value={formData.service} onValueChange={(value) => handleChange('service', value)} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select the service you're interested in" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map(service => (
                        <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, '-')}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Budget Range */}
                <div className="space-y-2">
                  <Label>Investment Budget (Optional)</Label>
                  <Select value={formData.budget} onValueChange={(value) => handleChange('budget', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your investment range" />
                    </SelectTrigger>
                    <SelectContent>
                      {budgets.map(budget => (
                        <SelectItem key={budget} value={budget.toLowerCase().replace(/\s+/g, '-')}>
                          {budget}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    className="elegant-input"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Tell us about your business goals, timeline, or any specific questions you have..."
                    rows={4}
                  />
                </div>

                {/* Newsletter Checkbox */}
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="newsletter"
                    checked={formData.newsletter}
                    onCheckedChange={(checked) => handleChange('newsletter', checked as boolean)}
                  />
                  <label
                    htmlFor="newsletter"
                    className="text-sm cursor-pointer"
                  >
                    Subscribe to our newsletter for UAE business insights and updates
                  </label>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  size="lg" 
                  className="elegant-button w-full text-lg font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>

                <div className="text-xs text-muted-foreground">
                  By submitting this form, you agree to our privacy policy and consent to being contacted by our team.
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}