import { defineConfig } from "astro/config";
import { remarkModifiedTime } from "./src/utils/remark-modified-time.mjs";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import pagefind from "astro-pagefind";
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// https://astro.build/config
export default defineConfig({
  site: "https://verse-astro.vercel.app",
  trailingSlash: "always",
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },

  markdown: {
    remarkPlugins: [remarkModifiedTime, remarkMath],
    rehypePlugins: [rehypeKatex],
  },

  integrations: [
    mdx({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
    sitemap(),
    pagefind(),
    tailwind(),

    partytown({
      config: {
        forward: ["dataLayer.push"],
        debug: false,
      },
    }),

    icon({
      include: {
        tabler: ["*"],
      },
    }),
    
  ],
});
