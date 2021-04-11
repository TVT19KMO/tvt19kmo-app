import { createRouter, createWebHashHistory } from 'vue-router';
import { MainPage, TasksPage } from './views';

export const routes = [
  { path: '/', component: MainPage },
  { path: '/tasks', component: TasksPage },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
