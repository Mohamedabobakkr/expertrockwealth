import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types';

if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID');
}

if (!process.env.NEXT_PUBLIC_SANITY_DATASET) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_DATASET');
}

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
});

export const previewClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export function getClient(usePreview = false) {
  return usePreview ? previewClient : client;
}

// Common queries
export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0]`;

export const SERVICES_QUERY = `*[_type == "service"] | order(order asc, title asc)`;

export const FEATURED_SERVICES_QUERY = `*[_type == "service" && featured == true] | order(order asc)`;

export const SERVICE_BY_SLUG_QUERY = `*[_type == "service" && slug.current == $slug][0]`;

export const CASE_STUDIES_QUERY = `*[_type == "caseStudy"] | order(publishedAt desc)`;

export const FEATURED_CASE_STUDIES_QUERY = `*[_type == "caseStudy" && featured == true] | order(publishedAt desc)`;

export const CASE_STUDY_BY_SLUG_QUERY = `*[_type == "caseStudy" && slug.current == $slug][0]{
  ...,
  services[]->,
  "relatedCaseStudies": *[_type == "caseStudy" && slug.current != $slug && count(services[@._ref in ^.services[]._ref]) > 0] | order(publishedAt desc)[0...3]
}`;

export const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc)`;

export const FEATURED_POSTS_QUERY = `*[_type == "post" && featured == true] | order(publishedAt desc)`;

export const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  ...,
  author->
}`;

export const POSTS_BY_CATEGORY_QUERY = `*[_type == "post" && category == $category] | order(publishedAt desc)`;

export const TESTIMONIALS_QUERY = `*[_type == "testimonial"] | order(order asc)`;

export const FEATURED_TESTIMONIALS_QUERY = `*[_type == "testimonial" && featured == true] | order(order asc)`;

export const TEAM_MEMBERS_QUERY = `*[_type == "teamMember"] | order(order asc, name asc)`;

export const CALCULATOR_CONFIG_QUERY = `*[_type == "calculatorConfig"][0]`;

export const TRANSLATIONS_QUERY = `*[_type == "translation"] | order(category asc, key asc)`;

// Types
export interface SiteSettings {
  title: string;
  tagline: string;
  description: string;
  navigationLinks: Array<{
    title: string;
    href: string;
    external?: boolean;
  }>;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    whatsapp?: string;
  };
  contactEmail: string;
  contactPhone?: string;
  defaultLocale: string;
  supportedLocales: string[];
}

export interface Service {
  _id: string;
  title: string;
  slug: { current: string };
  summary: string;
  icon?: string;
  heroImage?: SanityImageSource;
  longDescription: any[];
  benefits: Array<{
    title: string;
    description?: string;
  }>;
  processSteps: Array<{
    title: string;
    description?: string;
    duration?: string;
  }>;
  faq: Array<{
    question: string;
    answer: string;
  }>;
  priceRange?: {
    min: number;
    max: number;
    currency: string;
  };
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: SanityImageSource;
  };
  featured: boolean;
  order: number;
}

export interface CaseStudy {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  heroImage: SanityImageSource;
  industry: string;
  services: Service[];
  metrics: Array<{
    label: string;
    value: string;
    description?: string;
  }>;
  challenge: any[];
  solution: any[];
  results: any[];
  timeline?: string;
  clientTestimonial?: {
    quote: string;
    authorName: string;
    authorRole: string;
    authorImage?: SanityImageSource;
  };
  gallery: SanityImageSource[];
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: SanityImageSource;
  };
  featured: boolean;
  publishedAt: string;
  relatedCaseStudies?: CaseStudy[];
}

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  heroImage: SanityImageSource;
  category: string;
  tags: string[];
  body: any[];
  author: TeamMember;
  publishedAt: string;
  readingTime?: number;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: SanityImageSource;
  };
  featured: boolean;
}

export interface Testimonial {
  _id: string;
  quote: string;
  authorName: string;
  authorRole: string;
  authorCompany?: string;
  authorAvatar?: SanityImageSource;
  companyLogo?: SanityImageSource;
  rating: number;
  featured: boolean;
  services: Service[];
  order: number;
}

export interface TeamMember {
  _id: string;
  name: string;
  slug?: { current: string };
  role: string;
  department?: string;
  photo: SanityImageSource;
  bio?: any[];
  expertise?: string[];
  languages?: string[];
  qualifications?: Array<{
    title: string;
    institution?: string;
    year?: number;
  }>;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
  featured: boolean;
  order: number;
  isAuthor: boolean;
}

export interface CalculatorConfig {
  _id: string;
  title: string;
  basePrice: number;
  jurisdictionCoefficients: Array<{
    name: string;
    value: string;
    coefficient: number;
  }>;
  companyTypeCoefficients: Array<{
    name: string;
    value: string;
    coefficient: number;
  }>;
  shareholderPrice: number;
  residencyVisaPrice: number;
  bankingComplexityPrices: Array<{
    name: string;
    value: string;
    price: number;
  }>;
  taxPackagePrice: number;
  wealthTierPrices: Array<{
    name: string;
    value: string;
    price: number;
  }>;
  bizDevHourlyRate: number;
  propertySearchPrices: Array<{
    name: string;
    value: string;
    price: number;
  }>;
  turnKeyBundlePrice: number;
  rushMultiplier: number;
  weekendMultiplier: number;
}

export interface Translation {
  _id: string;
  key: string;
  category?: string;
  translations: {
    en: string;
    ar?: string;
  };
  description?: string;
}