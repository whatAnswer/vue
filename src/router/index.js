import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DetailPlayPage from '@/components/DetailPlayPage'
import hetaoPage from '@/components/hetaoPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: 'DetailPlayPage',
      name: 'DetailPlayPage',
      component: DetailPlayPage
    },
    {
      path: 'hetaoPage',
      name: 'hetaoPage',
      component: hetaoPage
    }
  ]
})
