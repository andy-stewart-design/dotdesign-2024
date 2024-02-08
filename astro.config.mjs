import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless";
import { Features } from "lightningcss";
import svelte from "@astrojs/svelte";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx({
      optimize: {
        customComponentNames: ["video"],
      },
    }),
    svelte(),
    solidJs(),
  ],
  vite: {
    css: {
      transformer: "lightningcss",
      lightningcss: {
        drafts: {
          customMedia: true,
        },
        include: Features.Nesting,
      },
    },
  },
  output: "hybrid",
  adapter: vercel(),
});
