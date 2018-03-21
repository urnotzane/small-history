<template>
  <div class="articleList">
    <top ></top>
    <navbar></navbar>
    <router-link to="articleContent"  class="article-box" v-for="item in articleData" v-bind:key="item.id" v-on:click="isHide">
      <div class="content-left" :data-href="item.href">
        <div class="article-title">{{item.title}}</div>     
        <div class="article-foot">
          <span>{{item.author}}</span>
          <span>{{item.date}}</span>
        </div>
      </div>
      <div class="content-right" :data-href="item.href">
        <div class="article-img" >
          <img :src="item.img_url">
        </div>
      </div>
    </router-link>
    <div class="remark">暂无更多消息~</div> 
  </div>

</template>

<script>
import top from './top'
import navbar from './navbar'
import axios from 'axios'


export default {
  name: 'articleList',
  components: {
    top,
    navbar,
  },
  data () {
    return {
      articleData: []
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    isHide: function () {
      this.$emit('list-say',false)
      console.log("child is ok")
    },
    getData: function () {
      const that = this
      var _data = []
      axios.get('/api/story_list')
        .then(function (res) {
          // console.log("From axios" + res.data)
          _data = res.data
        })
        .catch(function (eer) {
          console.log(err)
        })
      setTimeout(() => {
        // console.log("From _data" + _data)
        that.articleData = _data
        // console.log("From articleData" + that.articleData)
      }, 200);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

 .article-box{
   padding: 8px 16px;
   display: block;
     height: 78px;
   }
   .article-box div{
   padding: 2px 0;
 }
 .content-left{
   float: left;
   height: 65px;
   overflow: hidden;
 }
 .content-right{
   float: right;
 }
 .article-title{
   font-size: 18px;
 }
  .content-right,.article-img img{
   width: 111px;
   height: 65px;
 }
 .article-foot{
   font-size: 12px;
   color: #a1a1a1;
 }
 .remark{
   text-align: center;
   color: #a1a1a1;
   font-size: 12px;
 }
 @media screen and (max-width: 375px) {
   .article-foot,.article-title,.content-left{
     width: 225px;
     height: auto;
   }
 }
 
</style>