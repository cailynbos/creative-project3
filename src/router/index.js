import Vue from 'vue'
import VueRouter from 'vue-router'
import AllView from '../views/AllView.vue'
import ScifiView from '../views/ScifiView.vue'
import FantasyView from '../views/FantasyView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'all',
    component: AllView
  },
  {
    path: '/scifi',
    name: 'scifi',
    component: ScifiView
  },
  {
    path: '/fantasy',
    name: 'fantasy',
    component: FantasyView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
