<template>
  <section id="user-container">
    <!-- user panel -->
    <div id="user-panel">
      <div id="avatar-panel">
        <div id="avatar"></div>
      </div>
      <div id="info-panel">
        <div id="user-name-line">
          <div class="name">Edison</div>
          <div class="common-button">编辑</div>
        </div>
        <div id="user-state-line">
          <div>14 帖子</div>
          <div>143 粉丝</div>
          <div>939 关注</div>
        </div>
        <div id="user-headline">一个喜欢到处走走停停的人，不定时更新。</div>
      </div>
    </div>
    <!-- tab -->
    <ul id="tab-bar">
      <li class="tab-item selected">我的帖子</li>
      <li class="tab-item">我赞过的</li>
      <li class="tab-item">我的草稿</li>
    </ul>
    <!-- list -->
    <div class="list-container">
      <list-item v-for="i in 5" :key="i"></list-item>
    </div>
  </section>
</template>

<script>
import ListItem from '~/components/list-item/list-item.vue'

export default {
  layout: 'main',
  name: 'User',
  components: {
    ListItem
  },
  created () {
    this.$style('user')
  }
}
</script>
