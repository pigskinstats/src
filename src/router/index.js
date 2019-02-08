import Vue from 'vue';
import Router from 'vue-router';
import Games from '@/components/routes/Games';
import Seasons from '@/components/routes/Seasons';
import Teams from '@/components/routes/Teams';
import Team from '@/components/routes/Team';

Vue.use(Router)

const RouterParent = { template: '<router-view/>' };

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'Games', params: { season: 2018 } },
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
