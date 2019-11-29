<template>
  <div id="home">
    <!-- header -->
    <main-header></main-header>
    <!-- main -->
    <section id="main-container">
      <div id="banner-container"></div>
      <div id="content-container">
        <!-- 主列表 -->
        <div id="list-container">
          <list-item v-for="i in 5" :key="i" class="list-item"></list-item>
        </div>
        <!-- 侧边栏 -->
        <side-bar>
          <side-bar-list></side-bar-list>
        </side-bar>
      </div>
    </section>
    <!-- footer -->
    <footer id="footer-container">CHAO@2020</footer>
  </div>
</template>

<script>
import MainHeader from '~/components/main-header/main-header.vue'
import ListItem from '~/components/list-item/list-item.vue'
import SideBar from '~/components/side-bar/side-bar.vue'
import SideBarList from '~/components/side-bar-list/side-bar-list.vue'

export default {
  name: 'Home',
  components: {
    MainHeader,
    ListItem,
    SideBar,
    SideBarList
  },
  head() {
    return {
      title: 'CHAO 各庄 - 这是一个神奇的庄'
    }
  },
  created() {
    // 注入样式
    this.$style('index')
  },
  methods: {}
}
</script>
