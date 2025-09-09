'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

const offices = [
  {
    name: 'Dubai - DIFC Office',
    address: 'Level 14, The Gate, West Wing\nDubai International Financial Centre\nDubai, UAE',
    phone: '+971 4 123 4567',
    hours: 'Mon-Fri: 8AM-8PM GST',
    description: 'Our flagship office serving international clients',
    mapLink: 'https://maps.google.com/maps?q=The+Gate+DIFC+Dubai',
    primary: true
  },
  {
    name: 'Dubai - Business Bay',
    address: 'Office 1204, Clover Bay Tower\nBusiness Bay, Dubai, UAE',
    phone: '+971 4 234 5678',
    hours: 'Mon-Sat: 9AM-7PM GST',
    description: 'Convenient location for local consultations',
    mapLink: 'https://maps.google.com/maps?q=Clover+Bay+Tower+Business+Bay+Dubai',
    primary: false
  },
  {
    name: 'Abu Dhabi Office',
    address: 'Floor 12, Al Sila Tower\nAbu Dhabi Global Market Square\nAl Maryah Island, Abu Dhabi',
    phone: '+971 2 345 6789',
    hours: 'Mon-Fri: 8AM-6PM GST',
    description: 'Serving Abu Dhabi and Northern Emirates',
    mapLink: 'https://maps.google.com/maps?q=Al+Sila+Tower+ADGM+Abu+Dhabi',
    primary: false
  }
];

export function OfficeLocations() {
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Our <span className="gradient-text">Office Locations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visit us at any of our strategically located offices across the UAE
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {offices.map((office, index) => (
            <motion.div
              key={office.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full ${office.primary ? 'ring-2 ring-primary/20' : ''}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{office.name}</CardTitle>
                      {office.primary && (
                        <div className="mt-2">
                          <span className="bg-primary text-primary-foreground px-2 py-1 text-xs rounded-full">
                            Flagship Office
                          </span>
                        </div>
                      )}
                    </div>
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <CardDescription>{office.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                    <div className="text-sm">
                      {office.address.split('\n').map((line, i) => (
                        <div key={i}>{line}</div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{office.phone}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{office.hours}</span>
                  </div>

                  <Button variant="outline" className="w-full mt-4" asChild>
                    <a 
                      href={office.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Navigation className="mr-2 w-4 h-4" />
                      Get Directions
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader className="text-center">
              <CardTitle>Find Us on the Map</CardTitle>
              <CardDescription>
                All our offices are located in prime business districts for your convenience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">
                    Interactive map will be loaded here
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Click on any office address above for detailed directions
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Ready to Visit Us?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Schedule a free consultation at any of our offices. Our experts will provide 
              personalized guidance for your UAE business formation journey.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="px-8" asChild>
                <a href="https://calendly.com/expertrockwealth" target="_blank" rel="noopener noreferrer">
                  Schedule Office Visit
                </a>
              </Button>
              <Button size="lg" variant="outline" className="px-8" asChild>
                <a href="tel:+971-4-123-4567">
                  Call to Confirm
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}