<template>
  <div>
    <cube-tab-bar
      class="myread-head"
      v-model="selectedLabelDefault"
      :data="tabs"
      @click="clickHandler"
      @change="changeHandler"
    >
    </cube-tab-bar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedLabelDefault: '书架',
      tabs: [
        {
          label: '书架',
          icon: 'cubeic-home'
        },
        {
          label: '书库',
          icon: 'cubeic-like'
        },
        {
          label: '新闻',
          icon: 'cubeic-vip'
        },
        {
          label: '我的',
          icon: 'cubeic-person'
        }
      ]
    }
  },
  created () {
    switch (this.$route.path) {
      case '/navbottom/bookcase':
        this.selectedLabelDefault = '书架'
        break
      case '/navbottom/bookstack':
        this.selectedLabelDefault = '书库'
        break
      case '/navbottom/booknew':
        this.selectedLabelDefault = '新闻'
        break
      case '/navbottom/mine':
        this.selectedLabelDefault = '我的'
        break
    }
  },
  methods: {
    clickHandler (label) {
      // if you clicked home tab, then print 'Home'
      console.log(label)
    },
    changeHandler (label) {
      // if you clicked different tab, this methods can be emitted
      switch (label) {
        case '我的书架':
          this.$router.push('/')
          break
        case '今日推荐':
          this.$router.push('/recommend')
          break
        case '分类':
          this.$router.push('/category')
          break
        case '排行榜':
          this.$router.push('/rank')
          break
      }
    }
  },
  components: {}
}
</script>

<style lang="stylus">
.myread-head
  position fixed
  bottom 0
  left 0
  width 100%
  border 1px solid #ccc
  font-size 14px
  z-index 999
  background-color white
  .cube-tab
    i
      font-size 18px
    div
      padding-top 2px
  .cube-tab_active
    color #00c98d
</style>
