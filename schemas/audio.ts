import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'audios',
  title: 'Audio',
  type: 'document',
  fields: [
    defineField({
      name: 'nameAudio',
      title: 'Judul Lagu & Penyanyi (Ex. Barakallah - Maher Zain)',
      type: 'string',
    }),
    defineField({
      name: 'audio',
      title: 'Audio',
      type: 'file',
    }),
  ],
})
