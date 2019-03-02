// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/app.css'
import BCardHeader from 'bootstrap-vue/es/components/card/card-header'
import BCardBody from 'bootstrap-vue/es/components/card/card-body'
import Element from 'element-ui';
import locale from 'element-ui/lib/locale/lang/fa'
import 'element-ui/lib/theme-chalk/index.css';
import ElMoment from 'el-moment'
import HotelDatePicker from 'vue-hotel-datepicker'


Vue.use(ElMoment)
Vue.use(Element , {locale});
Vue.use(BootstrapVue);
Vue.use(require('vue-moment-jalaali'));
Vue.config.productionTip = false;
Vue.component('b-card-header', BCardHeader);
Vue.component('b-card-body', BCardBody);
Vue.component('date-picker', HotelDatePicker);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
});