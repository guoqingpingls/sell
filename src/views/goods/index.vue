<template>
  <div class="goods-container">
    <div class='goods'>
      <div class='menu-wrap' ref='goodTypes'>
        <ul>
          <li v-for='(item, index) in goods' :key='index' class='menu-item' :class="{active: index === +activeIndex}" @click='selectItem(index, $event)'>
            <span>
              <icon-map size='3' :iconType='iconMaps[item.type]' v-show='iconMaps[item.type]' />
              <span class='text'>{{ item.name }}</span>
            </span>
          </li>
        </ul>
      </div>
      <div ref='goodLists'>
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
                    <i class='iconfont icon-remove_circle_outline' @click.native='deletePro(food)' v-show="food.count" /><span class="pro-num" v-show="food.count">{{food.count || 0}}</span><i class='iconfont icon-add_circle' @click.native='addPro(food)' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <shopping-cart />
  </div>
</template>
<script>
const ERR_OK = 0
import BScroll from 'better-scroll'
import iconMap from 'components/iconMap'
import shoppingCart from './shoppingCart'
export default {
  name: 'goods',
  props: {
    seller: {
      type: Object
    }
  },
  components: {
    iconMap,
    shoppingCart
  },
  data () {
    return {
      goods: [],
      goodTypesScroll: null,
      goodListScroll: null,
      listHeight: [],
      clickEvent: false,
      scrollY: 0
    }
  },
  created () {
    this.iconMaps = ['discount', 'decrease', 'special', 'invoice', 'guarantee']
    this.$http.get('./api/goods').then((res) => {
      res = res.body
      if (res.errno === ERR_OK) {
        this.goods = res.data
        console.log(this.goods)
        this.$nextTick(() => {
          this.initScroll()
          this.getHeight()
        })
      }
    })
  },
  mounted () {
    // this.$nextTick(() => {
    //   this.initScroll()
    //   this.getHeight()
    // })

  },
  computed: {
    activeIndex () {
      for (let i = 0; i < this.listHeight.length; i++) {
        let heightTop = this.listHeight[i]
        let heightBottom = this.listHeight[i + 1]
        // 如果存在heightTop 和heightBottom之间 或者是不存在heightBottom(在最后一个type的列表里面) 直接return i
        if (!heightBottom || (heightTop <= this.scrollY && this.scrollY < heightBottom)) {
          // if (this.clickEvent) {
          //   return i + 1
          // } else {
          //   return i
          // }
          return i
        }
      }
      // lineHeight不存在 return 0
      return 0
    }
  },
  methods: {
    initScroll () {
      this.goodTypesScroll = new BScroll(this.$refs.goodTypes, {
        click: true
      })
      this.goodListScroll = new BScroll(this.$refs.goodLists, {
        probeType: 3
      })
      this.goodListScroll.on('scroll', (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y))
      })
    },
    // 获取高度
    getHeight () {
      let rightItem = this.$refs.goodLists.getElementsByClassName('item-wrapper')
      let height = 0
      this.listHeight.push(height)
      for (let i = 0; i < rightItem.length; i++) {
        height += rightItem[i].clientHeight
        this.listHeight.push(height)
      }
    },
    // 点选左边类型
    selectItem (index, e) {
      this.clickEvent = true
      if (!e._constructed) {
        return
      } else {
        let elList = this.$refs.goodLists.getElementsByClassName('item-wrapper')
        let el = elList[index]
        this.goodListScroll.scrollToElement(el, 300)
      }
    },
    addPro (item) {
      item.count = (item.count || 0) + 1
    },
    deletePro (item) {
      item.count = (item.count || 0) + 1
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '../../common/stylus/mixin'
.goods-container
  display: flex
  position: absolute
  top: 174px
  bottom: 0px
  // margin-top: 174px
  width: 100%
  overflow: hidden
  /* flex: 1; */
  flex-direction: column
  .goods
    display: flex;
    width: 100%;
    flex: 1
    overflow: hidden;
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
        position: relative
        width: 100%
        padding-left: 12px
        padding-right: 12px
        box-sizing: border-box
        &.active
          background-color: #fff
        .text
          // border-1px(rgba(7, 17, 27, 0.1))
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
        padding: 18px 5px 10px 18px
        width: 100%
        display: flex
        align-items: top
        box-sizing: border-box
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
            line-height: 12px
          .detail
            font-size: 10px
            color: rgb(147, 153, 159)
            line-height: 10px
            margin-top: 8px
            .count
              margin-right: 12px
          .price-detail
            display: flex
            align-items: center
            justify-content: space-between
            height: 30px
            padding-right: 10px
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
            .price-right
              font-size: 24px
              color: rgb(0, 160, 220)
              display: flex;
              align-items: center;
              .pro-num
                display: inline-block
                font-size: 10px
                color: rgb(147, 153, 159)
                width: 24px
                text-align: center
                line-height: 30px
  .111

</style>


