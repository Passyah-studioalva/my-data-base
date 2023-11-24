import {defineField, defineType} from 'sanity'

// schemas/shopee.ts
export default defineType({
  name: 'custom',
  type: 'document',
  title: '(#IG) Template Custom',
  fields: [
    defineField({
      name: 'title',
      title: 'Title ( used )',
      type: 'string',
      validation: (rule: {required: () => any}) => rule.required(),
    }),
    defineField({
      name: 'bgTemplate',
      title: 'Background Template',
      type: 'image',
      validation: (rule: {required: () => any}) => rule.required(),
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'colorProduct',
      title: 'Color Product ( #ffddee ) sumber https://simplecss.eu/rgbatohex.html',
      type: 'string',
      validation: (rule: {required: () => any}) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      number: 'number',
      media: 'bgImg',
    },
    prepare(selection: {title: any; media: any}) {
      const {title, media} = selection
      return {
        ...selection,
        title,
        media,
      }
    },
  },
})
