/* eslint-disable no-lonely-if */
// 处理各种类型跳转
import { isWeixin, isPC } from '~/assets/utils/index'
import constant from '~/assets/utils/constant'
const homeUrl = constant.HOME_URL
const downloadIOSUrl = constant.DOWNLOAD_IOS_URL
const downloadAdroidUrl = constant.DOWNLOAD_ANDROID_URL
const openIOSUrl = constant.OPEN_IOS_URL
const openAndroidUrl = constant.OPEN_ANDROID_URL

export default ({ store }, inject) => {
  const ua = store.state.ua
  const url = store.state.openIOSUrl || openIOSUrl
  const androidUrl = store.state.openAndroidUrl || openAndroidUrl
  inject('location', (type) => {
    // open: 打开APP, download: 下载APP
    const isAndroid = ua.includes('Android') || ua.includes('Linux')
    const isIOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
    if (isIOS) {
      // 是 iOS
      if (type === 'download') {
        // 下载
        window.location.href = downloadIOSUrl
      } else {
        // 打开
        if (isWeixin(ua)) {
          store.commit('SET_COVER_SHOW', true)
          store.commit('SET_PROTECT_COVER_SHOW', false)
        } else {
          window.location.href = url
        }
      }
    } else if (isAndroid) {
      // 是安卓
      if (type === 'download') {
        // 下载
        window.location.href = downloadAdroidUrl
      } else {
        // 打开
        if (isWeixin(ua)) {
          store.commit('SET_COVER_SHOW', true)
          store.commit('SET_PROTECT_COVER_SHOW', false)
        } else {
          window.location.href = androidUrl
        }
      }
    } else if (isPC(ua)) {
      // PC 端浏览器
      window.location.href = homeUrl
    }
  })
}
