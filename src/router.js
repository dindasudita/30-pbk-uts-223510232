import { createRouter, createWebHistory } from 'vue-router';
import Todos from './views/Todos.vue';
import Posts from './views/Posts.vue';
import Albums from './views/Albums.vue';

const routes = [
  { path: '/todos', component: Todos },
  { path: '/posts', component: Posts },
  { path: '/albums', component: Albums },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
