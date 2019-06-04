<template>
  <div>
    <div class="cube-tab-bar myread-head">
      <div
        v-for="item in tabs"
        class="cube-tab"
        :key="item.label"
        :class="{'cube-tab_active' : $route.path.includes(item.path)}"
        @click="switchTo(item.path)"
      >
        <i :class="item.icon"></i>
        <div>{{item.label}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedLabelSlots: '我的书架',
      tabs: [{
        label: '我的书架',
        icon: 'cubeic-person',
        path: '/home'
      }, {
        label: '今日推荐',
        icon: 'cubeic-vip',
        path: '/recommend'
      }, {
        label: '分类',
        icon: 'cubeic-time',
        path: '/category'
      }, {
        label: '排行榜',
        icon: 'cubeic-game',
        path: '/rank'
      }]
    }
  },
  created () {
    // console.log(this.$route.fullPath)
  },
  methods: {
    switchTo (path) {
      this.$router.push(path)
    }
  }
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
