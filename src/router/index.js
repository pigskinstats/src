import Vue from 'vue';
import Router from 'vue-router';
import WolfeScores from '@/components/WolfeScores';
import Teams from '@/components/Teams';

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
    {
      path: '/teams',
      name: 'Teams',
      component: Teams
    },
  ]
})
