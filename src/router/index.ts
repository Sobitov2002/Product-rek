import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/MainLayout.vue'
import Price from '@/page/application/Page.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/price',
      name: 'price',
      component: Price,  
    }
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
  },
});

export default router;
