import {defineField, defineType} from 'sanity'
import {ApiIcon} from '@sanity/icons'

export default defineType({
  name: 'projectPassyahRaffi',
  type: 'document',
  icon: ApiIcon,
  title: 'Project My Web',
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
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'borderColor',
      title: 'Border Color',
      type: 'string',
    }),
    defineField({
      name: 'bgColorImg',
      title: 'Background Image Color',
      type: 'string',
    }),
    defineField({
      name: 'bgColor',
      title: 'Background Color',
      type: 'string',
    }),
    defineField({
      name: 'color',
      title: 'Color Text',
      type: 'string',
    }),
    defineField({
      name: 'urlDomain',
      title: 'Url Domain',
      type: 'string',
    }),
    defineField({
      name: 'urlVercel',
      title: 'Url Vercel',
      type: 'string',
    }),
    defineField({
      name: 'urlSource',
      title: 'Url Source',
      type: 'string',
    }),
    defineField({
      name: 'src',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'objectFit',
      title: 'ObjectFit Image',
      type: 'string',
    }),
    defineField({
      name: 'paddingImg',
      title: 'Padding Image',
      type: 'string',
    }),
    defineField({
      name: 'desc',
      title: 'Descriptions',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'descPassyahRaffi',
          },
        },
      ],
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
      of: [
        {
          type: 'reference',
          to: {
            type: 'hashtagPassyahRaffi',
          },
        },
      ],
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
  preview: {
    select: {
      title: 'title',
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
