import mutations from "@/store/mutations";

export default {
  namespaced: true,
  state: {
    users: [],

    usersLoading: false,
  },
  actions: {
    async getUsers({dispatch, commit}) {
      try {
        commit('setData',{path: 'usersLoading', value: true })

        const res = await dispatch('query/get', {url: '/users'}, {root: true})
        commit('setData',{path: 'users', value: res.data })
      } finally {
        commit('setData',{path: 'usersLoading', value: false })
      }
    },
    async getUser({dispatch}, {id}) {
        const res = await dispatch('query/get', {url: `/users/${id}`}, {root: true})
        return res.data
    },
  },
  mutations: {
    ...mutations,
  }
}
