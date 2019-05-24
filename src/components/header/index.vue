<template>
  <div class='header'>
    <div class='content-wrap'>
      <img class='avatar' width='64' height='64' :src='seller.avatar'/>
      <div class='content'>
        <div class='brand-wrap'>
          <!-- <span class='brand'></span> -->
          <icon-map iconType="brand" />
          <span class='name'>{{ seller.name }}</span>
        </div>
        <span class='description'>{{ seller.description }}/{{ seller.deliveryTime }}分钟到达</span>
        <div v-if='seller.supports' class='support-wrap'>
          <!-- <span class='icon' :class='iconMaps[seller.supports[0].type]'></span> -->
          <icon-map size='1' :iconType="iconMaps[seller.supports[0].type]" />
          <span class='support-description'>{{ seller.supports[0].description }}</span>
        </div>
        <div v-if='seller.supports' class='discount-wrap' @click='showDetail'>
          <span class='text'>{{ seller.supports.length }}个</span>
          <i class='icon-keyboard_arrow_right'></i>
        </div>
      </div>
    </div>
    <div class='bulletin-wrap' @click='showDetail'>
      <icon-map iconType="bulletin" /><span class='bulletin-title'>{{ seller.bulletin }}</span>
      <span class='icon-keyboard_arrow_right'></span>
    </div>
    <div>
      <img class='header-bg-image' :src='seller.avatar' width='100%' height='100%'/>
    </div>
    <div v-show='detailShow' class='detail-wrap'>
      <div class='detail-content clearfix'>
        <div class='detail-main'>
          <span class='name'>{{ seller.name }}</span>
          <div class='star-container'>
            <v-star :score='seller.score' :size='48'></v-star>
          </div>
          <div class='title-wrap'>
            <div class='line'></div>
            <div class='text'>优惠信息</div>
            <div class='line'></div>
          </div>
          <ul v-if='seller.supports' class='supports'>
            <li v-for='(item, index) in seller.supports' :key='index'>
              <!-- <span class='icon' :class='iconMaps[seller.supports[index].type]'></span> -->
              <icon-map size='2' :iconType="iconMaps[seller.supports[index].type]" />
              <span class='text'>{{ seller.supports[index].description }}</span>
            </li>
          </ul>
          <div class='title-wrap'>
            <div class='line'></div>
            <div class='text'>商家公告</div>
            <div class='line'></div>
          </div>
          <div class='bulletin-content'>
            <p class='text'>{{ seller.bulletin}}</p>
          </div>
        </div>
      </div>
      <div class='detail-close' @click='hideDetail'>
        <i class='icon-close'></i>
      </div>
    </div>
  </div>
</template>
<script>
import VStar from '../star/star'
import iconMap from 'components/iconMap'
export default {
  name: 'sell-header',
  components: {
    VStar,
    iconMap
  },
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      detailShow: false
    }
  },
  created () {
    this.iconMaps = ['discount', 'decrease', 'special', 'invoice', 'guarantee']
  },
  methods: {
    showDetail () {
      this.detailShow = true
    },
    hideDetail () {
      this.detailShow = false
    }
  }
}
</script>
<style lang='stylus'>
@import '../../common/stylus/mixin'
.header
  background-color: rgba(7,17,27,0.2)
  color: #fff
  position: relative
  overflow hidden
  .content-wrap
    padding: 24px 12px 18px 24px
    font-size: 0
    position: relative
    .avatar
      border-radius: 2px
      display: inline-block
    .content
      display: inline-block
      padding-left: 16px
      vertical-align: top
      margin-top: 2px
      .brand-wrap
        margin-bottom: 8px
        display: flex
        .name
          font-size: 16px
          font-weight: bold
          line-height: 18px
          margin-left: 6px
      .description
        font-size: 12px
        line-height: 12px
        display: inline-block
        margin-bottom: 10px
      .support-wrap
        .support-description
          font-size: 10px
          line-height: 12px
      .discount-wrap
        position: absolute
        right: 12px
        bottom: 18px
        width: 48px
        height: 24px
        line-height 24px
        border-radius: 14px
        background-color: rgba(0,0,0,0.2)
        text-align center
        // padding: 7px 8px 7px 8px
        .text
          font-size: 10px
        i
          font-size: 10px
          line-height: 24px
          margin-left: 2px
  .bulletin-wrap
    height: 28px;
    line-height: 28px;
    padding: 0px 12px 0px 22px;
    overflow: hidden;
    background-color: rgba(7,17,27,0.2);
    display: flex;
    align-items: center;
    .bulletin-title
      font-size: 10px;
      flex: 1;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding-left: 4px;
    .icon-keyboard_arrow_right
      font-size: 10px
  .header-bg-image
    position: absolute
    top: 0
    left: 0
    z-index: -1
    filter: blur(10px)
  .detail-wrap
    width: 100%
    height: 100%
    position fixed
    top: 0
    left: 0
    z-index: 100
    background-color: rgba(7,17,27,0.8)
    overflow-y: auto
    -webkit-backdrop-filter : blur(10px)
    .detail-content
      min-height: 100%
      width: 100%
      .detail-main
        margin-top: 64px
        padding-bottom: 64px
        text-align: center        
        .name
          font-size: 16px
          font-weight: 700
          line-height: 16px
        .star-container
          margin-top: 32px
        .title-wrap
          display: flex
          width: 80%
          margin: 28px auto 24px auto
          .line
            flex: 1
            position: relative
            top: -6px
            border-bottom: 1px solid rgba(255,255,255,0.2)
          .text
            font-size: 14px
            padding: 0 12px
            font-weight: 700
        .supports
          width: 80%
          margin: 0 auto
          text-align: left
          li
            margin: 0 12px 12px 0px
            display: flex
            align-items: center
            &:last-child
              margin-bottom: 0
            .text
              font-size: 12px
              line-height: 16px
              margin-left: 6px
        .bulletin-content
          width: 80%
          margin: 0 auto
          text-align: left
          .text
            font-size: 12px
            line-height: 24px
    .detail-close
      width: 32px
      height: 32px
      margin: -64px auto 0 auto
      .icon-close
        font-size: 32px 

</style>


