// 根据 ua 来注入样式文件
export default ({ store }, inject) => {
  inject('style', (styleName, isComponent = false) => {
    const isPc = store.getters.isAgentPc
    if (!process.server) {
      // 避免客户端再次注入样式文件
      return
    }
    if (isComponent) {
      if (isPc) {
        require(`~/components/${styleName}/${styleName}.pc.less`)
      } else {
        require(`~/components/${styleName}/${styleName}.mobile.less`)
      }
    } else {
      if (isPc) {
        require(`~/assets/css/${styleName}.pc.less`)
      } else {
        require(`~/assets/css/${styleName}.mobile.less`)
      }
    }
  })
}
