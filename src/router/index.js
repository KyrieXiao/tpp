import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
//引入路由对应的组件
import film from '@/components/film/film'
import cinema from '@/components/cinema/cinema'
import mine from '@/components/mine/mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'film',
      component: film
    },
    {
      path: '/cinema',
      name: 'cinema',
      component: cinema
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
  ]
})
