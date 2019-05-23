import Vue from 'vue'
import Router from 'vue-router'
// import goods from 'components/goods/goods'
// import seller from 'components/seller/seller'
// import ratings from 'components/ratings/ratings'
Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [{
    path: '/',
    redirect: '/goods'
  }, {
    path: '/goods',
    component: () => import('@/views/goods')
  }, {
    path: '/seller',
    component: () => import('@/views/seller')
  }, {
    path: '/ratings',
    component: () => import('@/views/ratings')
  }]
})
