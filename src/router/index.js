import Vue from 'vue'
import Router from 'vue-router'
import top from '@/components/top'
import navbar from '@/components/navbar'
import articleList from '@/components/articleList'
import topBack from '@/components/topBack'
import articleContent from '@/components/articleContent'

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
    },
    {
      path: '/',
      name: 'topBack',
      component: topBack
    },
    {
      path: '/',
      name: 'articleContent',
      component: articleContent
    }
  ]
})
