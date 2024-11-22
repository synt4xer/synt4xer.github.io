// https://astro.build/config
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://synt4xer.github.io',
  integrations: [
    tailwind(),
    sitemap(),
  ],
});