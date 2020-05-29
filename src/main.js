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

import PageTitle from '@/components/PageTitle';
import GamesTable from '@/components/GamesTable';
import TeamsTable from '@/components/TeamsTable';
import PaginationControls from '@/components/PaginationControls';

Vue.use(BootstrapVue);

library.add(faFootballBall, faAngleRight, faAngleLeft);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('page-title', PageTitle);
Vue.component('pagination-controls', PaginationControls);
Vue.component('games-table', GamesTable);
Vue.component('teams-table', TeamsTable);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
