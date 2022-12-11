import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/ref',
    name: 'reg',
    component: () => import('../views/RefView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // 不带#
  // history: createWebHashHistory(process.env.BASE_URL), // 带#
  routes
})

export default router
