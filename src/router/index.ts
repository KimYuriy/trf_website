import HomePage from '@/components/pages/home/HomePage.vue'
import InProgressPage from '@/components/pages/in-progress/InProgressPage.vue';
import LoadingPage from '@/components/pages/loading/LoadingPage.vue';
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: LoadingPage,
  },
  {
    path: '/home',
    component: HomePage,
  },
  {
    path: '/in-progress',
    component: InProgressPage,
  }

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
});

export default router;