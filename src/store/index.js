import Vue from 'vue'
import Vuex from 'vuex'
import users from "@/store/users";
import query from "@/store/query";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    users,
    query,
  }
})
