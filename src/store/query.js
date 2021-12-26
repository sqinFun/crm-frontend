import axios from "@/plugins/axios"

export default {
  namespaced: true,
  state: {
    cancelTokens: new Set()
  },
  actions: {
    async get({dispatch}, {url, params, config}) {
      return dispatch('send', {
        method: 'get',
        url: url,
        params,
        ...config
      })
    },

    async post({dispatch}, {url, data, config}) {
      return dispatch('send', {
        method: 'post',
        url: url,
        data,
        ...config
      })
    },

    async put({dispatch}, {url, data, config}) {
      return dispatch('send', {
        method: 'put',
        url: url,
        data,
        ...config
      })
    },

    async delete({dispatch}, {url, data, config}) {
      return dispatch('send', {
        method: 'delete',
        url: url,
        data,
        ...config
      })
    },

    async send(_, config) {
      const authToken = localStorage.getItem('authToken')
      const headers = config.headers ?? {}
      headers.Authorization = `Bearer ${authToken}`

      return axios({...config, headers})
    },
  },
}
