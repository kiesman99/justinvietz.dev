import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import path from 'path';

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import vercel from '@astrojs/vercel/static';

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: 'https://justinvietz.dev',
  // base: '/justinvietz.dev',
  integrations: [mdx(), sitemap(), react(), tailwind(), svelte()],
  output: "static",
  adapter: vercel({
    analytics: true
  }),
  // vite: {
  //   resolve: {
  //     alias: {
  //       "@components/*": path.resolve("./src/components/*"),
  //       "@layouts/*": path.resolve("./src/layouts/*"),
  //       "@assets/*": path.resolve("./src/assets/*")
  //     }
  //   }
  // }
});