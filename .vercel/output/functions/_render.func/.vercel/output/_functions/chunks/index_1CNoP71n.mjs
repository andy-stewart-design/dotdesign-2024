import { a4 as __astro_tag_component__, a5 as Fragment, _ as createVNode } from './astro_UrTtDdCc.mjs';
import { b as $$Image } from './pages/__PMfnjopB.mjs';
import { createComponent, Dynamic, ssr, ssrHydrationKey, ssrAttribute, escape } from 'solid-js/web';
import { mergeProps, createSignal, onMount } from 'solid-js';
import { c as classes } from './component_module.312fae96_WHdjU1EG.mjs';
import { c as classes$1 } from './component_module.0adc9166_ZpeozZ6m.mjs';

const __0___AllStock_Cover_5x3_jpg__ = new Proxy({"src":"/_astro/AllStock-Cover-5x3.blEiIoPT.jpg","width":2400,"height":1440,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/andy/Documents/Dev/dotdesign-2024/src/content/posts/allstock-announcement/AllStock-Cover-5x3.jpg";
							}
							
							return target[name];
						}
					});

const __1___allstock_quickactions_jpg__ = new Proxy({"src":"/_astro/allstock-quickactions.Yxl04DE8.jpg","width":2400,"height":1200,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/andy/Documents/Dev/dotdesign-2024/src/content/posts/allstock-announcement/allstock-quickactions.jpg";
							}
							
							return target[name];
						}
					});

const __2___allstock_performance_jpg__ = new Proxy({"src":"/_astro/allstock-performance._ouaHTDD.jpg","width":4800,"height":2640,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/andy/Documents/Dev/dotdesign-2024/src/content/posts/allstock-announcement/allstock-performance.jpg";
							}
							
							return target[name];
						}
					});

const __3___allstock_imagequality_jpg__ = new Proxy({"src":"/_astro/allstock-imagequality.YfR4Vmf8.jpg","width":2400,"height":1200,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/andy/Documents/Dev/dotdesign-2024/src/content/posts/allstock-announcement/allstock-imagequality.jpg";
							}
							
							return target[name];
						}
					});

const __4___allstock_interface_jpg__ = new Proxy({"src":"/_astro/allstock-interface.8mZdM3Mg.jpg","width":2400,"height":1200,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/andy/Documents/Dev/dotdesign-2024/src/content/posts/allstock-announcement/allstock-interface.jpg";
							}
							
							return target[name];
						}
					});

const VisuallyHidden = (props) => {
  const merged = mergeProps({
    as: "div"
  }, props);
  return createComponent(Dynamic, {
    get component() {
      return merged.as;
    },
    get ["class"]() {
      return classes.hidden;
    },
    get children() {
      return props.children;
    }
  });
};

var _tmpl$$2 = ["<svg", ' width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4,2L8,2C9.105,2 10,2.895 10,4L10,20C10,21.105 9.105,22 8,22L4,22C2.895,22 2,21.105 2,20L2,4C2,2.895 2.895,2 4,2ZM16,2L20,2C21.105,2 22,2.895 22,4L22,20C22,21.105 21.105,22 20,22L16,22C14.895,22 14,21.105 14,20L14,4C14,2.895 14.895,2 16,2Z" fill="currentColor"></path></svg>'];
function Pause() {
  return ssr(_tmpl$$2, ssrHydrationKey());
}

var _tmpl$$1 = ["<svg", ' width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M7.02899 1.28501C6.41113 0.914298 5.64162 0.904589 5.0146 1.2596C4.38759 1.61461 4 2.27946 4 3V21C4 21.7205 4.38759 22.3854 5.0146 22.7404C5.64162 23.0954 6.41113 23.0857 7.02899 22.715L22.029 13.715C22.6314 13.3535 23 12.7025 23 12C23 11.2975 22.6314 10.6465 22.029 10.285L7.02899 1.28501Z" fill="currentColor"></path></svg>'];
function Play() {
  return ssr(_tmpl$$1, ssrHydrationKey());
}

function formatVideoTime(progress) {
  const minutes = progress >= 60 ? Math.floor(progress / 60) : 0;
  const seconds = progress >= 60 ? Math.floor(progress % 60) : Math.floor(progress);
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  return `${minutes}:${formattedSeconds}`;
}

var _tmpl$ = ["<div", ' style="', '"><video', "", "", ' tabindex="0"', "><source", "></video><button", ' style="', '" aria-label="Play"><!--$-->', "<!--/--><!--$-->", "<!--/--><span><!--$-->", "<!--/--> / <!--$-->", "<!--/--></span></button><input", ' style="', '"', ' min="0"', ' step="0.01" type="range" aria-label="Current Time"', "></div>"];
const defaultProps = {
  src: "",
  muted: false,
  autoplay: false,
  loop: false,
  width: 1920,
  height: 1080
};
function Video(props) {
  const merged = mergeProps(defaultProps, props);
  const [paused, setPaused] = createSignal(!merged.autoplay);
  const [currentTime, setCurrentTime] = createSignal(0);
  const [duration, setDuration] = createSignal(0);
  const [isLooping, setIsLooping] = createSignal(merged.loop);
  const currentTimeFormatted = () => formatVideoTime(currentTime());
  const durationFormatted = () => formatVideoTime(duration());
  const progress = () => currentTime() / duration() * 100;
  const interfaceOpacity = () => paused() ? 1 : 0;
  onMount(() => {
    return;
  });
  return ssr(_tmpl$, ssrHydrationKey() + ssrAttribute("class", escape(classes$1.wrapper, true), false), `--progress:${escape(progress(), true)}%`, ssrAttribute("autoplay", merged.autoplay, true), ssrAttribute("muted", merged.muted, true), ssrAttribute("loop", isLooping(), true) + ssrAttribute("poster", escape(merged.poster, true), false), ssrAttribute("width", escape(merged.width, true), false) + ssrAttribute("height", escape(merged.height, true), false) + ssrAttribute("class", escape(classes$1.video, true), false), ssrAttribute("src", escape(merged.src, true), false), ssrAttribute("class", escape(classes$1.play, true), false), "--opacity:" + escape(interfaceOpacity(), true), paused() ? escape(createComponent(Play, {})) : escape(createComponent(Pause, {})), escape(createComponent(VisuallyHidden, {
    as: "span",
    get children() {
      return paused() ? "Play" : "Pause";
    }
  })), escape(currentTimeFormatted()), escape(durationFormatted()), ssrAttribute("class", escape(classes$1.progress, true), false), "--opacity:" + escape(interfaceOpacity(), true), ssrAttribute("value", escape(currentTime(), true), false), ssrAttribute("max", escape(duration(), true), false), ssrAttribute("aria-valuetext", escape(currentTimeFormatted().toString(), true), false));
}

const frontmatter = {
  "title": "AllStock 2.0 for Figma",
  "published": true,
  "pubDate": "2024-01-31T00:00:00.000Z",
  "description": "Highlights from the new version of my image search plugin",
  "image": {
    "alt": "Promo image for the AllStock Figma plugin.",
    "url": "https://docs.astro.build/assets/full-logo-light.png"
  },
  "tags": ["figma", "development"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "easier-access",
    "text": "Easier Access"
  }, {
    "depth": 2,
    "slug": "more-secure",
    "text": "More Secure"
  }, {
    "depth": 2,
    "slug": "more-performant",
    "text": "More Performant"
  }, {
    "depth": 2,
    "slug": "streamlined-interface",
    "text": "Streamlined Interface"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
      "astro-image": "astro-image",
      h2: "h2",
      p: "p",
      ...props.components
    },
    _component0 = _components["astro-image"];
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      "set:html": "A little Figma plugin I released last year recently passed 2K users. Not bad for a project that I published and then promptly never mentioned publicly."
    }), "\n", createVNode(_components.p, {
      "set:html": 'It\u2019s called <a href="https://www.figma.com/community/plugin/1235675201027690011/allstock">AllStock</a>, and it\u2019s a one-stop shop for finding and using high-quality images directly inside of Figma. It allows users to browse popular free photo libraries like Unsplash, Pexels, and Pixabay all at the same time without needing to leave their design file.'
    }), "\n", createVNode(_components.p, {
      children: createVNode(_component0, {
        src: __0___AllStock_Cover_5x3_jpg__,
        alt: "AllStock promo image"
      })
    }), "\n", createVNode(_components.p, {
      "set:html": "The project started as a learning exercise to explore Figma\u2019s plugin API. Unexpectedly, a nontrivial number of people have found it useful, so over the holiday break I decided to dive back in and rebuild it into a more proper product."
    }), "\n", createVNode(_components.p, {
      "set:html": "In the end, I overhauled every part of the codebase from scratch, from the interface to the APIs. Here are some of my favorite details from the project:"
    }), "\n", createVNode(Video, {
      src: "https://res.cloudinary.com/andystewartdesign/video/upload/v1707428210/work/figma/allstock-demo-4x3.mp4",
      poster: "https://res.cloudinary.com/andystewartdesign/image/upload/v1707428288/work/figma/allstock-demo-4x3-poster.jpg",
      autoplay: true,
      muted: true,
      loop: true,
      width: "1600",
      height: "1200",
      "client:load": true,
      "client:component-path": "/Users/andy/Documents/Dev/dotdesign-2024/src/components/Video/Video.tsx",
      "client:component-export": "default",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "easier-access",
      "set:html": "Easier Access"
    }), "\n", createVNode(_components.p, {
      "set:html": "You can now launch the plugin directly from Figma\u2019s quick actions menu (Figma\u2019s native launcher\u2014think spotlight or Raycast). In your Figma design file, simply type <code>command + /</code> on Mac to access the quick actions menu, and then enter \u201Callstock\u201D and your search query to get started. I\u2019m also now keeping the plugin open after you import an image, based on user feedback, in case you want to import multiple images in a single session (you\u2019re welcome, Kyle)."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_component0, {
        src: __1___allstock_quickactions_jpg__,
        alt: "The Figma quick actions menu being used to search a plugin called AllStock for images of rainbows"
      })
    }), "\n", createVNode(_components.h2, {
      id: "more-secure",
      "set:html": "More Secure"
    }), "\n", createVNode(_components.p, {
      "set:html": "Figma plugins are strictly frontend, client side applications, meaning there\u2019s no straightforward way to protect secret keys. In the original build, I did my best to obfuscate all requisite API keys, but it was admittedly a bit hacky. This time around, I\u2019m proxying all requests through hand-rolled Vercel edge functions (using the web framework Hono JS), meaning the API keys never have to touch the client side code. (And don\u2019t worry\u2014I got new keys, too.)"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_component0, {
        src: __2___allstock_performance_jpg__,
        alt: "A visualization showing data being sent from an image service through Vercel to Figma in order to protect the API keys needed to access the data"
      })
    }), "\n", createVNode(_components.h2, {
      id: "more-performant",
      "set:html": "More Performant"
    }), "\n", createVNode(_components.p, {
      "set:html": "In the first version of the plugin, I imported images directly from the relevant image service. It was efficient to build, but the size of the raw images ended up being a liability, slowing down\u2014and occasionally even crashing\u2014the plugin. Now, I\u2019m using ImageKit under the hood to optimize images before importing them into the file. As a side effect, this also affords users more control over the output size and quality of photos."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_component0, {
        src: __3___allstock_imagequality_jpg__,
        alt: "Detail view of the AllStock filter menu showing the export image quality and size inputs"
      })
    }), "\n", createVNode(_components.h2, {
      id: "streamlined-interface",
      "set:html": "Streamlined Interface"
    }), "\n", createVNode(_components.p, {
      "set:html": "If I\u2019m honest, a lot of the \u201Cback end\u201D work described above is in service of my desire to design front end interfaces. The new interface simplifies the search process by getting lesser-used options out of the way and putting the search input and service select boxes front and center. Additional filters can be accessed in an offscreen dialog as needed. Other quality of life features, such as previewing larger versions of images before importing them, and browsing results in a custom masonry-style layout, help make the experience feel more polished and complete."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_component0, {
        src: __4___allstock_interface_jpg__,
        alt: "Detail view of the AllStock search bar. The value of search input is \"portrait,\" and the the user is hovering over a button with the Unsplash logo"
      })
    }), "\n", createVNode(_components.p, {
      "set:html": "I love side projects like this, where a seemingly small and straightforward idea ends up leading you in several unexpected directions. Looking back, I already had about 75-80% of the knowledge that I would need to accomplish my goal\u2014meaning I had enough new concepts to explore to keep things interesting, but not so many that I got lost or overwhelmed."
    }), "\n", createVNode(_components.p, {
      "set:html": 'If you want to try it out for yourself, the plugin is available now <a href="https://www.figma.com/community/plugin/1235675201027690011">wherever you get your plugins</a> (i.e. the Figma community).'
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/posts/allstock-announcement/index.mdx";
const file = "/Users/andy/Documents/Dev/dotdesign-2024/src/content/posts/allstock-announcement/index.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/andy/Documents/Dev/dotdesign-2024/src/content/posts/allstock-announcement/index.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
