import VueRouter, { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../page/Home/index.vue';
import Learn from '../page/Learn/index.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/learn', component: Learn },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
