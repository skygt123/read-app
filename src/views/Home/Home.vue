<template>
  <div class="home">
    我的书架
  </div>
</template>

<script>

export default {
  name: 'home',
  created () {
    console.log('书架' + this.$route.path)
  },
  components: {
  }
}
</script>
