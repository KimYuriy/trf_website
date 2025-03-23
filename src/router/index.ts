import ErrorPage from '@/components/pages/error/ErrorPage.vue';
import HomePage from '@/components/pages/home/HomePage.vue';
import InProgressPage from '@/components/pages/in-progress/InProgressPage.vue';
import LoadingPage from '@/components/pages/loading/LoadingPage.vue';
import NoSuchPage from '@/components/pages/no_such_page/NoSuchPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

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
    path: '/in-progress',
    component: InProgressPage,
    beforeEnter: (to, from, next) => {
      if (!sessionStorage.getItem('navigation.in-progress')) {
        next('/');
      } else {
        sessionStorage.removeItem('navigation.in-progress');
        next();
      }
    }
  },
  {
    path: '/error',
    component: ErrorPage,
    beforeEnter: (to, from, next) => {
      if (!sessionStorage.getItem('navigation.error')) {
        next('/');
      } else {
        sessionStorage.removeItem('navigation.error');
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