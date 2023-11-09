import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'iconWedding',
  title: 'Icon Wedding',
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
      title: 'Icon v100',
      type: 'image',
      validation: (rule: {required: () => any}) => rule.required(),
      options: {
        hotspot: true,
      },
    }),
  ],
})
