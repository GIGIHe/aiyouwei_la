import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/views/Index'
import CarList from '@/views/CarList'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/CarList',
      name: 'CarList',
      component: CarList
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
