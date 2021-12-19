import Vue from 'vue'
import Vuex from 'vuex'
import pageSetting from './pageSetting'
import users from "@/store/users";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    pageSetting,
    users,
  }
})
