export default function middleware(request: any) {
  return new Response(
    JSON.stringify({
      message: request,
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
