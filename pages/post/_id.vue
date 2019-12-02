<template>
  <section id="post-container">
    <div id="post-banner"></div>
    <div id="post-content"></div>
  </section>
</template>

<script>
export default {
  layout: 'main',
  name: 'Post',
  head() {
    return {
      title: 'CHAO 各庄 - 这是一个神奇的庄'
    }
  },
  created() {
    // 注入样式
    console.log(this.$route.params)
  },
  methods: {}
}
</script>
