import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AddTransaction from '@/views/AddTransaction.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/add', component: AddTransaction },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;