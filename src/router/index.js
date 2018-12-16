import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import TravelMap from '@/components/TravelMap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Home',
      component: Home
    },
    {
      path: '/travel',
      name: TravelMap,
      component: TravelMap
    }
  ]
})
