import Vue from 'vue'
import AOS from 'aos';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import BootstrapVue from 'bootstrap-vue';
import 'aos/dist/aos.css';
import Slick from 'vue-slick';
import '../node_modules/slick-carousel/slick/slick.css';
import VideoBg from 'vue-videobg';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faInstagram,
  faVk,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
  faInstagram,
  faVk,
  faYoutube,
  faChevronRight,
  faChevronLeft,
);



Vue.config.productionTip = false
Vue.component('Slick',Slick);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('video-bg', VideoBg);
Vue.use(BootstrapVue);
Vue.use(VueAxios, axios);
AOS.init();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
