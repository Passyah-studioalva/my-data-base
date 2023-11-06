import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'iconCategory',
  title: 'Icon Category',
  type: 'document',
  fields: [
    defineField({
      name: 'titleIcon',
      title: 'Judul Icon',
      type: 'string',
      validation: (rule: {required: () => any}) => rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon ( https://www.flaticon.com )',
      type: 'image',
      validation: (rule: {required: () => any}) => rule.required(),
      options: {
        hotspot: true,
      },
    }),
  ],
})
