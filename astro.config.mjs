import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://ogr.nevzatayazal.k12.tr',
  vite: {
    plugins: [tailwindcss()],
  },
})
