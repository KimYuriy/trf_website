import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/pages/home/HomePage.vue';
import LoadingPage from '@/components/pages/loading/LoadingPage.vue';
import NoSuchPage from '@/components/pages/no_such_page/NoSuchPage.vue';

const routes = [
  {
    path: '/',
    component: LoadingPage,
  },
  {
    path: '/home',
    component: HomePage,
    beforeEnter: (to, from, next) => {
      if (!sessionStorage.getItem('navigation.home')) {
        next('/');
      } else {
        sessionStorage.removeItem('navigation.home');
        next();
      }
    }
  },
  {
    path: '/:catchAll(.*)',
    component: NoSuchPage,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;