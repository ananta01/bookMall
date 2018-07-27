import Vue from 'vue'
import IndexPage from '../pages/index'
import Compute from '../pages/detail/compute'
import Letter from '../pages/detail/letter'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/compute',
      component: Compute
    },
    {
      path: '/letter',
      component: Letter
    }
  ]
})
