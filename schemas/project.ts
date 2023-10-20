import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  type: 'document',
  title: 'Project',
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
      name: 'bgColor',
      title: 'Bg Color',
      type: 'string',
    }),
    defineField({
      name: 'color',
      title: 'Color',
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
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'descriptions',
      title: 'Descriptions',
      type: 'array',
      of: [{
        type: 'reference',
        to: {
          type: 'description'
        }
      }],
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
