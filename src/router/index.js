import Vue from 'vue'
import VueRouter from 'vue-router'
import AllView from '../views/AllView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'all',
    component: AllView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
