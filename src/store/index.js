import Vue from 'vue'
import Vuex from 'vuex'
import article from './article'
import auth from './auth'
import items from './items'
import API2 from '../boot/api1'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    quant: 7,
    items: [],
    order: [],
    selectedcard: null,
    cardinfo: null
  },
  getters: { order: state => state.order
  },
  mutations: {
    BUY (state, itemid) {
      state.order.push(itemid)
    },
    SELECT (state, itemid) {
      state.selectedcard = itemid
    },
    GET_CARD (state, payload) {
      state.card = Object.values(payload)
      console.log(state.card)
    }
  },
  actions: {
    addToItems: ({ commit }, item) => commit('BUY', item),
    getCard (context) {
      return new Promise((resolve, reject) => {
        API2.get(this.selectedcard)
          .then(response => {
            context.commit('GET_CARD', response.data[0])
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    selectCard (context, itemid) {
      context.commit('SELECT', itemid)
      console.log('asd')
      console.log(itemid)
    }
  },
  modules: {
    article,
    auth,
    items
  },
  strict: process.env.DEV
})
