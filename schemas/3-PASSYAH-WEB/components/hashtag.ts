import {defineField, defineType} from 'sanity'
import {ApiIcon} from '@sanity/icons'

export default defineType({
  name: 'hashtagPassyahRaffi',
  title: 'Hashtag',
  type: 'document',
  icon: ApiIcon,
  fields: [
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
