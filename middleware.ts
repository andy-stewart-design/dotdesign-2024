export default function middleware(request: Request) {
  const url = new URL(request.url);
  const { pathname, origin } = url;

  if (pathname === "/")
    return Response.redirect(new URL("/posts", origin), 302);

  return new Response(request.url);
  //   const url = new URL(request.url);
  //   // You can retrieve IP location or cookies here.
  //   if (url.pathname === "/admin") {
  //     url.pathname = "/";
  //   }
  //   return Response.redirect(url);
}
