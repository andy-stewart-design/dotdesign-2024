import { defineMiddleware } from "astro/middleware";

// const INDEX_PATH = "/";
// const BASE_URL = "https://dotdesign-2024.vercel.app";

export const onRequest = defineMiddleware((context, next) => {
  //   if (context.url.pathname === INDEX_PATH) {
  //     // return Response.redirect(new URL("/redirected", context.url), 302);
  //     return new Response(
  //       JSON.stringify({
  //         message: new URL("/posts", context.url),
  //       }),
  //       {
  //         status: 200,
  //       }
  //     );
  //   }

  return next();
});
