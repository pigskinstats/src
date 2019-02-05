// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
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

Vue.use(BootstrapVue);

library.add(faFootballBall, faAngleRight, faAngleLeft);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('page-heading', PageHeading);
Vue.component('page-title', PageTitle);
Vue.component('alert-message', AlertMessage);
Vue.component('pagination-controls', PaginationControls);
Vue.component('games-table', GamesTable);
Vue.component('teams-table', TeamsTable);
Vue.component('data-table', DataTable);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
