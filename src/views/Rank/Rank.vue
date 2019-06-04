<template>
  <div>
    我是排行
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  created () {
    console.log('排行' + this.$route.path)
  },
  components: {

  }
}
</script>

<style scoped lang='stylus' ref='stylesheet/stylus'></style>
