import Vue from 'vue'
import Router from 'vue-router'
import top from '@/components/top'
import navbar from '@/components/navbar'
import articleList from '@/components/articleList'
import topBack from '@/components/topBack'
import articleContent from '@/components/articleContent'
import topWukong from '@/components/topWukong'
import articleWukong from '@/components/articleWukong'

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
      path: '/topBack',
      name: 'topBack',
      component: topBack
    },
    {
      path: '/articleContent',
      name: 'articleContent',
      component: articleContent
    },
    {
      path: '/',
      name: 'topWukong',
      component: topWukong
    },
    {
      path: '/',
      name: 'articleWukong',
      component: articleWukong
    }
  ]

export default routes