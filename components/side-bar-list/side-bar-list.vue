<template>
  <div id="sidebar-list">
    <div class="sidebar-list-title">
      <span class="special-column">过往内容</span>
    </div>
    <div v-for="(item, index) in list" :key="index" class="sidebar-list-item">
      <div class="title">在迪士尼樂園擔任產品設計師是什麼體驗？</div>
      <div class="state">字数 707 · 阅读 10,132</div>
    </div>
  </div>
</template>

<style lang="less">
#sidebar-list {
  padding: 0.24rem;
  margin-bottom: 0.24rem;
  background-color: #f8f8f8;
  box-sizing: border-box;

  .sidebar-list-title {
    margin-bottom: 0.16rem;
  }

  .sidebar-list-item {
    margin-bottom: 0.32rem;

    .title {
      font-size: 0.18rem;
      font-weight: 600;
      line-height: 0.25rem;
      color: #333333;
    }

    .state {
      margin-top: 0.12rem;
      font-size: 0.12rem;
      font-weight: 400;
      line-height: 0.12rem;
      color: #cccccc;
    }
  }
}
</style>

<script>
// 侧边栏列表组件
export default {
  name: 'SideBarList',
  data() {
    return {
      list: [1, 2, 3, 4, 5]
    }
  }
}
</script>
