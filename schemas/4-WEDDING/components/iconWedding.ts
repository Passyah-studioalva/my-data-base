import {defineField, defineType} from 'sanity'
import { GiLinkedRings } from "react-icons/gi";

export default defineType({
  name: 'iconWedding',
  title: 'Icon Wedding',
  type: 'document',
  icon: GiLinkedRings,
  fields: [
    defineField({
      name: 'titleIcon',
      title: 'Template Judul Icon (ex. v1.0.0)',
      type: 'string',
      validation: (rule: {required: () => any}) => rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Image Icon',
      type: 'image',
      validation: (rule: {required: () => any}) => rule.required(),
      options: {
        hotspot: true,
      },
    }),
  ],
})
