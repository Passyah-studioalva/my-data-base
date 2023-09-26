import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {unsplashImageAsset} from 'sanity-plugin-asset-source-unsplash'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'my-data-base',

  projectId: 'iwjwzghi',
  dataset: 'production',

  plugins: [
    deskTool(),
    visionTool(),
    unsplashImageAsset()
  ],

  schema: {
    types: schemaTypes as any,
  },
})
