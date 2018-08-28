import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

let gameApi = Axios.create({
  baseURL: 'https://inspire-server.herokuapp.com/cards',
  timeout: 3000
})

export default new Vuex.Store({
  state: {
    games: [],
    game: {}
    //game = object or array?
  },
  mutations: {
    setGame(state, data) {
      state.game = data
    }
  },
  actions: {
    newGame({ commit, dispatch }, gameConfig) {
      gameApi.post('', gameConfig)
        .then(res => {
          commit('setGame', res.data)
        })
    }
  }
})
