<template>
  <div id="sidebar-container" v-if="isAgentPc">
    <slot></slot>
  </div>
</template>

<script>
// 侧边栏容器
export default {
  name: 'SideBar',
  computed: {
    isAgentPc() {
      return this.$store.getters.isAgentPc
    }
  },
  created() {
    this.$style('side-bar', true)
  }
}
</script>
