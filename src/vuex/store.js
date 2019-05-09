import Vue from 'vue'
import Vuex from 'vuex'
import firebaseService from '@/services/firebaseServices.js'
import * as user from '@/vuex/modules/user.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user
  },
  state: {
    JMTZs: [],
    getJMTZs: null
  },
  mutations: {
    GET_JMTZS(state, payload) {
      state.getJMTZs = payload
    },
    SET_JMTZ(state, payload) {
      state.JMTZs.push(payload)
    }
  },
  actions: {
    createjmt({ commit, rootState }, payload) {
      return firebaseService.addJMTZ({ rootState }, payload).then(() => {
        commit('SET_JMTZ', payload)
      })
    },
    getJMTZs({ rootState, commit }) {
      return firebaseService
        .getJMTZ({ rootState })
        .once('value')
        .then(snapshot => {
          commit('GET_JMTZS', snapshot.val())
          return snapshot.val()
        })
    }
  },
  getters: {}
})
