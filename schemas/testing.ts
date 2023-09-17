// schemas/shopee.ts
export default {
  name: 'testing',
  type: 'document',
  title: 'Testing',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule: {required: () => any}) => rule.required(),
    },
    {
      name: 'number',
      title: 'Number',
      type: 'number',
      validation: (rule: {required: () => any}) => rule.required(),
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
      validation: (rule: {required: () => any}) => rule.required(),
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
  ],
  orderings: [
    {
      title: 'berdasarkan number terbaru',
      name: 'number',
      by: [{field: 'number', direction: 'desc'}],
    },
    {
      title: 'berdasarkan number terlama',
      name: 'number',
      by: [{field: 'number', direction: 'asc'}],
    },
  ],
}
