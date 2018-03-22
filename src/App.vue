<template>
  <div id="app">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
  </div>
</template>

<script>
import articleList from './components/articleList'
export default {
  name: 'App',
  components: {
    articleList
  },
  methods: {
    
  }
}
</script>

<style>
#app {
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*{
    margin: 0;
    padding: 0;
    max-width: 680px;
    margin: 0 auto;
    line-height: 25px;
}
li{
  display: inline-block;
  list-style: none;
}
.title{
  margin-bottom: 10px;
}
a{
  color: #212121;
  text-decoration: none;
  display: block;
   border-bottom: 1px solid #eee;
}

</style>