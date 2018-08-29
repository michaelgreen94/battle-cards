import Vue from 'vue'
import Router from 'vue-router'
import Fight from './views/Fight'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SelectDeck',
      component: Fight
    }
  ]
})
