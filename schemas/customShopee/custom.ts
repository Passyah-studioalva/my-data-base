import {defineField, defineType} from 'sanity'

// schemas/shopee.ts
export default defineType({
  name: 'custom',
  type: 'document',
  title: '(#IG) Template Custom',
  fields: [
    defineField({
      name: 'title',
      title: 'Title ( used )',
      type: 'string',
      validation: (rule: {required: () => any}) => rule.required(),
    }),
    defineField({
      name: 'bgTemplate',
      title: 'Background Template',
      type: 'image',
      validation: (rule: {required: () => any}) => rule.required(),
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'colorProduct',
      title: 'Color Product ( rgb(255, 221, 238, 0.4) ) sumber https://www.w3schools.com/cssref/tryit.php?filename=trycss_color_rgba',
      type: 'string',
      validation: (rule: {required: () => any}) => rule.required(),
    }),
    defineField({
      name: 'bgRepeat',
      title: 'Background Repeat ( repeat ) sumber https://www.w3schools.com/cssref/pr_background-repeat.php',
      type: 'string',
    }),
    defineField({
      name: 'bgSize',
      title: 'Background Size ( contain ) sumber https://www.w3schools.com/cssref/css3_pr_background-size.php',
      type: 'string',
    }),
    defineField({
      name: 'scrollSnapAlign',
      title: 'Scroll Snap Align ( center ) sumber https://www.w3schools.com/cssref/css_pr_scroll-snap-align.php',
      type: 'string',
    }),
    defineField({
      name: 'copyright',
      title: 'copyright ( ©2023 Racun Shopee )',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      number: 'number',
      media: 'bgImg',
    },
    prepare(selection: {title: any; media: any}) {
      const {title, media} = selection
      return {
        ...selection,
        title,
        media,
      }
    },
  },
})
