// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from  './ultils'
import store from  "./store"
import VueLazyload from 'vue-lazyload'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css'

Vue.prototype.$axios = axios
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'assets/error.png',
  loading: 'assets/loading.png',
  attempt: 1
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
