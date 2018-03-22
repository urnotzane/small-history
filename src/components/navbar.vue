<template>
  <div class="navbar">
    <ul>
        <li v-on:click="turnRed(item)" v-for="item in navtitles" :key="item.id" v-bind:class="{ red: item.isClicked }" >{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      navtitles: [
          {
              id: 0,
              title: '热点',
              isClicked: true
          },
          {
              id: 1,
              title: '科技',
              isClicked: false
          },
          {
              id: 2,
              title: '区块链',
              isClicked: false
          },
          {
              id: 3,
              title: '游戏',
              isClicked: false
          },
          {
              id: 4,
              title: '娱乐',
              isClicked: false
          },
          {
              id: 5,
              title: '电影',
              isClicked: false
          },
          {
              id: 6,
              title: '动漫',
              isClicked: false
          }
      ]
    }
  },
  methods: {
      turnRed: function (item) {
          const that = this
          item.isClicked = true
          //点击后使其他item的isClicked = false
          for(var i = 0;i < that.navtitles.length; i++) {
             if(that.navtitles[i].id !== item.id) {
                 that.navtitles[i].isClicked = false
             }
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar{
    margin-top: 80px;
}
  .navbar ul{
      padding: 6px 8px;
      border-bottom: 1px solid #eee;
  }
  .navbar li{
      padding: 0 8px;
  }
  .red{
      color: #f66;
  }
</style>
