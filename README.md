# Expert Rock Wealth - UAE Business Formation Portal

A production-ready marketing and lead generation portal for UAE business formation services, built with Next.js 14, TypeScript, and modern web technologies.

![Expert Rock Wealth](public/og-image.jpg)

## 🌟 Overview

Expert Rock Wealth is a luxury UAE business formation service that helps entrepreneurs and investors navigate company formation, residency visas, banking, and wealth management in the UAE. This portal provides comprehensive information, interactive tools, and streamlined lead capture flows.

## ✨ Features

### 🎯 Core Features
- **Multi-language Support** - English and Arabic with RTL support
- **Interactive Cost Calculator** - Real-time pricing with PDF export
- **Lead Management** - Multi-step forms with CRM integration
- **Content Management** - Sanity CMS with embedded studio
- **Blog & Case Studies** - MDX support with dynamic routing
- **Authentication** - NextAuth with role-based access control
- **SEO Optimized** - Meta tags, structured data, sitemaps
- **Analytics Ready** - GA4, PostHog, and consent management

### 🎨 Design & UX
- **Luxury Dark Theme** - Professional UAE business aesthetic
- **Responsive Design** - Mobile-first approach
- **Smooth Animations** - Framer Motion throughout
- **Accessibility** - WCAG 2.2 AA compliant
- **Performance** - Lighthouse 95+ scores

### 🛠 Technical Stack
- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS + shadcn/ui
- **Database:** Prisma + PostgreSQL (Neon)
- **CMS:** Sanity v3 with embedded Studio
- **Auth:** NextAuth.js
- **Email:** Resend
- **Deployment:** Vercel

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and pnpm
- PostgreSQL database (Neon recommended)
- Sanity account
- Email service (Resend)

### Installation

1. **Clone and install dependencies:**
```bash
git clone <repository-url>
cd expert-rock-wealth
pnpm install
```

2. **Environment Setup:**
```bash
cp .env.example .env.local
```

3. **Configure Environment Variables:**
```env
# Database
DATABASE_URL="postgresql://username:password@host:port/database"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"

# OAuth Providers
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
GITHUB_ID="your-github-id"
GITHUB_SECRET="your-github-secret"

# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID="your-sanity-project-id"
NEXT_PUBLIC_SANITY_DATASET="production"
SANITY_API_TOKEN="your-sanity-token"

# Email
RESEND_API_KEY="your-resend-api-key"
EMAIL_FROM="noreply@expertrockwealth.com"

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID="G-XXXXXXXXXX"
NEXT_PUBLIC_POSTHOG_KEY="your-posthog-key"
NEXT_PUBLIC_POSTHOG_HOST="https://app.posthog.com"

# Site Configuration
NEXT_PUBLIC_SITE_URL="https://expertrockwealth.com"
GOOGLE_VERIFICATION="your-google-verification-code"
```

4. **Database Setup:**
```bash
pnpm db:generate
pnpm db:push
pnpm db:seed
```

5. **Start Development:**
```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── [locale]/          # Internationalized routes
│   ├── api/               # API routes
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── layout/           # Layout components
│   ├── sections/         # Page sections
│   ├── forms/            # Form components
│   └── charts/           # Data visualization
├── lib/                  # Utility libraries
│   ├── auth.ts           # Authentication config
│   ├── db.ts             # Database client
│   ├── sanity.ts         # Sanity client & queries
│   ├── pricing.ts        # Calculator logic
│   └── validations.ts    # Zod schemas
├── messages/             # i18n translations
├── prisma/              # Database schema & migrations
├── sanity/              # CMS schema & configuration
├── public/              # Static assets
└── tests/               # Test suites
```

## 🎨 Design System

### Color Palette
```css
:root {
  --primary: 180 100% 15%;      /* Deep Teal #004D40 */
  --accent: 39 20% 67%;         /* Warm Beige #D2B48C */
  --background: 210 20% 6%;     /* Near Black #0B0F0E */
  --surface: 210 20% 10%;       /* Dark Surface #101513 */
  --border: 210 20% 15%;        /* Border #1F2623 */
}
```

### Typography
- **Display:** Playfair Display (serif) - Headlines
- **Body:** Inter (sans-serif) - UI text
- **Code:** Geist Mono - Code blocks

### Components
All components are built with:
- TypeScript strict mode
- Tailwind CSS utilities
- Radix UI primitives
- Framer Motion animations
- Accessibility features

## 🔧 Development

### Available Scripts

```bash
# Development
pnpm dev                 # Start development server
pnpm build              # Build for production
pnpm start              # Start production server

# Database
pnpm db:generate        # Generate Prisma client
pnpm db:push           # Push schema to database
pnpm db:migrate        # Run migrations
pnpm db:seed           # Seed database with sample data
pnpm db:studio         # Open Prisma Studio

# Code Quality
pnpm lint              # Run ESLint
pnpm lint:fix          # Fix ESLint issues
pnpm type-check        # Run TypeScript checks
pnpm format            # Format with Prettier

# Testing
pnpm test              # Run unit tests
pnpm test:e2e          # Run Playwright tests
pnpm test:coverage     # Generate coverage report

# CMS
pnpm sanity:dev        # Start Sanity Studio
pnpm sanity:build      # Build Sanity Studio
pnpm sanity:deploy     # Deploy Studio
```

## 📊 Content Management

### Sanity Studio
Access the embedded CMS at `/studio` (requires admin authentication).

### Content Types
- **Site Settings** - Global site configuration
- **Services** - Business services with pricing
- **Case Studies** - Client success stories
- **Blog Posts** - Articles and insights
- **Team Members** - Staff profiles
- **Testimonials** - Client reviews
- **Calculator Config** - Pricing parameters
- **Translations** - i18n content

### Publishing Flow
1. Create/edit content in Studio
2. Preview changes in draft mode
3. Publish to make live
4. Automatic revalidation triggers

## 🧮 Cost Calculator

The interactive calculator provides real-time estimates for:

### Services Covered
- **UAE Residency** - Visa processing and Emirates ID
- **Business Startup** - Company formation basics
- **Freezone vs Mainland** - Jurisdiction selection
- **Banking** - Corporate account setup
- **Tax Efficiency** - Registration and compliance
- **Wealth Management** - Advisory services
- **Business Development** - Consulting hours
- **Property Search** - Residential/commercial
- **Turn-key Package** - Complete setup bundle

### Features
- Real-time price calculation
- Configurable via CMS
- PDF export functionality
- Lead capture integration
- Shareable permalinks

## 📧 Lead Management

### Multi-step Form Flow
1. **About You** - Basic information
2. **Services** - Interest selection
3. **Budget & Timeline** - Requirements
4. **Additional Notes** - Custom needs
5. **File Upload** - Supporting documents

### CRM Integration
- **HubSpot** - Full integration available
- **Airtable** - Alternative option
- **Local Storage** - Fallback mode
- **Email Notifications** - Automated alerts

## 🌐 Internationalization

### Supported Languages
- **English (en)** - Default locale
- **Arabic (ar)** - RTL support

### Translation Management
- Static UI translations in JSON files
- Dynamic content via Sanity CMS
- Automatic locale detection
- Language switcher component

### URL Structure
```
/                    # English (default)
/ar                  # Arabic
/en/services         # English services
/ar/services         # Arabic services
```

## 🔒 Security Features

### Authentication
- Magic link email authentication
- Google OAuth integration
- GitHub OAuth integration
- Role-based access control (USER/ADMIN)

### Security Headers
- CSP (Content Security Policy)
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy

### Data Protection
- Rate limiting on API routes
- Input validation with Zod
- SQL injection protection via Prisma
- XSS protection via DOMPurify
- No PII logging policy

## 📈 Analytics & Monitoring

### Tracking Setup
- **Google Analytics 4** - User behavior
- **PostHog** - Product analytics
- **Vercel Analytics** - Performance metrics
- **Cookie Consent** - GDPR compliance

### Key Metrics
- Lead conversion rates
- Calculator usage patterns
- Content engagement
- Page performance
- User journey analysis

## 🧪 Testing

### Testing Strategy
- **Unit Tests** - Vitest for utilities
- **Component Tests** - React Testing Library
- **E2E Tests** - Playwright for user flows
- **Accessibility Tests** - axe-core integration

### Test Coverage
- Minimum 80% line coverage required
- Critical user paths covered
- Form validation testing
- API endpoint testing

## 🚀 Deployment

### Vercel Deployment
```bash
# Connect to Vercel
vercel link

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Environment Variables
Set all required environment variables in Vercel dashboard.

### Database Migration
```bash
# Production database setup
npx prisma migrate deploy
npx prisma db seed
```

### Post-Deployment Checklist
- [ ] Verify all environment variables
- [ ] Test authentication flows
- [ ] Confirm CMS integration
- [ ] Validate email sending
- [ ] Check analytics tracking
- [ ] Run accessibility audit
- [ ] Performance optimization review

## 📋 SEO Optimization

### Technical SEO
- **Meta Tags** - Dynamic title/description
- **Structured Data** - JSON-LD for rich snippets
- **XML Sitemap** - Auto-generated
- **Robots.txt** - Search engine guidance
- **Open Graph** - Social media previews
- **Canonical URLs** - Duplicate content handling

### Content SEO
- **Keyword Optimization** - UAE business terms
- **Internal Linking** - Strategic page connections
- **Image Alt Text** - Accessibility and SEO
- **Page Speed** - Core Web Vitals optimization
- **Mobile Optimization** - Mobile-first indexing

## 🐛 Troubleshooting

### Common Issues

**Build Errors:**
```bash
# Clear Next.js cache
rm -rf .next
pnpm dev
```

**Database Connection:**
```bash
# Test database connection
npx prisma db ping
```

**CMS Issues:**
```bash
# Restart Sanity Studio
pnpm sanity:dev
```

### Support

For technical support:
1. Check GitHub Issues
2. Review documentation
3. Contact development team

## 📄 License

This project is proprietary software owned by Expert Rock Wealth. All rights reserved.

## 🤝 Contributing

This is a private commercial project. Contributing guidelines are available for team members.

---

**Built with ❤️ for UAE entrepreneurs and investors**

For questions or support, contact: [tech@expertrockwealth.com](mailto:tech@expertrockwealth.com)