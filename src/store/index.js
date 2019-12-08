import Vue from 'vue'
import Vuex from 'vuex'
import article from './article'
import auth from './auth'
import items from './items'
import API from '../boot/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    quant: 7,
    items: [],
    order: [],
    selectedcard: null,
    cardinfo: null,
    card: null
  },
  getters: {
    order: state => state.order,
    getCard: state => state.card
  },
  actions: {
    addToItems: ({ commit }, item) => commit('BUY', item),
    loadCard (context, id) {
      return new Promise((resolve, reject) => {
        API.get(`product/${id}`)
          .then(response => {
            context.commit('SET_CARD', response.data)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    selectCard (context, itemid) {
      context.commit('SELECT', itemid)
    }
  },
  mutations: {
    BUY (state, itemid) {
      state.order.push(itemid)
    },
    SELECT (state, itemid) {
      state.selectedcard = itemid
    },
    SET_CARD (state, payload) {
      state.card = Object.values(payload)
      console.log(state.card)
    }
  },
  modules: {
    article,
    auth,
    items
  },
  strict: process.env.DEV
})
