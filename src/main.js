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

Vue.use(BootstrapVue);

library.add(faFootballBall, faAngleRight, faAngleLeft);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
