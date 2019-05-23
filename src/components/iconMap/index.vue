<template>
  <span class='icon' :class='iconType'></span>
</template>
<script>
export default {
  name: 'iconMap',
  props: {
    iconType: {
      type: String
    }
  }
}
</script>

<style lang="stylus">
@import '../../common/stylus/mixin'
.common
  display inline-block
  width: 12px
  height: 12px
  margin-right: 2px
  vertical-align: top
  background-size: 12px
.icon
  &.special_3
    display inline-block
    width: 12px
    height: 12px
    margin-right: 2px
    vertical-align: top
    background-size: 12px
    bg-img('./images/special_3')
</style>
