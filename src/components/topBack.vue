<template>
  <div class="topBack">
      <div class="menu">
          <div class="left" v-on:click="goBefore">
              <img src="../assets/img/back.png" />
          </div>
          
          <div class="mid">
              <div class="source left">
                文章内容
              </div>              
              <div class="source right">
                 <img src="../assets/img/more.png" />
              </div>
          </div>
          <div class="right">
              <div class="source right">
                <button>关注</button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'topBack',
  data () {
      return {
        i: "i"
      }
  },
  methods: {
      goBefore: function () {
          window.history.go(-1)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .topBack{
    width: 100%;
    height: 79px;
    background-color: #fff;
    border-bottom: 1px #e6e6e6 solid;
    margin-top: 0;
    position: fixed;
    top: 0;
  }
.menu{
    margin-top: 40px;
    width: 100%;
    height: 30px;
}
.left,.right{
    float: left;
    padding: 0 10px;
}
.right{
    float: right;
}
.source{
    display: inline-block;
    margin-top: -1px;
}
.source button{
    padding: 3px 15px;
    background-color: #f66;
    border: 0;
    border-radius: 3px;
    outline: none;
    color: #fff;
    margin-right: -10px;
    cursor: pointer;
}

</style>
