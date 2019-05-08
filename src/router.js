import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import JMTZCreate from './views/JMTZCreate.vue'
import JMTZList from './views/JMTZList.vue'
import JoinUser from './views/JoinUser.vue'
import LoginUser from './views/LoginUser.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/jmtzcreate',
      name: 'jmtzcreate',
      component: JMTZCreate
    },
    {
      path: '/jmtzlist',
      name: 'jmtzlist',
      component: JMTZList
    },
    {
      path: '/join',
      name: 'join',
      component: JoinUser
    },
    {
      path: '/login',
      name: 'login',
      component: LoginUser
    }
  ]
})
