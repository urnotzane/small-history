import Vue from 'vue'
import Router from 'vue-router'
import top from '@/components/top'
import navbar from '@/components/navbar'
import articleList from '@/components/articleList'
import articleContent from '@/components/articleContent'

Vue.use(Router)

const routes = [  
  {
    path: '/',
    component: articleList,
    meta: {keepAlive: true}
  },
  {
    path: '/',
    name: 'top',
    component: top,
    meta: {keepAlive: true}
  },
  {
    path: '/',
    name: 'navbar',
    component: navbar,
    meta: {keepAlive: true}
  },
  {
    path: '/articleContent',
    name: 'articleContent',
    component: articleContent
  },
]

export default routes