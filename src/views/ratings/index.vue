<template>
  <div class='ratings-wrapper'>
    <div class="ratings-title-wrap">
      <div class="left">
        <span class="score">3.9</span>
        <span class="score-label">综合评分</span>
        <span class="compare-value">高于周边商家96.0%</span>
      </div>
      <div class="right">
        <div class='right-item'>
          <span class="right-label">服务态度</span>
          <v-star :size='36' :score='3.9'/>
          <span class="star-value">3.9</span>
        </div>
        <div class='right-item'>
          <span class="right-label">服务态度</span>
          <v-star :size='36' :score='3.9'/>
          <span class="star-value">3.9</span>
        </div>
        <div class='right-item'>
          <span class="right-label">送达时间</span>
          <span class="right-value">44分钟</span>
        </div>
      </div>
    </div>
    <div class="rate-list-container">
      <div class="rate-type-container">
        <span class="type-item all">全部</span>
        <span class="type-item satisfied">满意</span>
        <span class="type-item">不满意</span>
      </div>
    </div>
  </div>
</template>
<script>
import VStar from 'components/star'
export default {
  name: 'ratings',
  data () {
    return {
      list: []
    }
  },
  components: {
    VStar
  },
  created () {
    this.$http.get('/api/ratings').then(({body}) => {
      console.log(body)
      if (!body.errno) {
        this.list = body.data
      }
    })
  }
}
</script>
<style lang='stylus' scoped>
@import '../../common/stylus/mixin.styl'
.ratings-wrapper
  display: flex
  flex-direction: column
  position: absolute
  top: 175px
  bottom: 46px
  width: 100%
  overflow: hidden
  background-color: #f3f5f6
  .ratings-title-wrap
    height: 138px
    width: 100%
    display: flex
    padding: 18px 0px;
    background-color: #fff;
    .left
      width: 138px
      display: flex
      flex-direction: column
      align-items: center
      justify-content: space-around
      border-right: 1px solid #e6e7e8
      .score
        font-size: 24px
        color: rgb(255, 153,0)
        line-height: 28px
      .score-label
        font-size: 12px
        color: #5b5e62
      .compare-value
        font-size: 10px
        color: #a4a4ae
    .right
      flex: 1
      display: flex;
      align-items: flex-start
      justify-content: space-around
      flex-direction: column
      padding-left: 24px
      .right-item
        display: flex
        align-items: center
        .right-label
          font-size: 12px
          color: rgb(7, 17, 17)
          margin-right: 12px
        .right-value
          font-size: 12px
          color: #a4a9ae
        .star-value
          margin-left: 12px
          font-size: 12px
          color: rgb(255, 153, 0)
  .rate-list-container
    margin-top: 17px
    border-top: 1px solid #e6e7e8
    background-color: #fff
    .rate-type-container
      padding: 18px
      border-bottom: border-1px(#e6e7e8)
      font-size: 0
      .type-item
        display: inline-block
        width: 60px
        height: 32px
        line-height 32px
        text-align: center
        font-size: 12px
        background-color: #e9ebec
        color: #4d555d
        margin-right: 8px
        &.all
          background-color: #00a0dc
          color: #ffffff
        &.satisfied
          background-color: #ccecf8
</style>
