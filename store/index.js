import { isPC, isWeixin } from '~/assets/utils/index'
import constant from '~/assets/utils/constant'

export const strict = false

export const state = () => ({
  curPath: '', // 记录当前路径
  guestAuth: '', // guest auth
  auth: '', // header 中用户的 token
  ua: '', // user-agent
  openIOSUrl: '', // 用于 IOS 呼起 APP 的通用链接
  openAndroidUrl: '', // 用于 Android 呼起 APP 的链接
  coverShow: false, // 微信端遮罩层
  protectCoverShow: false // 触底加载保护
})

export const mutations = {
  SET_CUR_PATH(state, path) {
    state.curPath = path
  },
  SET_GUEST_AUTH(state, auth) {
    state.guestAuth = auth
  },
  SET_AUTH(state, auth) {
    state.auth = auth
  },
  SET_UA(state, ua) {
    state.ua = ua
  },
  SET_OPEN_APP_URL(state, url) {
    state.openIOSUrl = `${constant.OPEN_IOS_URL}?fakepath=${url}`
    state.openAndroidUrl = `${constant.OPEN_ANDROID_URL}${url}`
  },
  SET_COVER_SHOW(state, flag) {
    state.coverShow = flag
  },
  SET_PROTECT_COVER_SHOW(state, flag) {
    state.protectCoverShow = flag
  }
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    const ua = req.headers['user-agent']
    commit('SET_UA', ua)
  }
}

export const getters = {
  isAgentPc: (state) => {
    return isPC(state.ua)
  },
  isAgentWeixin: (state) => {
    return isWeixin(state.ua)
  }
}
