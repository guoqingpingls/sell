<template>
  <div class='star-wrap' :class='starType'>
      <span class='star-item' v-for='(item, index) in itemClass' :key='index' :class='item'></span>
  </div>
</template>
<script>
const TOTAL_STAR = 5
const STAR_ON = 'on'
const STAR_HALF = 'half'
const STAR_OFF = 'off'
export default {
  name: 'star',
  props: {
    score: {
      type: Number,
      default: 0
    },
    size: {
      type: Number,
      default: 24
    }
  },
  computed: {
    starType () {
      return 'star_' + this.size
    },
    itemClass () {
      let score = Math.floor(this.score * 2) / 2
      let hasDecimal = score % 1 !== 0
      let result = []
      for (let i = 0; i < this.score; i++) {
        result.push(STAR_ON)
      }
      if (hasDecimal) {
        result.push(STAR_HALF)
      }
      while (result.length === TOTAL_STAR) {
        result.push(STAR_OFF)
      }
      return result
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '../../common/stylus/mixin'
.star-wrap
    font-size: 0
    .star-item
        display: inline-block
        background-repeat: no-repeat
    &.star_48
        .star-item
            width: 20px
            height: 20px
            margin-right: 22px
            background-size: 20px 20px
            &:last-child
                margin-right: 0
            &.on
                bg-img('./images/star48_on')
            &.half
                bg-img('./images/star48_half')
            &.off
                bg-img('./images/star48_off')
                
    &.star_36
        .star-item
            width: 15px
            height: 15px
            margin-right: 16px
            background-size: 15px 15px
            &:last-child
                margin-right: 0
            &.on
                bg-img('./images/star36_on')
            &.half
                bg-img('./images/star36_half')
            &.off
                bg-img('./images/star36_off')
    &.star_24
        .star-item
            width: 10px
            height: 10px
            margin-right: 3px
            background-size: 10px 10px
            &:last-child
                margin-right: 0
            &.on
                bg-img('./images/star24_on')
            &.half
                bg-img('./images/star24_half')
            &.off
                bg-img('./images/star24_off')
</style>
