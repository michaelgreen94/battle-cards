import Vue from 'vue'
import Router from 'vue-router'
import Battlefield from './views/Battlefield.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Battlefield
    }
  ]
})
