import {defineField, defineType} from 'sanity'
import { SiShopee } from "react-icons/si";

export default defineType({
  name: 'shopeeCategory',
  title: 'Shopee Category',
  type: 'document',
  icon: SiShopee,
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
