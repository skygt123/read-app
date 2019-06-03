<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />

  </div>
</template>
<script>
import nav-bar from 'components/BottomBar/BottomBar'
export default {
  components: {}
}
</script>

<style lang="stylus"></style>
