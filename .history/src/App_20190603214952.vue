<template>
  <div id="app">
    <router-view />
    <nav-bar></nav-bar>
  </div>
</template>
<script>
import NavBar from 'components/BottomBar/BottomBar'
export default {
  components: {
    NavBar
  }
}
</script>

<style lang="stylus"></style>
