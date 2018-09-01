import Vue from 'vue'
import Router from 'vue-router'
import Fight from './views/Fight'
// import Results from './views/Results'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SelectDeck',
      component: Fight
    },
  ]
})
