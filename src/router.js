import Vue from 'vue'
import Router from 'vue-router'
import Battlefield from './views/Battlefield'
import SelectDeck from './views/SelectDeck'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Battlefield',
      name: 'Battlefield',
      component: Battlefield
    },
    {
      path: '/',
      name: 'SelectDeck',
      component: SelectDeck
    }
  ]
})
