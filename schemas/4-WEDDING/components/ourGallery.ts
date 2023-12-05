import {defineField, defineType} from 'sanity'
import { GiLinkedRings } from "react-icons/gi";

export default defineType({
  name: 'ourGallery',
  title: 'Our Gallery',
  type: 'document',
  icon: GiLinkedRings,
  fields: [
    defineField({
      name: 'img1',
      title: 'Photo 1',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'img2',
      title: 'Photo 2',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'img3',
      title: 'Photo 3',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'img4',
      title: 'Photo 4',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'img5',
      title: 'Photo 5',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'img6',
      title: 'Photo 6',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'img7',
      title: 'Photo 7',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'img8',
      title: 'Photo 8',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'img9',
      title: 'Photo 9',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'img10',
      title: 'Photo 10',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'img11',
      title: 'Photo 11',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'img12',
      title: 'Photo 12',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
