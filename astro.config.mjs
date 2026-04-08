import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://v0-guide.com',
  base: '/',
  integrations: [sitemap()],
});
