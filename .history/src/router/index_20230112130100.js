import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: SignIn
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
