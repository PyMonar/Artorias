import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    paths: ['curPath', 'guestAuth', 'auth']
  })(store)
}
