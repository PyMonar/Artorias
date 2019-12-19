// 插件在运行 Vue 应用程序之前执行
// 设置 axios 插件的目的是自定义拦截器与全局设置
export default function ({ $axios, redirect, store, query }) {
  // 设置 auth
  function saveAuth (response) {
    if (response.headers) {
      const auth =
        response.headers['x-new-register-authorization'] ||
        response.headers['X-New-Register-Authorization']
      const guestAuth = response.headers['x-new-guest-authorization']
      if (auth) {
        store.commit('SET_AUTH', auth)
      }
      if (guestAuth) {
        store.commit('SET_GUEST_AUTH', guestAuth)
      }
    }
  }

  // 设置 headers
  function getHeaders () {
    let auth = query.token || ''
    if (store.state.auth) {
      auth = store.state.auth
    }

    let guestAuth = ''
    if (store.state.guestAuth) {
      guestAuth = store.state.guestAuth
    }

    const headers = {
      'x-register-authorization': auth,
      'x-guest-authorization': guestAuth,
      'content-type': 'application/json;charset=UTF-8'
    }
    return headers
  }

  $axios.onRequest((config) => {
    Object.assign(config.headers, getHeaders())
  })

  $axios.onResponse((response) => {
    saveAuth(response)
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 401) {
      store.commit('SET_AUTH', '')
    }
  })
}
