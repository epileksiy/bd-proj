import API from '../../boot/api.js'

const state = {
  articles: null
}

const getters = {
  articles: state => state.articles
}

const actions = {
  getArticles (context) {
    return new Promise((resolve, reject) => {
      API.get('posts')
        .then(response => {
          context.commit('GET_ARTICLES', response.data.data)
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}
const mutations = {
  GET_ARTICLES (state, payload) {
    state.articles = Object.values(payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
