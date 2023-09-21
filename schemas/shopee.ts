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
    /* Slug */
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
    /* Image */
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    /* Content */
    // {
    //   name: 'content',
    //   title: 'Content',
    //   type: 'array',
    //   of: [
    //     {type: 'block'},
    //     {
    //       type: 'image',
    //       options: {
    //         hotspot: true,
    //       },
    //       fields: [
    //         {
    //           name: 'caption',
    //           type: 'string',
    //           title: 'Image caption',
    //           description: 'Caption displayed below the image.',
    //         },
    //         {
    //           name: 'alt',
    //           type: 'string',
    //           title: 'Alternative text',
    //           description: 'Important for SEO and accessiblity.',
    //         },
    //       ],
    //     },
    //   ],
    // },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
  ],
  orderings: [
    {
      title: 'Number Old',
      name: 'number',
      by: [{field: 'number', direction: 'desc'}],
    },
    {
      title: 'Number New',
      name: 'number',
      by: [{field: 'number', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      number: 'number',
      media: 'coverImage',
    },
    prepare(selection: {title:any, number: any}) {
      const {title, number} = selection
      return {
        ...selection,
        title: `${title}`,
        subtitle: number && `uratan ke ${number}`
      }
    },
  },
}