import Vue from 'vue';
import Router from 'vue-router';
import Games from '@/components/routes/Games';
import Teams from '@/components/routes/Teams';
import Team from '@/components/routes/Team';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Games
    },
    {
      path: '/games',
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
