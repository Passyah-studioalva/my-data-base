import {defineField, defineType} from 'sanity'
import { RiInstagramLine } from "react-icons/ri";

export default defineType({
  name: 'categoryCustom',
  title: 'Category',
  type: 'document',
  icon: RiInstagramLine,
  fields: [
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      validation: (rule: {required: () => any}) => rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
      validation: (rule: {required: () => any}) => rule.required(),
    }),
  ],
})
