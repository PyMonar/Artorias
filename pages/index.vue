<template>
  <div id="home">
    <!-- header -->
    <header id="header-container">
      <div id="header">
        <!-- Logo -->
        <div id="logo"></div>
        <!-- 搜索 -->
        <div id="search"></div>
        <!-- 个人信息 -->
        <div id="state"></div>
      </div>
    </header>
    <!-- main -->
    <section id="main-container">
      <div id="banner-container"></div>
      <div id="content-container">
        <div id="list-container">
          <div v-for="(item, index) in list" :key="index" class="list-item">
            <div class="list-item-pic"></div>
            <div class="list-item-detail">
              <div class="title">
                在迪士尼樂園擔任產品設計師是什麼體驗？
              </div>
              <div class="author">
                <span class="tag">业内故事</span>
                <span class="name">Edison Chen</span>
              </div>
              <div class="desc-container">
                <div class="desc">
                  在這一年裡，每次跟剛認識的新朋友或者許久未聯絡的老同學聊到現在的工作，每次跟剛認識的新朋友或者許久未聯絡的老同學聊到現在的工作，大多數的反應會是「哇！你在迪士尼工作一定很有趣吧？
                </div>
              </div>
              <div class="state">
                <span>字数 707 · 阅读 10,132 </span>
                <span>12 分钟前</span>
              </div>
            </div>
          </div>
        </div>
        <div id="sidebar-container">
          <div class="sidebar-title">
            <span class="tag">过往内容</span>
          </div>
          <div
            v-for="(item, index) in list"
            :key="index"
            class="sidebar-list-item"
          >
            <div class="title">在迪士尼樂園擔任產品設計師是什麼體驗？</div>
            <div class="state">字数 707 · 阅读 10,132</div>
          </div>
        </div>
      </div>
    </section>
    <!-- footer -->
    <footer id="footer-container">CHAO@2020</footer>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      list: [1, 2, 3, 4, 5]
    }
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
