import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'weddingv100',
  type: 'document',
  title: 'Wedding v1.0.0',
  fields: [
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      validation: (rule: {required: () => any}) => rule.required(),
    }),
    defineField({
      name: 'audio',
      title: 'Audio',
      type: 'file',
    }),
    defineField({
      name: 'nickname',
      title: 'Nama Mempelai Pria & Wanita',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'nickname',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'nameHusband',
      title: 'Nama Lengkap Mempelai Pria',
      type: 'string',
    }),
    defineField({
      name: 'descHusband',
      title: 'Deskripsi Mempelai Pria',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'nameWife',
      title: 'Nama Lengkap Mempelai Wanita',
      type: 'string',
    }),
    defineField({
      name: 'descWife',
      title: 'Deskripsi Mempelai Wanita',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'descAkad',
      title: 'Hari, Tanggal, Jam Akad, Lokasi',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'descResepsi',
      title: 'Hari, Tanggal, Jam Resepsi, Lokasi',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'linkMaps',
      title: 'Link Google Maps',
      type: 'string',
    }),
    defineField({
      name: 'linkIframe',
      title: 'Link Iframe Maps',
      type: 'string',
    }),
    defineField({
      name: 'detailLocation',
      title: 'Detail Lokasi Acara',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'bank1',
      title: 'Nama BANK 1 (JIKA CLIENT ISI BANK 1 DENGAN BARCODE MAKA INI KOSONGKAN)',
      type: 'array',
      of: [{
        type: 'reference',
        to: {
          type: 'bank'
        }
      }],
    }),
    defineField({
      name: 'detailBank1',
      title: 'BANK 1 - Atas Nama, No. Rekening (JIKA CLIENT ISI BANK 1 DENGAN BARCODE MAKA INI KOSONGKAN)',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'barcodeBank1',
      title: 'BANK 1 - Image Barcode (JIKA CLIENT ISI BANK 1 DENGAN NO REK MAKA INI KOSONGKAN)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bank2',
      title: 'Nama BANK 2 (JIKA CLIENT ISI BANK 2 DENGAN BARCODE MAKA INI KOSONGKAN)',
      type: 'array',
      of: [{
        type: 'reference',
        to: {
          type: 'bank'
        }
      }],
    }),
    defineField({
      name: 'detailBank2',
      title: 'BANK 2 - Atas Nama, No. Rekening (JIKA CLIENT ISI BANK 2 DENGAN BARCODE MAKA INI KOSONGKAN)',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'barcodeBank2',
      title: 'BANK 2 - Image Barcode (JIKA CLIENT ISI BANK 2 DENGAN NO REK MAKA INI KOSONGKAN)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'urlWebAppGSpreadsheets',
      title: 'Url Web App Google Spreadsheets',
      type: 'string',
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
      title: 'nickname',
      order: 'order',
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
