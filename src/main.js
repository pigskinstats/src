import Vue from 'vue';
import App from './App';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import BootstrapVue from 'bootstrap-vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library as fontAwesomeLibrary } from '@fortawesome/fontawesome-svg-core';
import { faFootballBall, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

fontAwesomeLibrary.add(faFootballBall, faAngleRight, faAngleLeft);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
