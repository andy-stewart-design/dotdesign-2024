export default function middleware() {
  return new Response(
    JSON.stringify({
      message: "Hello world",
    }),
    {
      status: 200,
    }
  );
}
