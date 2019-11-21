export default function(context) {
  // 给上下文对象增加 userAgent 属性（增加的属性可在 `asyncData` 和 `fetch` 方法中获取）
  context.app.$log(
    'info',
    process.server ? '服务器端中间件执行' : '客户端中间件执行'
  )
  context.userAgent = process.server
    ? context.req.headers['user-agent']
    : navigator.userAgent
  // 设置 UA 到 store 里边
  context.store.commit('SET_UA', context.userAgent)
  // 设置当前访问路径到 store 里边
  context.store.commit('SET_CUR_PATH', context.route.path)
}
