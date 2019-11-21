// 处理客户端请求错误
// 如果是 401 无权限则进行登录跳转操作

export default ({ app }, inject) => {
  // const router = app.router
  inject('errorHandler', (code) => {
    if (code === 401) {
      // 登录跳转
    } else {
      // 提示出错
    }
  })
}
