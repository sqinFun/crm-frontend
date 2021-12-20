import mutations from "@/store/mutations";

export default {
  namespaced: true,
  state: {
    users: [
      {
        id: 1,
        firstName: 'Иван',
        middleName: 'Иванович',
        lastName: 'Иван',
        phone: "+7(123)456-78-90",
        email: 'ivan.i.i@gmail.com',
        avatar: '/mock-avatar.jpg'
      },
      {
        id: 2,
        firstName: 'Борис',
        middleName: 'Попов',
        lastName: 'Дноцов',
        phone: "+7(123)456-78-90",
        email: 'boris.p.d@ya.ru',
      },
      {
        id: 3,
        firstName: 'Илья',
        middleName: 'Викторович',
        lastName: 'Смирнов',
        phone: "+7(123)456-78-90",
        email: 'ilya.v.c@gmail.com',
      },
      {
        id: 4,
        firstName: 'Дмитрий',
        middleName: 'Артёмович',
        lastName: 'Кузнецов',
        phone: "+7(123)456-78-90",
        email: 'dima.a.k@gmail.com',
      }
    ]
  },
  action: {
    toggleMenu({commit, state}) {
      commit('setData', {path: 'isOpenMenu', value: !state.isOpenMenu})
    },
  },
  mutations: {
    ...mutations,
    toggleMenu(state) {
      state.isOpenMenu = !state.isOpenMenu
    },

  }
}
