import {defineField, defineType} from 'sanity'
import {ApiIcon} from '@sanity/icons'

export default defineType({
  name: 'listDescPassyahRaffi',
  title: 'List Description',
  type: 'document',
  icon: ApiIcon,
  fields: [
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
