import firebaseService from '@/services/firebaseServices.js'

export const namespaced = true

export const state = {
  user: null,
  isAuthenticated: false
}

export const mutations = {
  SET_USER(state, payload) {
    state.user = payload
  },
  SET_IS_AUTHENTICATED(state, payload) {
    state.isAuthenticated = payload
  }
}

export const actions = {
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
        localStorage.setItem('KEY', user.user.uid)
      })
      .catch(() => {
        commit('SET_USER', null)
        commit('SET_IS_AUTHENTICATED', false)
      })
  },
  logout({ commit }) {
    console.log('before commit sigOut')
    return firebaseService
      .signOut()
      .then(() => {
        console.log('after commit sigOut')
        commit('SET_USER', null)
        commit('SET_IS_AUTHENTICATED', false)
      })
      .catch(() => {
        commit('SET_USER', null)
        commit('SET_IS_AUTHENTICATED', false)
      })
  }
}

export const getters = {
  loggedIn(state) {
    return !!state.isAuthenticated
  }
}
