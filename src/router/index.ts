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
  },
  {
    path: '/in-progress',
    component: InProgressPage,
  },
  {
    path: '/error',
    component: ErrorPage,
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

// // Флаг для отслеживания программных переходов
// let isProgrammaticNavigation = false;

// // Список запрещенных путей для прямого перехода
// const restrictedPaths = ['/', '/in-progress', '/error'];

// // Глобальный хук beforeEach
// router.beforeEach((to, from, next) => {
//   if (restrictedPaths.includes(to.path) && !isProgrammaticNavigation) {
//     // Если путь запрещен и переход не программный, перенаправляем на страницу 404 или другую
//     next('/no-such-page'); // или next('/home') для перенаправления на главную
//   } else {
//     // Разрешаем переход
//     next();
//   }
// });

// // Перехватываем все программные переходы
// router.afterEach(() => {
//   isProgrammaticNavigation = false;
// });

// // Переопределяем метод push, чтобы установить флаг
// const originalPush = router.push;
// router.push = function push(location) {
//   isProgrammaticNavigation = true;
//   return originalPush.call(this, location);
// };

export default router;