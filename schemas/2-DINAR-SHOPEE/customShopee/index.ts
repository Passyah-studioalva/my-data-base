import {defineField, defineType} from 'sanity'
import { RiInstagramLine } from "react-icons/ri";

// schemas/shopee.ts
export default defineType({
  name: 'customShopee',
  type: 'document',
  icon: RiInstagramLine,
  title: 'Shopee Custom',
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
      validation: (rule: {required: () => any}) => rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
    }),
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value: any, context: {defaultIsUnique: (arg0: any, arg1: any) => any}) =>
          context.defaultIsUnique(value, context),
      },
    },
    defineField({
      name: 'categoryCustom',
      title: 'Shopee Category',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'categoryCustom',
          },
        },
      ],
    }),
    defineField({
      name: 'iconCustom',
      title: 'Icon Category',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'iconCustom',
          },
        },
      ],
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  orderings: [
    {
      title: 'Number New',
      name: 'number',
      by: [
        {
          field: 'number',
          direction: 'desc'
        }
      ],
    },
    {
      title: 'Number Old',
      name: 'number',
      by: [
        {
          field: 'number',
          direction: 'asc'
        }
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      number: 'number',
      media: 'coverImage',
    },
    prepare(selection: {title: any; number: any}) {
      const {title, number} = selection
      return {
        ...selection,
        title: number,
        subtitle: `${title}`,
      }
    },
  },
})
