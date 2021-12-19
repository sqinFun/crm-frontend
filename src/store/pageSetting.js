import mutations from "@/store/mutations";

export default {
  namespaced: true,
  state: {
    isOpenMenu: false,
  },
  action: {
    toggleMenu({commit, state}) {
      commit('setData', {path: 'isOpenMenu', value: !state.isOpenMenu})
    },
    openMenu({commit}) {
      commit('setData', {path: 'isOpenMenu', value: true})
    },
    closeMenu({commit}) {
      commit('setData', {path: 'isOpenMenu', value: false})
    }
  },
  mutations: {
    ...mutations,
    toggleMenu(state) {
      state.isOpenMenu = !state.isOpenMenu
    },

  }
}
