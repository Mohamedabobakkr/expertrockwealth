import { defineType, defineField } from 'sanity';

export const calculatorConfig = defineType({
  name: 'calculatorConfig',
  title: 'Calculator Configuration',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Configuration Title',
      type: 'string',
      initialValue: 'Default Calculator Config',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'basePrice',
      title: 'Base Price (AED)',
      type: 'number',
      initialValue: 5000,
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'jurisdictionCoefficients',
      title: 'Jurisdiction Coefficients',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Jurisdiction Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'value',
              title: 'Jurisdiction Value',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'coefficient',
              title: 'Price Coefficient',
              type: 'number',
              validation: (Rule) => Rule.required().min(0),
            },
          ],
        },
      ],
      initialValue: [
        { name: 'Abu Dhabi Mainland', value: 'abu-dhabi-mainland', coefficient: 1.2 },
        { name: 'Dubai Mainland', value: 'dubai-mainland', coefficient: 1.0 },
        { name: 'Sharjah Mainland', value: 'sharjah-mainland', coefficient: 0.8 },
        { name: 'ADGM', value: 'adgm', coefficient: 1.8 },
        { name: 'DIFC', value: 'difc', coefficient: 2.0 },
        { name: 'Dubai South', value: 'dubai-south', coefficient: 1.1 },
        { name: 'Ajman Freezone', value: 'ajman-freezone', coefficient: 0.9 },
        { name: 'RAK Freezone', value: 'rak-freezone', coefficient: 0.85 },
        { name: 'Fujairah Freezone', value: 'fujairah-freezone', coefficient: 0.8 },
      ],
    }),
    defineField({
      name: 'companyTypeCoefficients',
      title: 'Company Type Coefficients',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Company Type Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'value',
              title: 'Company Type Value',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'coefficient',
              title: 'Price Coefficient',
              type: 'number',
              validation: (Rule) => Rule.required().min(0),
            },
          ],
        },
      ],
      initialValue: [
        { name: 'LLC', value: 'llc', coefficient: 1.0 },
        { name: 'Sole Establishment', value: 'sole-establishment', coefficient: 0.6 },
        { name: 'Holding Company', value: 'holding', coefficient: 1.5 },
        { name: 'Professional Company', value: 'professional', coefficient: 1.3 },
        { name: 'Branch Office', value: 'branch-office', coefficient: 1.4 },
      ],
    }),
    defineField({
      name: 'shareholderPrice',
      title: 'Price per Additional Shareholder (AED)',
      type: 'number',
      initialValue: 500,
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'residencyVisaPrice',
      title: 'Price per Residency Visa (AED)',
      type: 'number',
      initialValue: 3500,
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'bankingComplexityPrices',
      title: 'Banking Complexity Prices',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Banking Complexity Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'value',
              title: 'Banking Complexity Value',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'price',
              title: 'Price (AED)',
              type: 'number',
              validation: (Rule) => Rule.required().min(0),
            },
          ],
        },
      ],
      initialValue: [
        { name: 'Basic Banking', value: 'basic', price: 2500 },
        { name: 'Standard Banking', value: 'standard', price: 4500 },
        { name: 'Complex Banking', value: 'complex', price: 8500 },
      ],
    }),
    defineField({
      name: 'taxPackagePrice',
      title: 'Tax Package Price (AED)',
      type: 'number',
      initialValue: 2500,
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'wealthTierPrices',
      title: 'Wealth Management Tier Prices',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Wealth Tier Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'value',
              title: 'Wealth Tier Value',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'price',
              title: 'Price (AED)',
              type: 'number',
              validation: (Rule) => Rule.required().min(0),
            },
          ],
        },
      ],
      initialValue: [
        { name: 'None', value: 'none', price: 0 },
        { name: 'Basic', value: 'basic', price: 5000 },
        { name: 'Premium', value: 'premium', price: 15000 },
        { name: 'Private Banking', value: 'private', price: 35000 },
      ],
    }),
    defineField({
      name: 'bizDevHourlyRate',
      title: 'Business Development Hourly Rate (AED)',
      type: 'number',
      initialValue: 150,
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'propertySearchPrices',
      title: 'Property Search Prices',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Property Type Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'value',
              title: 'Property Type Value',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'price',
              title: 'Price (AED)',
              type: 'number',
              validation: (Rule) => Rule.required().min(0),
            },
          ],
        },
      ],
      initialValue: [
        { name: 'Residential Property', value: 'residential', price: 3500 },
        { name: 'Commercial Property', value: 'commercial', price: 7500 },
      ],
    }),
    defineField({
      name: 'turnKeyBundlePrice',
      title: 'Turn-key Bundle Price (AED)',
      type: 'number',
      initialValue: 8500,
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'rushMultiplier',
      title: 'Rush Service Multiplier',
      type: 'number',
      initialValue: 1.5,
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'weekendMultiplier',
      title: 'Weekend Work Multiplier',
      type: 'number',
      initialValue: 1.3,
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
});