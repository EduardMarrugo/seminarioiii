import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/dashboard.vue'),
    redirect: { name: 'home' },
    props: {},
    children: [
      {
        path: 'contacts',
        name: 'contacts',
        component: () => import('../views/contacts.vue'),
        props: {}
      },
      {
        path: 'home',
        name: 'home',
        component: () => import('../views/home.vue'),
        props: {}
      },
      {
        path: 'profile',
        name: 'profile',
        component: () => import('../views/userAuth/profile.vue'),
        props: {}
      },
      {
        path: 'history',
        name: 'history',
        component: () => import('../views/userAuth/profile.vue'),
        props: {}
      },

    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
