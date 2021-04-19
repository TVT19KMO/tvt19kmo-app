import { store } from '@/store';

import { createRouter, createWebHashHistory } from 'vue-router';
import { MainPage, TasksPage, AuthPage } from './views';

const ifNotAuthenticated = (from, to, next) => {
  if (!store.getters.isAuthenticated) {
    next();
    return;
  }
  next('/');
};

const ifAuthenticated = (from, to, next) => {
  if (store.getters.isAuthenticated) {
    next();
    return;
  }
  next('/login');
};

export const routes = [
  {
    path: '/',
    component: MainPage,
    name: 'home',
    beforeEnter: ifAuthenticated,
  },
  {
    path: '/tasks',
    component: TasksPage,
    name: 'tasks',
    beforeEnter: ifAuthenticated,
  },
  {
    path: '/register',
    component: AuthPage,
    name: 'register',
    beforeEnter: ifNotAuthenticated,
  },
  {
    path: '/login',
    component: AuthPage,
    name: 'login',
    beforeEnter: ifNotAuthenticated,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: MainPage,
    beforeEnter: ifAuthenticated,
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.resolve({
  name: 'not-found',
  params: { pathMatch: 'not/found' },
});
////// testi
export default router;
