import axios from "@/plugins/axios"

export default {
  namespaced: true,
  state: {
    cancelTokens: new Set()
  },
  actions: {
    async get({dispatch}, {url, params, config}) {
      console.log('query')
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
      return axios(config)
    },
  },
}
