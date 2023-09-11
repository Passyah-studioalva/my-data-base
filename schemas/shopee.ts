// schemas/shopee.ts
export default {
  name: 'shopee',
  type: 'document',
  title: 'Shopee',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule: { required: () => any; }) => rule.required(),
    },
    {
      name: 'number',
      title: 'Number',
      type: 'number',
      validation: (rule: { required: () => any; }) => rule.required(),
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
      validation: (rule: { required: () => any; }) => rule.required(),
    },
    // {
    //   name: 'slug',
    //   title: 'Slug',
    //   type: 'slug',
    //   options: {
    //     source: 'title',
    //     maxLength: 96,
    //     isUnique: (value: any, context: { defaultIsUnique: (arg0: any, arg1: any) => any; }) => context.defaultIsUnique(value, context),
    //   },
    //   validation: (rule: { required: () => any; }) => rule.required(),
    // },
    // {
    //   name: 'coverImage',
    //   title: 'Cover Image',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    // },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {type: 'block'},
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Image caption',
              description: 'Caption displayed below the image.',
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description: 'Important for SEO and accessiblity.',
            },
          ],
        },
      ],
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
  ],
}