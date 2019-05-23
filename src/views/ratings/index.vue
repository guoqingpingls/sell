<template>
  <div class='ratings-wrapper'>
    <div class="rating-container" v-for="(rateItem, rateIndex) in list" :key="rateIndex" >
      <img :src="rateItem.avatar" class='rate-icon' alt="">
      <div class="rate-detail-container">
        <div class="rate-name"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ratings',
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
.ratings-wrapper
  display: flex
  position: absolute
  top: 174px
  bottom: 46px
  width: 100%
  overflow: hidden
  background-color: #f3f5f6
  .rating-container
    position: relative
</style>
