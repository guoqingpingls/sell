<template>
  <div id="app">
    <div class='header'>
      <v-header :seller='seller'></v-header>
    </div>
    <div class='tab border-1px'>
      <div class='tab-item'>
        <router-link :to='{path: "/goods"}'>
          商品
        </router-link>
      </div>
      <div class='tab-item'>
        <router-link to='/ratings'>
          评论
        </router-link>
      </div>
      <div class='tab-item'>
        <router-link to='/seller'>
          商家
        </router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import VHeader from 'components/header'
const ERR_OK = 0
export default {
  name: 'app',
  data () {
    return {
      seller: {}
    }
  },
  components: {
    VHeader
  },
  created () {
    this.$http.get('/api/seller').then((res) => {
      if (res.body.errno === ERR_OK) {
        this.seller = res.body.data
        console.log(this.seller)
      }
    }, (err) => {
      console.log(err)
    })
  }
}
</script>

<style lang='stylus'>
@import './common/stylus/mixin'
  #app
    .tab
      display: flex
      width: 100%
      height: 40px
      line-height: 40px
      border-1px(rgba(7,17,27,0.1))
      .tab-item
        flex: 1
        text-align: center
        a
          display: block
          font-size: 14px
          color: rgb(77,85,92)
          &.active
            color: rgb(240,20,20)
</style>
