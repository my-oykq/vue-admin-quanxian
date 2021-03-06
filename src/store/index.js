import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    role: sessionStorage.getItem('role'),
    rightList: JSON.parse(sessionStorage.getItem('rightList') || '[]'),
    username: sessionStorage.getItem('username'),
    photo: sessionStorage.getItem('photo')
  },
  mutations: {
    setRole (state, data) {
      state.role = data
      sessionStorage.setItem('role', data)
    },
    setRightList (state, data) {
      state.rightList = data
      console.log(state.rightList);
      sessionStorage.setItem('rightList', JSON.stringify(data))
    },
    setUsername (state, data) {
      state.username = data
      sessionStorage.setItem('username', data)
    },
    setPhoto (state, data) {
      state.photo = data
      sessionStorage.setItem('photo', data)
    }
  },
  actions: {},
  getters: {}
})
