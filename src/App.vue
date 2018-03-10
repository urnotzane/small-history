<template>
  <div id="app">
    <top></top>
    <navbar></navbar>
    <articleList></articleList>
  </div>
</template>

<script>
import top from './components/top'
import navbar from './components/navbar'
import articleList from './components/articleList'

export default {
  name: 'App',
  components: {
    top,
    navbar,
    articleList
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
}
li{
  display: inline-block;
  list-style: none;
}
</style>
