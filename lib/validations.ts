import { z } from 'zod';

export const leadFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  services: z
    .array(z.string())
    .min(1, 'Please select at least one service')
    .max(5, 'Please select no more than 5 services'),
  budgetMin: z.number().min(0).optional(),
  budgetMax: z.number().min(0).optional(),
  timeline: z.string().optional(),
  notes: z.string().optional(),
  locale: z.string().default('en'),
});

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  consent: z.boolean().refine((val) => val === true, {
    message: 'You must consent to receive emails',
  }),
});

export const calculatorSchema = z.object({
  jurisdiction: z.string(),
  companyType: z.string(),
  shareholders: z.number().min(1).max(50),
  residencyVisas: z.number().min(0).max(10),
  bankingComplexity: z.enum(['basic', 'standard', 'complex']),
  taxPackage: z.boolean(),
  wealthTier: z.enum(['none', 'basic', 'premium', 'private']),
  bizDevHours: z.number().min(0).max(200),
  propertySearch: z.boolean(),
  propertyType: z.enum(['residential', 'commercial']).optional(),
  turnKeyBundle: z.boolean(),
  rushService: z.boolean(),
  weekendWork: z.boolean(),
});

export type LeadFormData = z.infer<typeof leadFormSchema>;
export type ContactFormData = z.infer<typeof contactFormSchema>;
export type NewsletterData = z.infer<typeof newsletterSchema>;
export type CalculatorData = z.infer<typeof calculatorSchema>;