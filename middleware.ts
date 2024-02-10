export default function middleware(request: Request) {
  const url = new URL(request.url);
  return new Response(
    JSON.stringify({
      url: request.url,
      path: url.pathname,
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
