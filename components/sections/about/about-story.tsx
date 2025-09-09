'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export function AboutStory() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Our <span className="gradient-text">Story</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              From humble beginnings to becoming the UAE's premier business formation consultancy
            </p>
          </motion.div>

          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">The Beginning (2012)</h3>
                <p className="text-muted-foreground mb-6">
                  Expert Rock Wealth was founded in 2012 by a group of seasoned business professionals who 
                  recognized the growing need for expert guidance in UAE business formation. What started as 
                  a small consultancy has grown into the region's most trusted business formation partner.
                </p>
                <p className="text-muted-foreground">
                  Our founders, having navigated the complexities of UAE business setup themselves, understood 
                  the challenges entrepreneurs face and set out to simplify the process for others.
                </p>
              </div>
              <Card>
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">2012</div>
                    <div className="text-sm text-muted-foreground mb-4">Company Founded</div>
                    <div className="text-2xl font-bold mb-2">5</div>
                    <div className="text-sm text-muted-foreground">Founding Team Members</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <Card className="lg:order-1">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">2018</div>
                    <div className="text-sm text-muted-foreground mb-4">Major Expansion</div>
                    <div className="text-2xl font-bold mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">Clients Served</div>
                  </div>
                </CardContent>
              </Card>
              <div className="lg:order-0">
                <h3 className="text-2xl font-bold mb-4">Growth & Expansion</h3>
                <p className="text-muted-foreground mb-6">
                  By 2018, we had successfully helped over 500 businesses establish their presence in the UAE. 
                  This milestone marked our expansion into additional services including banking, visa processing, 
                  and wealth management.
                </p>
                <p className="text-muted-foreground">
                  We opened our flagship office in DIFC and began offering comprehensive turn-key solutions 
                  that go beyond basic company formation.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">Today & Beyond</h3>
                <p className="text-muted-foreground mb-6">
                  Today, Expert Rock Wealth stands as a testament to what dedicated service and expertise can achieve. 
                  With over 1,000 successful business formations and a 98% client satisfaction rate, we continue 
                  to be the preferred choice for UAE business setup.
                </p>
                <p className="text-muted-foreground">
                  As we look to the future, we're committed to innovation, expanding our digital services, 
                  and maintaining our position as the UAE's most trusted business formation partner.
                </p>
              </div>
              <Card>
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">2024</div>
                    <div className="text-sm text-muted-foreground mb-4">Present Day</div>
                    <div className="text-2xl font-bold mb-2">1000+</div>
                    <div className="text-sm text-muted-foreground">Success Stories</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}