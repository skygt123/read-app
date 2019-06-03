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
        case '书架':
          this.$router.push('/navbottom/bookcase')
          break
        case '书库':
          this.$router.push('/navbottom/bookstack')
          break
        case '新闻':
          this.$router.push('/navbottom/booknew')
          break
        case '我的':
          this.$router.push('/navbottom/mine')
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
      padding 8px 0
  .cube-tab_active
    color #00c98d
</style>
