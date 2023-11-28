import {defineField, defineType} from 'sanity'
import { GiLinkedRings } from "react-icons/gi";

export default defineType({
  name: 'audios',
  title: 'Audio',
  type: 'document',
  icon: GiLinkedRings,
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
