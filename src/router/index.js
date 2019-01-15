import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import Class from '@/pages/class'
import Car from '@/pages/car'
import Personal from '@/pages/personal'
import Login from '@/pages/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/class',
      name: 'class',
      component: Class
    },
    {
      path: '/car',
      name: 'car',
      component: Car
    },
    {
      path: '/personal',
      name: 'personal',
      component: Personal
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
