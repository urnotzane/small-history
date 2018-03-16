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

export default new Router({
  routes: [
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
      path: '/',
      name: 'articleList',
      component: articleList,
      meta: {keepAlive: true}
    },
    {
      path: '/',
      name: 'topBack',
      component: topBack,
      meta: {keepAlive: false}
    },
    {
      path: '/',
      name: 'articleContent',
      component: articleContent,
      meta: {keepAlive: false}
    },
    {
      path: '/',
      name: 'topWukong',
      component: topWukong,
      meta: {keepAlive: false}
    },
    {
      path: '/',
      name: 'articleWukong',
      component: articleWukong,
      meta: {keepAlive: false}
    }
  ]
})
