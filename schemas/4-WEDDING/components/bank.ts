import {defineField, defineType} from 'sanity'
import { GiLinkedRings } from "react-icons/gi";

export default defineType({
  name: 'bank',
  title: 'Bank',
  type: 'document',
  icon: GiLinkedRings,
  fields: [
    defineField({
      name: 'nameBank',
      title: 'Nama BANK',
      type: 'string',
    }),
    defineField({
      name: 'imgBank',
      title: 'Logo BANK',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
