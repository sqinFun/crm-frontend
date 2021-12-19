import Vue from 'vue'
import Vuex from 'vuex'
import pageSetting from './pageSetting'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    pageSetting,
  }
})
