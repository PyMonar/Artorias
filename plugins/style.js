// 根据 ua 来注入样式文件
export default ({ store }, inject) => {
  inject('style', (styleName) => {
    const isPc = store.getters.isAgentPc
    if (!process.server) {
      // 避免客户端再次注入样式文件
      return
    }
    if (isPc) {
      require(`~/assets/css/${styleName}.pc.less`)
    } else {
      require(`~/assets/css/${styleName}.mobile.less`)
    }
  })
}
