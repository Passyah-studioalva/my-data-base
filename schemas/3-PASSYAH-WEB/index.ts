import {defineField, defineType} from 'sanity'
import {ApiIcon} from '@sanity/icons'

export default defineType({
  name: 'passyahRaffi',
  type: 'document',
  icon: ApiIcon,
  title: 'PassyahRaffi',
  fields: [
    defineField({
      name: 'order',
      title: 'Order',
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
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
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
      title: 'Order New',
      name: 'order',
      by: [{field: 'order', direction: 'desc'}],
    },
    {
      title: 'Order Old',
      name: 'order',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
  // preview: {
    /* DEFAULT */
    // select: {
    //   title: 'title',
    //   author: 'author.name',
    //   order: 'order',
    //   media: 'mainImage',
    // },
    /* DEFAULT */
    // prepare(selection: {author: any}) {
    //   const {author} = selection
    //   return {...selection, subtitle: author && `by ${author}`}
    // },

    /* EXAMPLE 1 TITLE & ORDER */
  // preview: {
    // select: {
    //   title: 'title',
    //   author: 'author.name',
    //   order: 'order',
    //   media: 'mainImage',
    // },
    // prepare(selection: {order: any}) {
    //   const {order} = selection
    //   return {...selection, subtitle: order && `urutan ke ${order}`}
    // },

  /* EXAMPLE 2 ORDER & TITLE */
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      order: 'order',
      media: 'mainImage',
    },
    prepare(selection: {title:any, order: any}) {
      const {title, order} = selection
      return {
        ...selection,
        title: `${title}`,
        subtitle: order && `order to ${order}`
      }
    },
  },
})
