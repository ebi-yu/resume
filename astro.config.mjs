import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://ebi-yu.github.io/",
  base: "",
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    remarkPlugins: [],
    extendDefaultPlugins: true,
  },
  vite: {
    plugins: [],
    ssr: {
      noExternal: [],
    },
  },
});
