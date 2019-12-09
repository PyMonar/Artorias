<template>
  <header id="header-container">
    <!-- pc header -->
    <div id="header" v-if="isAgentPc">
      <div id="logo"></div>
      <div id="header-sets">
        <!-- 搜索 -->
        <div id="search"></div>
        <!-- 个人信息 -->
        <div id="avatar-menu" ref="menu" @click="showMenu">
          <!-- 子菜单 -->
          <div id="menu" v-show="menuVisible">
            <!-- 用户信息 -->
            <div id="avatar-container">
              <div id="avatar-image"></div>
              <div id="user-info">
                <div id="user-info-name">用户昵称</div>
                <div id="user-info-id">ID: 441·123·123</div>
              </div>
            </div>
            <!-- 菜单 -->
            <ul id="menu-list">
              <li>我的主页</li>
              <li>我的喜欢</li>
              <li>隐私设置</li>
            </ul>
            <!-- 登出 -->
            <div id="logout">登出账号</div>
          </div>
        </div>
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
  data () {
    return {
      menuVisible: false
    }
  },
  computed: {
    isAgentPc () {
      return this.$store.getters.isAgentPc
    }
  },
  created () {
    this.$style('main-header', true)
  },
  mounted () {
    // 点击非菜单区域关闭菜单
    document.addEventListener('click', (e) => {
      if (!this.$refs.menu.contains(e.target)) {
        this.hideMenu()
      }
    })
  },
  methods: {
    showMenu (e) {
      const target = e.target
      const avatarMenu = document.getElementById('avatar-menu')
      if (target === avatarMenu) {
        this.menuVisible = !this.menuVisible
      }
    },
    hideMenu () {
      this.menuVisible = false
    }
  }
}
</script>
