import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  console.log(context.url.pathname);

  if (context.url.pathname === "/")
    return Response.redirect(new URL("/posts", context.url), 302);
  else return next();
});
