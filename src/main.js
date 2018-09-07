// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faFootballBall,
  faAngleRight,
  faAngleLeft,
} from '@fortawesome/free-solid-svg-icons'
import App from './App';
import router from './router';
import PageHeading from '@/components/PageHeading';

Vue.use(BootstrapVue);

library.add(faFootballBall, faAngleRight, faAngleLeft);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('page-heading', PageHeading);

Vue.config.productionTip = false;

Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
