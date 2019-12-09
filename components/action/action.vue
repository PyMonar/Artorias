<template>
  <div
    @click="doClickAction"
    :class="[type === 'mark' ? 'round' : '']"
    class="action"
  >
    <!-- 分享 -->
    <img
      v-if="type === 'share'"
      src="~/assets/images/icon_share.png"
      class="icon"
    />
    <!-- 收藏 -->
    <img
      v-else-if="type === 'mark'"
      src="~/assets/images/icon_mark.png"
      class="icon"
    />
    <!-- 喜欢 -->
    <img v-else src="~/assets/images/icon_heart_full.png" class="icon" />
    <!-- 文本 -->
    <span v-if="type !== 'mark'" class="text"><slot></slot></span>
  </div>
</template>

<script>
// 可互动的按钮
export default {
  name: 'Action',
  props: {
    type: {
      type: String,
      // type: like(点赞) share(分享) mark(收藏)
      default: 'like'
    }
  },
  created () {
    this.$style('action', true)
  },
  methods: {
    doClickAction () {
      console.log(this.type)
    }
  }
}
</script>
