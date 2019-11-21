import consola from 'consola'

export default ({ app }, inject) => {
  inject('log', (type, message) => {
    // consola.info('****************DEBUG INFO START****************')
    if (process.env.NODE_ENV === 'development') {
      switch (type) {
        case 'success':
          consola.success({
            message,
            badge: true
          })
          break
        case 'error':
          consola.error({
            message,
            badge: true
          })
          break
        default:
          consola.info({
            message,
            badge: true
          })
          break
      }
    }
    // consola.info('****************DEBUG INFO END****************')
  })
}
