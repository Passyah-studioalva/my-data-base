import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'bank',
  title: 'Bank',
  type: 'document',
  fields: [
    defineField({
      name: 'nameBank',
      title: 'Nama BANK',
      type: 'string',
    }),
    defineField({
      name: 'imgBank',
      title: 'Logo BANK',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
