import mutations from "@/store/mutations";

export default {
  namespaced: true,
  state: {
    roles: [],

    rolesLoading: false,
  },
  actions: {
    async getRoles({dispatch, commit}) {
      try {
        commit('setData',{path: 'rolesLoading', value: true })

        const res = await dispatch('query/get', {url: '/roles'}, {root: true})
        commit('setData',{path: 'roles', value: res.data })
      } finally {
        commit('setData',{path: 'rolesLoading', value: false })
      }
    },
    async getRole({dispatch}, {id}) {
      const res = await dispatch('query/get', {url: `/roles/${id}`}, {root: true})
      return res.data
    },
  },
  mutations: {
    ...mutations,
  }
}
