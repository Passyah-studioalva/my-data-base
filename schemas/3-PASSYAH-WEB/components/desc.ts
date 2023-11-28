import {defineField, defineType} from 'sanity'
import {ApiIcon} from '@sanity/icons'

export default defineType({
  name: 'descPassyahRaffi',
  title: 'Description',
  type: 'document',
  icon: ApiIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
  ],
})
