import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'description',
  title: 'Description',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'listDesc',
      title: 'List Description',
      type: 'array',
      of: [{type: 'string'}],
      // options: {
      //   layout: 'tags'
      // }
    }),
    defineField({
      name: 'hashtag',
      title: 'Hashtag',
      type: 'array',
      of: [{type: 'string'}],
      // options: {
      //   layout: 'tags'
      // }
    }),
  ],
})
