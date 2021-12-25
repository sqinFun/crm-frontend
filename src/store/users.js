import mutations from "@/store/mutations";

export default {
  namespaced: true,
  state: {
    users: []
  },
  actions: {
    async getUsers({dispatch, commit}) {
      const res = await dispatch('query/get', {url: '/users'}, {root: true})
      commit('setData',{path: 'users', value: res.data })
    }
  },
  mutations: {
    ...mutations,
    toggleMenu(state) {
      state.isOpenMenu = !state.isOpenMenu
    },
  }
}
