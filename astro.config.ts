import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless";
import solidJs from "@astrojs/solid-js";
import AutoImport from "astro-auto-import";
import { Features } from "lightningcss";

export default defineConfig({
  integrations: [
    AutoImport({
      imports: ["./src/components/Video/Video.tsx"],
    }),
    mdx({
      optimize: {
        customComponentNames: ["video"],
      },
    }),
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
