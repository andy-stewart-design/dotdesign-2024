export { renderers } from '../renderers.mjs';

const page = () => import('./prerender_Ch4T-tzg.mjs').then(n => n.b);

export { page };
