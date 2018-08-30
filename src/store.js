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
  },
  mutations: {
    setGame(state, data) {
      state.game = data
    },
    storeGames(state, data) {
      state.games = data
    }
  },
  actions: {
    newGame({ commit, dispatch }, gameConfig) {
      gameApi.post('', gameConfig)
        .then(res => {
          commit('setGame', res.data)
        })
    },
    getGames({ commit, dispatch }) {
      gameApi.get('')
        .then(res => {
          commit('storeGames', res.data)
        })
    },
    getGame({ commit, dispatch }, gameId) {
      console.log('getting game')
      gameApi.get('/' + gameId)
        .then(res => {
          commit('setGame', res.data.data)
        })
    },
    attack({ commit, dispatch }, payload) {
      console.log('Attack triggered')
      gameApi.put('/' + payload.gameId, payload.attackObj)
        .then(res => {
          console.log('re-getting game after attack')
          dispatch('getGame', payload.gameId)
        })
    }
  }
})
