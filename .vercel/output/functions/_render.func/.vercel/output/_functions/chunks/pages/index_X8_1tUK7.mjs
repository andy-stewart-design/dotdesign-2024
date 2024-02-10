import { A as AlertBar, F as Footer, a as getCollection, $ as $$BaseLayout } from './__PMfnjopB.mjs';
import { c as classes, a as classes$1 } from '../index.ea2ad703_22pRCzgT.mjs';
import { e as createAstro, f as createComponent$1, r as renderTemplate, n as renderComponent, m as maybeRenderHead } from '../astro_UrTtDdCc.mjs';
import { ssr, ssrHydrationKey, ssrAttribute, escape, createComponent } from 'solid-js/web';

var _tmpl$$1 = ["<a", ' href="', '"><h2>', "</h2><p>", '</p><section><ul role="list">', "</ul><time>", "</time></section></a>"], _tmpl$2 = ["<li", ">", "</li>"];
function PostCard({
  data,
  slug
}) {
  const date = data.pubDate.toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return ssr(_tmpl$$1, ssrHydrationKey() + ssrAttribute("class", escape(classes.card, true), false), `/posts/${escape(slug, true)}`, escape(data.title), escape(data.description), escape(data.tags.map((tag) => ssr(_tmpl$2, ssrHydrationKey(), escape(tag)))), escape(date));
}

var _tmpl$ = ["<main", "><!--$-->", "<!--/--><section", ">", "</section><!--$-->", "<!--/--></main>"];
function PostGrid({
  posts
}) {
  return ssr(_tmpl$, ssrHydrationKey() + ssrAttribute("class", escape(classes$1.main, true), false), escape(createComponent(AlertBar, {})), ssrAttribute("class", escape(classes$1.grid, true), false), escape(posts.map(({
    slug,
    data
  }) => createComponent(PostCard, {
    slug,
    data
  }))), escape(createComponent(Footer, {})));
}

const $$Astro$2 = createAstro();
const $$Index$2 = createComponent$1(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  const allPosts = await getCollection("posts");
  const published = allPosts.filter((post) => post.data.published);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PostGrid", PostGrid, { "posts": published })} ` })}`;
}, "/Users/andy/Documents/Dev/dotdesign-2024/src/pages/posts/index.astro", void 0);

const $$file$2 = "/Users/andy/Documents/Dev/dotdesign-2024/src/pages/posts/index.astro";
const $$url$2 = "/posts";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Index$1 = createComponent$1(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>My Astro Site</h1> ` })}`;
}, "/Users/andy/Documents/Dev/dotdesign-2024/src/pages/index.astro", void 0);

const $$file$1 = "/Users/andy/Documents/Dev/dotdesign-2024/src/pages/index.astro";
const $$url$1 = "";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Index = createComponent$1(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "About Andy" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Hi, my name is Andy</h1> ` })}`;
}, "/Users/andy/Documents/Dev/dotdesign-2024/src/pages/about/index.astro", void 0);

const $$file = "/Users/andy/Documents/Dev/dotdesign-2024/src/pages/about/index.astro";
const $$url = "/about";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$1 as a, index as b, index$2 as i };
