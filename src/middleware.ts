import { defineMiddleware } from "astro/middleware";

const INDEX_PATH = "/";
const BASE_URL = "https://dotdesign-2024.vercel.app";

export const onRequest = defineMiddleware((context, next) => {
  if (context.url.pathname === INDEX_PATH) {
    return Response.redirect(new URL("/posts", BASE_URL), 302);
  }

  return next();
});
