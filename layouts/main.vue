<template>
  <div id="main-page">
    <!-- header -->
    <main-header></main-header>
    <!-- insert page -->
    <div id="main-container">
      <nuxt />
    </div>
    <!-- footer -->
    <footer id="footer-container">CHAO@2020</footer>
  </div>
</template>

<script>
import MainHeader from '~/components/main-header/main-header.vue'

export default {
  name: 'Main',
  components: {
    MainHeader
  },
  created () {
    // 注入样式
    this.$style('main')
  }
}
</script>
