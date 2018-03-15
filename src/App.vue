<template>
  <div id="app">
      <top v-if="$route.meta.keepAlive"></top>
      <navbar v-if="$route.meta.keepAlive"></navbar>
      <article-list v-if="$route.meta.keepAlive"></article-list>
      <top-back v-if="!$route.meta.keepAlive"></top-back>
      <article-content v-if="!$route.meta.keepAlive"></article-content>
      <top-wukong v-if="!$route.meta.keepAlive"></top-wukong>
      <article-wukong v-if="!$route.meta.keepAlive"></article-wukong>
  </div>
</template>

<script>
import top from './components/top'
import navbar from './components/navbar'
import articleList from './components/articleList'
import topBack from './components/topBack'
import articleContent from './components/articleContent'
import topWukong from './components/topWukong'
import articleWukong from './components/articleWukong'

export default {
  name: 'App',
  components: {
    top,
    navbar,
    articleList,
    topBack,
    articleContent,
    topWukong,
    articleWukong
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*{
    margin: 0;
    padding: 0;
    max-width: 680px;
    margin: 0 auto;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 25px;
}
li{
  display: inline-block;
  list-style: none;
}
.title{
  margin-bottom: 10px;
}
</style>
