import {
  $ as bold,
  a0 as red,
  a1 as yellow,
  a2 as dim,
  a3 as blue,
} from "./chunks/astro_EhEhwq7z.mjs";

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90,
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine,
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose"));
    else if (proc.argv.includes("--silent"));
    else;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

/**
 * Tokenize input string.
 */
function lexer(str) {
  var tokens = [];
  var i = 0;
  while (i < str.length) {
    var char = str[i];
    if (char === "*" || char === "+" || char === "?") {
      tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
      continue;
    }
    if (char === "\\") {
      tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
      continue;
    }
    if (char === "{") {
      tokens.push({ type: "OPEN", index: i, value: str[i++] });
      continue;
    }
    if (char === "}") {
      tokens.push({ type: "CLOSE", index: i, value: str[i++] });
      continue;
    }
    if (char === ":") {
      var name = "";
      var j = i + 1;
      while (j < str.length) {
        var code = str.charCodeAt(j);
        if (
          // `0-9`
          (code >= 48 && code <= 57) ||
          // `A-Z`
          (code >= 65 && code <= 90) ||
          // `a-z`
          (code >= 97 && code <= 122) ||
          // `_`
          code === 95
        ) {
          name += str[j++];
          continue;
        }
        break;
      }
      if (!name) throw new TypeError("Missing parameter name at ".concat(i));
      tokens.push({ type: "NAME", index: i, value: name });
      i = j;
      continue;
    }
    if (char === "(") {
      var count = 1;
      var pattern = "";
      var j = i + 1;
      if (str[j] === "?") {
        throw new TypeError('Pattern cannot start with "?" at '.concat(j));
      }
      while (j < str.length) {
        if (str[j] === "\\") {
          pattern += str[j++] + str[j++];
          continue;
        }
        if (str[j] === ")") {
          count--;
          if (count === 0) {
            j++;
            break;
          }
        } else if (str[j] === "(") {
          count++;
          if (str[j + 1] !== "?") {
            throw new TypeError(
              "Capturing groups are not allowed at ".concat(j)
            );
          }
        }
        pattern += str[j++];
      }
      if (count) throw new TypeError("Unbalanced pattern at ".concat(i));
      if (!pattern) throw new TypeError("Missing pattern at ".concat(i));
      tokens.push({ type: "PATTERN", index: i, value: pattern });
      i = j;
      continue;
    }
    tokens.push({ type: "CHAR", index: i, value: str[i++] });
  }
  tokens.push({ type: "END", index: i, value: "" });
  return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
  if (options === void 0) {
    options = {};
  }
  var tokens = lexer(str);
  var _a = options.prefixes,
    prefixes = _a === void 0 ? "./" : _a;
  var defaultPattern = "[^".concat(
    escapeString(options.delimiter || "/#?"),
    "]+?"
  );
  var result = [];
  var key = 0;
  var i = 0;
  var path = "";
  var tryConsume = function (type) {
    if (i < tokens.length && tokens[i].type === type) return tokens[i++].value;
  };
  var mustConsume = function (type) {
    var value = tryConsume(type);
    if (value !== undefined) return value;
    var _a = tokens[i],
      nextType = _a.type,
      index = _a.index;
    throw new TypeError(
      "Unexpected "
        .concat(nextType, " at ")
        .concat(index, ", expected ")
        .concat(type)
    );
  };
  var consumeText = function () {
    var result = "";
    var value;
    while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
      result += value;
    }
    return result;
  };
  while (i < tokens.length) {
    var char = tryConsume("CHAR");
    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");
    if (name || pattern) {
      var prefix = char || "";
      if (prefixes.indexOf(prefix) === -1) {
        path += prefix;
        prefix = "";
      }
      if (path) {
        result.push(path);
        path = "";
      }
      result.push({
        name: name || key++,
        prefix: prefix,
        suffix: "",
        pattern: pattern || defaultPattern,
        modifier: tryConsume("MODIFIER") || "",
      });
      continue;
    }
    var value = char || tryConsume("ESCAPED_CHAR");
    if (value) {
      path += value;
      continue;
    }
    if (path) {
      result.push(path);
      path = "";
    }
    var open = tryConsume("OPEN");
    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
        prefix: prefix,
        suffix: suffix,
        modifier: tryConsume("MODIFIER") || "",
      });
      continue;
    }
    mustConsume("END");
  }
  return result;
}
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
  if (options === void 0) {
    options = {};
  }
  var reFlags = flags(options);
  var _a = options.encode,
    encode =
      _a === void 0
        ? function (x) {
            return x;
          }
        : _a,
    _b = options.validate,
    validate = _b === void 0 ? true : _b;
  // Compile all the tokens into regexps.
  var matches = tokens.map(function (token) {
    if (typeof token === "object") {
      return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
    }
  });
  return function (data) {
    var path = "";
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      if (typeof token === "string") {
        path += token;
        continue;
      }
      var value = data ? data[token.name] : undefined;
      var optional = token.modifier === "?" || token.modifier === "*";
      var repeat = token.modifier === "*" || token.modifier === "+";
      if (Array.isArray(value)) {
        if (!repeat) {
          throw new TypeError(
            'Expected "'.concat(token.name, '" to not repeat, but got an array')
          );
        }
        if (value.length === 0) {
          if (optional) continue;
          throw new TypeError(
            'Expected "'.concat(token.name, '" to not be empty')
          );
        }
        for (var j = 0; j < value.length; j++) {
          var segment = encode(value[j], token);
          if (validate && !matches[i].test(segment)) {
            throw new TypeError(
              'Expected all "'
                .concat(token.name, '" to match "')
                .concat(token.pattern, '", but got "')
                .concat(segment, '"')
            );
          }
          path += token.prefix + segment + token.suffix;
        }
        continue;
      }
      if (typeof value === "string" || typeof value === "number") {
        var segment = encode(String(value), token);
        if (validate && !matches[i].test(segment)) {
          throw new TypeError(
            'Expected "'
              .concat(token.name, '" to match "')
              .concat(token.pattern, '", but got "')
              .concat(segment, '"')
          );
        }
        path += token.prefix + segment + token.suffix;
        continue;
      }
      if (optional) continue;
      var typeOfMessage = repeat ? "an array" : "a string";
      throw new TypeError(
        'Expected "'.concat(token.name, '" to be ').concat(typeOfMessage)
      );
    }
    return path;
  };
}
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
  return options && options.sensitive ? "" : "i";
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments
    .map((segment) => {
      return (
        "/" +
        segment
          .map((part) => {
            if (part.spread) {
              return `:${part.content.slice(3)}(.*)?`;
            } else if (part.dynamic) {
              return `:${part.content}`;
            } else {
              return part.content
                .normalize()
                .replace(/\?/g, "%3F")
                .replace(/#/g, "%23")
                .replace(/%5B/g, "[")
                .replace(/%5D/g, "]")
                .replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            }
          })
          .join("")
      );
    })
    .join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(
      rawRouteData.segments,
      rawRouteData._meta.trailingSlash
    ),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute
      ? deserializeRouteData(rawRouteData.redirectRoute)
      : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData),
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes,
  };
}

const manifest = deserializeManifest({
  adapterName: "@astrojs/vercel/serverless",
  routes: [
    {
      file: "posts/index.html",
      links: [],
      scripts: [],
      styles: [],
      routeData: {
        route: "/posts",
        isIndex: true,
        type: "page",
        pattern: "^\\/posts\\/?$",
        segments: [[{ content: "posts", dynamic: false, spread: false }]],
        params: [],
        component: "src/pages/posts/index.astro",
        pathname: "/posts",
        prerender: true,
        fallbackRoutes: [],
        _meta: { trailingSlash: "ignore" },
      },
    },
    {
      file: "index.html",
      links: [],
      scripts: [],
      styles: [],
      routeData: {
        route: "/",
        isIndex: true,
        type: "page",
        pattern: "^\\/$",
        segments: [],
        params: [],
        component: "src/pages/index.astro",
        pathname: "/",
        prerender: true,
        fallbackRoutes: [],
        _meta: { trailingSlash: "ignore" },
      },
    },
    {
      file: "about/index.html",
      links: [],
      scripts: [],
      styles: [],
      routeData: {
        route: "/about",
        isIndex: true,
        type: "page",
        pattern: "^\\/about\\/?$",
        segments: [[{ content: "about", dynamic: false, spread: false }]],
        params: [],
        component: "src/pages/about/index.astro",
        pathname: "/about",
        prerender: true,
        fallbackRoutes: [],
        _meta: { trailingSlash: "ignore" },
      },
    },
    {
      file: "",
      links: [],
      scripts: [],
      styles: [],
      routeData: {
        type: "endpoint",
        isIndex: false,
        route: "/_image",
        pattern: "^\\/_image$",
        segments: [[{ content: "_image", dynamic: false, spread: false }]],
        params: [],
        component:
          "node_modules/.pnpm/astro@4.2.7_lightningcss@1.23.0_typescript@5.3.3/node_modules/astro/dist/assets/endpoint/generic.js",
        pathname: "/_image",
        prerender: false,
        fallbackRoutes: [],
        _meta: { trailingSlash: "ignore" },
      },
    },
    {
      file: "",
      links: [],
      scripts: [],
      styles: [
        {
          type: "inline",
          content:
            'nav[data-astro-cid-ju4v47fh]{gap:16px;display:flex}@layer reset{*,:before,:after{box-sizing:border-box}html{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-moz-text-size-adjust:none;text-size-adjust:none}body,h1,h2,h3,h4,p,figure,blockquote,pre,dl,dd,ul,ol{margin:0}ul[role=list],ol[role=list]{list-style:none}body{min-height:100lvh;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;line-height:1.5}h1,h2,h3,h4,h5,h6,button,input,label{line-height:1.1}h1,h2,h3,h4{text-wrap:balance}a:not([class]){text-decoration-skip-ink:auto;color:currentColor}img,picture{max-width:100%;display:block}input,button,textarea,select{font:inherit}textarea:not([rows]){min-height:10em}}@layer system{:where(html){--background:#1a1a1a;--foreground:#efefef}:where(html){--font-sans:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;--font-serif:ui-serif,serif;--font-mono:Dank Mono,Operator Mono,Inconsolata,Fira Mono,ui-monospace,SF Mono,Monaco,Droid Sans Mono,Source Code Pro,monospace;--font-light:300;--font-regular:400;--font-medium:500;--font-semibold:600;--font-bold:700;--font-extrabold:800;--font-black:900;--font-xs:.5rem;--font-sm:.75rem;--font-base:1rem;--font-lg:1.1rem;--font-xl:1.25rem;--font-2xl:1.5rem;--font-3xl:2rem;--font-4xl:2.5rem;--font-5xl:3rem;--font-6xl:3.5rem;--leading-xs:.95;--leading-sm:1.1;--leading-md:1.25;--leading-lg:1.375;--leading-xl:1.5;--letterspacing-0:-.05em;--letterspacing-1:.025em;--letterspacing-2:.05em;--letterspacing-3:.075em;--letterspacing-4:.15em;--letterspacing-5:.5em;--letterspacing-6:.75em;--letterspacing-7:1em}}@layer utility;@layer theme{:where(html){background:var(--background);color:var(--foreground)}h1{font-size:var(--font-4xl)}h2{font-size:var(--font-3xl)}h3{font-size:var(--font-2xl)}@media (min-width:640.001px){h1{font-size:var(--font-6xl)}h2{font-size:var(--font-3xl)}h3{font-size:var(--font-2xl)}}.prose{gap:1.25em;max-width:64ch;font-size:1rem;display:grid}.prose h1{font-size:var(--font-4xl)}.prose h2{font-size:var(--font-2xl)}.prose h3{font-size:var(--font-lg)}.prose h2{margin-block-start:.5em}pre+:is(.prose h2){margin-block-start:.25em}.prose h3{margin-block-start:.5em}pre+:is(.prose h3){margin-block-start:.25em}.prose p{font-size:1em}.prose pre{font-size:var(--font-sm);margin-block-start:.5em;margin-block-end:.5em}.prose pre code{padding:16px;display:block}.prose blockquote{font-size:var(--font-lg);font-weight:var(--font-semibold);line-height:var(--leading-lg);margin-block-start:.5em;margin-block-end:.5em;padding-inline-start:1.5rem;position:relative}.prose blockquote p{margin:0}.prose blockquote:after{content:"";border-inline-start:1px solid #fff;position:absolute;top:.325em;bottom:.325em;left:0}@media (min-width:640.001px){.prose{font-size:1.125rem}.prose blockquote{font-size:var(--font-xl)}.prose pre{font-size:var(--font-base)}}:where(html){--space-xs:4px;--space-sm:8px;--space-md:16px;--space-lg:24px;--space-xl:32px;--px-app:var(--space-md)}@media (min-width:640.001px){:where(html){--px-app:var(--space-xl)}}:where(html) .p-xs{padding:var(--space-xs)}:where(html) .p-sm{padding:var(--space-sm)}:where(html) .p-md{padding:var(--space-md)}:where(html) .p-lg{padding:var(--space-lg)}:where(html) .p-xl{padding:var(--space-xl)}:where(html) .px-xs{padding-inline:var(--space-xs)}:where(html) .px-sm{padding-inline:var(--space-sm)}:where(html) .px-md{padding-inline:var(--space-md)}:where(html) .px-lg{padding-inline:var(--space-lg)}:where(html) .px-xl{padding-inline:var(--space-xl)}:where(html) .px-app{padding-inline:var(--px-app)}:where(html) .py-xs{padding-block:var(--space-xs)}:where(html) .py-sm{padding-block:var(--space-sm)}:where(html) .py-md{padding-block:var(--space-md)}:where(html) .py-lg{padding-block:var(--space-lg)}:where(html) .py-xl{padding-block:var(--space-xl)}}@layer component;\n',
        },
      ],
      routeData: {
        route: "/work/test",
        isIndex: false,
        type: "page",
        pattern: "^\\/work\\/test\\/?$",
        segments: [
          [{ content: "work", dynamic: false, spread: false }],
          [{ content: "test", dynamic: false, spread: false }],
        ],
        params: [],
        component: "src/pages/work/test.astro",
        pathname: "/work/test",
        prerender: false,
        fallbackRoutes: [],
        _meta: { trailingSlash: "ignore" },
      },
    },
  ],
  base: "/",
  trailingSlash: "ignore",
  compressHTML: true,
  componentMetadata: [
    [
      "/Users/andy/Documents/Dev/dotdesign-2024/src/pages/about/index.astro",
      { propagation: "none", containsHead: true },
    ],
    [
      "/Users/andy/Documents/Dev/dotdesign-2024/src/pages/index.astro",
      { propagation: "none", containsHead: true },
    ],
    [
      "/Users/andy/Documents/Dev/dotdesign-2024/src/pages/posts/[...slug].astro",
      { propagation: "in-tree", containsHead: true },
    ],
    [
      "/Users/andy/Documents/Dev/dotdesign-2024/src/pages/posts/index.astro",
      { propagation: "in-tree", containsHead: true },
    ],
    [
      "/Users/andy/Documents/Dev/dotdesign-2024/src/pages/work/test.astro",
      { propagation: "none", containsHead: true },
    ],
    ["\u0000astro:content", { propagation: "in-tree", containsHead: false }],
    [
      "\u0000@astro-page:src/pages/posts/[...slug]@_@astro",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "\u0000@astrojs-ssr-virtual-entry",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "\u0000@astro-page:src/pages/posts/index@_@astro",
      { propagation: "in-tree", containsHead: false },
    ],
  ],
  renderers: [],
  clientDirectives: [
    [
      "idle",
      '(()=>{var i=t=>{let e=async()=>{await(await t())()};"requestIdleCallback"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event("astro:idle"));})();',
    ],
    [
      "load",
      '(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event("astro:load"));})();',
    ],
    [
      "media",
      '(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener("change",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event("astro:media"));})();',
    ],
    [
      "only",
      '(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event("astro:only"));})();',
    ],
    [
      "visible",
      '(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value=="object"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event("astro:visible"));})();',
    ],
  ],
  entryModules: {
    "\u0000astro-internal:middleware": "_astro-internal_middleware.mjs",
    "\u0000@astrojs-ssr-virtual-entry": "entry.mjs",
    "\u0000@astro-renderers": "renderers.mjs",
    "\u0000@astrojs-manifest": "manifest_6wxpvAbb.mjs",
    "\u0000@astro-page:node_modules/.pnpm/astro@4.2.7_lightningcss@1.23.0_typescript@5.3.3/node_modules/astro/dist/assets/endpoint/generic@_@js":
      "chunks/generic_JqM6yYYy.mjs",
    "\u0000@astro-page:src/pages/posts/index@_@astro":
      "chunks/index_UV5GazK7.mjs",
    "\u0000@astro-page:src/pages/posts/[...slug]@_@astro":
      "chunks/_.._TCrBXKuU.mjs",
    "\u0000@astro-page:src/pages/work/test@_@astro": "chunks/test_3vPZ6Hlp.mjs",
    "\u0000@astro-page:src/pages/index@_@astro": "chunks/index_YarXNW2g.mjs",
    "\u0000@astro-page:src/pages/about/index@_@astro":
      "chunks/index_e7NMzmrk.mjs",
    "/Users/andy/Documents/Dev/dotdesign-2024/src/content/posts/first-post.md?astroContentCollectionEntry=true":
      "chunks/first-post__dPbMTeP.mjs",
    "/Users/andy/Documents/Dev/dotdesign-2024/src/content/posts/fourth-post/index.mdx?astroContentCollectionEntry=true":
      "chunks/index_9bG-fciZ.mjs",
    "/Users/andy/Documents/Dev/dotdesign-2024/src/content/posts/second-post.md?astroContentCollectionEntry=true":
      "chunks/second-post_EXmma_uF.mjs",
    "/Users/andy/Documents/Dev/dotdesign-2024/src/content/posts/third-post.md?astroContentCollectionEntry=true":
      "chunks/third-post_BbhjuhvS.mjs",
    "/Users/andy/Documents/Dev/dotdesign-2024/src/content/posts/first-post.md?astroPropagatedAssets":
      "chunks/first-post_HOlU4lE6.mjs",
    "/Users/andy/Documents/Dev/dotdesign-2024/src/content/posts/fourth-post/index.mdx?astroPropagatedAssets":
      "chunks/index_AYqe_8Vl.mjs",
    "/Users/andy/Documents/Dev/dotdesign-2024/src/content/posts/second-post.md?astroPropagatedAssets":
      "chunks/second-post_kkQtx2bf.mjs",
    "/Users/andy/Documents/Dev/dotdesign-2024/src/content/posts/third-post.md?astroPropagatedAssets":
      "chunks/third-post_2P6tD94y.mjs",
    "/Users/andy/Documents/Dev/dotdesign-2024/src/content/posts/first-post.md":
      "chunks/first-post_MCPxJFky.mjs",
    "/Users/andy/Documents/Dev/dotdesign-2024/src/content/posts/fourth-post/index.mdx":
      "chunks/index_OtJbDyun.mjs",
    "/Users/andy/Documents/Dev/dotdesign-2024/src/content/posts/second-post.md":
      "chunks/second-post_q66V0s4t.mjs",
    "/Users/andy/Documents/Dev/dotdesign-2024/src/content/posts/third-post.md":
      "chunks/third-post__ThpvfFr.mjs",
    "astro:scripts/before-hydration.js": "",
  },
  assets: [
    "/favicon.svg",
    "/posts/index.html",
    "/index.html",
    "/about/index.html",
  ],
  buildFormat: "directory",
});

export {
  AstroIntegrationLogger as A,
  Logger as L,
  getEventPrefix as g,
  levels as l,
  manifest,
};
