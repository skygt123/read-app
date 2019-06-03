import Vue from 'vue'
import Router from 'vue-router'
import Home from 'views/Home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: () => import('views/Recommend/Recommend')
    },
    {
      path: '/category',
      name: 'category',
      component: () => import('views/Category/Category')
    },
    {
      path: '/rank',
      name: 'rank',
      component: () => import('views/Rank/Rank')
    }
  ]
})
