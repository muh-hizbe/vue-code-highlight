import Vue from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios'

axios.defaults.withCredentials = false
axios.defaults.baseURL = "https://highlight-code-api.jefrydco.vercel.app/api"

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
