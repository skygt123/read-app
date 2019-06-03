<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
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
