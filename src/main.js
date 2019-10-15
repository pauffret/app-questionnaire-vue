import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VuePouchDB from 'vue-pouch-db';
// import './custom.scss'

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(VuePouchDB);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
