<template>
  <div id="app">
    <router-view />
    <my-tab-bar></my-tab-bar>
  </div>
</template>
<script>
import MyTabBar from 'components/TabBar/MyTabBar'
export default {
  created () {
  },
  components: {
    MyTabBar
  }
}
</script>

<style lang="stylus"></style>
