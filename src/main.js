// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
// import BScroll from 'better-scroll'
import '@/common/stylus/index.styl'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)
// Vue.use(BScroll)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
