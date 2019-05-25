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
    localStorage.accessToken = state.isAuthenticated
  }
}
export const actions = {
  join({ commit, dispatch }, { email, password }) {
    return firebaseService
      .createUser(email, password)
      .then(user => {
        const notification = {
          type: 'success',
          message: '가입이 정상적으로 되었습니다.'
        }
        dispatch('notification/add', notification, { root: true })
        commit('SET_USER', user)
        commit('SET_IS_AUTHENTICATED', true)
      })
      .catch(error => {
        const notification = {
          type: 'error',
          message: '오류가 발생했습니다. : ' + error.message
        }
        dispatch('notification/add', notification, { root: true })
        commit('SET_USER', null)
        commit('SET_IS_AUTHENTICATED', false)
        throw error
      })
  },
  login({ commit, dispatch }, { email, password }) {
    return firebaseService
      .signIn(email, password)
      .then(user => {
        const notification = {
          type: 'success',
          message: '로그인이 정상적으로 되었습니다.'
        }
        dispatch('notification/add', notification, { root: true })
        commit('SET_USER', user)
        commit('SET_IS_AUTHENTICATED', true)
      })
      .catch(error => {
        const notification = {
          type: 'error',
          message: '오류가 발생했습니다. : ' + error.message
        }
        dispatch('notification/add', notification, { root: true })
        commit('SET_USER', null)
        commit('SET_IS_AUTHENTICATED', false)
        throw error
      })
  },
  logout({ commit, dispatch }) {
    return firebaseService
      .signOut()
      .then(() => {
        const notification = {
          type: 'success',
          message: '로그아웃이 정상적으로 되었습니다.'
        }
        dispatch('notification/add', notification, { root: true })
        commit('SET_USER', null)
        commit('SET_IS_AUTHENTICATED', false)
      })
      .catch(error => {
        const notification = {
          type: 'error',
          message: '오류가 발생했습니다. : ' + error.message
        }
        dispatch('notification/add', notification, { root: true })
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
