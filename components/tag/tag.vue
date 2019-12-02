<template>
  <div @click="doClickTag" class="tag"># {{ tag.name }}</div>
</template>

<script>
// 可点击标签
export default {
  name: 'Tag',
  props: {
    tag: {
      type: Object,
      default() {
        return {
          id: '1',
          name: '标签1'
        }
      }
    }
  },
  created() {
    this.$style('tag', true)
  },
  methods: {
    doClickTag() {
      console.log(this.tag.id)
    }
  }
}
</script>
