import API_URL from '../../boot/api'

const state = {
  token: localStorage.getItem('user-token') || '',
  products: null,
  data: []
}
const getters = {
  data: state => state.data
}
const mutations = {
  AUTH_SUCCESS (state, data) {
    state.token = data.token
    console.log(state.token)
  },
  DATA_UP (state, data) {
    state.data = data
    console.log(state.data)
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
          commit('DATA_UP', response.data)
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
