import Vue from 'vue'
import Vuex from 'vuex'
import firebaseService from '@/services/firebaseServices.js'
import * as user from '@/vuex/modules/user.js'
import * as notification from '@/vuex/modules/notification.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    notification
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
    createjmt({ commit, dispatch, rootState }, payload) {
      return firebaseService
        .addJMTZ({ rootState }, payload)
        .then(() => {
          commit('SET_JMTZ', payload)
          const notification = {
            type: 'success',
            message: 'Your jmtz has been created!'
          }
          dispatch('notification/add', notification, { root: true })
        })
        .catch(error => {
          const notification = {
            type: 'error',
            message: '오류가 발생했습니다. : ' + error.message
          }
          dispatch('notification/add', notification, { root: true })
          throw error
        })
    },
    getJMTZs({ rootState, dispatch, commit }) {
      return firebaseService
        .getJMTZ({ rootState })
        .once('value')
        .then(snapshot => {
          const notification = {
            type: 'success',
            message: 'Your jmtz has been loaded'
          }
          dispatch('notification/add', notification, { root: true })
          commit('GET_JMTZS', snapshot.val())
          return snapshot.val()
        })
        .catch(error => {
          const notification = {
            type: 'error',
            message: 'There was a problem create : ' + error.message
          }
          dispatch('notification/add', notification, { root: true })
        })
    }
  },
  getters: {}
})
