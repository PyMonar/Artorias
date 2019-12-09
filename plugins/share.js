// 微信分享插件
import wx from 'weixin-js-sdk'
import constant from '~/assets/utils/constant'

// 获取 base64 编码
function b64EncodeUnicode (str) {
  return window.btoa(
    encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function toSolidBytes (
      match,
      p1
    ) {
      return String.fromCharCode('0x' + p1)
    })
  )
}

export default ({ app }, inject) => {
  const request = app.$axios
  const log = app.$log
  inject('share', (ShareObject) => {
    ShareObject = ShareObject || {
      imgUrl: constant.ICON,
      link: constant.HOME_URL,
      title: constant.SLOGAN,
      desc: constant.SLOGAN
    }
    request
      .get(
        `/config/wx_jsapi?url=${b64EncodeUnicode(
          window.location.href.split('#')[0]
        )}`
      )
      .then((config) => {
        wx.config({
          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: config.data.app_id, // 必填，公众号的唯一标识
          timestamp: config.data.timestamp, // 必填，生成签名的时间戳
          nonceStr: config.data.nonce_str, // 必填，生成签名的随机串
          signature: config.data.signature, // 必填，签名
          jsApiList: [
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo',
            'onMenuShareQZone'
          ] // 必填，需要使用的JS接口列表
        })

        wx.ready(() => {
          // 分享到朋友圈
          wx.onMenuShareTimeline({
            title: ShareObject.title, // 分享标题
            link: ShareObject.link, // 分享链接，该链接域名必须与当前企业的可信域名一致
            imgUrl: ShareObject.imgUrl, // 分享图标
            desc: ShareObject.desc, // 分享描述
            success () {
              // 用户确认分享后执行的回调函数
              log('success', '分享成功')
            },
            cancel () {
              // 用户取消分享后执行的回调函数
            }
          })

          // 分享给朋友
          wx.onMenuShareAppMessage({
            title: ShareObject.title, // 分享标题
            desc: ShareObject.desc, // 分享描述
            link: ShareObject.link, // 分享链接，该链接域名必须与当前企业的可信域名一致
            imgUrl: ShareObject.imgUrl, // 分享图标
            success () {
              // 用户确认分享后执行的回调函数
              log('success', '分享成功')
            },
            cancel () {
              // 用户取消分享后执行的回调函数
            }
          })

          // 分享到QQ
          wx.onMenuShareQQ({
            title: ShareObject.title, // 分享标题
            desc: ShareObject.desc, // 分享描述
            link: ShareObject.link, // 分享链接，该链接域名必须与当前企业的可信域名一致
            imgUrl: ShareObject.imgUrl, // 分享图标
            success () {
              // 用户确认分享后执行的回调函数
              log('success', '分享成功')
            },
            cancel () {
              // 用户取消分享后执行的回调函数
            }
          })

          // 分享到腾讯微博
          wx.onMenuShareWeibo({
            title: ShareObject.title, // 分享标题
            desc: ShareObject.desc, // 分享描述
            link: ShareObject.link, // 分享链接，该链接域名必须与当前企业的可信域名一致
            imgUrl: ShareObject.imgUrl, // 分享图标
            success () {
              // 用户确认分享后执行的回调函数
              log('success', '分享成功')
            },
            cancel () {
              // 用户取消分享后执行的回调函数
            }
          })

          // 分享到QQ空间
          wx.onMenuShareQZone({
            title: ShareObject.title, // 分享标题
            desc: ShareObject.desc, // 分享描述
            link: ShareObject.link, // 分享链接，该链接域名必须与当前企业的可信域名一致
            imgUrl: ShareObject.imgUrl, // 分享图标
            success () {
              // 用户确认分享后执行的回调函数
              log('success', '分享成功')
            },
            cancel () {
              // 用户取消分享后执行的回调函数
            }
          })

          // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
          log('success', 'weixin 验证成功')
        })

        wx.error((res) => {
          // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
          log('error', 'weixin 验证失败')
        })
      })
  })
}
