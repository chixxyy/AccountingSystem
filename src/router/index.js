import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Transaction from '@/views/Transaction.vue';
import Invest from '@/views/Invest.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/add', component: Transaction },
  { path: '/invest', component: Invest },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;