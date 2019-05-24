<template>
  <div class="cart-wrapper">
    <div class="content-left">
      <div class="cart-container"  :class="{'active': dotNum}">
        <i class='iconfont icon-shopping_cart'></i>
        <span class="dot" v-show="dotNum">{{dotNum}}</span>
      </div>
      <div class="price">
        ￥{{price}}
      </div>
      <span class='ver-line'></span>
      <div class="delevery-fee">
        另需配送费￥{{fee}}元
      </div>
    </div>
    <div class="content-right">
      {{total > 20 ? total : '￥20元起送'}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'shoppingCart',
  data () {
    return {
      price: 0,
      fee: 0,
      total: 0,
      dotNum: 1
    }
  }
}
</script>
<style lang="stylus" scoped>
.cart-wrapper
  width: 100%
  height: 48px
  background-color: #141d27
  line-height: 48px
  display: flex;
  align-items: center;
  .content-left
    flex: 1
    display:flex
    align-items: center
    height: 100%
    justify-content: space-around
    .cart-container
      height: 58px
      width: 58px
      border-radius: 50%
      border: 6px solid #141d27
      background-color: #2b343c
      margin-left: 18px
      position: relative
      top: -10px
      color: #80858a
      line-height: 58px
      text-align: center
      font-size: 24px
      box-sizing: border-box
      .dot
        position: absolute;
        font-size: 10px;
        font-weight: 700;
        color: #fff;
        line-height: 16px;
        background-color: #f00;
        padding: 4px 8px;
        border-radius: 20px;
        top: -10px;
      &.active
        background-color: rgb(0, 160, 220)
        color: #fff
    .price
      font-size: 16px
      color: rgba(255, 255, 255, 0.4)
      line-height: 24px
      font-weight: 700
      padding-right: 12px
      border-right: 1px solid #2c343d
    .delevery-fee
      font-size: 14px
      color: rgba(255, 255, 255, 0.4)
      line-height: 24px
  .content-right
    width: 105px
    font-size: 12px
    color: rgba(255,255,255,0.4)
    font-weight: 700
    line-height: 24px
    background-color: #2b333b
    height: 100%
    display: flex
    align-items: center
    justify-content: center
</style>
