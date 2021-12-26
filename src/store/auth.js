import mutations from "@/store/mutations";

export default {
  namespaced: true,
  state: {
    token: '',
  },
  actions: {
    async login({dispatch, commit}, user) {
      try {
        commit('setData',{path: 'loginLoading', value: true })

        const res = await dispatch('query/post', {
          url: '/login',
          data: user,
        }, {root: true})

        commit('setJWT', res.data)
      } finally {
        commit('setData',{path: 'loginLoading', value: false })
      }
    },
    async register({dispatch, commit}, user) {
      const res = await dispatch('query/post', {
        url: '/register',
        data: user,
      }, {root: true})

      commit('setJWT', res.data)
    },
  },
  mutations: {
    ...mutations,
    setJWT(state, {token}) {
      state.token = token
      localStorage.setItem('authToken', token)
    }
  }
}
