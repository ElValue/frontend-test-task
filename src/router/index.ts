import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Uploader',
    component: () => import('../views/Uploader.vue')
  },
  {
    path: '/task-list',
    name: 'TaskList',
    component: () => import('../views/Task-list.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
