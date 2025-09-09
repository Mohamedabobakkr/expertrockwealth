import { defineType, defineField } from 'sanity';

export const translation = defineType({
  name: 'translation',
  title: 'Translation',
  type: 'document',
  fields: [
    defineField({
      name: 'key',
      title: 'Translation Key',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Unique key for this translation (e.g., "nav.home", "cta.contact")',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Navigation', value: 'navigation' },
          { title: 'Common UI', value: 'common' },
          { title: 'Forms', value: 'forms' },
          { title: 'CTA Buttons', value: 'cta' },
          { title: 'Footer', value: 'footer' },
          { title: 'Services', value: 'services' },
          { title: 'Blog', value: 'blog' },
          { title: 'Calculator', value: 'calculator' },
          { title: 'Contact', value: 'contact' },
          { title: 'SEO', value: 'seo' },
        ],
      },
    }),
    defineField({
      name: 'translations',
      title: 'Translations',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'ar',
          title: 'Arabic',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Context or notes about this translation',
    }),
  ],
  orderings: [
    {
      title: 'Category',
      name: 'category',
      by: [
        { field: 'category', direction: 'asc' },
        { field: 'key', direction: 'asc' },
      ],
    },
    {
      title: 'Key A-Z',
      name: 'keyAsc',
      by: [{ field: 'key', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'key',
      subtitle: 'translations.en',
      description: 'category',
    },
    prepare(selection) {
      const { title, subtitle, description } = selection;
      return {
        title: title,
        subtitle: subtitle,
        description: description,
      };
    },
  },
});