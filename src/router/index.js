import Vue from 'vue';
import Router from 'vue-router';
import Games from '@/components/Games';
import Teams from '@/components/Teams';
import Team from '@/components/Team';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Games
    },
    {
      path: '/scores',
      name: 'Games',
      component: Games
    },
    {
      path: '/teams',
      name: 'Teams',
      component: Teams
    },
    {
      path: '/teams/:id',
      name: 'Team',
      component: Team
    },
  ]
})
