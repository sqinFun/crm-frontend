import Vue from 'vue'
import Vuex from 'vuex'

import query from "@/store/query";
import users from "@/store/users";
import roles from "@/store/roles";
import auth from "@/store/auth";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    query,
    users,
    roles,
    auth,
  }
})
