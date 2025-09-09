import { defineType, defineField } from 'sanity';

export const teamMember = defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 200,
      },
    }),
    defineField({
      name: 'role',
      title: 'Job Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'department',
      title: 'Department',
      type: 'string',
      options: {
        list: [
          { title: 'Executive', value: 'executive' },
          { title: 'Business Development', value: 'business-development' },
          { title: 'Legal & Compliance', value: 'legal' },
          { title: 'Finance & Accounting', value: 'finance' },
          { title: 'Client Services', value: 'client-services' },
          { title: 'Operations', value: 'operations' },
          { title: 'Marketing', value: 'marketing' },
        ],
      },
    }),
    defineField({
      name: 'photo',
      title: 'Profile Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
      description: 'Professional biography and background',
    }),
    defineField({
      name: 'expertise',
      title: 'Areas of Expertise',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'languages',
      title: 'Languages Spoken',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'qualifications',
      title: 'Professional Qualifications',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Qualification Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'institution',
              title: 'Institution',
              type: 'string',
            },
            {
              name: 'year',
              title: 'Year Obtained',
              type: 'number',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        {
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url',
        },
        {
          name: 'twitter',
          title: 'Twitter',
          type: 'url',
        },
        {
          name: 'email',
          title: 'Email',
          type: 'email',
        },
      ],
    }),
    defineField({
      name: 'featured',
      title: 'Featured Team Member',
      type: 'boolean',
      description: 'Show this team member prominently',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which to display this team member',
      initialValue: 0,
    }),
    defineField({
      name: 'isAuthor',
      title: 'Blog Author',
      type: 'boolean',
      description: 'Can this person author blog posts?',
      initialValue: false,
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'order',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Name A-Z',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }],
    },
    {
      title: 'Department',
      name: 'department',
      by: [{ field: 'department', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'photo',
    },
  },
});