import { createRouter, createWebHashHistory } from 'vue-router';
import Games from '@/components/routes/Games';
import Seasons from '@/components/routes/Seasons';
import Teams from '@/components/routes/Teams';
import Team from '@/components/routes/Team';
import RouterViewParent from '@/components/shared/RouterViewParent';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: { name: 'Games', params: { season: 2023 } },
    },
    {
      path: '/seasons',
      component: RouterViewParent,
      children: [
        {
          path: '',
          name: 'Seasons',
          component: Seasons,
        },
        {
          path: ':season',
          component: RouterViewParent,
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
