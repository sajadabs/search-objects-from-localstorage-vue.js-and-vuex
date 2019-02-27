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


Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.component('b-card-header', BCardHeader)
Vue.component('b-card-body', BCardBody)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
