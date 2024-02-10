export { renderers } from '../renderers.mjs';

const page = () => import('./pages/test_GuMecAwh.mjs').then(n => n.t);

export { page };
