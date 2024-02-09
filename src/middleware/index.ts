import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  const slug = context.url.pathname.replace(/\/$/gm, "").split("/").at(-1);

  if (slug === "")
    return Response.redirect(new URL("/posts", context.url), 302);
  else return next();
});
