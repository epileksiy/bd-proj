import API_URL from '../../boot/api'

const state = {
  token: localStorage.getItem('user-token') || ''
}
const getters = {
}
const mutations = {
  AUTH_SUCCESS (state, data) {
    state.token = data.token
  },
  AUTH_LOGOUT (state) {
    state.token = ''
  }
}
const actions = {
  login ({ commit }, data) {
    return new Promise((resolve, reject) => {
      API_URL.post('auth/login', data)
        .then((response) => {
          const token = response.data.token
          commit('AUTH_SUCCESS', token)
          localStorage.setItem('user-token', token)
          API_URL.defaults.headers.common['Authorization'] = 'Bearer' + token
          console.log(response)
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
