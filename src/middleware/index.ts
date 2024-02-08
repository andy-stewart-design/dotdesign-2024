import { defineMiddleware } from "astro:middleware";

const PROTECTED_PAGES = ["first-post"];

export const onRequest = defineMiddleware((context, next) => {
  // const slug = context.url.pathname.replace(/\/$/gm, "").split("/").at(-1);
  // if (slug) console.log(slug, PROTECTED_PAGES.includes(slug));

  return next();
});
