<template>
  <header id="header-container">
    <!-- pc header -->
    <div id="header" v-if="isAgentPc">
      <div id="logo"></div>
      <div id="header-sets">
        <!-- 搜索 -->
        <div id="search"></div>
        <!-- 个人信息 -->
        <div id="avatar"></div>
        <!-- 操作 -->
        <div id="state"></div>
      </div>
    </div>
    <!-- mobile header -->
    <div id="header" v-else>
      <!-- 搜索 -->
      <div id="search"></div>
      <!-- Logo -->
      <div id="logo"></div>
      <!-- 个人信息 -->
      <div id="state"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MainHeader',
  computed: {
    isAgentPc() {
      return this.$store.getters.isAgentPc
    }
  },
  created() {
    this.$style('main-header', true)
  }
}
</script>
