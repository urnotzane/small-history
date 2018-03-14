<template>
  <div class="top">
    <div class="search">
      <input type="text" placeholder="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'top',
  data () {
    return {
      i: "i"
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
</style>
