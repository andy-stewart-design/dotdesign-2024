import './astro_mqwpKSix.mjs';

function sequence(...handlers) {
  const filtered = handlers.filter((h) => !!h);
  const length = filtered.length;
  if (!length) {
    const handler = defineMiddleware((context, next) => {
      return next();
    });
    return handler;
  }
  return defineMiddleware((context, next) => {
    return applyHandle(0, context);
    function applyHandle(i, handleContext) {
      const handle = filtered[i];
      const result = handle(handleContext, async () => {
        if (i < length - 1) {
          return applyHandle(i + 1, handleContext);
        } else {
          return next();
        }
      });
      return result;
    }
  });
}

function defineMiddleware(fn) {
  return fn;
}

const INDEX_PATH = "/";
const onRequest$1 = defineMiddleware((context, next) => {
  if (context.url.pathname === INDEX_PATH) {
    return new Response(
      JSON.stringify({
        message: new URL("/posts", context.url)
      }),
      {
        status: 200
      }
    );
  }
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest as o, sequence as s };
