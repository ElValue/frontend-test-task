import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: {
      show: false,
      message: ''
    }
  },
  mutations: {
    toggleError ({ error }, { show = false, message = '' }) {
      error.show = show
      error.message = message
    }
  },
  actions: {
  },
  modules: {
  }
})
