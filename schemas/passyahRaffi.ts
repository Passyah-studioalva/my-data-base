import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'passyahRaffi',
  type: 'document',
  title: 'PassyahRaffi',
  fields: [
    defineField({
      name: 'number',
      title: 'Number',
      type: 'number',
      validation: (rule: {required: () => any}) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  orderings: [
    {
      title: 'Number Old',
      name: 'number',
      by: [{field: 'number', direction: 'desc'}],
    },
    {
      title: 'Number New',
      name: 'number',
      by: [{field: 'number', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection: {author: any}) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
