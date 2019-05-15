<template>
  <div class='goods'>
    <div class='menu-wrap'>
      <ul>
        <li v-for='(item, index) in goods' :key='index' class='menu-item'>
          <span class='text'>
            <span class='icon' :class='iconMaps[item.type]'></span>
            <span class='special'></span>
            <span>{{ item.name }}</span>
          </span>
        </li>
      </ul>
    </div>
    <div class='foods-wrap'>
      <div v-for="(item, index) in goods" class='item-wrapper' :key="index">
        <div class="title"><span class='ver-line'></span>{{item.name}}</div>
        <div v-for="(food, idx) in item.foods" :key="idx" class="goods-wrapper" >
          <img :src="food.icon" class='food-icon'>
          <div class='food-detail'>
            <span class='food-name'>{{food.name}}</span>
            <span class='food-des'>{{food.description}}</span>
            <span class='detail'>
              <span class='count'>月售{{food.sellCount}}份</span>
              <span class='rating'>好评率{{food.rating}}%</span>
            </span>
            <div class='price-detail'>
              <div class='price-left'>
                <span class='price'><span class='unit'>￥</span>{{food.price}}</span>
                <span class='pre-price'><span class='unit'>￥</span>{{food.oldPrice || 10}}</span>
              </div>
              <div class='price-right'>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
<style lang='stylus' scoped>
@import '../../common/stylus/mixin'
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
      display: flex
      align-items: center
      justify-content: center
      width: 54px
      height: 56px
      font-size: 12px
      line-height: 14px
      border-1px(rgba(7, 17, 27, 0.1))
      margin-left: 12px
      .text
        .icon
          display inline-block
          &.special
            width: 12px
            height: 12px
            margin-right: 2px
            vertical-align: top
            bg-img('./images/special_3')
            background-size: 12px
  .foods-wrap
    flex: 1
    .item-wrapper
      .title
        width: 100%
        height: 26px
        background-color: #f3f5f7
        font-size: 12px
        color: rgb(147, 153, 159)
        line-height: 26px;
        padding-left: 14px;
        border-left: 2px solid #d9dde1
    .goods-wrapper
      background-color: #ffffff
      padding: 18px
      width: 100%
      display: flex
      align-items: top
      .food-icon
        width: 64px
        height: 64px
      .food-detail
        margin-left: 10px
        flex: 1
        display: flex
        flex-direction: column
        .food-name
          font-size: 14px
          line-height: 14px
          color: rgb(7, 17, 27)
          margin-top: 2px
          margin-bottom: 8px
        .food-des
          font-size: 10px
          color: rgb(147, 153, 159)
          line-height: 10px
        .detail
          font-size: 10px
          color: rgb(147, 153, 159)
          line-height: 10px
          margin-top: 8px
          .count
            margin-right: 12px
        .price-detail
          .price-left
            .price
              font-size: 14px
              color: #f00
              font-weight: 700
              line-height: 24px
              .unit
                font-size: 10px
                font-weight: normal
            .pre-price
              font-size: 10px
              color: rgb(147, 153, 159)
              font-weight: 700
              line-height: 24px
              .unit
                font-size: 10px
                font-weight: normal
</style>


