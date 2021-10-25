// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { createApp } from 'vue';
import BootstrapVue from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import App from './App';
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faFootballBall,
  faAngleRight,
  faAngleLeft,
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import PageHeading from '@/components/shared/PageHeading';
import PageTitle from '@/components/shared/PageTitle';
import AlertMessage from '@/components/shared/AlertMessage';
import GamesTable from '@/components/shared/GamesTable';
import TeamsTable from '@/components/shared/TeamsTable';
import DataTable from '@/components/shared/DataTable';
import PaginationControls from '@/components/shared/PaginationControls';

library.add(faFootballBall, faAngleRight, faAngleLeft);

createApp(App)
    .use(router)
    .use(BootstrapVue)
    .component('font-awesome-icon', FontAwesomeIcon)
    .component('page-heading', PageHeading)
    .component('page-title', PageTitle)
    .component('alert-message', AlertMessage)
    .component('pagination-controls', PaginationControls)
    .component('games-table', GamesTable)
    .component('teams-table', TeamsTable)
    .component('data-table', DataTable)
    .mount('#app');

