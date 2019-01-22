// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faFootballBall,
  faAngleRight,
  faAngleLeft,
} from '@fortawesome/free-solid-svg-icons'
import App from './App';
import router from './router';
import PageHeading from '@/components/page-components/PageHeading';
import PageTitle from '@/components/page-components/PageTitle';
import AlertMessage from '@/components/page-components/AlertMessage';
import PaginationControls from '@/components/page-components/PaginationControls';
import GamesTable from '@/components/page-components/GamesTable';
import TeamsTable from '@/components/page-components/TeamsTable';
import DataTable from '@/components/page-components/DataTable';

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
