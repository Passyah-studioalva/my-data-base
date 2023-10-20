import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'wedding',
  type: 'document',
  title: 'Wedding',
  fields: [
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      validation: (rule: {required: () => any}) => rule.required(),
    }),
    /* OPENING */
    defineField({
      name: 'invitationTitle',
      title: 'Title Undangan',
      type: 'string',
    }),
    defineField({
      name: 'coverIcon',
      title: 'Icon utama',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'husbandWifeNickname',
      title: 'Nama Panggilan Pria & Wanita',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'husbandWifeNickname',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'textKepada',
      title: 'Text Ditujukan Kepada',
      type: 'text',
    }),
    defineField({
      name: 'buttonTextOpen',
      title: 'Button Text Buka Undangan',
      type: 'string',
    }),
    /* SECTION 1 */
    defineField({
      name: 'quotes',
      title: 'Quotes',
      type: 'text',
    }),
    /* SECTION 2 */
    defineField({
      name: 'nameHusband',
      title: 'Nama Lengkap Mempelai Pria',
      type: 'string',
    }),
    defineField({
      name: 'descHusband',
      title: 'Deskripsi Mempelai Pria',
      type: 'text',
    }),
    defineField({
      name: 'nameWife',
      title: 'Nama Lengkap Mempelai Wanita',
      type: 'string',
    }),
    defineField({
      name: 'descWife',
      title: 'Deskripsi Mempelai Wanita',
      type: 'text',
    }),
    /* SECTION 3 */
    defineField({
      name: 'subtitleAkad',
      title: 'Subtitle Akad',
      type: 'string',
    }),
    defineField({
      name: 'descAkad',
      title: 'Deskripsi Akad',
      type: 'text',
    }),
    defineField({
      name: 'locationAkad',
      title: 'Lokasi Akad',
      type: 'string',
    }),
    defineField({
      name: 'subtitleResepsi',
      title: 'Subtitle Resepsi',
      type: 'string',
    }),
    defineField({
      name: 'descResepsi',
      title: 'Deskripsi Resepsi',
      type: 'text',
    }),
    defineField({
      name: 'locationResepsi',
      title: 'Lokasi Resepsi',
      type: 'string',
    }),
    /* SECTION 4 */
    defineField({
      name: 'subtitleMaps',
      title: 'Subtitle Lokasi Acara',
      type: 'string',
    }),
    defineField({
      name: 'iframeMaps',
      title: 'I Frame Maps',
      type: 'text',
    }),
    defineField({
      name: 'detailLocation',
      title: 'Detail Lokasi',
      type: 'text',
    }),
    defineField({
      name: 'buttonTextMaps',
      title: 'Button Text Maps',
      type: 'string',
    }),
    /* SECTION 5 */
    defineField({
      name: 'subtitleWeddingGift',
      title: 'Text Wedding Gift',
      type: 'string',
    }),
    defineField({
      name: 'bank1',
      title: 'Nama Bank 1',
      type: 'string',
    }),
    defineField({
      name: 'anBank1',
      title: 'AN. Nama Bank 1',
      type: 'string',
    }),
    defineField({
      name: 'noRekBank1',
      title: 'No. Rek. Bank 1',
      type: 'string',
    }),
    defineField({
      name: 'btnCopyBank1',
      title: 'Button Copy Bank 1',
      type: 'string',
    }),
    defineField({
      name: 'bank2',
      title: 'Nama Bank 2',
      type: 'string',
    }),
    defineField({
      name: 'anBank2',
      title: 'AN. Nama Bank 2',
      type: 'string',
    }),
    defineField({
      name: 'noRekBank2',
      title: 'No. Rek. Bank 2',
      type: 'string',
    }),
    defineField({
      name: 'btnCopyBank2',
      title: 'Button Copy Bank 2',
      type: 'string',
    }),
    /* SECTION 5 */
    defineField({
      name: 'subtitleForm',
      title: 'Text Judul Formulir Tamu',
      type: 'string',
    }),
    defineField({
      name: 'descForm',
      title: 'Text Deskripsi Formulir Tamu',
      type: 'string',
    }),
    /* SECTION 5 */
    defineField({
      name: 'subtitleLast',
      title: 'Text Judul Penutupan',
      type: 'string',
    }),
    defineField({
      name: 'descLast',
      title: 'Text Deskripsi Penutupan',
      type: 'string',
    }),
    defineField({
      name: 'husbandWifeNicknameLast',
      title: 'Nama Penutupan Panggilan Pria & Wanita',
      type: 'string',
    }),
    /* -------------------- */
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
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
      media: 'coverIcon',
    },
    prepare(selection: {title: any; order: any}) {
      const {title, order} = selection
      return {
        ...selection,
        title: `${title}`,
        subtitle: order && `order to ${order}`,
      }
    },
  },
})
