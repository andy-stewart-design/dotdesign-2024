import { a4 as __astro_tag_component__, a5 as Fragment, _ as createVNode } from './astro_UrTtDdCc.mjs';
import { b as $$Image } from './pages/__PMfnjopB.mjs';
import './component_module.312fae96_WHdjU1EG.mjs';
import './component_module.0adc9166_ZpeozZ6m.mjs';

const frontmatter = {
  "title": "Animating with the Flip Plugin for GSAP",
  "published": false,
  "pubDate": "2022-07-01T00:00:00.000Z",
  "description": "This is the first post of my new Astro blog.",
  "image": {
    "alt": "The full Astro logo.",
    "url": "https://docs.astro.build/assets/full-logo-light.png"
  },
  "tags": ["development", "animation"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "what-the-flip-is-it",
    "text": "What the flip is it?"
  }, {
    "depth": 2,
    "slug": "the-technique",
    "text": "The technique"
  }, {
    "depth": 2,
    "slug": "the-challenge",
    "text": "The challenge"
  }, {
    "depth": 2,
    "slug": "how-it-works",
    "text": "How it works"
  }, {
    "depth": 3,
    "slug": "step-1-capture-the-state",
    "text": "Step 1: Capture the state"
  }, {
    "depth": 3,
    "slug": "step-2-make-the-changes",
    "text": "Step 2: Make the changes"
  }, {
    "depth": 3,
    "slug": "step-3-flip-it",
    "text": "Step 3: FLIP it!"
  }, {
    "depth": 2,
    "slug": "wrapping-up",
    "text": "Wrapping up"
  }, {
    "depth": 3,
    "slug": "helpful-resources",
    "text": "Helpful resources"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    h2: "h2",
    h3: "h3",
    ol: "ol",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "what-the-flip-is-it",
      "set:html": "What the flip is it?"
    }), "\n", createVNode(_components.p, {
      "set:html": 'Every time a new <a href="https://gsap.com/">GSAP</a> plugin is introduced, I\u2019m close to bursting from excitement. The simplicity of the GreenSock API makes learning and applying these tools in projects such a dream. I had the pleasure of beta testing the <a href="https://gsap.com/scrolltrigger/">ScrollTrigger plugin</a> and was blown away by how easily I was able to dive in and start creating.'
    }), "\n", createVNode(_components.p, {
      "set:html": 'The <a href="https://gsap.com/docs/v3/Plugins/Flip">Flip plugin</a> is no different. And how about this? As of the <a href="https://gsap.com/3-9/">3.9 release</a> (Dec 2021), it\u2019s no longer a members-only plugin. T\u2019was a <a href="https://codepen.io/GreenSock/pen/NWadxaR">Merry Christmas</a> indeed!'
    }), "\n", createVNode(_components.p, {
      "set:html": "Before I continue, let\u2019s take a moment to celebrate the amazing GreenSock team for the incredible animation tools they provide for our web community. \u{1F64F}"
    }), "\n", createVNode(_components.h2, {
      id: "the-technique",
      "set:html": "The technique"
    }), "\n", createVNode(_components.p, {
      "set:html": 'FLIP, coined by <a href="https://aerotwist.com/blog/flip-your-animations/">Paul Lewis</a>, is an acronym for First, Last, Invert, and Play. The Flip plugin harnesses this technique so that web developers can effortlessly and smoothly transition elements between states. Take it straight from <a href="https://gsap.com/docs/v3/Plugins/Flip">the plugin\u2019s introduction</a>:'
    }), "\n", createVNode(_components.blockquote, {
      "set:html": "\n<p>Flip records the current position/size/rotation of your elements, then you make whatever changes you want, and then Flip applies offsets to make them LOOK like they never moved/resized/rotated and then animates the removal of those offsets! UI transitions become remarkably simple to code. Flip does all the heavy lifting.</p>\n"
    }), "\n", createVNode(_components.p, {
      "set:html": 'I recommend reading <a href="https://gsap.com/docs/v3/Plugins/Flip">the docs</a> (always!), and watching that intro tutorial video (or jump straight down to their code examples if that\u2019s your fancy) to find out how you, too, can produce super sizzlin\u2019 layout animations with a minimal amount of code.'
    }), "\n", createVNode(_components.h2, {
      id: "the-challenge",
      "set:html": "The challenge"
    }), "\n", createVNode(_components.p, {
      "set:html": 'The final week\u2019s prompt for the <a href="https://codepen.io/challenges/2021/december/4">December 2021 CodePen Challenge</a> involved using the FLIP technique. This couldn\u2019t have lined up more perfectly. The holidays had arrived. The office was quiet. I filled my coffee mug to its very top and, after a few hours of learning and experimentation, came up with this animation prototype:'
    }), "\n", createVNode(_components.p, {
      "set:html": "In the above CodePen embed, click on a product item square and it will magically slingshot towards the cart button. Once the element reaches the end of its transition, it will be inserted into the cart alongside other selected products. Click on the cart button to pull its container into view with those selections. Inside this container, clicking items sends them back to their initial positions in the grid."
    }), "\n", createVNode(_components.p, {
      "set:html": "Building this functionality without the Flip plugin would take quite a bit of time and strategy. GSAP just handles all of that critical code; the rest is left up to our wild imaginations!"
    }), "\n", createVNode(_components.p, {
      "set:html": "Let\u2019s get into some of the key features that bring this animation to life."
    }), "\n", createVNode(_components.h2, {
      id: "how-it-works",
      "set:html": "How it works"
    }), "\n", createVNode(_components.p, {
      "set:html": 'The \u201CUsage\u201D section of the <a href="https://gsap.com/docs/v3/Plugins/Flip">Flip plugin docs</a> breaks this down into three steps that are followed to execute this add-to-cart animation:'
    }), "\n", createVNode(_components.ol, {
      "set:html": "\n<li>Get the current state</li>\n<li>Make your state changes</li>\n<li>Call <code>Flip.from(state, options)</code></li>\n"
    }), "\n", createVNode(_components.h3, {
      id: "step-1-capture-the-state",
      "set:html": "Step 1: Capture the state"
    }), "\n", createVNode(_components.p, {
      "set:html": "When an item is selected, Flip\u2019s <code>getState</code> method is called to collect data about the item\u2019s current size, position, rotation, and skew. This gets stored in a variable before applying other DOM edits, style changes, and so on."
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "set:html": '<code><span class="line"><span style="color:#F97583">const</span><span style="color:#79B8FF"> state</span><span style="color:#F97583"> =</span><span style="color:#E1E4E8"> Flip.</span><span style="color:#B392F0">getState</span><span style="color:#E1E4E8">(item);</span></span></code>'
    }), "\n", createVNode(_components.p, {
      "set:html": 'The Flip plugin by default only records the following CSS properties: transforms (x, y, scaleX, scaleY, rotation, skewX), width, height, and opacity. However, it can be configured to affect others by adding a <code>props</code> property with a comma-delimited list of values in the <code>options</code> object. Learn more under the \u201CUsage\u201D section in <a href="https://gsap.com/docs/v3/Plugins/Flip">the docs</a>!'
    }), "\n", createVNode(_components.h3, {
      id: "step-2-make-the-changes",
      "set:html": "Step 2: Make the changes"
    }), "\n", createVNode(_components.p, {
      "set:html": "After capturing the initial state data, the item gets appended as a child of the cart button."
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "set:html": '<code><span class="line"><span style="color:#E1E4E8">cartBtnWrapper.</span><span style="color:#B392F0">appendChild</span><span style="color:#E1E4E8">(item);</span></span></code>'
    }), "\n", createVNode(_components.h3, {
      id: "step-3-flip-it",
      "set:html": "Step 3: FLIP it!"
    }), "\n", createVNode(_components.p, {
      "set:html": "The selected item is ready to animate from its current grid position over to the cart button. Time for the Flip plugin to dazzle us all with its magic. \u2728"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "set:html": '<code><span class="line"><span style="color:#E1E4E8">Flip.</span><span style="color:#B392F0">from</span><span style="color:#E1E4E8">(state, {</span></span>\n<span class="line"><span style="color:#E1E4E8">  duration: reducedMotion </span><span style="color:#F97583">?</span><span style="color:#79B8FF"> 0</span><span style="color:#F97583"> :</span><span style="color:#79B8FF"> 0.5</span><span style="color:#E1E4E8">,</span></span>\n<span class="line"><span style="color:#E1E4E8">  ease: </span><span style="color:#9ECBFF">"back.in(0.8)"</span><span style="color:#E1E4E8">,</span></span>\n<span class="line"><span style="color:#E1E4E8">});</span></span></code>'
    }), "\n", createVNode(_components.p, {
      "set:html": "Flip checks out the stored <code>state</code> object, compares it to the item\u2019s current state data, and immediately sets the position and size so that the item appears to still exist in its grid placement. Then the item transitions to its <em>actual</em> placement inside the button by animating the removal of these position and size offset values."
    }), "\n", createVNode(_components.p, {
      "set:html": "I did nearly nothing here. This is all GSAP Flip sorcery. My goodness it\u2019s good."
    }), "\n", createVNode(_components.p, {
      "set:html": 'You might be wondering about the <code>reducedMotion</code> variable; review its value in the full version of the JavaScript code (click the JS tab in the CodePen embed above). It detects if a user has requested less movement on screen. If true, the item will be instantly added to the cart instead of animating across the page. Learn more about <code>prefers-reduced-motion</code> in <a href="https://web.dev/prefers-reduced-motion/">this web.dev article</a>.'
    }), "\n", createVNode(_components.p, {
      "set:html": "In order to get the item to move into the cart once the animation has finished, the <code>onComplete</code> callback is used to append the item as a child."
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "set:html": '<code><span class="line"><span style="color:#E1E4E8">Flip.</span><span style="color:#B392F0">from</span><span style="color:#E1E4E8">(state, {</span></span>\n<span class="line"><span style="color:#E1E4E8">  duration: reducedMotion </span><span style="color:#F97583">?</span><span style="color:#79B8FF"> 0</span><span style="color:#F97583"> :</span><span style="color:#79B8FF"> 0.5</span><span style="color:#E1E4E8">,</span></span>\n<span class="line"><span style="color:#E1E4E8">  ease: </span><span style="color:#9ECBFF">"back.in(0.8)"</span><span style="color:#E1E4E8">,</span></span>\n<span class="line"><span style="color:#B392F0">  onComplete</span><span style="color:#E1E4E8">: () </span><span style="color:#F97583">=></span><span style="color:#E1E4E8"> {</span></span>\n<span class="line"><span style="color:#E1E4E8">    cartItems.</span><span style="color:#B392F0">appendChild</span><span style="color:#E1E4E8">(item);</span></span>\n<span class="line"><span style="color:#E1E4E8">  },</span></span>\n<span class="line"><span style="color:#E1E4E8">});</span></span></code>'
    }), "\n", createVNode(_components.p, {
      "set:html": 'After that, other animations are run such as sliding the item into place and the acrobatic front flip of the count badge. This project is <em>all</em> about the flips. Be sure to jump into the <a href="#codepen-demo">full JS code</a> for those implementation details.'
    }), "\n", createVNode(_components.h2, {
      id: "wrapping-up",
      "set:html": "Wrapping up"
    }), "\n", createVNode(_components.p, {
      "set:html": "This experiment seems like it only just begins to harness the superpower supplied by the GSAP Flip plugin. I\u2019m looking forward to seeing how you all utilize this in projects. As always, with this great power comes a lot of responsibility. Consider folks that prefer reduced motion or how larger layout animations could affect the overall experience."
    }), "\n", createVNode(_components.p, {
      "set:html": 'Friendly feedback forever welcome. Share with me on <a href="https://fosstodon.org/@hexagoncircle">Mastodon</a>.'
    }), "\n", createVNode(_components.h3, {
      id: "helpful-resources",
      "set:html": "Helpful resources"
    }), "\n", createVNode(_components.ul, {
      "set:html": '\n<li><a href="https://gsap.com/docs/v3/Plugins/Flip">GSAP Flip plugin docs</a></li>\n<li><a href="https://codepen.io/collection/AEkJmd">Flip showcase</a></li>\n<li><a href="https://codepen.io/collection/nqvwmG">Flip how-to demos</a></li>\n<li><a href="https://web.dev/prefers-reduced-motion/">prefers-reduced-motion: Sometimes less movement is more</a></li>\n'
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
const url = "src/content/posts/first-post.mdx";
const file = "/Users/andy/Documents/Dev/dotdesign-2024/src/content/posts/first-post.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/andy/Documents/Dev/dotdesign-2024/src/content/posts/first-post.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
