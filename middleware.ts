export default function middleware(request: Request) {
  const url = new URL(request.url);
  const { pathname, origin } = url;

  if (pathname === "/")
    return Response.redirect(new URL("/posts", origin), 302);
}
