import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, i as addAttribute, j as renderHead, k as renderComponent, l as renderSlot } from '../astro_EhEhwq7z.mjs';
/* empty css                          */

const $$Astro$2 = createAstro();
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Nav;
  const links = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Posts", href: "/posts" }
  ];
  return renderTemplate`${maybeRenderHead()}<nav data-astro-cid-ju4v47fh> ${links.map(({ text, href }) => renderTemplate`<a${addAttribute(href, "href")} data-astro-cid-ju4v47fh>${text}</a>`)} </nav> `;
}, "/Users/andy/Documents/Dev/dotdesign-2024/src/components/Nav/Nav.astro", void 0);

const $$Astro$1 = createAstro();
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { pageTitle = "Andy Stewart | Product Design + Creative Technology" } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Nav", $$Nav, {})} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/andy/Documents/Dev/dotdesign-2024/src/layouts/BaseLayout.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$Test = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Test;
  const password = Astro2.url.searchParams.get("password") ?? "No Password";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>${password}</h1> ` })}`;
}, "/Users/andy/Documents/Dev/dotdesign-2024/src/pages/work/test.astro", void 0);

const $$file = "/Users/andy/Documents/Dev/dotdesign-2024/src/pages/work/test.astro";
const $$url = "/work/test";

const test = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Test,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BaseLayout as $, test as t };
