import Vue from 'vue';
import Router from 'vue-router';
import Games from '@/components/routes/Games';
import Teams from '@/components/routes/Teams';
import Team from '@/components/routes/Team';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/seasons/2018/games',
    },
    {
      path: '/seasons/:season/games',
      name: 'Games',
      component: Games
    },
    {
      path: '/seasons/:season/teams',
      name: 'Teams',
      component: Teams
    },
    {
      path: '/seasons/:season/teams/:id',
      name: 'Team',
      component: Team
    },
  ]
})
