export default function middleware(request: Request) {
  const url = new URL(request.url);
  //   const {pathname} = url;

  //   if (pathname === '/') return Response.redirect(new URL("/posts", url), 302);

  return new Response(
    JSON.stringify({
      url: request.url,
      path: url.pathname,
      origin: url.origin,
    }),
    {
      status: 200,
    }
  );
  //   const url = new URL(request.url);
  //   // You can retrieve IP location or cookies here.
  //   if (url.pathname === "/admin") {
  //     url.pathname = "/";
  //   }
  //   return Response.redirect(url);
}
