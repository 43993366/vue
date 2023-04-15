import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/font/iconfont.js"

//引入axios
import axios from 'axios'

import store from '@/store'
Vue.config.productionTip = false
Vue.prototype.axios = axios

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
