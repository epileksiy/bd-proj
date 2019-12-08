import API1 from '../../boot/api1.js'

const state = {
  items: null
}

const getters = {
  items: state => state.items
}

const actions = {
  getItems (context) {
    return new Promise((resolve, reject) => {
      API1.get('product')
        .then(response => {
          context.commit('GET_ITEMS', response.data[0])
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}
const mutations = {
  GET_ITEMS (state, payload) {
    state.items = Object.values(payload)
    console.log(state.items)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
