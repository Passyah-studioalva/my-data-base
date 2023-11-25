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
      name: 'borderSearch',
      title: 'Border Search ( 1px solid red ) sumber https://www.w3schools.com/cssref/tryit.php?filename=trycss_border',
      type: 'string',
    }),
    defineField({
      name: 'bgSearch',
      title: 'Background Search ( rgb(255, 221, 238, 0.4) ) sumber https://www.w3schools.com/css/tryit.asp?filename=trycss_opacity_box2',
      type: 'string',
    }),
    defineField({
      name: 'colorTextSearch',
      title: 'Color Text Search ( black ) sumber https://www.w3schools.com/css/tryit.asp?filename=trycss_color',
      type: 'string',
    }),
    defineField({
      name: 'borderProduct',
      title: 'Border Product ( 1px solid red ) sumber https://www.w3schools.com/cssref/tryit.php?filename=trycss_border',
      type: 'string',
    }),
    defineField({
      name: 'bgProduct',
      title: 'Background Product ( rgb(255, 221, 238, 0.4) ) sumber https://www.w3schools.com/cssref/tryit.php?filename=trycss_color_rgba',
      type: 'string',
    }),
    defineField({
      name: 'colorTextProduct',
      title: 'Color Text Product ( white ) sumber https://www.w3schools.com/css/tryit.asp?filename=trycss_color',
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
      media: 'bgTemplate',
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
