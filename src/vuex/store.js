import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    isAuthenticated: false,
    userItems: null,
    jmts: []
  },
  mutations: {
    SET_USER(state, payload) {
      state.user = payload
    },
    SET_IS_AUTHENTICATED(state, payload) {
      state.isAuthenticated = payload
    },
    SET_USER_ITEMS(state, payload) {
      state.userItems = payload
    },
    ADD_JMT(state, payload) {
      state.jmts.push(payload)
    }
  },
  actions: {
    join({ commit }, { email, password }) {
      return firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          commit('SET_USER', user)
          commit('SET_IS_AUTHENTICATED', true)
        })
        .catch(() => {
          commit('SET_USER', null)
          commit('SET_IS_AUTHENTICATED', false)
        })
    },
    login({ commit }, { email, password }) {
      return firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
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
      return firebase
        .auth()
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
      return firebase
        .database()
        .ref('users')
        .child(state.user.user.uid)
        .push(payload)
        .then(() => {
          commit('ADD_JMT', payload)
        })
    },
    getUserItems({ state, commit }) {
      return firebase
        .database()
        .ref('users/' + state.user.user.uid)
        .once('value', snapshot => {
          commit('SET_USER_ITEMS', snapshot.val())
        })
    }
  },
  getters: {
    loggedIn(state) {
      return !!state.user
    }
  }
})
