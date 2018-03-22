<template>
  <div class="articleList">
    <!-- <top ></top> -->
    <div class="top">
      <div class="search">
        <input v-model="searchVal" type="text" placeholder="搜索本页内容" />
      </div>
      <div id="search_result">
        <div v-for="item in search_result" :key="item.id">
          <span>{{item.title}}</span><br/>
          <span class="article-foot">{{item.author}}</span>
        </div>
      </div>
    </div>
    <navbar></navbar>
    <router-link v-on:click.native="passParam(item.href)" :to="{path:'articleContent',query:{href:item.href}}" :data-href="item.href" class="article-box" v-for="item in articleData" v-bind:key="item.id" >
      <div class="content-left" >
        <div class="article-title">{{item.title}}</div>     
        <div class="article-foot">
          <span>{{item.author}}</span>
          <span>{{item.date}}</span> 
        </div>
      </div>
      <div class="content-right" >
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
      articleData: [],
      searchVal: "",
      search_result: []
    }
  },
  watch: {
    searchVal: {
      handler: function (searchVal) {
        if(searchVal != ""){
          this.searchSth()
        }else {
          this.search_result = []
        }
      }
    },
    search_result: {
      handler: function (search_result) {
        this.divDis(search_result)
      }
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
      axios.get('/api/article_list')
        .then(function (res) {
          // console.log("From axios" + res.data)
          _data = res.data
        })
        .catch(function (err) {
          console.log(err)
        })
      setTimeout(() => {
        // console.log("From _data" + _data)
        that.articleData = _data
        // console.log("From articleData" + that.articleData)
      }, 200);
    },
    passParam: function (href) {
      this.$router.push({path:'articleContent', query:{href: href}})
      // console.log(href)
      return false
    },
    searchSth: function () {
      const that = this
      
      // console.log(this.searchVal)
      // console.log(that.articleData)
      //重置之前的搜索结果，否则之前的搜索结果也会存在里面
      that.search_result = []
      that.articleData.forEach(function (item, i) {
        // console.log(item.author + item.title)
        const tit = item.title.indexOf(that.searchVal),
        aut = item.author.indexOf(that.searchVal);
        // console.log(tit + aut)
        if(tit !== -1 || aut !== -1) {
          // console.log("已匹配：" + item.title) 
          var param = {
              title: item.title,
              author: item.author
          }
          // console.log(param)
          that.search_result.push(param)  
          // console.log(that.search_result)
        }
      })     
      // console.log(that.search_result)
    },
    divDis: function (data) {
      try {
          if(data.length > 0) {
            document.getElementById("rearch_result").style.display = "block"
        } else {
            document.getElementById("rearch_result").style.display = "none"
        }
      } catch (error) {
        //TypeError: Cannot read property 'style' of null
        console.log("Cannot read property 'style' of null!文档未加载完或不存在该属性时而出现的无关紧要的错误。")  
      }
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top{
    width: 100%;
    height: 80px;
    background-color: #f66;
    position: fixed;
    top: 0;
  }
  .search{
    text-align: center;
  }
  .search input{
    width: 240px;
    height: 20px;
    padding: 6px;
    border: 0;
    border-radius: 3px;
    outline: none;
    padding-left: 30px;
    margin-top: 40px;
    background: url(../assets/img/search.png) no-repeat ;
    background-color: #fff;
  }
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
 #search_result{
   width: 100%;
   position: absolute;
   top: 80px;
   z-index: 100;
   background-color: rgba(255, 255, 255, 1);
   border-radius: 3px;
   margin: 0 auto;
 }
 #search_result div{
   padding: 3px 15px 3px 35px;;
   border-bottom: 1px solid #e1e1e1;
   line-height: 18px;
   color: #212121;
   background: url(../assets/img/search.png) no-repeat ;
 }
 @media screen and (max-width: 375px) {
   .article-foot,.article-title,.content-left{
     width: 225px;
     height: auto;
   }
 }
 
</style>