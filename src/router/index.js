import Vue from 'vue'
import Router from 'vue-router'
import top from '@/components/top'
import navbar from '@/components/navbar'
import articleList from '@/components/articleList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'top',
      component: top
    },
    {
      path: '/',
      name: 'navbar',
      component: navbar
    },
    {
      path: '/',
      name: 'articleList',
      component: articleList
    }
  ]
})
