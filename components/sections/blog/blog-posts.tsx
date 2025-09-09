'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Complete Guide to UAE Golden Visa 2024',
    excerpt: 'Everything you need to know about the UAE Golden Visa program, eligibility criteria, and application process.',
    category: 'Visa & Immigration',
    author: 'Sarah Mitchell',
    date: '2024-01-15',
    readTime: '8 min read',
    featured: true,
    tags: ['Golden Visa', 'Immigration', 'Residency']
  },
  {
    id: 2,
    title: 'DMCC vs DIFC: Which Free Zone is Right for Your Business?',
    excerpt: 'A detailed comparison of Dubai\'s top business hubs to help you make the right choice for your company.',
    category: 'Business Formation',
    author: 'Ahmed Al-Rashid',
    date: '2024-01-12',
    readTime: '6 min read',
    featured: true,
    tags: ['DMCC', 'DIFC', 'Free Zones']
  },
  {
    id: 3,
    title: 'UAE Corporate Tax: What Businesses Need to Know',
    excerpt: 'Understanding the new UAE corporate tax regulations and their impact on businesses.',
    category: 'Tax & Compliance',
    author: 'Fatima Al-Zahra',
    date: '2024-01-10',
    readTime: '7 min read',
    featured: false,
    tags: ['Corporate Tax', 'Compliance', 'UAE Tax']
  },
  {
    id: 4,
    title: 'Opening a UAE Bank Account: Step-by-Step Guide',
    excerpt: 'Navigate the UAE banking system with our comprehensive guide to opening corporate and personal accounts.',
    category: 'Banking',
    author: 'Rajesh Patel',
    date: '2024-01-08',
    readTime: '5 min read',
    featured: false,
    tags: ['Banking', 'Account Opening', 'Emirates NBD']
  },
  {
    id: 5,
    title: 'Real Estate Investment Opportunities in Dubai',
    excerpt: 'Explore the hottest property investment opportunities and what foreign investors need to know.',
    category: 'Investment',
    author: 'Sarah Mitchell',
    date: '2024-01-05',
    readTime: '9 min read',
    featured: false,
    tags: ['Real Estate', 'Investment', 'Dubai Property']
  },
  {
    id: 6,
    title: 'Mainland vs Freezone: Making the Right Choice',
    excerpt: 'Understanding the key differences and choosing the best structure for your business needs.',
    category: 'Business Formation',
    author: 'Ahmed Al-Rashid',
    date: '2024-01-03',
    readTime: '6 min read',
    featured: false,
    tags: ['Mainland', 'Freezone', 'Business Structure']
  }
];

const categories = [
  'All',
  'Business Formation',
  'Visa & Immigration',
  'Tax & Compliance',
  'Banking',
  'Investment'
];

export function BlogPosts() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Featured Posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-4">
            <span className="gradient-text">Featured Articles</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Our most popular and impactful articles on UAE business formation
          </p>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary">{post.category}</Badge>
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Featured</Badge>
                    </div>
                    <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                    <CardDescription className="text-base">{post.excerpt}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map(tag => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button variant="outline" className="w-full" asChild>
                      <a href={`/blog/${post.id}`}>
                        Read Article
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map(category => (
              <Button
                key={category}
                variant={category === 'All' ? 'default' : 'outline'}
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Regular Posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-12">Latest Articles</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-md transition-all duration-300">
                  <CardHeader>
                    <Badge variant="outline" className="w-fit mb-2">{post.category}</Badge>
                    <CardTitle className="text-lg mb-2">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{post.author}</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <div className="text-xs text-muted-foreground">
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                    
                    <Button variant="ghost" size="sm" className="w-full p-0 h-auto justify-start text-primary" asChild>
                      <a href={`/blog/${post.id}`}>
                        Read More →
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}