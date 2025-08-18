// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://brandsbuilders.agency',
  integrations: [sitemap()/*, swup() */],
  vite: {
    plugins: [tailwindcss()]
  }
});