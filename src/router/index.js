import { createRouter, createWebHistory } from 'vue-router'
import Pokemania from '../components/Pokemania.vue'

const routes = [
  {
    path: '/',
    name: 'Pokemania',
    component: Pokemania
  },
  {
    path: '/random',
    name: 'Random',
    component: () => import('../views/Random.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('../views/Detail.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
