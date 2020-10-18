import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import configfile from './configfile'
import highlight from './highlight'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
      auth,
      configfile,
      highlight
  }
})
