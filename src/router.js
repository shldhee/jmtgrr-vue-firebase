import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import JMTZCreate from './views/JMTZCreate.vue'
import JMTZList from './views/JMTZList.vue'
import JoinUser from './views/JoinUser.vue'
import LoginUser from './views/LoginUser.vue'
import NotFound from './views/NotFound.vue'
import NProgress from 'nprogress'
import store from '@/vuex/store'

Vue.use(Router)

const router = new Router({
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
      component: JMTZCreate,
      meta: {
        authRequired: true
      }
    },
    {
      path: '/jmtzlist',
      name: 'jmtzlist',
      component: JMTZList,
      props: true,
      meta: {
        authRequired: true
      },
      beforeEnter(routeTo, routeFrom, next) {
        console.log(1234)
        store.dispatch('getJMTZs').then(getJMTZs => {
          console.log(getJMTZs)
          routeTo.params.getJMTZs = getJMTZs
          next()
        })
      }
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
    },
    {
      path: '/404',
      name: '404',
      component: NotFound
    },
    {
      path: '*',
      redirect: { name: '404' }
    }
  ]
})

router.beforeEach((routeTo, routeFrom, next) => {
  // console.log(authComputed.loggedIn())
  // console.log({ ...authComputed })
  // console.log(!authComputed.loggedIn())
  // console.log(store.state.user.isAuthenticated)
  // console.log(!store.state.user.isAuthenticated)
  if (routeTo.matched.some(record => record.meta.authRequired)) {
    if (!store.state.user.isAuthenticated) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else {
    NProgress.start()
    next()
  }
})

router.afterEach(() => {
  NProgress.done()
})

export default router
