import Vue from 'vue';
import Router from 'vue-router';
import RouterParent from '@/router/RouterParent';
import Games from '@/views/Games';
import Seasons from '@/views/Seasons';
import Teams from '@/views/Teams';
import Team from '@/views/Team';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'Games', params: { season: 2019 } },
    },
    {
      path: '/seasons',
      component: RouterParent,
      children: [
        {
          path: '',
          name: 'Seasons',
          component: Seasons,
        },
        {
          path: ':season',
          component: RouterParent,
          children: [
            {
              path: '',
              name: 'Season',
              redirect: ({ params }) => ({ name: 'Games', params }),
            },
            {
              path: 'games',
              name: 'Games',
              component: Games,
            },
            {
              path: 'teams',
              name: 'Teams',
              component: Teams,
            },
            {
              path: 'teams/:id',
              name: 'Team',
              component: Team,
            },
          ],
        },
      ],
    },
  ],
});
