import Vue from 'vue'
import Router from 'vue-router'
import WolfeScores from '@/components/WolfeScores'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: WolfeScores
    },
    {
      path: '/scores',
      name: 'WolfeScores',
      component: WolfeScores
    },
  ]
})
