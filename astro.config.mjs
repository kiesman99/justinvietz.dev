import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://kiesman99.github.io',
  base: '/justinvietz.dev',
  integrations: [mdx(), sitemap(), react()]
});