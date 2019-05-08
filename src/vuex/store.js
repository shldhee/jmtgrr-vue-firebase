import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import firebaseService from '@/services/firebaseServices.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    isAuthenticated: false,
    JMTZs: [],
    getJMTZs: null
  },
  mutations: {
    SET_USER(state, payload) {
      state.user = payload
    },
    SET_IS_AUTHENTICATED(state, payload) {
      state.isAuthenticated = payload
    },
    GET_JMTZS(state, payload) {
      state.getJMTZs = payload
    },
    SET_JMTZ(state, payload) {
      console.log(state.JMTZs)
      console.log(typeof state.JMTZs)
      console.log(payload)
      state.JMTZs.push(payload)
    }
  },
  actions: {
    join({ commit }, { email, password }) {
      return firebaseService
        .createUser(email, password)
        .then(user => {
          commit('SET_USER', user)
          commit('SET_IS_AUTHENTICATED', true)
        })
        .catch(error => {
          console.log('There was an error in join(store.js) : ', error)
          commit('SET_USER', null)
          commit('SET_IS_AUTHENTICATED', false)
          throw error
        })
    },
    login({ commit }, { email, password }) {
      return firebaseService
        .signIn(email, password)
        .then(user => {
          commit('SET_USER', user)
          commit('SET_IS_AUTHENTICATED', true)
        })
        .catch(() => {
          commit('SET_USER', null)
          commit('SET_IS_AUTHENTICATED', false)
        })
    },
    logout({ commit }) {
      return firebaseService
        .signOut()
        .then(() => {
          commit('SET_USER', null)
          commit('SET_IS_AUTHENTICATED', false)
        })
        .catch(() => {
          commit('SET_USER', null)
          commit('SET_IS_AUTHENTICATED', false)
        })
    },
    createjmt({ commit, state }, payload) {
      return firebaseService.addJMTZ({ state }, payload).then(() => {
        commit('SET_JMTZ', payload)
      })
    },
    getJMTZs({ state, commit }) {
      return firebase
        .database()
        .ref('users/' + state.user.user.uid)
        .once('value', snapshot => {
          commit('GET_JMTZS', snapshot.val())
        })
    }
  },
  getters: {
    loggedIn(state) {
      return !!state.user
    }
  }
})
