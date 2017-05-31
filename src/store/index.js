import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import website from './modules/website'
import login from './modules/login'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    website,
    login
  }
})
