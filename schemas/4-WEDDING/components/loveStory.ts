import {defineField, defineType} from 'sanity'
import { GiLinkedRings } from "react-icons/gi";

export default defineType({
  name: 'loveStory',
  title: 'Love Story',
  type: 'document',
  icon: GiLinkedRings,
  fields: [
    defineField({
      name: 'date',
      title: 'Bulan Tahun (ex. October 2016)',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle (ex. Bisa Diisi Dengan Awal Berjumpa, Khitbah, Walimah)',
      type: 'string',
    }),
    defineField({
      name: 'desc',
      title: 'Description (ex. Bisa Diisi Tempat / Cerita Singkat)',
      type: 'string',
    }),
  ],
})
