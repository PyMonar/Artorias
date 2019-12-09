<template>
  <div>
    <h1 v-if="error.statusCode === 404">页面不存在</h1>
    <h1 v-else-if="error.statusCode === 401">无权限</h1>
    <h1 v-else>应用发生错误异常</h1>
    <nuxt-link to="/">首 页</nuxt-link>
  </div>
</template>

<style lang="postcss" scoped>
h1 {
  font-size: 0.13rem;
}
</style>

<script>
export default {
  props: {
    error: {
      type: Number,
      default: 404
    }
  },
  mounted () {
    this.$log('error', this.error)
  }
}
</script>
