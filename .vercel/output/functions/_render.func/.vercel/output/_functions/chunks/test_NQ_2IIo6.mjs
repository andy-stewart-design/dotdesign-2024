export { renderers } from '../renderers.mjs';

const page = () => import('./pages/test_1M65Tl34.mjs').then(n => n.t);

export { page };
