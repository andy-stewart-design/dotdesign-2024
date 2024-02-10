import { e as createAstro, f as createComponent, r as renderTemplate, n as renderComponent, m as maybeRenderHead } from '../astro_UrTtDdCc.mjs';
import { $ as $$BaseLayout } from './__PMfnjopB.mjs';

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

export { $$Test as default, $$file as file, prerender, $$url as url };
