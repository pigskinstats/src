import Vue from 'vue';
import Router from 'vue-router';
import Games from '@/components/routes/Games';
import Seasons from '@/components/routes/Seasons';
import Teams from '@/components/routes/Teams';
import Team from '@/components/routes/Team';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'Games', params: { season: 2018 } },
    },
    {
      path: '/seasons',
      name: 'Seasons',
      component: Seasons,
    },
    {
      path: '/seasons/:season',
      name: 'Season',
      redirect: ({ params }) => ({ name: 'Games', params }),
    },
    {
      path: '/seasons/:season/games',
      name: 'Games',
      component: Games,
    },
    {
      path: '/seasons/:season/teams',
      name: 'Teams',
      component: Teams,
    },
    {
      path: '/seasons/:season/teams/:id',
      name: 'Team',
      component: Team,
    },
  ]
});
