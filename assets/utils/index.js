// 工具类

// 时间格式化
export function timestampFormat(dateTimeStamp) {
  dateTimeStamp *= 1000
  const minute = 1000 * 60 // 把分，时，天，周，半个月，一个月用毫秒表示
  const hour = minute * 60
  const day = hour * 24
  const week = day * 7
  const month = day * 30
  const year = day * 365
  const now = new Date().getTime() // 获取当前时间毫秒
  if (!dateTimeStamp) {
    dateTimeStamp = now
  }
  const diffValue = now - dateTimeStamp // 时间差
  let result
  if (diffValue < 0) {
    return
  }
  const minC = diffValue / minute // 计算时间差的分，时，天，周，月
  const hourC = diffValue / hour
  const dayC = diffValue / day
  const weekC = diffValue / week
  const monthC = diffValue / month
  const yearC = diffValue / year
  if (yearC >= 1 && yearC <= 2) {
    result = ' ' + parseInt(yearC) + '年前'
  } else if (monthC >= 1 && monthC < 12) {
    result = ' ' + parseInt(monthC) + '月前'
  } else if (weekC >= 1 && weekC <= 4) {
    result = ' ' + parseInt(weekC) + '周前'
  } else if (dayC >= 1 && dayC < 7) {
    result = ' ' + parseInt(dayC) + '天前'
  } else if (hourC >= 1 && hourC < 24) {
    result = ' ' + parseInt(hourC) + '小时前'
  } else if (minC >= 1 && minC < 60) {
    result = ' ' + parseInt(minC) + '分钟前'
  } else if (diffValue >= 0 && diffValue <= minute) {
    result = '刚刚'
  } else {
    const datetime = new Date()
    datetime.setTime(dateTimeStamp)
    const Nyear = datetime.getFullYear()
    const Nmonth =
      datetime.getMonth() + 1 < 10
        ? '0' + (datetime.getMonth() + 1)
        : datetime.getMonth() + 1
    const Ndate =
      datetime.getDate() < 10 ? '0' + datetime.getDate() : datetime.getDate()
    const Nhour =
      datetime.getHours() < 10 ? '0' + datetime.getHours() : datetime.getHours()
    const Nminute =
      datetime.getMinutes() < 10
        ? '0' + datetime.getMinutes()
        : datetime.getMinutes()
    // var Nsecond = datetime.getSeconds() < 10 ? '0' + datetime.getSeconds() : datetime.getSeconds()
    result = Nyear + '-' + Nmonth + '-' + Ndate + ' ' + Nhour + ':' + Nminute
  }
  return result
}

// 获取查询字符串
export function getQueryString(query) {
  let queryString = ''
  const loc = window.location.href
  if (loc.includes(`${query}=`)) {
    queryString = loc.split(`${query}=`)[1].split('&')[0]
  }
  return queryString
}

// 判断是否是微信
export function isWeixin(ua) {
  ua = ua || navigator.userAgent
  return /micromessenger/.test(ua.toLowerCase())
}

// 判断是否是 PC
export function isPC(ua) {
  ua = ua || navigator.userAgent
  const agents = [
    'Android',
    'iPhone',
    'SymbianOS',
    'Windows Phone',
    'iPad',
    'iPod'
  ]
  let flag = true
  for (let v = 0; v < agents.length; v++) {
    if (ua.indexOf(agents[v]) > 0) {
      flag = false
      break
    }
  }
  return flag
}

// 判断是否支持某 CSS3 属性
export function supportCss3(style) {
  const prefix = ['webkit', 'Moz', 'ms', 'o']
  const humpString = []
  const htmlStyle = document.documentElement.style
  const _toHumb = function(string) {
    return string.replace(/-(\w)/g, function($0, $1) {
      return $1.toUpperCase()
    })
  }
  for (const i in prefix) {
    humpString.push(_toHumb(prefix[i] + '-' + style))
  }
  humpString.push(_toHumb(style))
  for (const i in humpString) {
    if (humpString[i] in htmlStyle) {
      return true
    }
  }
  return false
}

// 判断电话是否合法
export function isPhoneLegal(input) {
  const myReg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
  if (!myReg.test(input)) {
    return false
  } else {
    return true
  }
}

// 日期
export function normalizeDate(dateStr) {
  const date = new Date(dateStr)
  return `${date.getFullYear() - 0}-${date.getMonth() -
    0 +
    1}-${date.getDate() - 0}`
}

// 性别
export function genderShow(gender) {
  switch (gender) {
    case 0:
      return '未设置'
    case 1:
      return '男'
    case 2:
      return '女'
    case 3:
      return '其他'
    default:
      return ''
  }
}

// Token 展示
export function tokenShow(token = '000000000') {
  return token.slice(0, 3) + '·' + token.slice(3, 6) + '·' + token.slice(6)
}
