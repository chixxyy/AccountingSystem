import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/nest',
      component: () => import('../views/NestView.vue'),
      children: [
        {
          path: 'child', // 路由內層不需要添加 '/'
          component: () => import('../views/NestChildView.vue')
        },
        {
          path: ':id', // 使用 :id 開頭
          component: () => import('../views/DynView.vue')
        },
        {
          path: '', // 預設畫面路徑可以留白
          component: () => import('../views/NestChildDefaultView.vue')
        }
      ]
    },
  ],
})

export default router
