import {defineField, defineType} from 'sanity'
import { RiInstagramLine } from "react-icons/ri";

export default defineType({
  name: 'iconCustom',
  title: 'Icon',
  type: 'document',
  icon: RiInstagramLine,
  fields: [
    defineField({
      name: 'titleIcon',
      title: 'Judul Icon',
      type: 'string',
      validation: (rule: {required: () => any}) => rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon ( https://www.flaticon.com )',
      type: 'image',
      validation: (rule: {required: () => any}) => rule.required(),
      options: {
        hotspot: true,
      },
    }),
  ],
})
