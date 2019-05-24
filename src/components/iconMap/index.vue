<template>
  <!-- <span class='icon' :class='iconType'></span> -->
  <span class='icon' :class="`icon_${size} ${iconType}`"></span>
</template>
<script>
export default {
  name: 'iconMap',
  props: {
    size: {
      type: String,
      default: () => {
        return ''
      }
    },
    iconType: {
      type: String
    }
  }
}
</script>

<style lang="stylus">
@import '../../common/stylus/mixin'
// 特殊如公告
.brand
  width: 30px;
  height: 18px;
  bg-img('./images/brand')
.bulletin
  width: 22px;
  height: 12px
  bg-img('./images/bulletin')
.icon
  display inline-block
  background-size: 100% 100%
  &.icon_1
    width: 12px
    height: 12px
    &.decrease
      bg-img('./images/decrease_1')
    &.discount
      bg-img('./images/discount_1')
    &.guarantee
      bg-img('./images/guarantee_1')
    &.invoice
      bg-img('./images/invoice_1')
    &.special
      bg-img('./images/special_1')
  &.icon_2
    width: 16px
    height: 16px
    &.decrease
      bg-img('./images/decrease_2')
    &.discount
      bg-img('./images/discount_2')
    &.guarantee
      bg-img('./images/guarantee_2')
    &.invoice
      bg-img('./images/invoice_2')
    &.special
      bg-img('./images/special_2')
  &.icon_3
    width: 12px
    height: 12px
    &.decrease
      bg-img('./images/decrease_3')
    &.discount
      bg-img('./images/discount_3')
    &.guarantee
      bg-img('./images/guarantee_3')
    &.invoice
      bg-img('./images/invoice_3')
    &.special
      bg-img('./images/special_3')
  &.icon_4
    width: 16px
    height: 16px
    &.decrease
      bg-img('./images/decrease_4')
    &.discount
      bg-img('./images/discount_4')
    &.guarantee
      bg-img('./images/guarantee_4')
    &.invoice
      bg-img('./images/invoice_4')
    &.special
      bg-img('./images/special_4')
</style>
