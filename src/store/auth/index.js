import AuthModule from './auth'

export default {
  namespaced: true,
  modules: {
    auth: {
      ...AuthModule
    }
  }
}
