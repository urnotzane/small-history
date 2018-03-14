<template>
  <div class="articleList">
    <div class="article-box"  v-for="item in articleData" v-bind:key="item.id">
      <div class="article-title">{{item.title}}</div>
      <div class="article-img">
        <img src="#" />
        <img src="#" />
        <img src="#" />
      </div>
      <div class="article-foot">
        <span>{{item.source}}</span>
        <span>{{item.comment}}</span>
        <span>{{item.time}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'articleList',
  data () {
    return {
      articleData: [
        {
          id: 6532253768757543432,
          title: "太监不只中国有？古代世界各地都有！有个国家今天还有太监！",
          source: "中华网",
          comment: "666评论",
          time: "1秒前"
        },
        {
          id: 6532006589467984391,
          title: "孔明兄弟仨有蜀得龙、吴得虎、魏得狗的说法，其后人也很是牛气",
          source: "史家吟唱",
          comment: "888评论",
          time: "1分钟前"
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

 .articleList{
   padding: 0 16px;
 }
 .article-box{
   padding: 8px 0;
   border-bottom: 1px solid #eee;
 }
 .article-box div{
   padding: 2px 0;
 }
 .article-title{
   font-size: 18px;
 }
 .article-img img{
   width: 111px;
   height: 65px;
 }
 .article-foot{
   font-size: 12px;
   color: #a1a1a1;
 }
 
</style>
