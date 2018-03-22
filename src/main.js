// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routes from './router'
import axios from 'axios'

Vue.prototype.$ajax = axios
// Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history',
  base: __dirname, //这个很重要
  routes
})

/* eslint-disable no-new */
//这个也不渲染页面啊，咋搞的，神经病啊
// const app = new Vue({
//   router
// }).$mount('#app')

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})