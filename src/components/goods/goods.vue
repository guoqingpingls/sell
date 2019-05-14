<template>
  <div class='goods'>
    <div class='menu-wrap'>
      <ul>
        <li v-for='(item, index) in goods' :key='index' class='menu-item'>
          <span class='text'>
            <span v-show='item.type > 0' class='icon' :class='iconMaps[item.type]'></span>
            <span class='special'></span>
            <span>{{ item.name }}</span>
          </span>
        </li>
      </ul>
    </div>
    <div class='foods-wrap'></div>
  </div>
</template>
<script>
const ERR_OK = 0
export default {
  name: 'goods',
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      goods: []
    }
  },
  created () {
    this.iconMaps = ['discount', 'decrease', 'special', 'invoice', 'guarantee']
    this.$http.get('./api/goods').then((res) => {
      res = res.body
      if (res.errno === ERR_OK) {
        this.goods = res.data
        console.log(this.goods)
      }
    })
  }
}
</script>
<style lang='stylus'>
.goods
  display: flex
  position: absolute
  top: 174px
  bottom: 46px
  width: 100%
  overflow: hidden
  .menu-wrap
    flex: 0 0 80px
    width: 80px
    background-color: #f3f5f7
    .menu-item
      display: table
  .foods-wrap
    flex: 1

</style>


