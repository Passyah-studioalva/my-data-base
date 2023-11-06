import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'shopeeCategory',
  title: 'Shopee Category',
  type: 'document',
  fields: [
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      validation: (rule: {required: () => any}) => rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
      validation: (rule: {required: () => any}) => rule.required(),
    }),
  ],
})
