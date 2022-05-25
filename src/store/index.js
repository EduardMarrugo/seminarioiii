import Vue from 'vue'
import Vuex from 'vuex'
import session from './modules/session'
import db_simulator from './modules/db_simulator'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    session,
    db_simulator
  }
})
