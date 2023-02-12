import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  site: 'https://justinvietz.dev',
  // base: '/justinvietz.dev',
  integrations: [mdx(), sitemap(), react(), tailwind()],
  output: "static",
  adapter: vercel({
    analytics: true
  })
});