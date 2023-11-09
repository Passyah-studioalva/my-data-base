import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'iconWedding',
  title: 'Icon Wedding',
  type: 'document',
  fields: [
    defineField({
      name: 'titleIcon',
      title: 'Template Judul Icon (ex. v1.0.0)',
      type: 'string',
      validation: (rule: {required: () => any}) => rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Image Icon',
      type: 'image',
      validation: (rule: {required: () => any}) => rule.required(),
      options: {
        hotspot: true,
      },
    }),
  ],
})
