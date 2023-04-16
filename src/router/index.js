import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import beforeEach from './beforeEach'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/activity',
    name: 'myorgactivity',
    component: () => import('../views/activity/list/Activity.vue')
  },
  {
    path: '/login',
    name: 'myorglogin',
    component: () => import('../security/Login.vue')
  },
  {
    path: '/register',
    name: 'myorgregister',
    component: () => import('../register/Register.vue')
  },
  {
    path: '/form-activity/:id',
    name: 'myorgformactivity',
    component: () => import('../views/activity/form/FormActivity.vue')
  },
  {
    path: '/note',
    name: 'myorgnote',
    component: () => import('../views/note/list/Note.vue')
  },
  {
    path: '/form-note/:id',
    name: 'myorgformnote',
    component: () => import('../views/note/form/FormNote.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(beforeEach)

export default router
