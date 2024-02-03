import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import vue from "@astrojs/vue";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://ebi-yu.github.io/",
  base: "",
  integrations: [
    mdx(),
    sitemap(),
    vue({ appEntrypoint: "/src/pages/_app" }),
    tailwind(),
  ],
  markdown: {
    remarkPlugins: [],
    extendDefaultPlugins: true,
  },
  vite: {
    plugins: [],
    ssr: {
      noExternal: ["element-plus"],
    },
  },
});
