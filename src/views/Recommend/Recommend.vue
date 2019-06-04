<template>
  <div class="recommend">
    <header class="top-head">
      <h1>
        <label class="logo-img">
          <img src="../../assets/logo_7a44de2.png" />
        </label>
        <label class="logo-name">
          <img src="../../assets/website-name_c08f935.png" />
        </label>
        <label class="logo-search"><i class="cubeic-search"></i></label>
      </h1>
    </header>
    <div class="slide-wrap">
      <cube-slide
        ref="slide"
        :data="items"
      >
        <cube-slide-item
          v-for="(item, index) in items"
          :key="index"
        >
          <!-- @click.native="clickHandler(item, index)" -->
          <a :href="item.url">
            <img :src="item.image" />
          </a>
        </cube-slide-item>
      </cube-slide>
      我是推荐
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          url: '',
          image: '../../assets/backIcon.png'
        },
        {
          url: '',
          image: '../../assets/images/2.jpg'
        },
        {
          url: '',
          image: '../../assets/images/3.jpg'
        },
        {
          url: '',
          image: '../../assets/images/4.jpg'
        },
        {
          url: '',
          image: '../../assets/images/5.jpg'
        }
      ]
    }
  },
  created () {
    console.log('推荐' + this.$route.path)
  },
  components: {

  }
}
</script>

<style scoped lang='stylus' ref='stylesheet/stylus'>
.recommend
  .top-head
    height 42px
    background-color white
    border-bottom 1px solid #f3f3f3
    h1
      padding 9px 0 0 8px
      vertical-align top
      .logo-img
        display inline-block
        width 25px
        height 25px
        img
          width 100%
          height 100%
          vertical-align top
      .logo-name
        display inline-block
        // padding-top 5px
        height 25px
        margin-left 8px
        vertical-align top
        img
          height 15px
          margin-top 5px
          vertical-align top
      .logo-search
        float right
        margin-right 8px
        font-size 25px
        color #00c98d
  .slide-wrap
    width 100%
    height 150px
    .cube-slide
      background red
      >>> .cube-slide-dots
        margin-bottom 5px
        span
          width 10px
          height 10px
          border-radius 50%
</style>
